import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Barcode Generator Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-barcode-generator-tool">
          What Is the Barcode Generator Tool?
        </h2>
        <p className="mb-4">
          The <strong>Barcode Generator</strong> is a free online utility that helps you create industry-standard
          Code128 barcodes for product tracking, inventory management, and logistics applications with high-quality
          output.
        </p>
        <p className="mb-4">
          The Barcode Generator uses the{' '}
          <a
            href="https://www.npmjs.com/package/jsbarcode"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            JsBarcode
          </a>{' '}
          library to render Code128 barcodes. It encodes your alphanumeric input into the Code128 symbology, calculating
          check digits and rendering the barcode pattern as an SVG element for crisp, resolution-independent output.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="barcode-generator-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Code128 barcode generation supporting full alphanumeric input</li>
          <li>SVG-based rendering for crisp, scalable barcode images at any resolution</li>
          <li>Instant generation as you type with no button clicks required</li>
          <li>Downloadable barcode for print and digital integration</li>
          <li>Complete client-side processing with no server communication</li>
          <li>One-click copy for immediate use in documents and labels</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-barcode-generator">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Produces industry-standard barcodes compatible with retail and logistics scanning systems</li>
          <li>Eliminates barcode font and software costs with browser-based generation</li>
          <li>Delivers print-quality SVG output suitable for labels, packaging, and documentation</li>
          <li>Supports both numeric and alphanumeric encoding for flexible data representation</li>
          <li>Operates entirely in-browser for complete data privacy and offline availability</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="barcode-generator-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Generating product barcodes for retail inventory management and point-of-sale systems</li>
          <li>Creating asset tracking labels for equipment, tools, and IT hardware</li>
          <li>Producing shipping labels with scannable tracking barcodes for logistics</li>
          <li>Encoding serial numbers and SKU codes for warehouse management systems</li>
          <li>Generating library barcodes for book checkout and catalog management</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="barcode-generator-technical-details">
          Technical Details
        </h2>
        <p>
          This tool uses the{' '}
          <a
            href="https://www.npmjs.com/package/jsbarcode"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            JsBarcode
          </a>{' '}
          library for SVG-based barcode rendering. Code128 is a high-density linear barcode symbology that encodes the
          full ASCII character set. The library generates the barcode pattern, calculates the check digit, and renders
          the result as a clean, scalable SVG element.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Barcode Generator is completely free to use with no signup, registration, or usage limits required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            <p>
              No, all processing happens locally in your browser. Your data never leaves your device and is not stored
              or logged anywhere.
            </p>
          </p>
        </FAQItem>
        <FAQItem heading="What barcode formats are supported?" headingId="what-barcode-formats-are-supported">
          <p>
            This tool generates Code128 barcodes, one of the most widely used formats supporting alphanumeric data for
            logistics and inventory.
          </p>
        </FAQItem>
        <FAQItem heading="What can I encode?" headingId="what-can-i-encode">
          <p>Encode any alphanumeric text like product SKUs, serial numbers, tracking IDs, or inventory codes.</p>
        </FAQItem>
        <FAQItem heading="How do I use the generated barcode?" headingId="how-do-i-use-the-generated-barcode">
          <p>
            The tool generates a barcode image URL you can display on web pages, print on labels, or use in inventory
            systems.
          </p>
        </FAQItem>
        <FAQItem heading="Can I use this tool offline?" headingId="can-i-use-this-tool-offline">
          <p>
            <p>
              Yes, since all processing happens client-side in your browser, this tool works offline once the page has
              loaded.
            </p>
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
