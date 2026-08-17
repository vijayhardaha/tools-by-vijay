import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Text to PHP Variables tool.
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
      'Yes, the Text to PHP Variables is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'What naming conventions are supported?',
    headingId: 'what-naming-conventions-are-supported',
    answer:
      'camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, flatcase, and UPPERCASE. Each line becomes a valid PHP variable following your chosen convention.',
  },
  {
    heading: 'What is the output format?',
    headingId: 'what-is-the-output-format',
    answer: "Each line becomes $variableName = ''; - ready-to-use PHP code.",
  },
  {
    heading: 'How are special characters handled?',
    headingId: 'how-are-special-characters-handled',
    answer: 'The tool uses slugify and latinize to convert text into valid PHP variable names.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
