// @vitest-environment node
/**
 * ========================================================================
 * Tests: POST /api/minify-html route handler
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
 * @returns {Request} Request targeting /api/minify-html.
 */
const makeRawRequest = (raw: string): Request =>
  new Request('http://localhost/api/minify-html', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: raw,
  });

describe('POST /api/minify-html', () => {
  it('minifies plain HTML', async () => {
    const response = await POST(makeRawRequest('{"html":"<div>  <p>hi</p>  </div>"}'));

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.minifiedHtml).toContain('<p>hi</p>');
  });

  it('returns 400 for a malformed JSON body instead of 500 with parser internals', async () => {
    const response = await POST(makeRawRequest('<div>not json</div>'));

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
