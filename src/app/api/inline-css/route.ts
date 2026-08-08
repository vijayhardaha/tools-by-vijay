import juice from 'juice';
import { NextResponse } from 'next/server';
// eslint-disable-next-line import-x/namespace
import * as prettier from 'prettier';

import { API_LIMITS, rateLimit } from '@/utils/api';

/**
 * API route handler for inlining CSS into HTML.
 *
 * @param {Request} request - The incoming request object.
 *
 * @returns {Promise<Response>} JSON response with inlined and formatted HTML or an error message.
 */
export async function POST(request: Request): Promise<Response> {
  try {
    // Rate limit by client IP to protect against abuse
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown';
    if (!rateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }

    // Define the expected input structure
    type InlineCssRequest = { html: string; css: string };

    const { html, css }: InlineCssRequest = await request.json();

    if (!html || !css) {
      return NextResponse.json({ error: 'HTML and CSS inputs are required' }, { status: 400 });
    }

    // Reject oversized payloads before any heavy processing
    if (html.length > API_LIMITS.HTML_MAX_LENGTH) {
      return NextResponse.json(
        { error: `HTML input too large. Maximum ${API_LIMITS.HTML_MAX_LENGTH} characters.` },
        { status: 413 }
      );
    }

    if (css.length > API_LIMITS.CSS_MAX_LENGTH) {
      return NextResponse.json(
        { error: `CSS input too large. Maximum ${API_LIMITS.CSS_MAX_LENGTH} characters.` },
        { status: 413 }
      );
    }

    // Inline CSS into HTML
    const inlinedHtml: string = juice.inlineContent(html, css);

    // Format the inlined HTML using Prettier
    // eslint-disable-next-line import-x/namespace
    let formattedHtml: string = await prettier.format(inlinedHtml, { parser: 'html', singleQuote: true });

    if (!formattedHtml.trim()) {
      formattedHtml = inlinedHtml; // Fallback to the original inlined HTML if formatting fails
    }

    return NextResponse.json({ formattedHtml });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
