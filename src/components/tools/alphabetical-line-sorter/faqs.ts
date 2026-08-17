import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Alphabetical Line Sorter tool.
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
      'Yes, the Alphabetical Line Sorter is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'What is alphabetical sorting?',
    headingId: 'what-is-alphabetical-sorting',
    answer: 'Lines are arranged in A-Z or Z-A order, useful for organizing lists and cleaning up data.',
  },
  {
    heading: 'Standard vs ASCII sorting?',
    headingId: 'standard-vs-ascii-sorting',
    answer:
      'Standard uses locale-aware comparison for correct handling of accented characters. ASCII uses byte-order comparison.',
  },
  {
    heading: 'Can it remove duplicates?',
    headingId: 'can-it-remove-duplicates',
    answer: 'Yes, there is an option to remove duplicate lines before sorting.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
