import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Bulk Slugify tool.
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
    answer: 'Yes, the Bulk Slugify is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'How many items can I process at once?',
    headingId: 'how-many-items-can-i-process-at-once',
    answer:
      'There is no hard limit. You can paste hundreds of lines at once. All processing happens client-side in your browser, so performance depends on your device.',
  },
  {
    heading: 'What are common use cases for bulk slugification?',
    headingId: 'what-are-common-use-cases-for-bulk-slugification',
    answer:
      'Common use cases include generating SEO-friendly URLs for e-commerce catalogs, transforming blog titles during CMS migrations, and creating dynamic routes for web applications.',
  },
  {
    heading: 'What options are available?',
    headingId: 'bulk-slugify-what-options-are-available',
    answer:
      'You can choose between hyphens and underscores, enable lowercase conversion, remove numbers, normalize international characters, and keep or remove empty lines.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
