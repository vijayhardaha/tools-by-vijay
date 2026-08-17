import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Shuffle Text Lines tool.
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
      'Yes, the Shuffle Text Lines is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'How does shuffling work?',
    headingId: 'how-does-shuffling-work',
    answer: 'The tool uses the Fisher-Yates shuffle algorithm for unbiased randomization of your text lines.',
  },
  {
    heading: 'Can I remove duplicates before shuffling?',
    headingId: 'can-i-remove-duplicates-before-shuffling',
    answer: 'Yes, enable the Remove Duplicates option before shuffling for unique randomized lists.',
  },
  {
    heading: 'What does Trim Lines do?',
    headingId: 'what-does-trim-lines-do',
    answer: 'Removes leading and trailing whitespace from each line for clean, consistent formatting.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
