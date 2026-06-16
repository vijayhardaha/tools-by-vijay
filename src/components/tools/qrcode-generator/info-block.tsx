import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the QR Code Generator Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-qrcode-generator-tool">
          What Is the QR Code Generator Tool?
        </h2>
        <p className="mb-4">
          The <strong>QR Code Generator</strong> is a free online utility that helps you generate high-resolution QR
          codes from URLs, text, or any data, creating scannable codes for marketing, authentication, and information
          sharing.
        </p>
        <p className="mb-4">
          The QR Code Generator uses the{' '}
          <a
            href="https://www.npmjs.com/package/qrcode"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            qrcode
          </a>{' '}
          npm package to create QR code images from your input text. It generates the QR matrix, applies error
          correction for scan reliability, and renders the result as a canvas element. You can customize the size and
          download the QR code as an image.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="qrcode-generator-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>QR code generation from any text, URL, or data input</li>
          <li>Customizable size from 128px to 512px via slider control</li>
          <li>High-quality rendering for reliable smartphone scanning</li>
          <li>Canvas-based generation for crisp output at any resolution</li>
          <li>Downloadable QR code image for use in print and digital materials</li>
          <li>Instant generation with no server communication required</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-qrcode-generator">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Provides quick access to websites, contact info, and resources via smartphone scanning</li>
          <li>Enhances marketing materials and product packaging with interactive digital links</li>
          <li>Eliminates manual URL entry errors with scannable QR code convenience</li>
          <li>Supports multiple data types from URLs to plain text and contact information</li>
          <li>Delivers professional-quality output suitable for both digital and print use</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="qrcode-generator-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Adding scannable links to business cards, flyers, and print advertisements</li>
          <li>Providing quick access to restaurant menus, event details, and product information</li>
          <li>Creating QR codes for Wi-Fi network sharing and contactless check-ins</li>
          <li>Embedding QR codes in email signatures and digital business cards</li>
          <li>Generating QR codes for authentication flows and two-factor enrollment</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="qrcode-generator-technical-details">
          Technical Details
        </h2>
        <p>
          This tool uses the{' '}
          <a
            href="https://www.npmjs.com/package/qrcode"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            qrcode
          </a>{' '}
          npm package for QR code generation. The library creates QR code matrices with configurable error correction
          levels, then renders them to HTML canvas elements. The resulting images can be downloaded as PNG files for use
          in various media.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the QR Code Generator is completely free to use with no signup, registration, or usage limits required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            No, all processing happens locally in your browser. Your data never leaves your device and is not stored or
            logged anywhere.
          </p>
        </FAQItem>
        <FAQItem heading="What is a QR code?" headingId="what-is-a-qr-code">
          <p>
            A QR code (Quick Response) is a two-dimensional barcode that stores data like URLs or text. It can be
            scanned by smartphones for quick access.
          </p>
        </FAQItem>
        <FAQItem heading="What data can be encoded?" headingId="what-data-can-be-encoded">
          <p>
            QR codes can store URLs, text, phone numbers, emails, and more. This tool supports encoding text or URL
            data.
          </p>
        </FAQItem>
        <FAQItem heading="How do I change the size?" headingId="how-do-i-change-the-size">
          <p>Use the slider to adjust from 128px to 512px. Larger codes are easier to scan from a distance.</p>
        </FAQItem>
        <FAQItem heading="Can I use this tool offline?" headingId="can-i-use-this-tool-offline">
          <p>
            Yes, since all processing happens client-side in your browser, this tool works offline once the page has
            loaded.
          </p>
        </FAQItem>
      </FAQ>

      <Credits>
        <p>
          Maintained by{' '}
          <a
            href="https://x.com/vijayhardaha"
            className="font-medium text-pink-500 underline hover:no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vijay Hardaha
          </a>
          . This tool is built with modern web technologies and industry-standard open-source libraries to deliver
          reliable, high-quality results.
        </p>
      </Credits>
    </div>
  );
}
