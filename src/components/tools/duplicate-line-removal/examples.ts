import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the duplicate-line-removal tool.
 * Each example loads a predefined input plus sorting options.
 */
export const EXAMPLES: Example[] = [
  { label: 'Load Example 1', data: { input: 'apple\nbanana\napple\norange\nbanana\ngrape' } },
  {
    label: 'Load Example 2',
    data: { input: 'zebra\napple\nmonkey\nelephant\ntiger\nmonkey\nzebra', sortType: 'alphabetical' },
  },
  { label: 'Load Example 3', data: { input: 'Orange\napple\nBanana\norange\nApple\nbanana', sortType: 'ascii' } },
  {
    label: 'Load Example 4',
    data: { input: 'dog\ncat\nbird\nfish\ndog\ncat\nfish', sortType: 'alphabetical', reverseSort: true },
  },
  { label: 'Load Example 5', data: { input: 'red\ngreen\nblue\nred\nyellow\ngreen\npurple\nblue' } },
];
