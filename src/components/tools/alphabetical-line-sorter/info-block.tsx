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

const faqSchemaData = [buildFaqPageSchema('alphabetical-line-sorter', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Alphabetical Line Sorter Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-alphabetical-line-sorter-tool">
          What Is the Alphabetical Line Sorter Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Alphabetical Line Sorter</strong> is a free online utility that helps you organize text lines
            alphabetically, numerically, or in reverse order to efficiently manage lists, logs, and data sets with
            configurable sorting options.
          </p>
          <p>
            The Alphabetical Line Sorter splits input text into individual lines, optionally removes duplicates, trims
            whitespace, filters empty lines, then sorts using locale-aware comparison (standard) or byte-order
            comparison (ASCII). Results can be displayed in ascending or descending order. All processing is reactive
            and client-side.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="alphabetical-line-sorter-features"
          title="Key Features"
          items={[
            'Locale-aware alphabetical sorting with proper handling of accented characters',
            'ASCII byte-order sorting for precise, predictable ordering',
            'Reverse sort toggle for descending order (Z-A) in any mode',
            'Optional duplicate removal before sorting for clean output',
            'Reactive output updating as you type or change options',
            'Complete client-side processing with zero data transfer',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-alphabetical-line-sorter"
          title="Why Use This Tool"
          items={[
            'Organizes disorganized lists into readable, structured formats instantly',
            'Supports international character sets with locale-aware comparison algorithms',
            'Saves hours of manual list organization for data processing workflows',
            'Improves data accuracy by making duplicates and anomalies visible',
            'Protects sensitive information with fully local browser processing',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="alphabetical-line-sorter-use-cases"
          title="Common Use Cases"
          items={[
            'Sorting product lists, name directories, and customer databases alphabetically',
            'Organizing log files and error reports for easier analysis and pattern identification',
            'Preparing sorted data for import into spreadsheets and database systems',
            'Sorting bibliography entries and reference lists for academic publications',
            'Ordering configuration files and property lists for consistent formatting',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="alphabetical-line-sorter-technical-details">
          Technical Details
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The tool uses native JavaScript string comparison methods. Standard mode uses localeCompare() for
            locale-aware comparison that correctly handles accented characters. ASCII mode uses the default JavaScript
            sort() with byte-order comparison for predictable ordering. The deduplication uses Set-based lookup for
            efficiency.
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
