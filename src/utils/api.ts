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
 * Simple in-memory, IP-based rate limiting for API routes.
 *
 * Tracks request counts per IP within a sliding window and rejects requests
 * that exceed the configured limit. This protects expensive operations
 * (minification, encoding, etc.) from abuse and distributed denial of service.
 *
 * @type {RateLimitRecord}
 * @property {number} count - Number of requests counted within the current window.
 * @property {number} resetTime - Epoch ms at which the current window resets.
 */
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

/** In-memory store of request counts keyed by client IP. */
const requestCounts = new Map<string, RateLimitRecord>();

/**
 * Increment the request counter for an IP and report whether the request is
 * allowed to proceed.
 *
 * @param {string} ip - The client IP address.
 * @param {number} [limit] - Max requests allowed within the window (default 30).
 * @param {number} [windowMs] - Length of the window in ms (default 60,000).
 *
 * @returns {boolean} True when the request is within the limit, false when rate-limited.
 */
export function rateLimit(ip: string, limit: number = 30, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  // No prior record, or window expired → start a fresh window
  if (!record || record.resetTime < now) {
    requestCounts.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count < limit) {
    record.count++;
    return true;
  }

  return false;
}

/**
 * Get the remaining allowance and window reset time for an IP.
 *
 * Utility function for monitoring/debugging. Not required for rate limiting to work.
 *
 * @param {string} ip - The client IP address.
 * @param {number} [limit] - The configured per-window limit (default 30).
 *
 * @returns {{ remaining: number; resetTime: number }} Remaining requests and reset time.
 *
 * @internal
 */
export function getRateLimit(ip: string, limit: number = 30): { remaining: number; resetTime: number } {
  const record = requestCounts.get(ip);

  if (!record || record.resetTime < Date.now()) {
    return { remaining: limit, resetTime: Date.now() + 60000 };
  }

  return { remaining: Math.max(0, limit - record.count), resetTime: record.resetTime };
}

/**
 * Remove expired entries from the in-memory store to prevent unbounded growth.
 *
 * Called automatically every 5 minutes. Can also be called manually if needed.
 *
 * @internal
 */
export function cleanupExpiredEntries(): void {
  const now = Date.now();
  let removed = 0;

  for (const [ip, record] of requestCounts.entries()) {
    if (record.resetTime < now) {
      requestCounts.delete(ip);
      removed++;
    }
  }

  if (removed > 0) {
    console.log(`[RateLimit] Cleaned up ${removed} expired entries`);
  }
}

// Periodically purge stale entries. Guarded for environments (e.g. Edge) where
// a global timer may not be available.
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupExpiredEntries, 5 * 60 * 1000);
}
