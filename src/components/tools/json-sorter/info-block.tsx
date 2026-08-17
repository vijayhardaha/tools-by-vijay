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
            The JSON Sorter parses your JSON input using JSON.parse, then recursively sorts all object keys
            alphabetically using the{' '}
            <a
              href="https://github.com/ShivrajRath/jsonabc"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              jsonabc
            </a>{' '}
            library. Nested objects are sorted at every level, while array elements can optionally be preserved in their
            original order with the spare plain arrays option.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="json-sorter-features"
          title="Key Features"
          items={[
            'Alphabetical sorting of JSON object keys at all nesting levels',
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
            This tool uses the{' '}
            <a
              href="https://github.com/ShivrajRath/jsonabc"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              jsonabc
            </a>{' '}
            npm package for JSON key sorting. The library recursively traverses JSON objects, collecting and
            alphabetically sorting keys at each level. It handles nested objects, arrays of objects, and mixed data
            types while preserving all values and data integrity.
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
