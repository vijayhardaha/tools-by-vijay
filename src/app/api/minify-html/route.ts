import { minify } from 'html-minifier-terser';
import { NextResponse } from 'next/server';

import { API_LIMITS, parseJsonBody, withApiGuard, withTimeout } from '@/utils/api';

/**
 * API route handler for HTML minification, wrapped in the shared guard
 * (rate limiting, timeout → 422, safe error responses).
 */
export const POST = withApiGuard(
  {
    scope: 'minify-html',
    syntaxHint: 'Invalid HTML input — please fix syntax errors and try again.',
    fallbackMessage: 'Failed to minify HTML. Please try again later.',
    logLabel: 'HTML minification error',
  },
  async (request: Request): Promise<Response> => {
    // Define the expected input structure
    type MinifyHtmlRequest = { html: string; options?: Record<string, unknown> };

    const body = await parseJsonBody<MinifyHtmlRequest>(request);
    if (!body) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const { html, options } = body;

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
  }
);
