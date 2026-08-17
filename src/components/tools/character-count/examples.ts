import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data for the character-count tool.
 * Each example loads a predefined text to analyze.
 */
export const EXAMPLES: Example[] = [
  { label: 'Load Example 1', data: { text: 'The quick brown fox jumps over the lazy dog.' } },
  {
    label: 'Load Example 2',
    data: {
      text: 'Line one of the text.\nLine two continues here.\nLine three has more content.\nLine four is the final one.',
    },
  },
  {
    label: 'Load Example 3',
    data: {
      text: 'This is the first paragraph. It has multiple sentences. Here is another sentence.\n\nThis is the second paragraph. It also has several sentences. And one more for good measure.\n\nThis is the third and final paragraph. It concludes the text.',
    },
  },
  { label: 'Load Example 4', data: { text: 'function hello() {\n  console.log("Hello, World!");\n  return true;\n}' } },
];
