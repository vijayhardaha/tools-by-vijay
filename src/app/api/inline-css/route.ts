import juice from 'juice';
import { NextResponse } from 'next/server';
import { format } from 'prettier';

import { API_LIMITS, parseJsonBody, withApiGuard } from '@/utils/api';

/**
 * API route handler for inlining CSS into HTML, wrapped in the shared guard
 * (rate limiting, timeout → 422, safe error responses).
 */
export const POST = withApiGuard(
  {
    scope: 'inline-css',
    syntaxHint: 'Invalid HTML or CSS input — please fix syntax errors and try again.',
    fallbackMessage: 'Failed to inline CSS. Please try again later.',
    logLabel: 'Error processing request',
  },
  async (request: Request): Promise<Response> => {
    // Define the expected input structure
    type InlineCssRequest = { html: string; css: string };

    const body = await parseJsonBody<InlineCssRequest>(request);
    if (!body) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const { html, css } = body;

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

    // Format the inlined HTML using Prettier. Note: prettier's format never
    // returns an empty string for non-empty input — the trim() guard below
    // only covers pathological all-whitespace results, not format failures
    // (those reject and surface through the guard's 500 path).
    let formattedHtml: string = await format(inlinedHtml, { parser: 'html', singleQuote: true });

    if (!formattedHtml.trim()) {
      formattedHtml = inlinedHtml;
    }

    return NextResponse.json({ formattedHtml });
  }
);
