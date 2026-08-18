import type { MockInstance } from 'vitest';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { validateSeoData } from '@/utils/seo';

/**
 * Minimal SEO data entry used to exercise the duplicate-path detection.
 *
 * @type {SeoEntry}
 */
interface SeoEntry {
  slug: string;
  path: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

/**
 * Builds a minimal SEO data entry.
 *
 * @param {string} path - The clean path for the entry.
 *
 * @returns {SeoEntry} A minimal SEO entry.
 */
const seoEntry = (path: string): SeoEntry => ({
  slug: path,
  path,
  title: path,
  description: `Description for ${path}`,
  seoTitle: `${path} title`,
  seoDescription: `${path} seo description`,
});

describe('validateSeoData()', () => {
  /** Spy on console.warn, stored so the afterEach hook can restore it. */
  let warnSpy: MockInstance | undefined;

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    warnSpy?.mockRestore();
  });

  it('warns when two entries share the same clean path', () => {
    validateSeoData([seoEntry('duplicate'), seoEntry('duplicate'), seoEntry('unique')]);

    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy).toHaveBeenCalledWith('⚠️ Duplicate path in SEO data: duplicate');
  });

  it('does not warn when every path is unique', () => {
    validateSeoData([seoEntry('unique-page'), seoEntry('unique-tool')]);

    expect(warnSpy).not.toHaveBeenCalled();
  });
});
