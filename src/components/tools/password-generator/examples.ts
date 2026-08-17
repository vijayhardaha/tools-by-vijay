import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the password-generator tool.
 * Each example loads a predefined combination of length and character sets.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Example 1',
    data: {
      length: 16,
      useUppercase: true,
      useLowercase: true,
      useNumbers: true,
      useSymbols: true,
      excludeSimilar: false,
    },
  },
  {
    label: 'Load Example 2',
    data: {
      length: 20,
      useUppercase: true,
      useLowercase: true,
      useNumbers: true,
      useSymbols: true,
      excludeSimilar: false,
    },
  },
  {
    label: 'Load Example 3',
    data: {
      length: 6,
      useUppercase: false,
      useLowercase: false,
      useNumbers: true,
      useSymbols: false,
      excludeSimilar: false,
    },
  },
  {
    label: 'Load Example 4',
    data: {
      length: 12,
      useUppercase: true,
      useLowercase: true,
      useNumbers: false,
      useSymbols: false,
      excludeSimilar: false,
    },
  },
  {
    label: 'Load Example 5',
    data: {
      length: 16,
      useUppercase: true,
      useLowercase: true,
      useNumbers: true,
      useSymbols: true,
      excludeSimilar: true,
    },
  },
];
