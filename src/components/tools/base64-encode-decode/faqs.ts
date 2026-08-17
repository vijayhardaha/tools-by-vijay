import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Base64 Encoder / Decoder tool.
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
      'Yes, the Base64 Encoder / Decoder is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'What is Base64 encoding?',
    headingId: 'what-is-base64-encoding',
    answer:
      'Base64 encoding converts binary data into ASCII text using 64 printable characters. It is commonly used for transmitting data over media designed to handle text.',
  },
  {
    heading: 'When should I use Base64?',
    headingId: 'when-should-i-use-base64-encoding',
    answer:
      'Base64 is useful when embedding binary data in text formats like JSON, XML, or HTML, sending binary data in email attachments, or storing binary data in databases.',
  },
  {
    heading: 'Is Base64 encoding secure?',
    headingId: 'is-base64-encoding-secure',
    answer:
      'Base64 is not encryption, it is an encoding scheme. It does not provide any security. Use proper encryption like AES if you need to protect your data.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
