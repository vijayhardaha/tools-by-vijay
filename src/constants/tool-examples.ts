import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Slugify tool examples.
 */
const slugifyExamples: Example[] = [
  { label: 'Load Example 1', data: { input: '10 Best JavaScript Frameworks in 2025!' } },
  {
    label: 'Load Example 2',
    data: {
      input: 'Premium Cotton T-Shirt (Large)',
      useUnderscore: false,
      removeNumbers: false,
      useLowercase: true,
      useLitinize: true,
    },
  },
  {
    label: 'Load Example 3',
    data: { input: 'Cómo están los niños? Déjà vu', useUnderscore: false, useLitinize: true },
  },
  { label: 'Load Example 4', data: { input: 'My Project Documentation Page', useUnderscore: true } },
  { label: 'Load Example 5', data: { input: 'Chapter 1: The Beginning of 2025', removeNumbers: true } },
];

/**
 * Centralized example data for every tool, keyed by tool slug.
 *
 * Examples are split into per-tool variables for clarity, then merged into
 * a single record for efficient lookup. Keeping examples here (instead of
 * one file per tool) removes the duplicated example-block components and
 * makes updates a single-source change.
 */
const toolExamples: Record<string, Example[]> = { slugify: slugifyExamples };

/**
 * Look up the centralized examples for a tool slug.
 *
 * @param {string} slug - The tool slug (e.g. 'slugify').
 *
 * @returns {Example[]} The tool's examples, or an empty array when none exist.
 */
export function getToolExamples(slug: string): Example[] {
  return toolExamples[slug] || [];
}
