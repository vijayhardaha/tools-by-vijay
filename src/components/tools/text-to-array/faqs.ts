import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Text to Array Converter tool.
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
    answer:
      'Yes, the Text to Array Converter is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'What formats can I convert to?',
    headingId: 'what-formats-can-i-convert-to',
    answer: 'Convert text to JSON arrays, JavaScript arrays, PHP arrays, and WordPress-compatible PHP arrays.',
  },
  {
    heading: 'What is the difference between array types?',
    headingId: 'what-is-the-difference-between-array-types',
    answer:
      'Simple arrays store values. Numeric arrays add incrementing IDs. Associative arrays create key-value pairs with optional slugified keys.',
  },
  {
    heading: 'What are slugified keys?',
    headingId: 'what-are-slugified-keys',
    answer:
      'Slugified keys convert values to URL-friendly format, for example "United States" becomes "united_states".',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
