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
 * JSON Sorter tool examples.
 */
const jsonSorterExamples: Example[] = [
  {
    label: 'Load Example 1',
    data: {
      input:
        '{\n  "zebra": "africa",\n  "apple": "fruit",\n  "mango": "tropical",\n  "banana": "yellow",\n  "camel": "desert"\n}',
      spareArrays: true,
    },
  },
  {
    label: 'Load Example 2',
    data: {
      input:
        '{\n  "name": "John",\n  "age": 30,\n  "email": "john@example.com",\n  "address": {\n    "zip": "10001",\n    "city": "New York",\n    "street": "123 Main St",\n    "country": "USA"\n  }\n}',
      spareArrays: true,
    },
  },
  {
    label: 'Load Example 3',
    data: {
      input:
        '{\n  "version": "2.0",\n  "debug": false,\n  "database": {\n    "port": 5432,\n    "host": "localhost",\n    "name": "app_db"\n  },\n  "logging": {\n    "level": "info",\n    "file": "/var/log/app.log"\n  }\n}',
      spareArrays: true,
    },
  },
  {
    label: 'Load Example 4',
    data: {
      input:
        '{\n  "name": "test",\n  "items": ["z", "a", "m"],\n  "config": {\n    "enable": true,\n    "timeout": 30\n  }\n}',
      spareArrays: true,
    },
  },
];

/**
 * Password Generator tool examples.
 */
const passwordGeneratorExamples: Example[] = [
  {
    label: 'Load Example 1',
    data: {
      length: 16,
      useUppercase: true,
      useLowercase: true,
      useNumbers: true,
      useSymbols: true,
      excludeSimilar: false,
    },
  },
  {
    label: 'Load Example 2',
    data: {
      length: 20,
      useUppercase: true,
      useLowercase: true,
      useNumbers: true,
      useSymbols: true,
      excludeSimilar: false,
    },
  },
  {
    label: 'Load Example 3',
    data: {
      length: 6,
      useUppercase: false,
      useLowercase: false,
      useNumbers: true,
      useSymbols: false,
      excludeSimilar: false,
    },
  },
  {
    label: 'Load Example 4',
    data: {
      length: 12,
      useUppercase: true,
      useLowercase: true,
      useNumbers: false,
      useSymbols: false,
      excludeSimilar: false,
    },
  },
  {
    label: 'Load Example 5',
    data: {
      length: 16,
      useUppercase: true,
      useLowercase: true,
      useNumbers: true,
      useSymbols: true,
      excludeSimilar: true,
    },
  },
];

/**
 * Centralized example data for every tool, keyed by tool slug.
 *
 * Examples are split into per-tool variables for clarity, then merged into
 * a single record for efficient lookup. Keeping examples here (instead of
 * one file per tool) removes the duplicated example-block components and
 * makes updates a single-source change.
 */
const toolExamples: Record<string, Example[]> = {
  slugify: slugifyExamples,
  'json-sorter': jsonSorterExamples,
  'password-generator': passwordGeneratorExamples,
};

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
