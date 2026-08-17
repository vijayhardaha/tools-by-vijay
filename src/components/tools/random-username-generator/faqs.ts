import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Random Username Generator tool.
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
      'Yes, the Random Username Generator is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'How are usernames generated?',
    headingId: 'how-are-usernames-generated',
    answer: 'Usernames combine a random adjective, noun, and number for readable, unique results.',
  },
  {
    heading: 'How many can I generate?',
    headingId: 'how-many-can-i-generate',
    answer: 'Generate up to 200 usernames at once, each independently randomized.',
  },
  {
    heading: 'Are generated usernames guaranteed unique?',
    headingId: 'are-generated-usernames-guaranteed-unique',
    answer: 'Not guaranteed since random combinations may produce duplicates with large generation counts.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
