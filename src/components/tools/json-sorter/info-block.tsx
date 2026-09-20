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

const faqSchemaData = [buildFaqPageSchema('json-sorter', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the JSON Sorter Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-json-sorter-tool">What Is the JSON Sorter Tool?</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>JSON Sorter</strong> is a free online utility that helps you alphabetically sort JSON object
            keys to make complex data structures readable, perfect for debugging API responses, managing configuration
            files, and reducing merge conflicts.
          </p>
          <p>
            The JSON Sorter parses your JSON input using JSON.parse, then recursively sorts all object keys at every
            nesting level. You can choose between two comparison methods and sort in either direction:{' '}
            <strong>Alphabetical</strong> ignores letter case and reads numbers naturally, so <code>apple</code> and{' '}
            <code>Apple</code> sort together and <code>2</code> comes before <code>10</code>. <strong>ASCII</strong>{' '}
            compares raw character codes, so <code>10</code> comes before <code>2</code> and uppercase letters come
            before lowercase ones. Sort order toggles between A-Z and Z-A.
          </p>
          <p>Array elements can optionally be preserved in their original order with the spare plain arrays option.</p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="json-sorter-features"
          title="Key Features"
          items={[
            'Choose between Alphabetical and ASCII key comparison',
            'Sort ascending (A-Z) or descending (Z-A) with a single toggle',
            'Sorting applied recursively to JSON object keys at all nesting levels',
            'Optional plain array preservation to maintain meaningful element order',
            'Pretty-printed output with proper indentation for readability',
            'Error handling for invalid JSON input with clear error messages',
            'One-click copy for immediate use in code and configuration files',
            'Client-side processing with no data transmission',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-json-sorter"
          title="Why Use This Tool"
          items={[
            'Creates consistent, predictable JSON formatting across projects and teams',
            'Reduces version control merge conflicts by standardizing key order',
            'Improves readability of complex nested JSON structures for debugging',
            'Eases comparison of similar JSON files for data validation and testing',
            'Enhances documentation and API response readability for consumers',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="json-sorter-use-cases"
          title="Common Use Cases"
          items={[
            'Standardizing JSON configuration files for consistent version control diffs',
            'Sorting API response JSON for easier debugging during development',
            'Organizing i18n translation files and locale JSON for consistent structure',
            'Formatting JSON output before code review and documentation',
            'Cleaning up JSON data exports for analysis and processing',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="json-sorter-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            This tool runs a small, dependency-free sorting engine in your browser. It recursively traverses JSON
            objects and sorts keys at each level using either a locale-aware, case-insensitive comparator (Alphabetical)
            or a strict UTF-16 code-unit comparator (ASCII). A custom serializer emits the result with four-space
            indentation while preserving the exact key order the sorter produced, including numeric-like keys such as{' '}
            <code>2</code> and <code>10</code>. All values and data integrity are preserved.
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
