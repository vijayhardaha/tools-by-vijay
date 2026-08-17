import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the PX to REM Converter tool.
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
      'Yes, the PX to REM Converter is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'What is the difference between px and rem?',
    headingId: 'what-is-the-difference-between-px-and-rem',
    answer:
      'PX is an absolute pixel unit. REM is relative to the root font size, respecting user preferences for accessibility.',
  },
  {
    heading: 'Why use rem over px?',
    headingId: 'why-use-rem-over-px',
    answer:
      'REM units respect browser font size settings for better accessibility and make maintaining consistent spacing easier.',
  },
  {
    heading: 'What is the default base font size?',
    headingId: 'what-is-the-default-base-font-size',
    answer:
      'The default is 16px, matching the typical browser default. Customize this to match your project design system.',
  },
  {
    heading: 'How to calculate rem manually?',
    headingId: 'how-to-calculate-rem-manually',
    answer: 'Divide the pixel value by the base font size. For example, with 16px base: 32px / 16 = 2rem.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
