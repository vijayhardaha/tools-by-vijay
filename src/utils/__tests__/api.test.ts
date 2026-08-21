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

/** Shared Redis client method mocks, hoisted so the vi.mock factory can see them. */
const redisMocks = vi.hoisted(() => ({ incr: vi.fn(), expire: vi.fn() }));

vi.mock('@upstash/redis', () => ({
  Redis: class {
    /** Mocked INCR — returns or rejects per test setup. */
    incr = redisMocks.incr;

    /** Mocked EXPIRE — always resolves. */
    expire = redisMocks.expire;
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
  });

  it('allows requests when Redis is not configured', async () => {
    delete process.env['UPSTASH_REDIS_REST_URL'];
    delete process.env['UPSTASH_REDIS_REST_TOKEN'];

    const { rateLimit } = await import('../api');

    await expect(rateLimit('1.2.3.4', 'minify-css')).resolves.toBe(true);
    expect(redisMocks.incr).not.toHaveBeenCalled();
  });

  it('fails open (allows the request) when Redis errors at runtime', async () => {
    redisMocks.incr.mockRejectedValue(new Error('Upstash connection failed'));

    const { rateLimit } = await import('../api');

    await expect(rateLimit('1.2.3.4', 'minify-css')).resolves.toBe(true);
  });

  it('keeps separate counters per endpoint scope for the same IP', async () => {
    // Model real INCR semantics: one counter per key.
    const counters = new Map<string, number>();
    redisMocks.incr.mockImplementation(async (key: string) => {
      const next = (counters.get(key) ?? 0) + 1;
      counters.set(key, next);
      return next;
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
    redisMocks.incr.mockResolvedValue(31);
    redisMocks.expire.mockResolvedValue(1);

    const { rateLimit } = await import('../api');

    await expect(rateLimit('1.2.3.4', 'minify-css')).resolves.toBe(false);
    expect(redisMocks.expire).not.toHaveBeenCalled();
  });

  it('arms the TTL on the first request of a window', async () => {
    redisMocks.incr.mockResolvedValue(1);
    redisMocks.expire.mockResolvedValue(1);

    const { rateLimit } = await import('../api');

    await expect(rateLimit('1.2.3.4', 'unminify-code')).resolves.toBe(true);
    expect(redisMocks.expire).toHaveBeenCalledWith('rate-limit:v1:unminify-code:1.2.3.4', 60);
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
