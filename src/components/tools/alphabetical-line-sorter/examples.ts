import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the alphabetical-line-sorter tool.
 * Each example loads a predefined input plus sorting options.
 */
export const EXAMPLES: Example[] = [
  { label: 'Load Example 1', data: { input: 'orange\nbanana\napple\ngrape\nkiwi' } },
  { label: 'Load Example 2', data: { input: 'apple\nbanana\norange\ngrape\nkiwi', reverseSort: true } },
  { label: 'Load Example 3', data: { input: 'cat\ndog\nbird\ncat\nfish\ndog\nbird', removeDuplicates: true } },
  { label: 'Load Example 4', data: { input: 'Zebra\napple\nBanana\nOrange\nbanana', sortType: 'ascii' } },
];
