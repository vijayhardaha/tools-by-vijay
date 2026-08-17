import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the URL Decoder / Encoder tool.
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
      'Yes, the URL Decoder / Encoder is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'What is URL encoding?',
    headingId: 'what-is-url-encoding',
    answer:
      'URL encoding converts special characters into a format safe for transmission. For example, spaces become %20 and & becomes %26.',
  },
  {
    heading: 'When should I encode a URL?',
    headingId: 'when-should-i-encode-a-url',
    answer:
      'Encode URLs when they contain special characters, spaces, or non-ASCII characters. Common scenarios include query strings and API requests.',
  },
  {
    heading: 'Is URL encoding reversible?',
    headingId: 'is-url-encoding-reversible',
    answer: 'Yes, URL encoding is fully reversible. Encoding followed by decoding returns the original string.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
