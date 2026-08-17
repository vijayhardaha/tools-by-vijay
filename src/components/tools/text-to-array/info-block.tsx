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

const faqSchemaData = [buildFaqPageSchema('text-to-array', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Text to Array Converter Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-text-to-array-tool">
          What Is the Text to Array Converter Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Text to Array Converter</strong> is a free online utility that helps you convert plain text
            lists into structured PHP, JavaScript, JSON, or WordPress arrays with configurable key generation and
            formatting options.
          </p>
          <p>
            The Text to Array Converter parses multiline text input, applies preprocessing options (trimming, empty line
            removal), then formats each line into the selected output format. For associative arrays, it generates keys
            from the text values with optional slugification for clean, URL-friendly keys.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="text-to-array-features"
          title="Key Features"
          items={[
            'Multi-format output: JSON, JavaScript arrays, JavaScript objects, PHP arrays, and WordPress arrays',
            'Three array structures: simple values, numeric with IDs, and associative key-value pairs',
            'Optional slugified key generation for clean, consistent associative array keys',
            'Text preprocessing with trimming and empty line removal options',
            'WordPress output with __() translation function wrapper for internationalization',
            'One-click copy for direct use in code development',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-text-to-array"
          title="Why Use This Tool"
          items={[
            'Eliminates manual array construction for data migration and platform transitions',
            'Saves hours of formatting time when converting between data representation formats',
            'Provides WordPress-ready output with translation function integration',
            'Produces consistent, readable array formatting following language best practices',
            'Supports multiple output targets from a single text input interface',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="text-to-array-use-cases"
          title="Common Use Cases"
          items={[
            'Converting CSV and text exports into structured JSON for API development',
            'Transforming configuration lists into PHP arrays for WordPress theme and plugin development',
            'Generating JavaScript array constants for front-end application development',
            'Creating test data arrays in multiple formats for cross-platform testing',
            'Building dropdown option arrays and select menu data structures for web forms',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="text-to-array-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The tool processes text entirely client-side. It uses{' '}
            <a
              href="https://www.npmjs.com/package/slugify"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              slugify
            </a>{' '}
            and{' '}
            <a
              href="https://www.npmjs.com/package/latinize"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              latinize
            </a>{' '}
            for key generation in associative arrays. Output formatting uses custom JavaScript logic for each target
            language, applying proper syntax, indentation, and language-specific conventions.
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
