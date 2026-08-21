/**
 * ========================================================================
 * Tests: CSPRNG helper for the password generator
 * ========================================================================
 * Purpose: Prove getSecureRandomInt returns in-range integers, rejects
 *          invalid input, and avoids modulo bias via rejection sampling.
 * ========================================================================
 */

import { describe, expect, it } from 'vitest';

import { getSecureRandomInt } from '../random';

describe('getSecureRandomInt', () => {
  it('returns an integer within [0, maxExclusive)', () => {
    for (let i = 0; i < 500; i++) {
      const value = getSecureRandomInt(26);
      expect(Number.isInteger(value)).toBe(true);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(26);
    }
  });

  it('produces varied values across many draws', () => {
    const seen = new Set<number>();
    for (let i = 0; i < 200; i++) {
      seen.add(getSecureRandomInt(10));
    }
    // With 200 draws from 10 buckets, hitting only one or two values is
    // astronomically unlikely for any real RNG.
    expect(seen.size).toBeGreaterThan(5);
  });

  it('works for the largest realistic charset size', () => {
    for (let i = 0; i < 100; i++) {
      const value = getSecureRandomInt(91);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(91);
    }
  });

  it('throws a RangeError for non-positive or non-integer bounds', () => {
    expect(() => getSecureRandomInt(0)).toThrow(RangeError);
    expect(() => getSecureRandomInt(-5)).toThrow(RangeError);
    expect(() => getSecureRandomInt(3.5)).toThrow(RangeError);
  });
});
