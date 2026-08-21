import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

/**
 * Centralized configured limits for API request validation.
 *
 * These are used by API route handlers to reject oversized or excessively
 * complex payloads before any expensive processing is performed, protecting
 * the server from resource-exhaustion / DoS attacks.
 */
export const API_LIMITS = {
  /** Max length (characters) of JavaScript source passed to the minifier. */
  JS_MAX_LENGTH: 1_000_000, // 1 MB

  /** Max length (characters) of CSS source passed to the minifier. */
  CSS_MAX_LENGTH: 1_000_000, // 1 MB

  /** Max length (characters) of HTML source passed to the minifier. */
  HTML_MAX_LENGTH: 1_000_000, // 1 MB

  /** Max length (characters) for generic text-based operations. */
  TEXT_MAX_LENGTH: 5_000_000, // 5 MB

  /**
   * Processing timeout in milliseconds. Operations that exceed this budget
   * are considered to have failed due to input complexity.
   */
  PROCESSING_TIMEOUT_MS: 5_000, // 5 seconds
} as const;

/**
 * Sentinel error signaling that `withTimeout` expired.
 *
 * Route handlers never inspect error message text; `withApiGuard` checks this
 * type and answers timeouts with a dedicated 422 response.
 *
 * @type {TimeoutError}
 */
export class TimeoutError extends Error {
  /**
   * Create a timeout sentinel error.
   *
   * @param {string} [message] - Optional message for server-side logs.
   */
  constructor(message = 'Operation timeout') {
    super(message);
    this.name = 'TimeoutError';
  }
}

/**
 * Resolve `promise` only if it settles within `ms` milliseconds.
 *
 * Used to bound expensive processing so a single overly-complex request cannot
 * consume server resources indefinitely.
 *
 * @template T
 *
 * @param {Promise<T>} promise - The operation to race against the timeout.
 * @param {number} ms - Timeout budget in milliseconds.
 * @param {Error} [timeoutError] - Error to reject with on timeout (defaults to a {@link TimeoutError} sentinel).
 *
 * @returns {Promise<T>} The promise result, or a rejection on timeout.
 */
export function withTimeout<T>(
  promise: Promise<T>,
  ms: number,
  timeoutError: TimeoutError = new TimeoutError()
): Promise<T> {
  return Promise.race([promise, new Promise<T>((_, reject) => setTimeout(() => reject(timeoutError), ms))]);
}

// ============================================================================
// Request body parsing
// ============================================================================

/**
 * Parse a request body as a JSON object.
 *
 * Returns `null` instead of throwing when the body is not valid JSON or is
 * not a JSON object (a string, number, boolean, or `null` body). Route
 * handlers turn `null` into a clean 400 response so JSON parser internals
 * and body echoes never leak through the generic 500 catch.
 *
 * @template T - Expected body shape; unchecked cast, callers validate fields.
 *
 * @param {Request} request - The incoming request object.
 *
 * @returns {Promise<T | null>} The parsed body object, or null when invalid.
 */
export async function parseJsonBody<T extends object>(request: Request): Promise<T | null> {
  try {
    const body: unknown = await request.json();

    return typeof body === 'object' && body !== null ? (body as T) : null;
  } catch {
    return null;
  }
}

// ============================================================================
// Client-safe error messages
// ============================================================================

/**
 * Error message patterns that indicate a syntax problem in the user's own
 * input, as raised by the parsing libraries used by the API routes.
 */
const SYNTAX_ERROR_PATTERNS: RegExp[] = [/syntax/i, /unexpected (token|character|end)/i, /unclosed|unterminated/i];

