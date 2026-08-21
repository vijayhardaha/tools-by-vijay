/**
 * Cryptographically secure random integer generation for the password tool.
 *
 * Uses the Web Crypto API (`crypto.getRandomValues`), which is backed by the
 * platform CSPRNG, instead of `Math.random()` which is predictable and must
 * never be used for security-sensitive output.
 */

/** Upper bound of a uint32 plus one (2^32), the full range of getRandomValues. */
const UINT32_RANGE = 0x100000000;

/**
 * Return a cryptographically secure random integer in `[0, maxExclusive)`.
 *
 * Draws 32-bit values from the platform CSPRNG and applies rejection
 * sampling: any draw at or above the largest multiple of `maxExclusive`
 * within the uint32 range is discarded, so mapping the remainder through
 * `%` cannot introduce modulo bias and every value stays equally likely.
 *
 * @param {number} maxExclusive - Exclusive upper bound; must be a positive integer.
 *
 * @returns {number} A uniformly distributed integer in `[0, maxExclusive)`.
 *
 * @example
 * const index = getSecureRandomInt(charPool.length);
 * const character = charPool[index];
 *
 * @throws {RangeError} When `maxExclusive` is not a positive integer.
 */
export function getSecureRandomInt(maxExclusive: number): number {
  if (!Number.isInteger(maxExclusive) || maxExclusive <= 0) {
    throw new RangeError('maxExclusive must be a positive integer');
  }

  const buffer = new Uint32Array(1);
  const limit = Math.floor(UINT32_RANGE / maxExclusive) * maxExclusive;

  do {
    crypto.getRandomValues(buffer);
  } while (buffer[0] >= limit);

  return buffer[0] % maxExclusive;
}
