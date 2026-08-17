import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Slugify tool.
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
    answer: 'Yes, the Slugify is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'What is a URL slug?',
    headingId: 'what-is-a-url-slug',
    answer:
      'A URL slug is the readable part of a URL that identifies a specific page. It is derived from the page title and uses hyphens or underscores to separate words, making URLs clean and SEO-friendly.',
  },
  {
    heading: 'Why are slugs important for SEO?',
    headingId: 'why-are-slugs-important-for-seo',
    answer:
      'Search engines use URL slugs to understand page content. Clean, keyword-rich slugs improve click-through rates and help with rankings. Slugs like /best-javascript-frameworks are far more effective than /page123.',
  },
  {
    heading: 'Can I use underscores in slugs?',
    headingId: 'can-i-use-underscores-in-slugs',
    answer:
      'Yes, this tool supports both hyphens and underscores as separators. Hyphens are generally recommended for SEO since Google treats them as word separators, but underscores are still widely used in many CMS platforms.',
  },
  {
    heading: 'Does this tool handle international characters?',
    headingId: 'does-this-tool-handle-international-characters',
    answer:
      'Yes, it uses the latinize library to normalize accented characters like é, ç, ñ into their ASCII equivalents, ensuring your slugs are universally compatible.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
