import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the CSS Minifier tool.
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
    answer: 'Yes, the CSS Minifier is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'Your data is sent to our server-side API for processing only. It is not stored, logged, or shared with any third parties and is discarded immediately after processing.',
  },
  {
    heading: 'What is CSS minification?',
    headingId: 'what-is-css-minification',
    answer:
      'CSS minification removes unnecessary characters and redundant properties without changing visual output, reducing file size significantly.',
  },
  {
    heading: 'What library is used?',
    headingId: 'css-minifier-what-library-is-used',
    answer:
      'This tool uses clean-css, which supports merging selectors, removing overridden properties, and compressing color values.',
  },
  {
    heading: 'How much can CSS be reduced?',
    headingId: 'how-much-can-css-be-reduced',
    answer:
      'Reduction typically ranges from 30% to 70%. Larger files with extensive comments see the most significant gains.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer: 'This tool requires a server-side API call, so an internet connection is needed for processing.',
  },
];
