import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Dropdown to Array Converter Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-dropdown-to-array-tool">
          What Is the Dropdown to Array Converter Tool?
        </h2>
        <p className="mb-4">
          The <strong>Dropdown to Array Converter</strong> is a free online utility that helps you transform HTML select
          dropdown options into structured JSON, JavaScript, PHP, or WordPress arrays, eliminating manual data entry for
          form migration.
        </p>
        <p className="mb-4">
          The Dropdown to Array Converter parses HTML select element markup, extracting option values and display text
          from option tags. It then formats the extracted data into your chosen output format and structure, with
          options for slugified keys and multi-language output.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="dropdown-to-array-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>HTML select element parsing with automatic value and text extraction</li>
          <li>Multi-format output: JSON, JavaScript, PHP, and WordPress arrays</li>
          <li>Three array structures: simple, numeric with IDs, and associative key-value pairs</li>
          <li>Optional slugified key generation for clean associative keys</li>
          <li>WordPress output with __() translation function wrapper</li>
          <li>One-click copy for direct integration into codebases</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-dropdown-to-array">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Eliminates manual transcription of dropdown options during form migration</li>
          <li>Saves development time when converting HTML forms between platforms and frameworks</li>
          <li>Provides WordPress-ready select option arrays with proper internationalization formatting</li>
          <li>Maintains both value and display text relationships from original dropdown options</li>
          <li>Supports multiple output targets from a single HTML input</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="dropdown-to-array-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Migrating HTML forms between different CMS platforms and frameworks</li>
          <li>Converting WordPress select dropdown configurations into PHP array declarations</li>
          <li>Extracting dropdown data from legacy HTML for use in modern JavaScript applications</li>
          <li>Transforming HTML select options into JSON API response formats</li>
          <li>Building reusable dropdown data structures from existing interface components</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="dropdown-to-array-technical-details">
          Technical Details
        </h2>
        <p>
          The parser uses regular expressions to extract option value attributes and text content from HTML option tags.
          It handles both single and double quoted attribute values. Output formatting applies language-specific syntax
          for each target format, with optional slugification for associative keys.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Dropdown to Array Converter is completely free to use with no signup, registration, or usage limits
            required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            <p>
              No, all processing happens locally in your browser. Your data never leaves your device and is not stored
              or logged anywhere.
            </p>
          </p>
        </FAQItem>
        <FAQItem heading="What is a dropdown converter?" headingId="what-is-a-dropdown-converter">
          <p>
            This tool extracts option elements from HTML select dropdowns and converts them into structured arrays for
            JavaScript, PHP, or WordPress.
          </p>
        </FAQItem>
        <FAQItem heading="What HTML format is expected?" headingId="what-html-format-is-expected">
          <p>
            Paste a complete select element or just the option tags. The parser extracts both value and display text.
          </p>
        </FAQItem>
        <FAQItem heading="What output formats are available?" headingId="what-output-formats-are-available">
          <p>Output formats include JSON, JavaScript, PHP, and WordPress arrays with translation function support.</p>
        </FAQItem>
        <FAQItem heading="Can I use this tool offline?" headingId="can-i-use-this-tool-offline">
          <p>
            <p>
              Yes, since all processing happens client-side in your browser, this tool works offline once the page has
              loaded.
            </p>
          </p>
        </FAQItem>
      </FAQ>

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
