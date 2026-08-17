import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the Barcode Generator tool.
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
      'Yes, the Barcode Generator is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No, all processing happens locally in your browser. Your data never leaves your device and is not stored or logged anywhere.',
  },
  {
    heading: 'What barcode formats are supported?',
    headingId: 'what-barcode-formats-are-supported',
    answer:
      'This tool supports many popular symbologies, including Code128, Code39, EAN-13, EAN-8, UPC, UPC-E, ITF-14, ITF, MSI, Pharmacode, and Codabar. Code128 is the default and supports full alphanumeric data.',
  },
  {
    heading: 'What can I encode?',
    headingId: 'what-can-i-encode',
    answer: 'Encode any alphanumeric text like product SKUs, serial numbers, tracking IDs, or inventory codes.',
  },
  {
    heading: 'How do I use the generated barcode?',
    headingId: 'how-do-i-use-the-generated-barcode',
    answer:
      'The tool renders the barcode as a canvas element directly in your browser. You can download it as a PNG image, print it on labels, or use it in inventory systems.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes, since all processing happens client-side in your browser, this tool works offline once the page has loaded.',
  },
];
