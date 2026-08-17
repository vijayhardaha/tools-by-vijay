import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Password Strength Checker tool.
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
      'Yes, the Password Strength Checker is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'How is password strength measured?',
    headingId: 'how-is-strength-measured',
    answer:
      'Strength is evaluated based on length, character variety, and resistance to common attack patterns. Longer passwords with diverse character types score higher.',
  },
  {
    heading: 'Is my password sent to a server?',
    headingId: 'is-my-password-sent-to-a-server',
    answer:
      'No, all analysis happens locally in your browser for maximum privacy. Your password never leaves your device.',
  },
  {
    heading: 'What makes a password weak?',
    headingId: 'what-makes-a-password-weak',
    answer:
      'Common weaknesses include short length, lack of character variety, dictionary words, personal information, keyboard patterns, and password reuse.',
  },
  {
    heading: 'What is a passphrase?',
    headingId: 'what-is-a-passphrase',
    answer:
      'A passphrase is a sequence of random words that is easier to remember but still highly secure. It leverages length over complexity.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
