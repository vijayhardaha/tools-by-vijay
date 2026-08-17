import type { JSX } from 'react';

import { JsonLd } from '@vijayhardaha/schema-builder/react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
import { buildFaqPageSchema } from '@/utils/faq';

import { barcodeFaqItems } from './faq';

/**
 * Comprehensive, SEO-optimized information about the Barcode Generator Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
const faqSchemaData = [buildFaqPageSchema('barcode-generator', barcodeFaqItems)];

/**
 * Comprehensive, SEO-optimized information about the Barcode Generator Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />
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
          <li>Multiple barcode formats including Code128, Code39, EAN, UPC, ITF, MSI, Pharmacode, and Codabar</li>
          <li>SVG-based rendering for crisp, scalable barcode images at any resolution</li>
          <li>Instant generation as you type with no button clicks required</li>
          <li>Configurable bar width, height, and text visibility and alignment</li>
          <li>Complete client-side processing with no server communication</li>
          <li>Print-ready SVG output suitable for labels, packaging, and documentation</li>
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
        {barcodeFaqItems.map((item) => (
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
