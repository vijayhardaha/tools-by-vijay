// @vitest-environment node
/**
 * ========================================================================
 * Tests: POST /api/unminify-code route handler
 * ========================================================================
 * Purpose: Regression tests proving malformed JSON bodies get a clean 400
 *          instead of a 500 leaking parser internals, and that normal
 *          formatting keeps working.
 * ========================================================================
 */

import { describe, expect, it } from 'vitest';

import { POST } from '../route';

/**
 * Builds a POST request carrying `raw` as the verbatim body.
 *
 * @param {string} raw - Raw request body text.
 *
 * @returns {Request} Request targeting /api/unminify-code.
 */
const makeRawRequest = (raw: string): Request =>
  new Request('http://localhost/api/unminify-code', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: raw,
  });

describe('POST /api/unminify-code', () => {
  it('formats minified JavaScript', async () => {
    const response = await POST(makeRawRequest('{"code":"const a=1","codeType":"babel"}'));

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.unminifiedCode).toContain('const a = 1');
  });

  it('returns 400 for a malformed JSON body instead of 500 with parser internals', async () => {
    const response = await POST(makeRawRequest('{"code": '));

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body).toEqual({ error: 'Invalid JSON body' });
  });

  it('returns 400 when the JSON body is not an object', async () => {
    const response = await POST(makeRawRequest('"just a string"'));

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body).toEqual({ error: 'Invalid JSON body' });
  });
});
