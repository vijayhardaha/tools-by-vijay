import { Redis } from '@upstash/redis';

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

  /** Max length (characters) for base64 content encoding/decoding. */
  BASE64_MAX_LENGTH: 50_000_000, // 50 MB

  /** Max length (characters) for generic text-based operations. */
  TEXT_MAX_LENGTH: 5_000_000, // 5 MB

  /**
   * Processing timeout in milliseconds. Operations that exceed this budget
   * are considered to have failed due to input complexity.
   */
  PROCESSING_TIMEOUT_MS: 5_000, // 5 seconds
} as const;

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
 * @param {Error} [timeoutError] - Error to reject with on timeout (defaults to a generic timeout error).
 *
 * @returns {Promise<T>} The promise result, or a rejection on timeout.
 */
export function withTimeout<T>(
  promise: Promise<T>,
  ms: number,
  timeoutError = new Error('Operation timeout')
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
 * Backed by Redis (Vercel KV) with a fixed-window counter: each request runs
 * `INCR` on the per-endpoint, per-IP key and, on the first request in a
 * window, sets an `EXPIRE` equal to the window length. Counters are scoped
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
    // INCR is atomic; EXPIRE arms the TTL only on the first request of the
    // window so the key auto-expires even though the two calls are separate.
    const count = await client.incr(key);

    if (count === 1) {
      await client.expire(key, ttlSeconds);
    }

    return count <= limit;
  } catch (error) {
    // Redis misconfigured or unreachable — degrade gracefully instead of
    // failing every API route. Details stay in server logs only.
    console.error(`[RateLimit] Redis unavailable for "${scope}", failing open:`, error);
    return true;
  }
}

/**
 * Get the remaining allowance and window reset time for an IP.
 *
 * Utility function for monitoring/debugging. Not required for rate limiting to
 * work. Returns a full allowance when Redis is not configured.
 *
 * @param {string} ip - The client IP address.
 * @param {number} [limit] - The configured per-window limit (default 30).
 *
 * @returns {Promise<{ remaining: number; resetTime: number }>} Remaining requests and reset time.
 *
 * @internal
 */
export async function getRateLimit(ip: string, limit: number = 30): Promise<{ remaining: number; resetTime: number }> {
  const client = getRedis();

  if (!client) {
    return { remaining: limit, resetTime: Date.now() + 60000 };
  }

  const key = rateLimitKey('default', ip);
  const [count, ttlSeconds] = await Promise.all([client.get<number>(key), client.ttl(key)]);

  const remaining = Math.max(0, limit - (count ?? 0));
  const resetTime = ttlSeconds > 0 ? Date.now() + ttlSeconds * 1000 : Date.now() + 60000;

  return { remaining, resetTime };
}
