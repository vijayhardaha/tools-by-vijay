import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the px-to-rem-converter tool.
 * Each example loads a predefined px value plus base font size.
 */
export const EXAMPLES: Example[] = [
  { label: 'Load Example 1', data: { pxValue: '16', baseFontSize: 16 } },
  { label: 'Load Example 2', data: { pxValue: '32', baseFontSize: 16 } },
  { label: 'Load Example 3', data: { pxValue: '8', baseFontSize: 16 } },
  { label: 'Load Example 4', data: { pxValue: '28', baseFontSize: 14 } },
  { label: 'Load Example 5', data: { pxValue: '48', baseFontSize: 16 } },
];
