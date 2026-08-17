import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Duplicate Line Remover tool.
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
      'Yes, the Duplicate Line Remover is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'How are duplicates detected?',
    headingId: 'how-are-duplicates-detected',
    answer: 'Lines are compared after trimming whitespace. Identical lines after trimming are considered duplicates.',
  },
  {
    heading: 'What sorting options are available?',
    headingId: 'what-sorting-options-are-available',
    answer: 'No sorting, Alphabetical (locale-aware), or ASCII (byte-order) sorting after removing duplicates.',
  },
  {
    heading: 'Can I reverse sort order?',
    headingId: 'can-i-reverse-sort-order',
    answer: 'Yes, the Reverse Sorting option reverses the order for any selected sort type.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
