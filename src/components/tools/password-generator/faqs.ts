import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Password Generator tool.
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
      'Yes, the Password Generator is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'How strong are generated passwords?',
    headingId: 'how-strong-are-generated-passwords',
    answer:
      'With all character types enabled and a length of 16+, passwords have billions of combinations, making them resistant to brute-force attacks.',
  },
  {
    heading: 'Are passwords stored or sent anywhere?',
    headingId: 'are-passwords-stored-or-sent-anywhere',
    answer:
      'No, generation happens locally in your browser. Passwords are never transmitted, stored, or logged anywhere.',
  },
  {
    heading: 'What length should I use?',
    headingId: 'what-length-should-i-use',
    answer: 'We recommend at least 12 characters. Use 16+ for critical accounts like email and banking.',
  },
  {
    heading: 'What does exclude similar characters do?',
    headingId: 'what-does-exclude-similar-characters-do',
    answer: 'This removes characters that look alike like O and 0, making passwords easier to read and type correctly.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