/**
 * Convert a caught error into a safe client-facing message.
 *
 * Raw library error text can embed filesystem paths, internal snippets, and
 * implementation details, so it is never echoed to clients. Errors that look
 * like syntax problems in the user's own input are answered with a
 * per-route hint; everything else collapses to a generic fallback. The full
 * error stays in server logs only (callers console.error it).
 *
 * @param {unknown} error - The caught error.
 * @param {string} syntaxHint - Safe message for user-input syntax errors.
 * @param {string} fallback - Safe generic message for unexpected errors.
 *
 * @returns {string} A safe message suitable for the JSON error response.
 *
 * @example
 * safeApiErrorMessage(error, 'Invalid JavaScript input', 'Failed to minify JavaScript')
 */
export function safeApiErrorMessage(error: unknown, syntaxHint: string, fallback: string): string {
  const message = error instanceof Error ? error.message : '';
  return SYNTAX_ERROR_PATTERNS.some((pattern) => pattern.test(message)) ? syntaxHint : fallback;
}

// ============================================================================
// Rate Limiting
// ============================================================================

/**
 * Lazily-created Upstash Redis client backed by Vercel KV.
 *
 * Vercel's free "KV" storage is Upstash Redis under the hood. Connection
 * secrets are read from `process.env`, preferring `UPSTASH_REDIS_REST_URL` /
 * `UPSTASH_REDIS_REST_TOKEN` (the names Upstash provides) and falling back to
 * `KV_REST_API_URL` / `KV_REST_API_TOKEN` (the names Vercel KV exports), so
 * either works after linking storage in the Vercel dashboard.
 *
 * `undefined` until first use; `null` once we've confirmed Redis is unavailable.
 */
let redisClient: Redis | null | undefined;

/**
 * Return (creating on first use) the Redis client, or `null` when unavailable.
 *
 * When Redis is not configured the limiter fails-open so local development and
 * the build never break due to a missing datastore.
 *
 * @returns {Redis | null} The configured client, or null when unavailable.
 */
function getRedis(): Redis | null {
  if (redisClient !== undefined) {
    return redisClient;
  }

  const url = process.env['UPSTASH_REDIS_REST_URL'] || process.env['KV_REST_API_URL'];
  const token = process.env['UPSTASH_REDIS_REST_TOKEN'] || process.env['KV_REST_API_TOKEN'];

  if (!url || !token) {
    console.warn('[RateLimit] Redis not configured — rate limiting disabled.');
    redisClient = null;
    return redisClient;
  }

  redisClient = new Redis({ url, token });
  return redisClient;
}

/**
 * Build the namespaced Redis key for an endpoint scope and client IP.
 *
 * @param {string} scope - Endpoint identifier (e.g. "minify-css") so each API gets its own counter.
 * @param {string} ip - The client IP address.
 *
 * @returns {string} The Redis key for the given scope and IP.
 */
function rateLimitKey(scope: string, ip: string): string {
  return `rate-limit:v1:${scope}:${ip}`;
}

/**
 * Increment the request counter for an endpoint scope and IP and report
 * whether the request is allowed to proceed.
 *
 * Backed by Redis (Vercel KV) with a fixed-window counter: each request
 * pipelines `INCR` with `EXPIRE ... NX` on the per-endpoint, per-IP key —
 * one request to Redis, so the counter and its TTL are always armed
 * together. Counters are scoped
 * per endpoint so heavy usage of one tool never eats into another tool's
 * allowance. Because the counter lives in a shared, distributed store
 * (rather than a per-instance `Map`), limits hold across all serverless and
 * edge invocations.
 *
 * When Redis is not configured — or errors at runtime (misconfigured token,
 * outage, network blip) — the request is allowed (fail-open) so a datastore
 * problem can never take the API routes down.
 *
 * @param {string} ip - The client IP address.
 * @param {string} scope - Endpoint identifier (e.g. "minify-css") giving each API its own bucket.
 * @param {number} [limit] - Max requests allowed within the window per endpoint (default 30).
 * @param {number} [windowMs] - Length of the window in ms (default 60,000).
 *
 * @returns {Promise<boolean>} True when the request is within the limit, false when rate-limited.
 */
