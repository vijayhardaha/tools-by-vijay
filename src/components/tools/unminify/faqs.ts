import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Unminify / Beautifier tool.
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
      'Yes, the Unminify / Beautifier is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'Your data is sent to our server-side API for processing only. It is not stored, logged, or shared with any third parties and is discarded immediately after processing.',
  },
  {
    heading: 'What is unminification?',
    headingId: 'what-is-unminification',
    answer:
      'Unminification formats minified code with proper indentation and spacing, making it readable and easier to debug while preserving functionality.',
  },
  {
    heading: 'What code types are supported?',
    headingId: 'what-code-types-are-supported',
    answer: 'This tool supports JavaScript, CSS, HTML, XML, and JSON using the Prettier formatter.',
  },
  {
    heading: 'Is unminified code identical to the original?',
    headingId: 'is-unminified-code-identical',
    answer:
      'Functionally yes, but formatting is added back. Variable names shortened during minification remain shortened.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer: 'This tool requires a server-side API call, so an internet connection is needed for processing.',
  },
];
