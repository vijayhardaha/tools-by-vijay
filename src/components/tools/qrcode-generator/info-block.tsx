import type { JSX } from 'react';

import { JsonLd } from '@vijayhardaha/schema-builder/react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
import { faqPageSchema } from '@/utils/faq';

import { qrcodeFaqItems } from './faq';

const faqSchemaData = [faqPageSchema(qrcodeFaqItems)];

/**
 * Comprehensive, SEO-optimized information about the QR Code Generator Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />
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
            href="https://github.com/zpao/qrcode.react"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            qrcode.react
          </a>{' '}
          library to create QR code images from your input text. It generates the QR matrix, applies error correction
          for scan reliability, and renders the result as a canvas element. You can customize the size and error
          correction level, and download the QR code as an image.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="qrcode-generator-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>QR code generation from any text, URL, or data input</li>
          <li>Customizable size from 128px to 512px via slider control</li>
          <li>Error correction level selection (Low, Medium, Quartile, High)</li>
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
            href="https://github.com/zpao/qrcode.react"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            qrcode.react
          </a>{' '}
          library for QR code generation. It creates QR code matrices with configurable error correction levels, then
          renders them to HTML canvas elements. The resulting images can be downloaded as PNG files for use in various
          media.
        </p>
      </section>

      <FAQ>
        {qrcodeFaqItems.map((item) => (
          <FAQItem key={item.headingId} heading={item.heading} headingId={item.headingId}>
            <p>{item.answer}</p>
          </FAQItem>
        ))}
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
