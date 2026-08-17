import type { JSX } from 'react';

import { JsonLd } from '@vijayhardaha/schema-builder/react';

import { ToolCreditsSection } from '@/components/tool/ToolCredits';
import { ToolFAQItem, ToolFAQSection } from '@/components/tool/ToolFAQ';
import {
  ToolInfoSection,
  ToolInfoSectionContent,
  ToolInfoSectionHeading,
  ToolInfoSectionList,
} from '@/components/tool/ToolInfoSection';
import { buildFaqPageSchema } from '@/utils/faq';

import { FAQS } from './faqs';

const faqSchemaData = [buildFaqPageSchema('qrcode-generator', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the QR Code Generator Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-qrcode-generator-tool">
          What Is the QR Code Generator Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>QR Code Generator</strong> is a free online utility that helps you generate high-resolution QR
            codes from URLs, text, or any data, creating scannable codes for marketing, authentication, and information
            sharing.
          </p>
          <p>
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
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="qrcode-generator-features"
          title="Key Features"
          items={[
            'QR code generation from any text, URL, or data input',
            'Customizable size from 128px to 512px via slider control',
            'Error correction level selection (Low, Medium, Quartile, High)',
            'Canvas-based generation for crisp output at any resolution',
            'Downloadable QR code image for use in print and digital materials',
            'Instant generation with no server communication required',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-qrcode-generator"
          title="Why Use This Tool"
          items={[
            'Provides quick access to websites, contact info, and resources via smartphone scanning',
            'Enhances marketing materials and product packaging with interactive digital links',
            'Eliminates manual URL entry errors with scannable QR code convenience',
            'Supports multiple data types from URLs to plain text and contact information',
            'Delivers professional-quality output suitable for both digital and print use',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="qrcode-generator-use-cases"
          title="Common Use Cases"
          items={[
            'Adding scannable links to business cards, flyers, and print advertisements',
            'Providing quick access to restaurant menus, event details, and product information',
            'Creating QR codes for Wi-Fi network sharing and contactless check-ins',
            'Embedding QR codes in email signatures and digital business cards',
            'Generating QR codes for authentication flows and two-factor enrollment',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="qrcode-generator-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
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
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolFAQSection>
        {FAQS.map((item) => (
          <ToolFAQItem key={item.headingId} heading={item.heading} headingId={item.headingId}>
            <p>{item.answer}</p>
          </ToolFAQItem>
        ))}
      </ToolFAQSection>

      <ToolCreditsSection />
    </div>
  );
}
