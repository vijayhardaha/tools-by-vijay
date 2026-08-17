import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the country-name-generator tool.
 * Each example loads a predefined count of countries to generate.
 */
export const EXAMPLES: Example[] = [
  { label: 'Load Example 1', data: { count: 5 } },
  { label: 'Load Example 2', data: { count: 10 } },
  { label: 'Load Example 3', data: { count: 3 } },
  { label: 'Load Example 4', data: { count: 1 } },
];
