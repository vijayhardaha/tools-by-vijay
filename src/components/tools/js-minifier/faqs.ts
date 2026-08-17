import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions about the JavaScript Minifier tool.
 * Used for both the FAQ section and the FAQPage schema markup.
 */
export const FAQS: ToolFaqItem[] = [
  {
    heading: 'Is this tool free to use?',
    headingId: 'is-this-tool-free',
    answer:
      'Yes, the JavaScript Minifier is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'Your data is sent to our server-side API for processing only. It is not stored, logged, or shared with any third parties and is discarded immediately after processing.',
  },
  {
    heading: 'What is JavaScript minification?',
    headingId: 'what-is-javascript-minification',
    answer:
      'JavaScript minification removes unnecessary characters and transforms code to be more compact, often shortening variable names and removing dead code.',
  },
  {
    heading: 'What library is used?',
    headingId: 'js-minifier-what-library-is-used',
    answer:
      'This tool uses @putout/minify with options for mangling variables, removing console/debugger statements, and removing comments.',
  },
  {
    heading: 'Does minification affect functionality?',
    headingId: 'does-minification-affect-functionality',
    answer:
      'No, proper minification preserves all functionality. Only optional features like console removal are configurable.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer: 'This tool requires a server-side API call, so an internet connection is needed for processing.',
  },
];
