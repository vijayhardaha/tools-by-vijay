import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the shuffle-text-lines tool.
 * Each example loads a predefined input plus shuffle options.
 */
export const EXAMPLES: Example[] = [
  { label: 'Load Example 1', data: { input: 'item 1\nitem 2\nitem 3\nitem 4\nitem 5\nitem 6' } },
  { label: 'Load Example 2', data: { input: 'Alice\nBob\nCharlie\nDiana\nEve\nFrank\nGrace\nHenry' } },
  { label: 'Load Example 3', data: { input: 'red\nblue\ngreen\nred\nyellow\nblue', removeDuplicates: true } },
  { label: 'Load Example 4', data: { input: 'line 1\n\nline 2\n\nline 3\n\nline 4', removeEmptyLines: false } },
  { label: 'Load Example 5', data: { input: '  spaced\nnormal\n  indented\n  more space\nplain', trimLines: false } },
];
