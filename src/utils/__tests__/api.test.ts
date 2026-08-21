// @vitest-environment node
/**
 * ========================================================================
 * Tests: API utilities (rate limiting, JSON body parsing) in src/utils/api.ts
 * ========================================================================
 * Purpose: Prove the limiter fails open when Redis errors at runtime, that
 *          counters are scoped per endpoint instead of shared across the
 *          whole site, and that parseJsonBody swallows parse errors so
 *          route handlers can answer malformed bodies with a clean 400.
 * ========================================================================
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

/** Shared Redis pipeline mocks, hoisted so the vi.mock factory can see them. */
const redisMocks = vi.hoisted(() => ({ incr: vi.fn(), expire: vi.fn(), exec: vi.fn() }));

vi.mock('@upstash/redis', () => ({
  Redis: class {
    /**
     * Mocked pipeline builder — records chained commands on the shared
     * mocks and supports chaining like the real SDK.
     *
     * @returns {object} The chainable pipeline builder mock.
     */
    pipeline() {
      const builder: {
        incr: (...args: unknown[]) => unknown;
        expire: (...args: unknown[]) => unknown;
        exec: <T>(...args: unknown[]) => Promise<T>;
      } = {
        incr: (...args: unknown[]) => {
          redisMocks.incr(...args);
          return builder;
        },
        expire: (...args: unknown[]) => {
          redisMocks.expire(...args);
          return builder;
        },
        exec: <T>(...args: unknown[]): Promise<T> => redisMocks.exec(...args) as Promise<T>,
      };

      return builder;
    }
  },
}));

describe('rateLimit', () => {
  beforeEach(() => {
    vi.resetModules();
    process.env['UPSTASH_REDIS_REST_URL'] = 'https://example.upstash.io';
    process.env['UPSTASH_REDIS_REST_TOKEN'] = 'test-token';
  });

  afterEach(() => {
    delete process.env['UPSTASH_REDIS_REST_URL'];
    delete process.env['UPSTASH_REDIS_REST_TOKEN'];
    vi.restoreAllMocks();
    redisMocks.incr.mockReset();
    redisMocks.expire.mockReset();
    redisMocks.exec.mockReset();
  });

  it('allows requests when Redis is not configured', async () => {
    delete process.env['UPSTASH_REDIS_REST_URL'];
    delete process.env['UPSTASH_REDIS_REST_TOKEN'];

    const { rateLimit } = await import('../api');

    await expect(rateLimit('1.2.3.4', 'minify-css')).resolves.toBe(true);
    expect(redisMocks.exec).not.toHaveBeenCalled();
  });

  it('fails open (allows the request) when Redis errors at runtime', async () => {
    redisMocks.exec.mockRejectedValue(new Error('Upstash connection failed'));

    const { rateLimit } = await import('../api');

    await expect(rateLimit('1.2.3.4', 'minify-css')).resolves.toBe(true);
  });

  it('keeps separate counters per endpoint scope for the same IP', async () => {
    // Model real INCR semantics: one counter per key, driven by the key
    // recorded on the pipelined incr call.
    const counters = new Map<string, number>();
    redisMocks.exec.mockImplementation(async () => {
      const key = redisMocks.incr.mock.calls.at(-1)?.[0] as string;
      const next = (counters.get(key) ?? 0) + 1;
      counters.set(key, next);
      return [next, 1];
    });
    // Pre-fill the first scope past the default limit of 30.
    counters.set('rate-limit:v1:minify-css:1.2.3.4', 30);

    const { rateLimit } = await import('../api');

    await expect(rateLimit('1.2.3.4', 'minify-css')).resolves.toBe(false);
    await expect(rateLimit('1.2.3.4', 'minify-js')).resolves.toBe(true);

    expect(redisMocks.incr).toHaveBeenNthCalledWith(1, 'rate-limit:v1:minify-css:1.2.3.4');
    expect(redisMocks.incr).toHaveBeenNthCalledWith(2, 'rate-limit:v1:minify-js:1.2.3.4');
  });

  it('enforces the limit within a single endpoint scope', async () => {
    redisMocks.exec.mockResolvedValue([31, 0]);

    const { rateLimit } = await import('../api');

    await expect(rateLimit('1.2.3.4', 'minify-css')).resolves.toBe(false);
  });

  it('arms the TTL in the same pipeline as the INCR', async () => {
    redisMocks.exec.mockResolvedValue([1, 1]);

    const { rateLimit } = await import('../api');

    await expect(rateLimit('1.2.3.4', 'unminify-code')).resolves.toBe(true);
    expect(redisMocks.incr).toHaveBeenCalledWith('rate-limit:v1:unminify-code:1.2.3.4');
    // EXPIRE NX arms the TTL only when none exists, preserving the
    // fixed-window semantics — and travels in the same request as INCR.
    expect(redisMocks.expire).toHaveBeenCalledWith('rate-limit:v1:unminify-code:1.2.3.4', 60, 'NX');
  });
});

describe('parseJsonBody', () => {
  /**
   * Builds a POST request carrying `raw` as the verbatim body.
   *
   * @param {string} raw - Raw request body text.
   *
   * @returns {Request} Request targeting a fictional API route.
   */
  const makeRequest = (raw: string): Request =>
    new Request('http://localhost/api/test', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: raw,
    });

  it('returns the parsed object for a valid JSON body', async () => {
    const { parseJsonBody } = await import('../api');

    await expect(parseJsonBody<{ css: string }>(makeRequest('{"css":"body{color:red}"}'))).resolves.toEqual({
      css: 'body{color:red}',
    });
  });

  it('returns null for a malformed JSON body instead of throwing', async () => {
    const { parseJsonBody } = await import('../api');

    await expect(parseJsonBody(makeRequest('{"css": '))).resolves.toBeNull();
    await expect(parseJsonBody(makeRequest('not json at all'))).resolves.toBeNull();
  });

  it('returns null for non-object JSON bodies', async () => {
    const { parseJsonBody } = await import('../api');

    await expect(parseJsonBody(makeRequest('"just a string"'))).resolves.toBeNull();
    await expect(parseJsonBody(makeRequest('42'))).resolves.toBeNull();
    await expect(parseJsonBody(makeRequest('null'))).resolves.toBeNull();
  });
});

