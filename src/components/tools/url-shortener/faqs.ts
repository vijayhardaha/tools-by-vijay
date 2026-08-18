import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the URL Shortener tool.
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
    answer: 'Yes, the URL Shortener is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'Your data is sent to our server-side API for processing only. It is not stored, logged, or shared with any third parties and is discarded immediately after processing.',
  },
  {
    heading: 'What is a URL shortener?',
    headingId: 'what-is-a-url-shortener',
    answer:
      'A URL shortener creates a shorter link that redirects to the original destination. Shortened URLs are easier to share on social media and in print materials.',
  },
  {
    heading: 'How does this tool work?',
    headingId: 'how-does-this-tool-work',
    answer:
      'This tool uses the URLfy API to create shortened links. Enter one or more URLs, and valid URLs get shortened links that redirect to your destination.',
  },
  {
    heading: 'Can I shorten multiple URLs?',
    headingId: 'can-i-shorten-multiple-urls',
    answer: 'Yes, enter one URL per line. The tool processes all valid URLs simultaneously.',
  },
  {
    heading: 'Are shortened URLs permanent?',
    headingId: 'are-shortened-urls-permanent',
    answer: 'URLs shortened through URLfy are typically permanent. However, keep a backup of your original URLs.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer: 'This tool requires a server-side API call, so an internet connection is needed for processing.',
  },
];
