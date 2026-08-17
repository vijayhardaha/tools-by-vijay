import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the CSS Inliner tool.
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
    answer: 'Yes, the CSS Inliner is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'Your data is sent to our server-side API for processing only. It is not stored, logged, or shared with any third parties and is discarded immediately after processing.',
  },
  {
    heading: 'What is CSS inlining?',
    headingId: 'what-is-css-inlining',
    answer:
      'CSS inlining applies styles directly to each HTML element as inline styles, essential for HTML email compatibility since email clients strip external stylesheets.',
  },
  {
    heading: 'Why do emails need inlined CSS?',
    headingId: 'why-do-emails-need-inlined-css',
    answer:
      'Email clients like Gmail and Outlook strip external and internal stylesheets. Inlined CSS ensures consistent rendering across all clients.',
  },
  {
    heading: 'Does inlining increase file size?',
    headingId: 'does-inlining-increase-file-size',
    answer:
      'Yes, styles are repeated per element, but this trade-off is necessary for email compatibility and consistent rendering.',
  },
  {
    heading: 'What library is used?',
    headingId: 'css-inliner-what-library-is-used',
    answer: 'This tool uses juice for CSS inlining and Prettier for formatting the output.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer: 'This tool requires a server-side API call, so an internet connection is needed for processing.',
  },
];
