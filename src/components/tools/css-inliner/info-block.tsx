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

const faqSchemaData = [buildFaqPageSchema('css-inliner', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the CSS Inliner Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-css-inliner-tool">What Is the CSS Inliner Tool?</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>CSS Inliner</strong> is a free online utility that helps you transform external and internal CSS
            rules into inline HTML styles, essential for email template compatibility across Gmail, Outlook, and other
            email clients.
          </p>
          <p>
            The CSS Inliner combines your HTML and CSS, then uses the{' '}
            <a
              href="https://www.npmjs.com/package/juice"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              juice
            </a>{' '}
            library to apply all style rules directly to each HTML element as inline styles. The result is reformatted
            with{' '}
            <a
              href="https://prettier.io/"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              Prettier
            </a>{' '}
            for readability. This process ensures consistent rendering across email clients that strip external
            stylesheets.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="css-inliner-features"
          title="Key Features"
          items={[
            'Combines external and internal CSS styles into inline HTML attributes',
            'Prettier formatting for clean, readable output HTML',
            'Support for complex CSS selectors including class and element targeting',
            'Preserves existing inline styles while adding computed styles',
            'Client-side and server-side processing options',
            'One-click copy for email template integration',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-css-inliner"
          title="Why Use This Tool"
          items={[
            'Ensures consistent email rendering across all email clients including Gmail and Outlook',
            'Eliminates the need for multiple email versions for different clients',
            'Preserves complex CSS selectors by computing and applying final computed styles',
            'Produces self-contained HTML that renders correctly without external resources',
            'Saves hours of manual inline styling for email template development',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="css-inliner-use-cases"
          title="Common Use Cases"
          items={[
            'Preparing HTML email templates for marketing campaigns and transactional emails',
            'Creating self-contained HTML documents for offline viewing and distribution',
            'Ensuring newsletter compatibility across diverse email clients and devices',
            'Converting existing websites with external CSS into portable HTML snapshots',
            'Building email templates in frameworks that use external CSS during development',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="css-inliner-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            This tool uses the{' '}
            <a
              href="https://www.npmjs.com/package/juice"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              juice
            </a>{' '}
            npm package for CSS inlining combined with{' '}
            <a
              href="https://prettier.io/"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              Prettier
            </a>{' '}
            for output formatting. The juice library parses CSS rules and applies them to matching HTML elements by
            computing the final style for each element and writing it as an inline style attribute. The API runs
            server-side for reliable processing.
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
