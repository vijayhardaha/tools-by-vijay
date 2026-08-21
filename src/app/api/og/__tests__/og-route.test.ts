// @vitest-environment node
/**
 * ========================================================================
 * Tests: GET /api/og/[[...segments]] OG image route
 * ========================================================================
 * Purpose: Regression tests proving the home page OG image URL emitted by
 *          buildMetadata (/api/og/index.png) resolves the real home SEO
 *          data instead of the generic fallback (index vs home mismatch),
 *          while unknown paths keep falling back.
 * ========================================================================
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@vercel/og', () => ({
  ImageResponse: class {
    element: { props: Record<string, string> };
    options: unknown;

    constructor(element: { props: Record<string, string> }, options: unknown) {
      this.element = element;
      this.options = options;
    }
  },
}));

import { getSeoByPath } from '@/utils/seo';

import { GET } from '../[[...segments]]/route';

/** Typed view of the mocked ImageResponse capturing the rendered element. */
interface CapturedImageResponse {
  element: { props: { title: string; description: string; path: string } };
}

/** Home page SEO data from the unified lookup (slug: '' in pages constants). */
const homeSeo = getSeoByPath('/')!;

/**
 * Replicate the route's sanitize() truncation for expectations.
 *
 * @param {string} str - String to truncate.
 * @param {number} [maxLength] - Maximum allowed length (route default 120).
 *
 * @returns {string} The sanitized string.
 */
const sanitized = (str: string, maxLength: number = 120): string =>
  str.length > maxLength ? `${str.slice(0, maxLength)}…` : str;

/**
 * Invoke the OG GET handler for the given URL segments and capture what
 * would be rendered.
 *
 * @param {string[]} segments - Catch-all route segments (e.g. ['index.png']).
 *
 * @returns {Promise<CapturedImageResponse>} The captured element props.
 */
const renderFor = async (segments: string[]): Promise<CapturedImageResponse> => {
  const response = await GET(new Request('http://localhost/api/og'), { params: Promise.resolve({ segments }) });

  return response as unknown as CapturedImageResponse;
};

// The route fetches font files over HTTP; serve empty buffers instead.
beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => ({ arrayBuffer: async () => new ArrayBuffer(0) }))
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('GET /api/og', () => {
  it('resolves the real home SEO data for index.png (what buildMetadata emits)', async () => {
    const rendered = await renderFor(['index.png']);

    expect(rendered.element.props.title).toBe(sanitized(homeSeo.seoTitle));
    expect(rendered.element.props.description).toBe(sanitized(homeSeo.seoDescription, 300));
    expect(rendered.element.props.path).toBe('/');
  });

  it('still resolves home SEO data for the legacy home.png alias', async () => {
    const rendered = await renderFor(['home.png']);

    expect(rendered.element.props.title).toBe(sanitized(homeSeo.seoTitle));
    expect(rendered.element.props.path).toBe('/');
  });

  it('falls back to the generic title for unknown paths', async () => {
    const rendered = await renderFor(['does-not-exist.png']);

    expect(rendered.element.props.title).toBe('Tools by Vijay Hardaha');
    expect(rendered.element.props.path).toBe('/does-not-exist');
  });
});
