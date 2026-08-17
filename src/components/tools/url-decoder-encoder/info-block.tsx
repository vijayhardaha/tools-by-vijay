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

const faqSchemaData = [buildFaqPageSchema('url-decoder-encoder', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the URL Decoder / Encoder Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-url-decoder-encoder-tool">
          What Is the URL Decoder / Encoder Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>URL Decoder / Encoder</strong> is a free online utility that helps you encode or decode URL
            components to ensure special characters are transmitted correctly across browsers, servers, and API
            endpoints.
          </p>
          <p>
            The URL Decoder/Encoder uses native browser functions - encodeURIComponent() for encoding and
            decodeURIComponent() for decoding. Encoding converts special characters (spaces, &amp;, ?, #, etc.) into
            percent-encoded sequences. Decoding reverses percent-encoded sequences back to their original characters.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="url-decoder-encoder-features"
          title="Key Features"
          items={[
            'Two-way encoding and decoding with simple mode toggle',
            'Native browser API integration for standards-compliant conversion',
            'Percent-encoding for all special characters including spaces, symbols, and Unicode',
            'Real-time output updates as you type, paste, or switch modes',
            'Error handling for malformed percent-encoded input during decoding',
            'Complete client-side processing with zero data transmission',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-url-decoder-encoder"
          title="Why Use This Tool"
          items={[
            'Ensures URLs with special characters are correctly transmitted across networks and servers',
            'Prevents broken links and malformed API requests caused by unencoded characters',
            'Helps debug URL encoding issues in web applications and API integrations',
            'Supports international characters and Unicode in URL parameters',
            'Processes entirely in-browser with complete privacy for sensitive URL data',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="url-decoder-encoder-use-cases"
          title="Common Use Cases"
          items={[
            'Encoding query string parameters for API requests to prevent parsing errors',
            'Decoding percent-encoded URLs from web server logs for readability',
            'Preparing user-generated content for safe URL inclusion in web applications',
            'Debugging URL encoding issues in form submissions and redirect handling',
            'Converting international characters to percent-encoded format for URL compatibility',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="url-decoder-encoder-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            This tool uses the native browser functions encodeURIComponent() and decodeURIComponent(). Unlike
            encodeURI(), which preserves URL structure characters, encodeURIComponent() encodes ALL special characters,
            making it suitable for encoding individual query parameters and URL components.
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
