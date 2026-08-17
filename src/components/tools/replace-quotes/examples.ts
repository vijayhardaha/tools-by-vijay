import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the replace-quotes tool.
 * Each example loads a predefined input plus replacement options.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Example 1',
    data: { input: 'She said, "Hello!" and he replied, "Hi there."', replaceType: 'simple-to-curly' },
  },
  {
    label: 'Load Example 2',
    data: {
      input: 'She said, "I can\'t believe it\'s already Friday!"',
      replaceType: 'simple-to-curly',
      replaceApostrophes: true,
    },
  },
  { label: 'Load Example 3', data: { input: '“Welcome!’ she said with a smile.”', replaceType: 'curly-to-simple' } },
  {
    label: 'Load Example 4',
    data: {
      input: 'He said "hello" and she said "goodbye" to everyone.',
      replaceType: 'simple-to-curly',
      replaceStandaloneQuotes: true,
    },
  },
];
