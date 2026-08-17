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

const faqSchemaData = [buildFaqPageSchema('dropdown-to-array', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Dropdown to Array Converter Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-dropdown-to-array-tool">
          What Is the Dropdown to Array Converter Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Dropdown to Array Converter</strong> is a free online utility that helps you transform HTML
            select dropdown options into structured JSON, JavaScript, PHP, or WordPress arrays, eliminating manual data
            entry for form migration.
          </p>
          <p>
            The Dropdown to Array Converter parses HTML select element markup, extracting option values and display text
            from option tags. It then formats the extracted data into your chosen output format and structure, with
            options for slugified keys and multi-language output.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="dropdown-to-array-features"
          title="Key Features"
          items={[
            'HTML select element parsing with automatic value and text extraction',
            'Multi-format output: JSON, JavaScript, PHP, and WordPress arrays',
            'Three array structures: simple, numeric with IDs, and associative key-value pairs',
            'Optional slugified key generation for clean associative keys',
            'WordPress output with __() translation function wrapper',
            'One-click copy for direct integration into codebases',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-dropdown-to-array"
          title="Why Use This Tool"
          items={[
            'Eliminates manual transcription of dropdown options during form migration',
            'Saves development time when converting HTML forms between platforms and frameworks',
            'Provides WordPress-ready select option arrays with proper internationalization formatting',
            'Maintains both value and display text relationships from original dropdown options',
            'Supports multiple output targets from a single HTML input',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="dropdown-to-array-use-cases"
          title="Common Use Cases"
          items={[
            'Migrating HTML forms between different CMS platforms and frameworks',
            'Converting WordPress select dropdown configurations into PHP array declarations',
            'Extracting dropdown data from legacy HTML for use in modern JavaScript applications',
            'Transforming HTML select options into JSON API response formats',
            'Building reusable dropdown data structures from existing interface components',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="dropdown-to-array-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The parser uses regular expressions to extract option value attributes and text content from HTML option
            tags. It handles both single and double quoted attribute values. Output formatting applies language-specific
            syntax for each target format, with optional slugification for associative keys.
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
