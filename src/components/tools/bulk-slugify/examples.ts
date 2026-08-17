import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the bulk-slugify tool.
 * Each example loads a predefined input plus slugify options.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Example 1',
    data: {
      input:
        '10 Best JavaScript Frameworks\nGetting Started with React\nAdvanced TypeScript Tips\nCSS Grid Layout Guide\nNode.js Performance Optimization',
    },
  },
  {
    label: 'Load Example 2',
    data: {
      input:
        'Premium Cotton T-Shirt\nWireless Bluetooth Headphones\nOrganic Green Tea\nLeather Messenger Bag\nStainless Steel Water Bottle',
    },
  },
  {
    label: 'Load Example 3',
    data: { input: "Electronics & Gadgets\nMen's Clothing\nHome & Kitchen\nBooks & Media\nSports & Outdoors" },
  },
  {
    label: 'Load Example 4',
    data: {
      input:
        'Annual Tech Conference 2025\nSummer Music Festival\nWinter Fashion Week\nFood & Wine Expo\nMarathon for Charity',
      removeNumbers: true,
    },
  },
  {
    label: 'Load Example 5',
    data: {
      input: 'Project Documentation\nAPI Reference Guide\nUser Manual\nDeveloper Guide\nRelease Notes',
      useUnderscore: true,
    },
  },
];
