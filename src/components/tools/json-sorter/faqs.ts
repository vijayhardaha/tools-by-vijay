import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the JSON Sorter tool.
 *
 * Single source of truth — used both to render the FAQ section and to build
 * the FAQPage schema markup.
 *
 * @type {ToolFaqItem[]}
 */
export const FAQS: ToolFaqItem[] = [
  {
    heading: 'Is this tool free to use?',
    headingId: 'is-this-tool-free',
    answer: 'Yes, the JSON Sorter is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'Why sort JSON keys?',
    headingId: 'why-sort-json-keys',
    answer:
      'Sorting keys alphabetically makes files easier to read, compare, and manage in version control with fewer merge conflicts.',
  },
  {
    heading: 'Does sorting affect functionality?',
    headingId: 'does-sorting-affect-functionality',
    answer: 'No, JSON object key order does not affect functionality in most modern applications.',
  },
  {
    heading: 'What is the difference between Alphabetical and ASCII sort?',
    headingId: 'alphabetical-vs-ascii-sort',
    answer:
      'Alphabetical sorting ignores letter case and reads numbers naturally, so apple and Apple sort together and 2 comes before 10. ASCII sorting compares raw character codes, so 10 comes before 2 and uppercase letters come before lowercase ones.',
  },
  {
    heading: 'Can I sort JSON keys in descending order?',
    headingId: 'can-i-sort-json-keys-descending',
    answer:
      'Yes. Set the sort order to Z-A to reverse the comparison, for either the Alphabetical or the ASCII method. Descending order applies to key sorting at every nesting level.',
  },
  {
    heading: 'What does spare plain arrays mean?',
    headingId: 'what-does-spare-plain-arrays-mean',
    answer: 'This preserves original array order when element order is meaningful, such as ranked lists.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
