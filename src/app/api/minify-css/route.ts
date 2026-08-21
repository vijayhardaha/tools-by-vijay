import CleanCSS from 'clean-css';
import { NextResponse } from 'next/server';

import { API_LIMITS, parseJsonBody, rateLimit, safeApiErrorMessage } from '@/utils/api';

/**
 * API route handler for CSS minification
 *
 * @param {Request} request - The incoming request object
 *
 * @returns {Promise<Response>} JSON response with minified CSS or error
 */
export async function POST(request: Request): Promise<Response> {
  try {
    // Rate limit by client IP to protect against abuse
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown';
    if (!(await rateLimit(clientIp, 'minify-css'))) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }

    // Define the expected input structure
    type MinifyCssRequest = { css: string; options?: CleanCSS.Options };

    const body = await parseJsonBody<MinifyCssRequest>(request);
    if (!body) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const { css, options } = body;

    if (!css || typeof css !== 'string') {
      return NextResponse.json({ error: 'Invalid CSS input' }, { status: 400 });
    }

    // Reject oversized payloads before any heavy processing
    if (css.length > API_LIMITS.CSS_MAX_LENGTH) {
      return NextResponse.json(
        { error: `CSS input too large. Maximum ${API_LIMITS.CSS_MAX_LENGTH} characters.` },
        { status: 413 }
      );
    }

    // Build a fixed, whitelisted CleanCSS configuration. User input must
    // never control `inline`/`rebaseTo`/`inlineRequest`: local @import
    // inlining reads arbitrary files from disk and remote inlining makes
    // the server fetch arbitrary URLs (SSRF). Only the benign fields the
    // CSS minifier UI sends are forwarded.
    const { level, format } = options ?? {};
    const cleanCss = new CleanCSS({
      ...(typeof level === 'number' ? { level } : {}),
      ...(format !== null && typeof format === 'object' && !Array.isArray(format) ? { format } : {}),
      inline: ['none'],
      returnPromise: true,
    });

    // Minify the CSS
    const minified = await cleanCss.minify(css);

    // Check for errors
    if (minified.errors && minified.errors.length > 0) {
      throw new Error(minified.errors.join(', '));
    }

    // Return the minified CSS and stats
    return NextResponse.json({
      minifiedCss: minified.styles,
      stats: {
        originalSize: minified.stats.originalSize,
        minifiedSize: minified.stats.minifiedSize,
        timeSpent: minified.stats.timeSpent,
        efficiency: minified.stats.efficiency,
      },
    });
  } catch (error) {
    console.error('CSS minification error:', error);
    return NextResponse.json(
      {
        error: safeApiErrorMessage(
          error,
          'Invalid CSS input — please fix syntax errors and try again.',
          'Failed to minify CSS. Please try again later.'
        ),
      },
      { status: 500 }
    );
  }
}
