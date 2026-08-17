import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the qrcode-generator tool.
 * Each example loads a predefined combination of input value, size,
 * and error correction level.
 */
export const EXAMPLES: Example[] = [
  { label: 'Load Example 1', data: { input: 'https://toolsbyvijay.vercel.app', size: 256, level: 'M' } },
  { label: 'Load Example 2', data: { input: 'https://x.com/vijayhardaha', size: 256, level: 'L' } },
  { label: 'Load Example 3', data: { input: 'mailto:hello@example.com', size: 256, level: 'H' } },
  { label: 'Load Example 4', data: { input: 'https://github.com/vijayhardaha', size: 400, level: 'Q' } },
  { label: 'Load Example 5', data: { input: 'WIFI:S:MyNetwork;T:WPA;P:MyPassword123;;', size: 320, level: 'M' } },
];
