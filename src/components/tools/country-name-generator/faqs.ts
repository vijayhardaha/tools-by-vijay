import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Country Name Generator tool.
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
      'Yes, the Country Name Generator is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'How many country names are included?',
    headingId: 'how-many-countries-are-included',
    answer: 'The tool contains over 200 fictional country names for diverse and creative naming.',
  },
  {
    heading: 'Can I generate multiple names?',
    headingId: 'can-i-generate-multiple-names',
    answer: 'Yes, generate up to 200 names at once by adjusting the count setting.',
  },
  {
    heading: 'Are generated names unique?',
    headingId: 'are-names-unique',
    answer: 'Each name is independently selected, so the same country may appear multiple times in one generation.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
