// @vitest-environment node
/**
 * ========================================================================
 * Tests: src/proxy.ts API guard
 * ========================================================================
 * Purpose: Regression tests proving the 2MB body cap also covers chunked
 *          requests (no content-length header), which previously bypassed
 *          the content-length-only check entirely, while origin checks and
 *          the declared content-length fast path keep working.
 * ========================================================================
 */

import type { NextRequest } from 'next/server';
import { NextRequest as NextRequestCtor } from 'next/server';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

/** Production origin matching the env-pinned siteUrl(). */
const ORIGIN = 'https://toolsbyvijay.vercel.app';

/**
 * Build a POST request to an API route with the given body and headers.
 *
 * @param {object} init - Request options.
 * @param {string | ReadableStream | undefined} init.body - Request body (string or stream).
 * @param {Record<string, string>} [init.headers] - Extra headers.
 *
 * @returns {NextRequest} The constructed request.
 */
const makeRequest = ({ body, headers = {} }: { body?: BodyInit; headers?: Record<string, string> }): NextRequest =>
  new NextRequestCtor(`${ORIGIN}/api/minify-css`, {
    method: 'POST',
    headers: { origin: ORIGIN, ...headers },
    body,
    duplex: 'half',
  });

/**
 * Build a chunked-style body: a ReadableStream that emits `totalBytes` in
 * `chunkSize` chunks. Stream bodies carry no content-length header, which
 * is exactly the case the old check missed.
 *
 * @param {number} totalBytes - Total bytes the stream will emit.
 * @param {number} [chunkSize] - Bytes per chunk (default 256KB).
 *
 * @returns {ReadableStream<Uint8Array>} The chunked body stream.
 */
const chunkedBody = (totalBytes: number, chunkSize: number = 256 * 1024): ReadableStream<Uint8Array> => {
  const chunk = new Uint8Array(chunkSize);
  let sent = 0;

  return new ReadableStream<Uint8Array>({
    pull(controller) {
      if (sent >= totalBytes) {
        controller.close();
        return;
      }

      const size = Math.min(chunkSize, totalBytes - sent);
      controller.enqueue(size === chunkSize ? chunk : chunk.slice(0, size));
      sent += size;
    },
  });
};

describe('proxy', () => {
  beforeEach(() => {
    process.env.VERCEL_PROJECT_PRODUCTION_URL = 'toolsbyvijay.vercel.app';
  });

  afterEach(() => {
    delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
    delete process.env.VERCEL_BRANCH_URL;
    delete process.env.VERCEL_URL;
    delete process.env.NEXT_PUBLIC_SITE_URL;
    delete process.env.PORT;
  });

  it('blocks chunked bodies larger than the 2MB cap', async () => {
    const { proxy } = await import('../proxy');

    const response = await proxy(makeRequest({ body: chunkedBody(2_000_001) }));

    expect(response?.status).toBe(413);
    await expect(response?.json()).resolves.toEqual({ error: 'Request too large' });
  });

  it('lets smaller chunked bodies continue to the route', async () => {
    const { proxy } = await import('../proxy');

    const response = await proxy(makeRequest({ body: chunkedBody(1_000) }));

    expect(response?.status).toBe(200);
    expect(response?.headers.get('x-middleware-next')).toBe('1');
  });

  it('still blocks oversized declared content-length without reading the body', async () => {
    const { proxy } = await import('../proxy');

    const response = await proxy(makeRequest({ body: 'x'.repeat(2_000_001) }));

    expect(response?.status).toBe(413);
  });

  it('still blocks mutating requests without an origin or referer', async () => {
    const { proxy } = await import('../proxy');

    const request = new NextRequestCtor(`${ORIGIN}/api/minify-css`, { method: 'POST', body: '{}' });
    const response = await proxy(request);

    expect(response?.status).toBe(403);
  });
});
