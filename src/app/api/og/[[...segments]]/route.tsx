/**
 * ======================================================================
 * Dynamic Open Graph (OG) Image Generator
 * ======================================================================
 * Generates OG images at the edge using `@vercel/og` (Satori).
 *
 * Usage (SEO-friendly path-based URLs):
 *   /api/og/index.png           → Home page (/)
 *   /api/og/about.png           → About page (/about)
 *   /api/og/tools.png           → Tools listing (/tools)
 *   /api/og/tools/writing-editing.png  → Category page (/tools/writing-editing)
 *   /api/og/slugify.png         → Slugify tool page (/slugify)
 *
 * The route looks up the page's SEO data (title, description) from the
 * centralized pages constants, which also combines tool and category
 * SEO data. This ensures OG images always stay in sync with page metadata.
 *
 * Returns a 1200×630 PNG image suitable for social sharing.
 * ======================================================================
 */

import type { JSX } from 'react';

import { ImageResponse } from '@vercel/og';

import { getSeoByPath } from '@/utils/seo';

export const runtime = 'edge';

/**
 * Interface for route params.
 *
 * @type {OgRouteParams}
 * @property {string[] | undefined} segments - URL path segments (catch-all)
 */
interface OgRouteParams {
  segments?: string[];
}

const FONT_FAMILY = 'FunnelDisplay';

interface OgProps {
  title: string;
  description: string;
  path: string;
}

/**
 * Load the Funnel Display font files for use in the OG image.
 *
 * Fetches each weight's TTF file from the public/fonts directory.
 *
 * @param {string} baseUrl - The base URL for the font files.
 *
 * @returns {Promise<Array<{name: string; data: ArrayBuffer; weight: number; style: string}>>} Font options for ImageResponse.
 */
async function loadFonts(baseUrl: string) {
  const weights = [
    { weight: 400 as const, file: 'FunnelDisplay-Regular.ttf' },
    { weight: 500 as const, file: 'FunnelDisplay-Medium.ttf' },
    { weight: 700 as const, file: 'FunnelDisplay-Bold.ttf' },
  ];

  return Promise.all(
    weights.map(async ({ weight, file }) => {
      const response = await fetch(new URL(`/fonts/${file}`, baseUrl));
      return { name: FONT_FAMILY, data: await response.arrayBuffer(), weight, style: 'normal' as const };
    })
  );
}

/**
 * Sanitize a string for use in the OG image by truncating to a
 * reasonable length.
 *
 * @param {string} str - The string to sanitize.
 * @param {number} [maxLength] - Maximum allowed length.
 *
 * @returns {string} The sanitized string.
 */
function sanitize(str: string, maxLength: number = 120): string {
  return str.length > maxLength ? `${str.slice(0, maxLength)}…` : str;
}

/**
 * Reconstruct a page path from the catch-all route segments.
 *
 * Converts URL segments like ['about'] → '/about',
 * ['tools', 'writing-editing.png'] → '/tools/writing-editing',
 * and empty segments → '/'.
 *
 * @param {string[] | undefined} segments - The catch-all route segments.
 *
 * @returns {string} The reconstructed page path.
 */
const segmentsToPath = (segments?: string[]): string => {
  if (!segments || segments.length === 0) return '/';

  // Strip .png extension from the last segment
  const last = segments[segments.length - 1].replace(/\.png$/i, '');
  const path = [...segments.slice(0, -1), last].join('/');

  // The special 'index' segment represents the root path
  return path === 'home' ? '/' : `/${path}`;
};

/**
 * Parse the path from the catch-all route segments.
 *
 * Looks up the page's SEO data (title, description) from the
 * centralized source using the path. Falls back to defaults
 * when no matching page is found.
 *
 * @param {string[] | undefined} segments - The catch-all route segments.
 *
 * @returns {OgProps} Parsed title, description, and path.
 */
function parseParams(segments?: string[]): OgProps {
  const path = segmentsToPath(segments);
  const seo = getSeoByPath(path);

  return {
    title: sanitize(seo?.seoTitle || 'Tools by Vijay Hardaha'),
    description: sanitize(seo?.seoDescription || 'Free online developer tools and utilities.', 300),
    path,
  };
}

/**
 * OG Image component rendered by Satori into SVG, then rasterized to PNG.
 *
 * @param {OgProps} props - The title, description, and path to display.
 *
 * @returns {JSX.Element} The JSX representation of the OG image.
 */
function OgImage({ title, description, path }: OgProps): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        background: '#171717',
        color: '#fafafa',
        fontFamily: FONT_FAMILY,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', flex: 1, padding: '64px' }}>
        {/* Top accent bar */}
        <div
          style={{
            display: 'flex',
            width: '120px',
            height: '6px',
            borderRadius: '3px',
            background: 'linear-gradient(90deg, #f59e0b, #ec4899)',
            marginBottom: '40px',
          }}
        />

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: '54px',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#ffd230',
            marginBottom: '20px',
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            display: 'flex',
            fontSize: '26px',
            fontWeight: 400,
            lineHeight: 1.4,
            color: '#a3a3a3',
            marginBottom: 'auto',
          }}
        >
          {description}
        </div>

        {/* Bottom section: decorative dots + author + URL */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #262626',
            paddingTop: '28px',
            gap: '6px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', lineHeight: 1 }}>
            {/* Decorative gradient dots */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', position: 'relative', top: '1px' }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ec4899' }} />
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#8b5cf6' }} />
            </div>
            <span style={{ fontSize: '22px', fontWeight: 500, color: '#737373' }}>Tools by Vijay Hardaha</span>
          </div>

          <span style={{ fontSize: '18px', fontWeight: 400, color: '#525252' }}>
            toolsbyvijay.vercel.app{path || '/'}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * GET handler that generates and returns an Open Graph image.
 *
 * @param {Request} request - The incoming HTTP request.
 * @param {object} context - Route context.
 * @param {Promise<OgRouteParams>} context.params - Promise resolving to the route parameters, including catch-all segments.
 *
 * @returns {Promise<ImageResponse>} The generated OG image response.
 */
export async function GET(request: Request, context: { params: Promise<OgRouteParams> }): Promise<ImageResponse> {
  const { segments } = await context.params;
  const params = parseParams(segments);
  const fonts = await loadFonts(request.url);

  return new ImageResponse(<OgImage {...params} />, {
    width: 1200,
    height: 630,
    fonts,
    headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800' },
  });
}
