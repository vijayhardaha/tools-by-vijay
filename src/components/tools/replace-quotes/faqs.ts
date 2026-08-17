import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Replace Quotes tool.
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
    answer: 'Yes, the Replace Quotes is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'Straight vs curly quotes?',
    headingId: 'straight-vs-curly-quotes',
    answer:
      'Straight quotes are basic keyboard marks. Curly quotes are typographically correct for professional publishing and improve readability.',
  },
  {
    heading: 'When to use curly quotes?',
    headingId: 'when-to-use-curly-quotes',
    answer:
      'Use curly quotes in professional publishing and formal documents. Straight quotes are fine for code and informal communication.',
  },
  {
    heading: 'Does this replace apostrophes?',
    headingId: 'does-this-replace-apostrophes',
    answer:
      'Yes, the Replace Apostrophes option converts apostrophes in contractions to typographically correct curly versions.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
