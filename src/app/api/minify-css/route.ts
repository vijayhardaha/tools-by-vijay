import CleanCSS from 'clean-css';
import { NextResponse } from 'next/server';

import { API_LIMITS, rateLimit } from '@/utils/api';

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
    if (!(await rateLimit(clientIp))) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }

    // Define the expected input structure
    type MinifyCssRequest = { css: string; options?: CleanCSS.Options };

    const { css, options }: MinifyCssRequest = await request.json();

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

    // Create a new CleanCSS instance with the provided options
    const cleanCss = new CleanCSS({ ...options, returnPromise: true });

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
      { error: error instanceof Error ? error.message : 'Failed to minify CSS' },
      { status: 500 }
    );
  }
}
