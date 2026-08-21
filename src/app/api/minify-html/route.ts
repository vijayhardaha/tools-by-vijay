import { minify } from 'html-minifier-terser';
import { NextResponse } from 'next/server';

import { API_LIMITS, withTimeout, rateLimit } from '@/utils/api';

/**
 * API route handler for HTML minification.
 *
 * @param {Request} request - The incoming request object.
 *
 * @returns {Promise<Response>} JSON response with minified HTML or an error message.
 */
export async function POST(request: Request): Promise<Response> {
  try {
    // Rate limit by client IP to protect against abuse
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown';
    if (!(await rateLimit(clientIp, 'minify-html'))) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }

    // Define the expected input structure
    type MinifyHtmlRequest = { html: string; options?: Record<string, unknown> };

    const { html, options }: MinifyHtmlRequest = await request.json();

    if (!html || typeof html !== 'string') {
      return NextResponse.json({ error: 'Invalid HTML input' }, { status: 400 });
    }

    // Reject oversized payloads before any heavy processing
    if (html.length > API_LIMITS.HTML_MAX_LENGTH) {
      return NextResponse.json(
        { error: `HTML input too large. Maximum ${API_LIMITS.HTML_MAX_LENGTH} characters.` },
        { status: 413 }
      );
    }

    // Minify the HTML with the provided options, bounded by a processing timeout
    const minifiedHtml: string = await withTimeout(
      minify(html, {
        ...options,
        caseSensitive: false,
        keepClosingSlash: false,
        processConditionalComments: true,
        quoteCharacter: '"',
      }),
      API_LIMITS.PROCESSING_TIMEOUT_MS
    );

    return NextResponse.json({ minifiedHtml });
  } catch (error) {
    const message = error instanceof Error ? error.message : '';

    if (message.toLowerCase().includes('timeout')) {
      return NextResponse.json({ error: 'Processing timeout — input too complex' }, { status: 408 });
    }

    console.error('HTML minification error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to minify HTML' },
      { status: 500 }
    );
  }
}
