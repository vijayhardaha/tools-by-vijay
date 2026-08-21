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
 * Determine whether the given URI's origin is in the allowlist.
 *
 * Parses the URI as a `URL` and compares its canonical `origin` (scheme,
 * host, port) against the allowed list. This prevents subdomain or
 * scheme-bypass attacks that a naive `startsWith` prefix check would allow
 * (e.g. `https://toolsbyvijay.vercel.app.attacker.com`).
 *
 * @param {string} uriString - The raw Origin or Referer header value.
 * @param {string[]} allowed - List of allowed origins.
 *
 * @returns {boolean} True when the parsed origin is allowed, false otherwise.
 */
function isAllowedOrigin(uriString: string, allowed: string[]): boolean {
  try {
    const url = new URL(uriString);
    return allowed.includes(url.origin);
  } catch {
    return false;
  }
}

/**
 * Proxy function that guards API routes.
 *
 * - For mutating methods (POST, PUT, DELETE, PATCH): validates origin/referer
 *   against allowed origins (via URL parsing) to prevent CSRF.
 * - For safe methods (GET, HEAD): skips origin check directly-browsed URLs
 *   (like OG images) that don't send origin/referer headers.
 * - Enforces a body size limit on all requests. Requests with a declared
 *   `content-length` are checked cheaply; chunked requests (no
 *   `content-length`) are measured by consuming the stream and aborted the
 *   moment the limit is exceeded, so at most MAX_BODY_SIZE bytes are ever
 *   buffered.
 *
 * Returns a 403 response for unknown origins and a 413 response for oversized bodies.
 *
 * @param {NextRequest} request - The incoming request object.
 *
 * @returns {Promise<NextResponse | undefined>} A response blocking the request, or NextResponse.next() to continue.
 */
export async function proxy(request: NextRequest): Promise<NextResponse | undefined> {
  const method = request.method;
  const origin = request.headers.get('origin') || '';
  const referer = request.headers.get('referer') || '';

  // Validate origin/referer for mutating requests only
  if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)) {
    const url = origin || referer;

    // Block mutating requests with no origin/referer
    if (!url) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Reject unknown origins (exact origin match via URL parsing)
    if (!isAllowedOrigin(url, ALLOWED_ORIGINS)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  }

  // Fast path: a declared content-length is checked without touching the body
  const contentLength = request.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_SIZE) {
    return NextResponse.json({ error: 'Request too large' }, { status: 413 });
  }

  // Chunked requests carry no content-length and would otherwise bypass the
  // cap entirely (routes buffer the full JSON before their own checks).
  if (!contentLength && request.body) {
    const reader = request.body.getReader();
    let received = 0;

    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;

      received += value.byteLength;
      if (received > MAX_BODY_SIZE) {
        await reader.cancel();
        return NextResponse.json({ error: 'Request too large' }, { status: 413 });
      }
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = { matcher: '/api/:path*' };
