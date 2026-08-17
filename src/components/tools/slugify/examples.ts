import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the slugify tool.
 * Each example loads a predefined input plus slugify options.
 */
export const EXAMPLES: Example[] = [
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