export async function rateLimit(
  ip: string,
  scope: string,
  limit: number = 30,
  windowMs: number = 60000
): Promise<boolean> {
  const client = getRedis();

  // No datastore configured — allow to keep local/dev working.
  if (!client) {
    return true;
  }

  const key = rateLimitKey(scope, ip);
  const ttlSeconds = Math.max(1, Math.floor(windowMs / 1000));

  try {
    // INCR and EXPIRE travel in a single pipeline request so a crash between
    // two separate calls can never strand a counter without a TTL (which
    // would permanently limit that IP+endpoint until manual deletion).
    // EXPIRE NX arms the TTL only when the key has none, preserving the
    // fixed-window semantics of arming on the first request of a window.
    const [count] = await client.pipeline().incr(key).expire(key, ttlSeconds, 'NX').exec<[number]>();

    return count <= limit;
  } catch (error) {
    // Redis misconfigured or unreachable — degrade gracefully instead of
    // failing every API route. Details stay in server logs only.
    console.error(`[RateLimit] Redis unavailable for "${scope}", failing open:`, error);
    return true;
  }
}

/**
 * Extract the client IP from the `x-forwarded-for` header.
 *
 * The header can carry a comma-separated chain (`client, proxy1, proxy2`) on
 * platforms like Vercel; only the first entry identifies the client. Using the
 * raw header would create a distinct counter per proxy chain, and all requests
 * without the header share the `'unknown'` bucket.
 *
 * @param {Request} request - The incoming request object.
 *
 * @returns {string} The first forwarded IP, trimmed, or 'unknown'.
 */
export function getClientIp(request: Request): string {
  return (request.headers.get('x-forwarded-for') || '').split(',')[0]?.trim() || 'unknown';
}

// ============================================================================
// Route guard
// ============================================================================

/**
 * Configuration for {@link withApiGuard}.
 *
 * @type {ApiGuardOptions}
 * @property {string} scope - Rate-limit scope (e.g. "minify-css") giving each endpoint its own counter.
 * @property {string} syntaxHint - Safe message for user-input syntax errors.
 * @property {string} fallbackMessage - Safe generic message for unexpected errors.
 * @property {string} logLabel - Prefix for server-side error logs (e.g. "CSS minification error").
 */
export interface ApiGuardOptions {
  scope: string;
  syntaxHint: string;
  fallbackMessage: string;
  logLabel: string;
}

/**
 * Wrap an API route handler with the guard concerns shared by every route:
 * per-endpoint rate limiting, timeout handling, and safe error responses.
 *
 * The wrapped flow answers 429 (with `Retry-After`) when the rate limit is
 * exceeded, converts thrown {@link TimeoutError} sentinels into a 422 with a
 * dedicated message (422 = unprocessable input; 408 would claim the *client*
 * timed out), and collapses any other thrown error into a safe 500 message via
 * {@link safeApiErrorMessage} after logging the details server-side.
 *
 * @param {ApiGuardOptions} options - Guard configuration for the endpoint.
 * @param {(request: Request) => Promise<Response>} handler - The route logic (parsing, validation, processing).
 *
 * @returns {(request: Request) => Promise<Response>} The wrapped POST handler.
 */
export function withApiGuard(
  options: ApiGuardOptions,
  handler: (request: Request) => Promise<Response>
): (request: Request) => Promise<Response> {
  return async (request: Request): Promise<Response> => {
    try {
      const clientIp = getClientIp(request);

      if (!(await rateLimit(clientIp, options.scope))) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429, headers: { 'Retry-After': '60' } }
        );
      }

      return await handler(request);
    } catch (error) {
      if (error instanceof TimeoutError) {
        return NextResponse.json({ error: 'Processing timeout — input too complex' }, { status: 422 });
      }

      console.error(`${options.logLabel}:`, error);
      return NextResponse.json(
        { error: safeApiErrorMessage(error, options.syntaxHint, options.fallbackMessage) },
        { status: 500 }
      );
    }
  };
}
