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
 * Build the namespaced Redis key for a client IP.
 *
 * @param {string} ip - The client IP address.
 *
 * @returns {string} The Redis key for the given IP.
 */
function rateLimitKey(ip: string): string {
  return `rate-limit:v1:${ip}`;
}

/**
 * Increment the request counter for an IP and report whether the request is
 * allowed to proceed.
 *
 * Backed by Redis (Vercel KV) with an atomic fixed-window counter: each request
 * runs `INCR` on the per-IP key and, on the first request in a window, sets an
 * `EXPIRE` equal to the window length. Because the counter lives in a shared,
 * distributed store (rather than a per-instance `Map`), limits hold across all
 * serverless and edge invocations.
 *
 * When Redis is not configured the request is allowed (fail-open).
 *
 * @param {string} ip - The client IP address.
 * @param {number} [limit] - Max requests allowed within the window (default 30).
 * @param {number} [windowMs] - Length of the window in ms (default 60,000).
 *
 * @returns {Promise<boolean>} True when the request is within the limit, false when rate-limited.
 */
export async function rateLimit(ip: string, limit: number = 30, windowMs: number = 60000): Promise<boolean> {
  const client = getRedis();

  // No datastore configured — allow to keep local/dev working.
  if (!client) {
    return true;
  }

  const key = rateLimitKey(ip);
  const ttlSeconds = Math.max(1, Math.floor(windowMs / 1000));

  // Atomic increment; the batch of upstream callers can't race past the limit.
  const count = await client.incr(key);

  // First request within the window → (re)arm the TTL so the key auto-expires.
  if (count === 1) {
    await client.expire(key, ttlSeconds);
  }

  return count <= limit;
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

  const key = rateLimitKey(ip);
  const [count, ttlSeconds] = await Promise.all([client.get<number>(key), client.ttl(key)]);

  const remaining = Math.max(0, limit - (count ?? 0));
  const resetTime = ttlSeconds > 0 ? Date.now() + ttlSeconds * 1000 : Date.now() + 60000;

  return { remaining, resetTime };
}
