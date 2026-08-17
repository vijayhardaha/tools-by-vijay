import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the text-case-changer tool.
 * Each example loads a predefined input plus a text case option.
 */
export const EXAMPLES: Example[] = [
  { label: 'Load Example 1', data: { input: 'hello world, this is a test sentence.', textCase: 'UPPER CASE' } },
  { label: 'Load Example 2', data: { input: 'HELLO WORLD, THIS IS A TEST SENTENCE.', textCase: 'lower case' } },
  { label: 'Load Example 3', data: { input: 'the quick brown fox jumps over the lazy dog', textCase: 'Title Case' } },
  { label: 'Load Example 4', data: { input: 'first line\nsecond line\nthird line', textCase: 'Capitalized Case' } },
  { label: 'Load Example 5', data: { input: 'this is alternating case example', textCase: 'aLtErNaTiNg cAsE' } },
];
