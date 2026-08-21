// @vitest-environment node
/**
 * ========================================================================
 * Tests: POST /api/minify-js route handler
 * ========================================================================
 * Purpose: Regression tests proving malformed JSON bodies get a clean 400
 *          instead of a 500 leaking parser internals, and that normal
 *          minification keeps working.
 * ========================================================================
 */

import { describe, expect, it } from 'vitest';

import { POST } from '../route';

/**
 * Builds a POST request carrying `raw` as the verbatim body.
 *
 * @param {string} raw - Raw request body text.
 *
 * @returns {Request} Request targeting /api/minify-js.
 */
const makeRawRequest = (raw: string): Request =>
  new Request('http://localhost/api/minify-js', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: raw,
  });

describe('POST /api/minify-js', () => {
  it('minifies plain JavaScript', async () => {
    const response = await POST(makeRawRequest('{"js":"const value = 1;"}'));

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(typeof body.minifiedJs).toBe('string');
    expect(body.minifiedJs.length).toBeGreaterThan(0);
  });

  it('returns 400 for a malformed JSON body instead of 500 with parser internals', async () => {
    const response = await POST(makeRawRequest('{"js": '));

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body).toEqual({ error: 'Invalid JSON body' });
  });

  it('returns 400 when the JSON body is not an object', async () => {
    const response = await POST(makeRawRequest('42'));

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body).toEqual({ error: 'Invalid JSON body' });
  });
});
