import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the text-to-array tool.
 * Each example loads a predefined input plus output format and array options.
 */
export const EXAMPLES: Example[] = [
  { label: 'Load Example 1', data: { input: 'United States\nCanada\nUnited Kingdom\nAustralia\nIndia' } },
  {
    label: 'Load Example 2',
    data: { input: 'Apple\nBanana\nOrange\nGrape\nMango', outputFormat: 'jsArray', arrayType: 'simple' },
  },
  {
    label: 'Load Example 3',
    data: { input: 'red\ngreen\nblue\nyellow', outputFormat: 'php', arrayType: 'associative', useSlugKeys: true },
  },
  {
    label: 'Load Example 4',
    data: { input: 'Option A\nOption B\nOption C', outputFormat: 'wordpress', arrayType: 'numeric' },
  },
];
