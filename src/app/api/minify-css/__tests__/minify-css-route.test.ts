// @vitest-environment node
/**
 * ========================================================================
 * Tests: POST /api/minify-css route handler
 * ========================================================================
 * Purpose: Regression tests proving user-supplied CleanCSS options can
 *          never re-enable local/remote `@import` inlining (arbitrary file
 *          read + SSRF), while normal minification and the options the UI
 *          sends keep working.
 * ========================================================================
 */

import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';

import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { POST } from '../route';

/** Unique marker served by the local SSRF-probe HTTP server. */
const REMOTE_MARKER = 'SERVED_MARKER_9f3a2d';

/** Repo-relative file whose contents must never leak into API output. */
const LOCAL_TARGET = 'node_modules/tailwindcss/theme.css';

/** Unique string that only exists inside the local target file. */
const LOCAL_MARKER = '@theme default';

/** HTTP server used as the SSRF probe target. */
let probeServer: Server;

/** Base URL of the probe server (e.g. http://127.0.0.1:49152). */
let probeOrigin = '';

/**
 * Builds a JSON POST request for the route handler.
 *
 * @param {unknown} body - JSON-serializable request payload.
 *
 * @returns {Request} Request targeting /api/minify-css.
 */
const makeRequest = (body: unknown): Request =>
  new Request('http://localhost/api/minify-css', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });

beforeAll(async () => {
  probeServer = createServer((_request, response) => {
    response.writeHead(200, { 'content-type': 'text/css' });
    response.end(`body::after{content:"${REMOTE_MARKER}"}`);
  });
  await new Promise<void>((resolve) => probeServer.listen(0, '127.0.0.1', resolve));
  const address = probeServer.address() as AddressInfo;
  probeOrigin = `http://127.0.0.1:${address.port}`;
});

afterAll(async () => {
  await new Promise<void>((resolve, reject) => probeServer.close((error) => (error ? reject(error) : resolve())));
});

describe('POST /api/minify-css', () => {
  it('minifies plain CSS', async () => {
    const response = await POST(makeRequest({ css: 'body { color: red; }' }));

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.minifiedCss).toBe('body{color:red}');
  });

  it('accepts the option shape sent by the CSS minifier UI', async () => {
    const response = await POST(
      makeRequest({
        css: '.a { color: red; } .b { color: red; }',
        options: {
          level: 2,
          compress: true,
          format: {
            indentBy: 0,
            indentWith: 'space',
            spaces: { aroundSelectorRelation: false, beforeBlockBegins: false, beforeValue: false },
            wrapAt: false,
          },
        },
      })
    );

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.minifiedCss.length).toBeGreaterThan(0);
    expect(body.minifiedCss).not.toContain(' ');
  });

  it('does not inline local files via default configuration', async () => {
    const css = `@import "${LOCAL_TARGET}";`;
    const response = await POST(makeRequest({ css }));
    const text = await response.text();

    expect(text).not.toContain(LOCAL_MARKER);
  });

  it('ignores user-supplied inline option enabling local imports', async () => {
    const css = `@import "${LOCAL_TARGET}";`;
    const response = await POST(makeRequest({ css, options: { inline: ['local'] } }));
    const text = await response.text();

    expect(text).not.toContain(LOCAL_MARKER);
  });

  it('never fetches remote stylesheets referenced by @import (SSRF)', async () => {
    const css = `@import "${probeOrigin}/secret.css";`;
    const response = await POST(makeRequest({ css, options: { inline: ['remote'] } }));
    const text = await response.text();

    expect(text).not.toContain(REMOTE_MARKER);
  });
});
