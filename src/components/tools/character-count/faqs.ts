import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Character Counter tool.
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
      'Yes, the Character Counter is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'What statistics are provided?',
    headingId: 'what-statistics-are-provided',
    answer:
      'The tool provides character count (with and without spaces), word count, sentence count, paragraph count, line count, and space count.',
  },
  {
    heading: 'How are words counted?',
    headingId: 'how-are-words-counted',
    answer: 'Words are counted by splitting text on whitespace and filtering empty strings for accurate counting.',
  },
  {
    heading: 'Why use a character counter?',
    headingId: 'why-use-a-character-counter',
    answer: 'Essential for content with length limits like social media posts, meta descriptions, and form fields.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
