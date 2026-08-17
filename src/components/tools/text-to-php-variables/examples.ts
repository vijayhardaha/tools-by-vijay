import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the text-to-php-variables tool.
 * Each example loads a predefined input plus a variable case option.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Example 1',
    data: { input: 'first name\nlast name\nemail address\nphone number', variableCase: 'snake_case' },
  },
  {
    label: 'Load Example 2',
    data: { input: 'user name\nfull address\npostal code\nphone number', variableCase: 'camelCase' },
  },
  {
    label: 'Load Example 3',
    data: { input: 'first name\nlast name\nemail address\nphone number', variableCase: 'PascalCase' },
  },
  {
    label: 'Load Example 4',
    data: { input: 'api key\nsecret token\nbase url\ndatabase host', variableCase: 'SCREAMING_SNAKE_CASE' },
  },
  {
    label: 'Load Example 5',
    data: { input: 'first name\nlast name\nemail address\nphone number', variableCase: 'flatcase' },
  },
];
