import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Text Case Changer tool.
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
      'Yes, the Text Case Changer is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'What text cases are supported?',
    headingId: 'what-text-cases-are-supported',
    answer:
      'This tool supports camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, flatcase, UPPERCASE, and lowercase conversions.',
  },
  {
    heading: 'Is my text sent to a server?',
    headingId: 'text-case-changer-is-my-text-sent-to-a-server',
    answer: 'No, all processing happens in your browser. Your data never leaves your device.',
  },
  {
    heading: 'Can I convert multiple lines?',
    headingId: 'can-i-convert-multiple-lines',
    answer: 'Yes, the tool handles multiline text, preserving line structure in the output.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