describe('safeApiErrorMessage', () => {
  it('maps syntax-like errors to the per-route hint', async () => {
    const { safeApiErrorMessage } = await import('../api');

    expect(safeApiErrorMessage(new Error('SyntaxError: Unexpected token (1:5)'), 'hint', 'fallback')).toBe('hint');
    expect(safeApiErrorMessage(new Error('Unexpected end of input'), 'hint', 'fallback')).toBe('hint');
    expect(safeApiErrorMessage(new Error('Unterminated string constant'), 'hint', 'fallback')).toBe('hint');
  });

  it('collapses unexpected errors to the generic fallback without leaking details', async () => {
    const { safeApiErrorMessage } = await import('../api');

    const error = new Error("ENOENT: no such file or directory, open '/etc/passwd'");
    expect(safeApiErrorMessage(error, 'hint', 'fallback')).toBe('fallback');
  });

  it('handles non-Error throwables', async () => {
    const { safeApiErrorMessage } = await import('../api');

    expect(safeApiErrorMessage('a plain string', 'hint', 'fallback')).toBe('fallback');
    expect(safeApiErrorMessage(undefined, 'hint', 'fallback')).toBe('fallback');
  });
});

describe('getClientIp', () => {
  it('takes the first entry of a comma-separated x-forwarded-for chain', async () => {
    const { getClientIp } = await import('../api');

    const request = new Request('http://localhost/api/test', {
      headers: { 'x-forwarded-for': '203.0.113.7, 10.0.0.1, 10.0.0.2' },
    });

    expect(getClientIp(request)).toBe('203.0.113.7');
  });

  it('falls back to unknown when the header is missing or empty', async () => {
    const { getClientIp } = await import('../api');

    expect(getClientIp(new Request('http://localhost/api/test'))).toBe('unknown');
    expect(getClientIp(new Request('http://localhost/api/test', { headers: { 'x-forwarded-for': '' } }))).toBe(
      'unknown'
    );
  });
});

describe('withApiGuard', () => {
  beforeEach(() => {
    vi.resetModules();
    // Fail-open limiter: no Redis env, so guard tests focus on wrapper behavior.
    delete process.env['UPSTASH_REDIS_REST_URL'];
    delete process.env['UPSTASH_REDIS_REST_TOKEN'];
  });

  afterEach(() => {
    delete process.env['UPSTASH_REDIS_REST_URL'];
    delete process.env['UPSTASH_REDIS_REST_TOKEN'];
    redisMocks.incr.mockReset();
    redisMocks.expire.mockReset();
    redisMocks.exec.mockReset();
  });

  it('passes successful handler responses through untouched', async () => {
    const { withApiGuard } = await import('../api');

    const handler = withApiGuard(
      { scope: 'test', syntaxHint: 'hint', fallbackMessage: 'fallback', logLabel: 'test error' },
      async () => new Response('{"ok":true}', { status: 200 })
    );

    const response = await handler(new Request('http://localhost/api/test'));
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
  });

  it('converts TimeoutError into a 422 with the dedicated message', async () => {
    const { TimeoutError, withApiGuard } = await import('../api');

    const handler = withApiGuard(
      { scope: 'test', syntaxHint: 'hint', fallbackMessage: 'fallback', logLabel: 'test error' },
      async () => {
        throw new TimeoutError();
      }
    );

    const response = await handler(new Request('http://localhost/api/test'));
    expect(response.status).toBe(422);
    await expect(response.json()).resolves.toEqual({ error: 'Processing timeout — input too complex' });
  });

  it('collapses unexpected handler errors into a safe 500', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    const { withApiGuard } = await import('../api');

    const handler = withApiGuard(
      { scope: 'test', syntaxHint: 'hint', fallbackMessage: 'fallback', logLabel: 'test error' },
      async () => {
        throw new Error("ENOENT: open '/etc/passwd'");
      }
    );

    const response = await handler(new Request('http://localhost/api/test'));
    expect(response.status).toBe(500);
    await expect(response.json()).resolves.toEqual({ error: 'fallback' });
    expect(consoleError).toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it('answers 429 with Retry-After when the rate limit rejects', async () => {
    process.env['UPSTASH_REDIS_REST_URL'] = 'https://example.upstash.io';
    process.env['UPSTASH_REDIS_REST_TOKEN'] = 'test-token';
    redisMocks.incr.mockResolvedValue(31);
    redisMocks.expire.mockResolvedValue(1);
    redisMocks.exec.mockResolvedValue([31]);

    const { withApiGuard } = await import('../api');

    const handler = withApiGuard(
      { scope: 'test', syntaxHint: 'hint', fallbackMessage: 'fallback', logLabel: 'test error' },
      async () => new Response('{"ok":true}')
    );

    const response = await handler(new Request('http://localhost/api/test'));
    expect(response.status).toBe(429);
    expect(response.headers.get('Retry-After')).toBe('60');
    await expect(response.json()).resolves.toEqual({ error: 'Rate limit exceeded. Please try again later.' });
  });
});
