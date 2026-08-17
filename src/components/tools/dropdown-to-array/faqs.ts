import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Dropdown to Array Converter tool.
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
      'Yes, the Dropdown to Array Converter is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'What is a dropdown converter?',
    headingId: 'what-is-a-dropdown-converter',
    answer:
      'This tool extracts option elements from HTML select dropdowns and converts them into structured arrays for JavaScript, PHP, or WordPress.',
  },
  {
    heading: 'What HTML format is expected?',
    headingId: 'what-html-format-is-expected',
    answer: 'Paste a complete select element or just the option tags. The parser extracts both value and display text.',
  },
  {
    heading: 'What output formats are available?',
    headingId: 'what-output-formats-are-available',
    answer: 'Output formats include JSON, JavaScript, PHP, and WordPress arrays with translation function support.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
