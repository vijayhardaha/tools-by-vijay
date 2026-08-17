import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data for the password-strength-checker tool.
 * Each example loads a predefined password to analyze.
 */
export const EXAMPLES: Example[] = [
  { label: 'Load Example 1', data: { password: '12345' } },
  { label: 'Load Example 2', data: { password: 'Password1' } },
  { label: 'Load Example 3', data: { password: 'P@ssw0rd!' } },
  { label: 'Load Example 4', data: { password: 'MyS3cur3P@ssw0rd!2025' } },
  { label: 'Load Example 5', data: { password: 'qwerty123' } },
];
