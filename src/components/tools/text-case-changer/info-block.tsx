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

const faqSchemaData = [buildFaqPageSchema('text-case-changer', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Text Case Changer Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-text-case-changer-tool">
          What Is the Text Case Changer Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Text Case Changer</strong> is a free online utility that helps you instantly convert text
            between various cases including camelCase, snake_case, PascalCase, UPPERCASE, lowercase, and more for
            programming and content formatting.
          </p>
          <p>
            The Text Case Changer processes your input text through JavaScript string transformation functions. It
            splits text into words, then reassembles them according to your selected case convention. Each word is
            transformed appropriately - capitalized, lowercased, or left as-is - then joined with the correct separator
            for the chosen case.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="text-case-changer-features"
          title="Key Features"
          items={[
            'Support for 8+ case formats: camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, flatcase, UPPERCASE, lowercase, and more',
            'Reactive output updates as you type or change case selection',
            'Multiline text support preserving line structure in output',
            'Client-side processing with zero data transmission for privacy',
            'One-click copy for immediate use in code and content',
            'Clear and reset options for quick workflow iteration',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-text-case-changer"
          title="Why Use This Tool"
          items={[
            'Eliminates manual text reformatting errors in code and documentation',
            'Ensures consistent naming convention adherence across large projects',
            'Speeds up development workflows with instant case conversion',
            'Handles batch processing of multiple lines simultaneously',
            'Supports both developer naming conventions and content formatting needs',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="text-case-changer-use-cases"
          title="Common Use Cases"
          items={[
            'Converting variable names between camelCase and snake_case for cross-language projects',
            'Formatting database column names and API response keys consistently',
            'Preparing content for title case and sentence case formatting in publications',
            'Transforming configuration keys and environment variable names to UPPERCASE',
            'Normalizing user-generated input for consistent data storage and processing',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="text-case-changer-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            All case conversion happens client-side using JavaScript string manipulation. The tool splits input into
            words, applies the selected case transformation rules, and rejoins them with appropriate separators. No
            external libraries are required - all transformations use native JavaScript regular expressions and string
            methods.
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
