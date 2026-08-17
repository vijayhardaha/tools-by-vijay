import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the url-decoder-encoder tool.
 * Each example loads a predefined input plus encode or decode mode.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Example 1',
    data: { input: 'https://example.com/search?q=hello world&category=books & more', isEncoding: true },
  },
  { label: 'Load Example 2', data: { input: 'user@example.com?name=John Doe&age=25', isEncoding: true } },
  {
    label: 'Load Example 3',
    data: { input: 'https%3A%2F%2Fexample.com%2Fpath%3Fname%3DJohn%26age%3D25', isEncoding: false },
  },
  { label: 'Load Example 4', data: { input: 'search%3Djavascript%20tutorial%26page%3D1', isEncoding: false } },
];
