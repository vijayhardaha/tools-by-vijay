import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { siteUrl } from '@/utils/seo';

/**
 * Allowed origins for API requests.
 * Requests without a matching Origin or Referer header are rejected.
 */
const ALLOWED_ORIGINS = [siteUrl().replace(/\/+$/, '')];

// Allow localhost only in development
if (process.env.NODE_ENV === 'development') {
  ALLOWED_ORIGINS.push('http://localhost:3000');
}

/**
 * Max request body size in bytes (2MB).
 */
const MAX_BODY_SIZE = 2_000_000;

/**
 * Proxy function that guards API routes.
 *
 * Checks origin/referer against allowed origins and enforces a body size limit.
 * Returns a 403 response for unknown origins and a 413 response for oversized bodies.
 *
 * @param {NextRequest} request - The incoming request object.
 *
 * @returns {NextResponse | undefined} A response blocking the request, or NextResponse.next() to continue.
 */
export function proxy(request: NextRequest): NextResponse | undefined {
  const origin = request.headers.get('origin') || '';
  const referer = request.headers.get('referer') || '';
  const url = origin || referer;

  // Block requests with no origin/referer
  if (!url) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Reject unknown origins
  if (!ALLOWED_ORIGINS.some((allowed) => url.startsWith(allowed))) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Check body size
  const contentLength = request.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_SIZE) {
    return NextResponse.json({ error: 'Request too large' }, { status: 413 });
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = { matcher: '/api/:path*' };
