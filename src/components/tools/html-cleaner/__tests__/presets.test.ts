// @vitest-environment node

import type { CleanerOptions } from '@vijayhardaha/html-cleaner';
import { DEFAULT_OPTIONS } from '@vijayhardaha/html-cleaner';
import { describe, expect, it } from 'vitest';

import {
  DEFAULT_CLEANER_OPTIONS,
  normalizeCleanerOptions,
  parseAttributeList,
  resolvePreset,
} from '@/components/tools/html-cleaner/presets';

describe('html-cleaner presets', () => {
  it('defaults match the options shipped by the package', () => {
    expect(DEFAULT_CLEANER_OPTIONS).toEqual(DEFAULT_OPTIONS);
  });

  it('safe resolves to the package defaults', () => {
    expect(resolvePreset('safe')).toEqual(DEFAULT_OPTIONS);
  });

  it('clean strips styles, classes, ids, and NBSP-only nodes', () => {
    const options = resolvePreset('clean');

    expect(options.removeStyles).toBe(true);
    expect(options.removeClasses).toBe(true);
    expect(options.removeIds).toBe(true);
    expect(options.removeEmptyNbsp).toBe(true);
    // Nothing structural happens yet.
    expect(options.removeSpans).toBe(false);
    expect(options.removeImages).toBe(false);
    expect(options.removeLinks).toBe(false);
    expect(options.removeAttributes).toBe(false);
  });

  it('article builds on clean and unwraps spans and links', () => {
    const options = resolvePreset('article');

    expect(options.removeStyles).toBe(true);
    expect(options.removeSpans).toBe(true);
    expect(options.removeLinks).toBe(true);
    expect(options.removeImages).toBe(true);
    expect(options.removeTables).toBe(false);
  });

  it('aggressive removes every attribute and table markup', () => {
    const options = resolvePreset('aggressive');

    expect(options.removeAttributes).toBe(true);
    expect(options.removeTables).toBe(true);
    expect(options.removeSpans).toBe(true);
    expect(options.removeLinks).toBe(true);
    expect(options.removeImages).toBe(true);
    // Not set individually — removeAttributes already covers them.
    expect(options.removeStyles).toBe(false);
    expect(options.format).toBe(true);
  });

  it('text strips all markup and disables formatting', () => {
    const options = resolvePreset('text');

    expect(options.stripTags).toBe(true);
    expect(options.preserveBreaksWhenStripping).toBe(true);
    expect(options.collapseNbsp).toBe(true);
    expect(options.removeComments).toBe(true);
    expect(options.format).toBe(false);
  });

  it('returns an independent object each time', () => {
    const first = resolvePreset('clean');
    const second = resolvePreset('clean');

    expect(first).not.toBe(second);
    expect(first).toEqual(second);
  });
});

describe('parseAttributeList', () => {
  it('trims, drops empties, and de-duplicates', () => {
    expect(parseAttributeList(' href, src ,, href, title ')).toEqual(['href', 'src', 'title']);
  });

  it('returns an empty array for blank input', () => {
    expect(parseAttributeList('   ')).toEqual([]);
  });

  it('preserves wildcard names', () => {
    expect(parseAttributeList('data-*, aria-*')).toEqual(['data-*', 'aria-*']);
  });
});

describe('normalizeCleanerOptions', () => {
  const withOverrides = (overrides: Partial<CleanerOptions>): CleanerOptions => ({
    ...DEFAULT_CLEANER_OPTIONS,
    ...overrides,
  });

  it('floors indent and rejects invalid values', () => {
    expect(normalizeCleanerOptions(withOverrides({ indent: 3.9 })).indent).toBe(3);
    expect(normalizeCleanerOptions(withOverrides({ indent: -4 })).indent).toBe(2);
    expect(normalizeCleanerOptions(withOverrides({ indent: Number.NaN })).indent).toBe(2);
    expect(normalizeCleanerOptions(withOverrides({ indent: 'tab' })).indent).toBe('tab');
  });

  it('falls back to lf for an unknown newline value', () => {
    expect(normalizeCleanerOptions(withOverrides({ newline: 'crlf' })).newline).toBe('crlf');
    expect(normalizeCleanerOptions(withOverrides({ newline: 'weird' as 'lf' })).newline).toBe('lf');
  });

  it('cleans attribute name arrays', () => {
    const options = normalizeCleanerOptions(
      withOverrides({ keepAttributes: [' href ', '', 'href'], removeAttributeNames: [' onclick '] })
    );

    expect(options.keepAttributes).toEqual(['href']);
    expect(options.removeAttributeNames).toEqual(['onclick']);
  });
});
