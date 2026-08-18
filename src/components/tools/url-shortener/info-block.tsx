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

const faqSchemaData = [buildFaqPageSchema('url-shortener', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the URL Shortener Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-url-shortener-tool">What Is the URL Shortener Tool?</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>URL Shortener</strong> is a free online utility that helps you convert long URLs into short,
            manageable links using the URLfy API, perfect for social media, SMS marketing, and clean campaign URLs.
          </p>
          <p>
            The URL Shortener sends each valid URL to the{' '}
            <a
              href="https://www.urlfy.org/"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              URLfy
            </a>{' '}
            API, which generates a short redirect link. URLs are validated before processing to ensure they include
            proper protocol prefixes (http:// or https://). Invalid URLs are reported with clear error messages. The
            tool processes all valid URLs simultaneously.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="url-shortener-features"
          title="Key Features"
          items={[
            'Bulk URL shortening with batch processing of multiple links simultaneously',
            'URL validation to ensure only properly formatted web addresses are processed',
            'URLfy API integration for reliable short link generation',
            'Individual copy buttons for each shortened URL',
            'Copy All button for bulk copying of all valid results',
            'Clickable shortened links for immediate testing and verification',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-url-shortener"
          title="Why Use This Tool"
          items={[
            'Creates clean, shareable links optimized for character-limited platforms like Twitter and SMS',
            'Reduces visual clutter in marketing materials and printed communications',
            'Provides professional-looking links for brand presentations and campaign materials',
            'Processes multiple URLs simultaneously for time-saving bulk operations',
            'Validates URLs before processing to prevent errors and wasted API calls',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="url-shortener-use-cases"
          title="Common Use Cases"
          items={[
            'Shortening links for social media posts with character limitations on Twitter and LinkedIn',
            'Creating clean SMS marketing links from long tracking URLs and affiliate links',
            'Preparing shortened URLs for print materials, business cards, and billboards',
            'Bulk processing of marketing campaign URLs for email newsletters',
            'Generating short links for QR codes from long destination URLs',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="url-shortener-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            This tool uses the{' '}
            <a
              href="https://www.urlfy.org/api-doc"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              URLfy
            </a>{' '}
            RESTful API for URL shortening and the{' '}
            <a
              href="https://www.npmjs.com/package/valid-url"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              valid-url
            </a>{' '}
            npm package for URL validation. Each URL is validated for proper formatting, then sent to URLfy&apos;s{' '}
            <code className="bg-muted rounded px-1 font-medium text-pink-500">POST /api/v1/shorten</code> endpoint to
            generate a shortened redirect link. The tool processes one URL per line in the input, handling each
            independently.
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
