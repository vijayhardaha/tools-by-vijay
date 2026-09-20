import type { CleanerOptions } from '@vijayhardaha/html-cleaner';

/**
 * Default options for the HTML Cleaner tool.
 *
 * Mirrors the built-in defaults of `@vijayhardaha/html-cleaner` exactly: only
 * the safe, content-preserving cleanup runs unless the user opts in to more.
 *
 * @type {CleanerOptions}
 */
export const DEFAULT_CLEANER_OPTIONS: CleanerOptions = {
  removeAttributes: false,
  keepAttributes: [],
  removeAttributeNames: [],
  removeStyles: false,
  removeClasses: false,
  removeIds: false,
  stripTags: false,
  preserveBreaksWhenStripping: false,
  collapseNbsp: true,
  removeEmptyNbsp: false,
  convertBold: true,
  convertItalic: true,
  removeEmpty: true,
  removeSpans: false,
  removeImages: false,
  removeLinks: false,
  removeTables: false,
  tablesToDiv: false,
  removeComments: true,
  format: true,
  indent: 2,
  newline: 'lf',
  finalNewline: true,
};

/**
 * A named preset shipped by the html-cleaner package.
 *
 * Presets are CLI conveniences in the package itself; here they are resolved
 * into explicit option values so the UI can show exactly what each one enables.
 */
export type CleanerPreset = 'safe' | 'clean' | 'article' | 'aggressive' | 'text';

/**
 * The value shown in the preset selector when the user has hand-edited an
 * option and no longer matches a named preset.
 */
export const CUSTOM_PRESET = 'custom';

/**
 * The preset selector value: a named preset, or `custom`.
 */
export type PresetSelection = CleanerPreset | typeof CUSTOM_PRESET;

/**
 * Option overrides applied on top of {@link DEFAULT_CLEANER_OPTIONS} for each
 * preset, copied verbatim from the package's `docs/presets.md`.
 *
 * Anything not listed here falls back to the package default (e.g. `aggressive`
 * does not list `removeStyles` because `removeAttributes` already removes them).
 */
const PRESET_OVERRIDES: Record<CleanerPreset, Partial<CleanerOptions>> = {
  safe: {
    removeComments: true,
    collapseNbsp: true,
    removeEmpty: true,
    convertBold: true,
    convertItalic: true,
    format: true,
  },
  clean: {
    removeComments: true,
    removeStyles: true,
    removeClasses: true,
    removeIds: true,
    collapseNbsp: true,
    removeEmptyNbsp: true,
    convertBold: true,
    convertItalic: true,
    removeEmpty: true,
    format: true,
  },
  article: {
    removeComments: true,
    removeStyles: true,
    removeClasses: true,
    removeIds: true,
    collapseNbsp: true,
    removeEmptyNbsp: true,
    convertBold: true,
    convertItalic: true,
    removeEmpty: true,
    removeSpans: true,
    removeImages: true,
    removeLinks: true,
    format: true,
  },
  aggressive: {
    removeComments: true,
    removeAttributes: true,
    collapseNbsp: true,
    removeEmptyNbsp: true,
    convertBold: true,
    convertItalic: true,
    removeEmpty: true,
    removeSpans: true,
    removeImages: true,
    removeLinks: true,
    removeTables: true,
    format: true,
  },
  text: { stripTags: true, preserveBreaksWhenStripping: true, collapseNbsp: true, removeComments: true, format: false },
};

/**
 * Preset metadata used to render the preset selector and its description.
 *
 * @type {{ value: CleanerPreset; label: string; description: string }[]}
 */
const PRESETS: { value: CleanerPreset; label: string; description: string }[] = [
  {
    value: 'safe',
    label: 'Safe',
    description: 'Minimal, low-risk cleanup. Formats the markup and normalizes whitespace without removing anything.',
  },
  {
    value: 'clean',
    label: 'Clean',
    description: 'Strips presentation noise: inline styles, classes, and ids, plus NBSP-only and empty elements.',
  },
  {
    value: 'article',
    label: 'Article',
    description:
      'Prepares body copy for publishing — everything in Clean, plus unwrapping spans and links and dropping images.',
  },
  {
    value: 'aggressive',
    label: 'Aggressive',
    description:
      'Reduces markup to structure and content: removes every attribute, unwraps spans and links, drops images and table markup.',
  },
  {
    value: 'text',
    label: 'Text',
    description:
      'Drops all markup and keeps readable plain text with line breaks at block boundaries. Formatting is disabled.',
  },
];

/**
 * Options for the preset dropdown — the named presets plus a `custom` state
 * shown after a manual option edit.
 *
 * @type {{ value: PresetSelection; label: string }[]}
 */
export const PRESET_SELECT_OPTIONS: { value: PresetSelection; label: string }[] = [
  ...PRESETS.map((preset) => ({ value: preset.value, label: preset.label })),
  { value: CUSTOM_PRESET, label: 'Custom' },
];

/**
 * Human-readable description for the currently selected preset, including the
 * custom state.
 *
 * @param {PresetSelection} preset - The selected preset value.
 *
 * @returns {string} The description to display under the selector.
 */
export function presetDescription(preset: PresetSelection): string {
  if (preset === CUSTOM_PRESET) {
    return 'Your own combination of options. Pick a preset to reset to a known bundle.';
  }

  return PRESETS.find((item) => item.value === preset)?.description ?? '';
}

/**
 * Resolve a preset into a full option set by layering its overrides on top of
 * the package defaults.
 *
 * @param {CleanerPreset} preset - The preset to resolve.
 *
 * @returns {CleanerOptions} A complete, independent option object.
 */
export function resolvePreset(preset: CleanerPreset): CleanerOptions {
  return { ...DEFAULT_CLEANER_OPTIONS, ...PRESET_OVERRIDES[preset] };
}

/**
 * Parse a comma-separated attribute-name field into a clean, de-duplicated
 * list. Supports the wildcard form the package accepts (e.g. `data-*`).
 *
 * @param {string} value - Raw input such as `"href, src , title"`.
 *
 * @returns {string[]} Trimmed, non-empty, de-duplicated attribute names.
 *
 * @example
 * parseAttributeList('href, src, href') // ['href', 'src']
 */
export function parseAttributeList(value: string): string[] {
  const names = value
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean);

  return Array.from(new Set(names));
}

/**
 * Normalize an option object before handing it to `cleanHtml()`.
 *
 * Defensive by design: trims and de-duplicates attribute lists and coerces the
 * formatter's `indent` into the `number | 'tab'` shape the library expects, so
 * a malformed UI value can never reach the cleaner.
 *
 * @param {CleanerOptions} options - The raw options from component state.
 *
 * @returns {CleanerOptions} A validated copy safe to pass to `cleanHtml()`.
 */
export function normalizeCleanerOptions(options: CleanerOptions): CleanerOptions {
  const indent =
    options.indent === 'tab'
      ? 'tab'
      : Number.isFinite(options.indent) && Number(options.indent) >= 0
        ? Math.floor(Number(options.indent))
        : DEFAULT_CLEANER_OPTIONS.indent;

  return {
    ...options,
    keepAttributes: Array.from(new Set(options.keepAttributes.map((name) => name.trim()).filter(Boolean))),
    removeAttributeNames: Array.from(new Set(options.removeAttributeNames.map((name) => name.trim()).filter(Boolean))),
    indent,
    newline: options.newline === 'crlf' ? 'crlf' : 'lf',
  };
}
