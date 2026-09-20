// @vitest-environment node

import { describe, expect, it } from 'vitest';

import { sortJson } from '@/components/tools/json-sorter/sort';
import type { JsonSortOptions } from '@/components/tools/json-sorter/sort';

/**
 * Builds sort options with sensible defaults.
 *
 * @param {Partial<JsonSortOptions>} [overrides] - Option overrides.
 *
 * @returns {JsonSortOptions} The complete options object.
 */
const opts = (overrides: Partial<JsonSortOptions> = {}): JsonSortOptions => ({
  mode: 'alphabetical',
  order: 'asc',
  spareArrays: true,
  ...overrides,
});

/**
 * Extracts the key order from a serialized JSON string, one key per line.
 *
 * @param {string} output - The serialized JSON.
 *
 * @returns {string[]} Keys in the order they were written.
 */
const keyOrder = (output: string): string[] =>
  [...output.matchAll(/^(\s*)"((?:[^"\\]|\\.)*)":/gm)].map((match) => JSON.parse(`"${match[2]}"`));

const MIXED = '{"banana":1,"Apple":2,"apple":3,"Cherry":4,"10":5,"2":6}';

describe('sortJson', () => {
  it('sorts keys alphabetically, case-insensitively and number-aware', () => {
    const output = sortJson(MIXED, opts());

    expect(keyOrder(output)).toEqual(['2', '10', 'Apple', 'apple', 'banana', 'Cherry']);
  });

  it('reverses the alphabetical order for descending sort', () => {
    const output = sortJson(MIXED, opts({ order: 'desc' }));

    expect(keyOrder(output)).toEqual(['Cherry', 'banana', 'apple', 'Apple', '10', '2']);
  });

  it('sorts by raw character codes in ASCII mode', () => {
    const output = sortJson(MIXED, opts({ mode: 'ascii' }));

    // Digits before letters, uppercase before lowercase, and 10 before 2.
    expect(keyOrder(output)).toEqual(['10', '2', 'Apple', 'Cherry', 'apple', 'banana']);
  });

  it('reverses the ASCII order for descending sort', () => {
    const output = sortJson(MIXED, opts({ mode: 'ascii', order: 'desc' }));

    expect(keyOrder(output)).toEqual(['banana', 'apple', 'Cherry', 'Apple', '2', '10']);
  });

  it('preserves the exact key order for numeric-like keys', () => {
    const output = sortJson(MIXED, opts({ mode: 'ascii' }));

    // JSON.stringify would emit "2" before "10" regardless of our comparator.
    expect(output.indexOf('"10"')).toBeLessThan(output.indexOf('"2"'));
  });

  it('sorts nested object keys at every level', () => {
    const output = sortJson('{"b":{"d":1,"c":2},"a":{"z":3,"y":4}}', opts());

    expect(keyOrder(output)).toEqual(['a', 'y', 'z', 'b', 'c', 'd']);
  });

  it('preserves array element order by default', () => {
    const output = sortJson('{"items":["z","a","m"]}', opts());

    expect(JSON.parse(output).items).toEqual(['z', 'a', 'm']);
  });

  it('sorts array elements when sparing is disabled', () => {
    const output = sortJson('{"items":["z","a","m"]}', opts({ spareArrays: false }));

    expect(JSON.parse(output).items).toEqual(['a', 'm', 'z']);
  });

  it('sorts arrays of objects and recurses into their keys', () => {
    const output = sortJson('{"list":[{"b":1,"a":2},{"d":3,"c":4}]}', opts({ spareArrays: false }));

    expect(keyOrder(output)).toEqual(['list', 'a', 'b', 'c', 'd']);
  });

  it('reorders arrays of objects by their sorted content', () => {
    const output = sortJson('{"list":[{"z":1},{"a":1}]}', opts({ spareArrays: false }));

    expect(Object.keys(JSON.parse(output).list[0])).toEqual(['a']);
    expect(Object.keys(JSON.parse(output).list[1])).toEqual(['z']);
  });

  it('pretty-prints with four-space indentation', () => {
    expect(sortJson('{"b":1,"a":2}', opts())).toBe('{\n    "a": 2,\n    "b": 1\n}');
  });

  it('handles empty containers and primitives', () => {
    expect(sortJson('{"b":{},"a":[]}', opts())).toBe('{\n    "a": [],\n    "b": {}\n}');
    expect(sortJson('[3,1,2]', opts())).toBe('[\n    3,\n    1,\n    2\n]');
  });

  it('throws on invalid JSON input', () => {
    expect(() => sortJson('{ not json', opts())).toThrow();
  });
});
