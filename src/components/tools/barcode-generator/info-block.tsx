import type { JSX } from 'react';

import { JsonLd } from '@vijayhardaha/schema-builder/react';

import { Credits } from '@/components/tool/ToolCredits';
import { ToolFAQItem, ToolFAQSection } from '@/components/tool/ToolFAQ';
import {
  ToolInfoSection,
  ToolInfoSectionContent,
  ToolInfoSectionHeading,
  ToolInfoSectionList,
} from '@/components/tool/ToolInfoSection';
import { buildFaqPageSchema } from '@/utils/faq';

import { FAQS } from './faqs';

const faqSchemaData = [buildFaqPageSchema('barcode-generator', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Barcode Generator Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-barcode-generator-tool">
          What Is the Barcode Generator Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Barcode Generator</strong> is a free online utility that helps you create industry-standard
            Code128 barcodes for product tracking, inventory management, and logistics applications with high-quality
            output.
          </p>
          <p>
            The Barcode Generator uses the{' '}
            <a
              href="https://www.npmjs.com/package/jsbarcode"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              JsBarcode
            </a>{' '}
            library to render Code128 barcodes. It encodes your alphanumeric input into the Code128 symbology,
            calculating check digits and rendering the barcode pattern as an SVG element for crisp,
            resolution-independent output.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="barcode-generator-features"
          title="Key Features"
          items={[
            'Multiple barcode formats including Code128, Code39, EAN, UPC, ITF, MSI, Pharmacode, and Codabar',
            'SVG-based rendering for crisp, scalable barcode images at any resolution',
            'Instant generation as you type with no button clicks required',
            'Configurable bar width, height, and text visibility and alignment',
            'Complete client-side processing with no server communication',
            'Print-ready SVG output suitable for labels, packaging, and documentation',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-barcode-generator"
          title="Why Use This Tool"
          items={[
            'Produces industry-standard barcodes compatible with retail and logistics scanning systems',
            'Eliminates barcode font and software costs with browser-based generation',
            'Delivers print-quality SVG output suitable for labels, packaging, and documentation',
            'Supports both numeric and alphanumeric encoding for flexible data representation',
            'Operates entirely in-browser for complete data privacy and offline availability',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="barcode-generator-use-cases"
          title="Common Use Cases"
          items={[
            'Generating product barcodes for retail inventory management and point-of-sale systems',
            'Creating asset tracking labels for equipment, tools, and IT hardware',
            'Producing shipping labels with scannable tracking barcodes for logistics',
            'Encoding serial numbers and SKU codes for warehouse management systems',
            'Generating library barcodes for book checkout and catalog management',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="barcode-generator-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
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
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolFAQSection>
        {FAQS.map((item) => (
          <ToolFAQItem key={item.headingId} heading={item.heading} headingId={item.headingId}>
            <p>{item.answer}</p>
          </ToolFAQItem>
        ))}
      </ToolFAQSection>

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
