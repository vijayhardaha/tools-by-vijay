import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the HTML Minifier tool.
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
    answer: 'Yes, the HTML Minifier is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'Your data is sent to our server-side API for processing only. It is not stored, logged, or shared with any third parties and is discarded immediately after processing.',
  },
  {
    heading: 'What is HTML minification?',
    headingId: 'what-is-html-minification',
    answer:
      'HTML minification removes unnecessary characters like whitespace, comments, and unused quotes without changing functionality, reducing file size and improving load times.',
  },
  {
    heading: 'Is minified HTML still valid?',
    headingId: 'is-minified-html-still-valid',
    answer:
      'Yes, minified HTML is functionally identical. All tags, attributes, and content are preserved and render the same way in browsers.',
  },
  {
    heading: 'What library is used?',
    headingId: 'html-minifier-what-library-is-used',
    answer:
      'This tool uses html-minifier-terser, a powerful HTML minification library that provides fine-grained control over optimizations.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer: 'This tool requires a server-side API call, so an internet connection is needed for processing.',
  },
];
