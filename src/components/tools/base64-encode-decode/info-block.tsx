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

const faqSchemaData = [buildFaqPageSchema('base64-encode-decode', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Base64 Encoder / Decoder Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-base64-encode-decode-tool">
          What Is the Base64 Encoder / Decoder Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Base64 Encoder / Decoder</strong> is a free online utility that helps you convert text or data
            to Base64 format and back, essential for embedding images in CSS/HTML, transmitting binary data via
            text-based protocols, and API development.
          </p>
          <p>
            The Base64 Encoder/Decoder uses native browser functions - btoa() for encoding (binary to ASCII) and atob()
            for decoding (ASCII to binary). Encoding converts binary data into a 64-character ASCII subset safe for
            text-based transmission. Decoding reverses the process to retrieve the original data.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="base64-encode-decode-features"
          title="Key Features"
          items={[
            'Two-way encoding and decoding with mode toggle for flexible operation',
            'Native browser API integration for reliable, standards-compliant conversion',
            'Real-time output updates as you type or switch modes',
            'Error handling for invalid Base64 input during decoding',
            'One-click copy for immediate use in code and configuration',
            'Complete client-side processing with zero data transmission',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-base64-encode-decode"
          title="Why Use This Tool"
          items={[
            'Enables safe embedding of binary data in JSON, XML, HTML, and text-based protocols',
            'Supports image embedding directly in CSS and HTML without external file references',
            'Facilitates binary data transmission through APIs and messaging systems',
            'Helps debug and inspect Base64-encoded data in development workflows',
            'Processes entirely in-browser with no server communication',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="base64-encode-decode-use-cases"
          title="Common Use Cases"
          items={[
            'Embedding small images directly in CSS as data URIs for faster page loads',
            'Encoding binary data for transmission in JSON API requests and responses',
            'Converting file content for storage in text-based databases and configuration files',
            'Debugging Base64-encoded data from email attachments and web services',
            'Preparing data for Basic Authentication headers and token encoding',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="base64-encode-decode-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            This tool uses the native browser functions btoa() and atob(), which are part of the Window API available in
            all modern browsers. btoa() converts binary strings to Base64 ASCII, while atob() reverses the process. The
            tool handles Unicode strings properly by ensuring correct character encoding before conversion.
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
