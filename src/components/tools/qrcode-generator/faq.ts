import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the QR Code Generator tool.
 *
 * Single source of truth — used both to render the FAQ section and to build
 * the FAQPage schema markup.
 *
 * @type {ToolFaqItem[]}
 */
export const qrcodeFaqItems: ToolFaqItem[] = [
  {
    heading: 'Is this tool free to use?',
    headingId: 'is-this-tool-free',
    answer:
      'Yes, the QR Code Generator is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'What is a QR code?',
    headingId: 'what-is-a-qr-code',
    answer:
      'A QR code (Quick Response) is a two-dimensional barcode that stores data like URLs or text. It can be scanned by smartphones for quick access.',
  },
  {
    heading: 'What data can be encoded?',
    headingId: 'what-data-can-be-encoded',
    answer:
      'QR codes can store URLs, text, phone numbers, emails, and more. This tool supports encoding text or URL data.',
  },
  {
    heading: 'What is the error correction level?',
    headingId: 'what-is-the-error-correction-level',
    answer:
      'The error correction level controls how much damage a QR code can survive and still scan. Higher levels (Q, H) are more resilient but produce denser codes.',
  },
  {
    heading: 'How do I change the size?',
    headingId: 'how-do-i-change-the-size',
    answer: 'Use the slider to adjust from 128px to 512px. Larger codes are easier to scan from a distance.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
