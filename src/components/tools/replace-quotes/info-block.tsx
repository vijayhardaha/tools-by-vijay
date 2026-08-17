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

const faqSchemaData = [buildFaqPageSchema('replace-quotes', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Replace Quotes Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-replace-quotes-tool">
          What Is the Replace Quotes Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Replace Quotes</strong> is a free online utility that helps you convert between straight quotes
            and typographically correct curly quotes, ensuring professional typography for publishing or clean code for
            development.
          </p>
          <p>
            The Replace Quotes tool uses pattern matching to identify quotation marks and apostrophes in your text, then
            replaces them according to your selected conversion direction. It handles straight-to-curly and
            curly-to-straight conversions, with optional handling of apostrophes and standalone (unmatched) quotes.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="replace-quotes-features"
          title="Key Features"
          items={[
            'Two conversion directions: straight to curly and curly to straight',
            'Optional apostrophe replacement for typographically correct contractions',
            'Standalone quote handling for unmatched or orphaned quotation marks',
            'Reactive output updates as you type or change conversion options',
            'Multiline text support for document-level quote replacement',
            'Complete client-side processing with zero data transmission',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-replace-quotes"
          title="Why Use This Tool"
          items={[
            'Elevates text quality with professional typographic quotation marks',
            'Ensures consistent quote styling across documents and publications',
            'Prepares text for publishing platforms that require straight quotes for compatibility',
            'Saves hours of manual find-and-replace editing in long documents',
            'Handles edge cases like apostrophes and standalone quotes automatically',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="replace-quotes-use-cases"
          title="Common Use Cases"
          items={[
            'Preparing manuscripts and articles for publication with proper typographic quotes',
            'Converting curly quotes to straight quotes for code compatibility in development',
            'Formatting blog posts and web content with professional typography standards',
            'Cleaning up text pasted from word processors that use inconsistent quote styles',
            'Standardizing quote formatting across large content libraries and CMS imports',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="replace-quotes-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The quote replacement uses regular expressions to identify straight quotes and curly quotes in text. Smart
            detection handles opening vs. closing quote orientation for accurate curly quote replacement. Processing is
            entirely client-side using native JavaScript regex.
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
