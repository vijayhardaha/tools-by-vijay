// @vitest-environment node
/**
 * ========================================================================
 * Tests: POST /api/inline-css route handler
 * ========================================================================
 * Purpose: Regression tests proving malformed JSON bodies get a clean 400
 *          instead of a 500 leaking parser internals, and that normal
 *          CSS inlining keeps working.
 * ========================================================================
 */

import { describe, expect, it } from 'vitest';

import { POST } from '../route';

/**
 * Builds a POST request carrying `raw` as the verbatim body.
 *
 * @param {string} raw - Raw request body text.
 *
 * @returns {Request} Request targeting /api/inline-css.
 */
const makeRawRequest = (raw: string): Request =>
  new Request('http://localhost/api/inline-css', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: raw,
  });

describe('POST /api/inline-css', () => {
  it('inlines CSS into HTML', async () => {
    const response = await POST(makeRawRequest('{"html":"<p>hi</p>","css":"p{color:red}"}'));

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.formattedHtml).toContain('color: red');
  });

  it('returns 400 for a malformed JSON body instead of 500 with parser internals', async () => {
    const response = await POST(makeRawRequest('{"html": '));

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body).toEqual({ error: 'Invalid JSON body' });
  });

  it('returns 400 when the JSON body is not an object', async () => {
    const response = await POST(makeRawRequest('null'));

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body).toEqual({ error: 'Invalid JSON body' });
  });
});
