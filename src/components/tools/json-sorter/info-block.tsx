import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the JSON Sorter Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-json-sorter-tool">
          What Is the JSON Sorter Tool?
        </h2>
        <p className="mb-4">
          The <strong>JSON Sorter</strong> is a free online utility that helps you alphabetically sort JSON object keys
          to make complex data structures readable, perfect for debugging API responses, managing configuration files,
          and reducing merge conflicts.
        </p>
        <p className="mb-4">
          The JSON Sorter parses your JSON input using JSON.parse, then recursively sorts all object keys alphabetically
          using the{' '}
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
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="json-sorter-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Alphabetical sorting of JSON object keys at all nesting levels</li>
          <li>Optional plain array preservation to maintain meaningful element order</li>
          <li>Pretty-printed output with proper indentation for readability</li>
          <li>Error handling for invalid JSON input with clear error messages</li>
          <li>One-click copy for immediate use in code and configuration files</li>
          <li>Client-side processing with no data transmission</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-json-sorter">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Creates consistent, predictable JSON formatting across projects and teams</li>
          <li>Reduces version control merge conflicts by standardizing key order</li>
          <li>Improves readability of complex nested JSON structures for debugging</li>
          <li>Eases comparison of similar JSON files for data validation and testing</li>
          <li>Enhances documentation and API response readability for consumers</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="json-sorter-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Standardizing JSON configuration files for consistent version control diffs</li>
          <li>Sorting API response JSON for easier debugging during development</li>
          <li>Organizing i18n translation files and locale JSON for consistent structure</li>
          <li>Formatting JSON output before code review and documentation</li>
          <li>Cleaning up JSON data exports for analysis and processing</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="json-sorter-technical-details">
          Technical Details
        </h2>
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
          alphabetically sorting keys at each level. It handles nested objects, arrays of objects, and mixed data types
          while preserving all values and data integrity.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>Yes, the JSON Sorter is completely free to use with no signup, registration, or usage limits required.</p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            <p>
              No, all processing happens locally in your browser. Your data never leaves your device and is not stored
              or logged anywhere.
            </p>
          </p>
        </FAQItem>
        <FAQItem heading="Why sort JSON keys?" headingId="why-sort-json-keys">
          <p>
            Sorting keys alphabetically makes files easier to read, compare, and manage in version control with fewer
            merge conflicts.
          </p>
        </FAQItem>
        <FAQItem heading="Does sorting affect functionality?" headingId="does-sorting-affect-functionality">
          <p>No, JSON object key order does not affect functionality in most modern applications.</p>
        </FAQItem>
        <FAQItem heading="What does spare plain arrays mean?" headingId="what-does-spare-plain-arrays-mean">
          <p>This preserves original array order when element order is meaningful, such as ranked lists.</p>
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
