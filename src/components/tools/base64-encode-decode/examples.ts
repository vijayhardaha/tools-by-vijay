import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the base64-encode-decode tool.
 * Each example loads a predefined input plus encode or decode mode.
 */
export const EXAMPLES: Example[] = [
  { label: 'Load Example 1', data: { input: 'Hello, World! This is a test.', isEncoding: true } },
  { label: 'Load Example 2', data: { input: '{"name":"John","age":30,"city":"New York"}', isEncoding: true } },
  { label: 'Load Example 3', data: { input: 'SGVsbG8sIFdvcmxkIQ==', isEncoding: false } },
  {
    label: 'Load Example 4',
    data: { input: 'VGhpcyBpcyBhbiBlbmNvZGVkIG1lc3NhZ2UuIFBsZWFzZSBkZWNvZGUgbWUu', isEncoding: false },
  },
];
