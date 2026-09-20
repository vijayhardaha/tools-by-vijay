/**
 * Sorting engine for the JSON Sorter tool.
 *
 * Replaces the previous `jsonabc` dependency with a small, dependency-free
 * implementation so the tool can offer both alphabetical and ASCII key
 * ordering in either direction.
 */

/**
 * Key comparison strategy.
 *
 * - `alphabetical` — case-insensitive, locale-aware, and number-aware, so
 *   `apple` and `Apple` sort together and `2` sorts before `10`.
 * - `ascii` — strict UTF-16 code-unit comparison, so `10` sorts before `2`
 *   and uppercase letters sort before lowercase ones.
 */
export type SortMode = 'alphabetical' | 'ascii';

/**
 * Sort direction.
 *
 * - `asc` — A to Z, lowest first.
 * - `desc` — Z to A, highest first.
 */
export type SortOrder = 'asc' | 'desc';

/**
 * Options controlling a single sort run.
 *
 * @type {JsonSortOptions}
 * @property {SortMode} mode - The key comparison strategy
 * @property {SortOrder} order - The sort direction
 * @property {boolean} spareArrays - Preserve the original element order of arrays
 */
export interface JsonSortOptions {
  mode: SortMode;
  order: SortOrder;
  spareArrays: boolean;
}

/**
 * Compare two strings by their UTF-16 code units.
 *
 * @param {string} a - First string.
 * @param {string} b - Second string.
 *
 * @returns {number} Negative when `a` sorts first, positive when `b` does.
 */
const compareCodeUnits = (a: string, b: string): number => (a < b ? -1 : a > b ? 1 : 0);

/**
 * Compare two strings case-insensitively and number-aware, breaking ties by
 * code unit so the result is always deterministic.
 *
 * @param {string} a - First string.
 * @param {string} b - Second string.
 *
 * @returns {number} Negative when `a` sorts first, positive when `b` does.
 */
const compareAlphabetical = (a: string, b: string): number => {
  const result = a.localeCompare(b, 'en', { sensitivity: 'base', numeric: true });

  return result !== 0 ? result : compareCodeUnits(a, b);
};

/**
 * Resolve the comparator for a mode.
 *
 * @param {SortMode} mode - The requested comparison strategy.
 *
 * @returns {(a: string, b: string) => number} The comparator to use.
 */
const getComparator = (mode: SortMode): ((a: string, b: string) => number) =>
  mode === 'ascii' ? compareCodeUnits : compareAlphabetical;

/**
 * Reduce a value to the string used when comparing array elements.
 *
 * Uses the Map-aware serializer so objects and nested arrays compare by their
 * actual sorted content rather than stringifying to `{}`.
 *
 * @param {unknown} value - The array element.
 *
 * @returns {string} A stable textual representation.
 */
const comparableText = (value: unknown): string => (typeof value === 'string' ? value : serialize(value));

/**
 * Recursively sort object keys (and optionally array elements).
 *
 * @param {unknown} value - The parsed JSON value to sort.
 * @param {(a: string, b: string) => number} compare - The key comparator.
 * @param {1 | -1} direction - Multiplier applied to comparator results.
 * @param {boolean} spareArrays - Preserve array element order when true.
 *
 * @returns {unknown} A new value with sorted keys.
 */
const sortValue = (
  value: unknown,
  compare: (a: string, b: string) => number,
  direction: 1 | -1,
  spareArrays: boolean
): unknown => {
  if (Array.isArray(value)) {
    const items = value.map((item) => sortValue(item, compare, direction, spareArrays));

    if (spareArrays) {
      return items;
    }

    return items.sort((a, b) => direction * compare(comparableText(a), comparableText(b)));
  }

  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
      .map(([key, child]) => [key, sortValue(child, compare, direction, spareArrays)] as const)
      .sort(([a], [b]) => direction * compare(a, b));

    // A Map, not a plain object: JavaScript engines always enumerate
    // integer-like keys of plain objects in ascending numeric order, which
    // would override the comparator for keys such as "2" and "10".
    return new Map(entries);
  }

  return value;
};

/**
 * Serialize a JSON value with four-space indentation while preserving key
 * order exactly.
 *
 * `JSON.stringify` always emits integer-like keys first in ascending numeric
 * order, which would silently break descending mode for key sets such as
 * `{"2": 1, "10": 2}`. Serializing manually keeps the order the sorter chose.
 *
 * @param {unknown} value - The value to serialize.
 * @param {number} [depth] - Current indentation depth.
 *
 * @returns {string} The pretty-printed JSON text.
 */
const serialize = (value: unknown, depth: number = 0): string => {
  const pad = '    '.repeat(depth);
  const childPad = '    '.repeat(depth + 1);

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';

    return `[\n${value.map((item) => `${childPad}${serialize(item, depth + 1)}`).join(',\n')}\n${pad}]`;
  }

  if (value instanceof Map) {
    const entries = [...value.entries()];

    if (entries.length === 0) return '{}';

    const items = entries.map(([key, child]) => `${childPad}${JSON.stringify(key)}: ${serialize(child, depth + 1)}`);

    return `{\n${items.join(',\n')}\n${pad}}`;
  }

  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>);

    if (entries.length === 0) return '{}';

    const items = entries.map(([key, child]) => `${childPad}${JSON.stringify(key)}: ${serialize(child, depth + 1)}`);

    return `{\n${items.join(',\n')}\n${pad}}`;
  }

  return JSON.stringify(value) ?? 'null';
};

/**
 * Parse a JSON string, sort its keys, and return the pretty-printed result.
 *
 * Throws when the input is not valid JSON; callers surface that to the user.
 *
 * @param {string} input - The raw JSON text.
 * @param {JsonSortOptions} options - The sorting configuration.
 *
 * @returns {string} The sorted, pretty-printed JSON.
 *
 * @example
 * sortJson('{"b":1,"a":2}', { mode: 'alphabetical', order: 'asc', spareArrays: true })
 * // '{\n    "a": 2,\n    "b": 1\n}'
 */
export function sortJson(input: string, options: JsonSortOptions): string {
  const parsed = JSON.parse(input) as unknown;
  const direction: 1 | -1 = options.order === 'asc' ? 1 : -1;
  const sorted = sortValue(parsed, getComparator(options.mode), direction, options.spareArrays);

  return serialize(sorted);
}
