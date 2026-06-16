import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Alphabetical Line Sorter Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-alphabetical-line-sorter-tool">
          What Is the Alphabetical Line Sorter Tool?
        </h2>
        <p className="mb-4">
          The <strong>Alphabetical Line Sorter</strong> is a free online utility that helps you organize text lines
          alphabetically, numerically, or in reverse order to efficiently manage lists, logs, and data sets with
          configurable sorting options.
        </p>
        <p className="mb-4">
          The Alphabetical Line Sorter splits input text into individual lines, optionally removes duplicates, trims
          whitespace, filters empty lines, then sorts using locale-aware comparison (standard) or byte-order comparison
          (ASCII). Results can be displayed in ascending or descending order. All processing is reactive and
          client-side.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="alphabetical-line-sorter-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Locale-aware alphabetical sorting with proper handling of accented characters</li>
          <li>ASCII byte-order sorting for precise, predictable ordering</li>
          <li>Reverse sort toggle for descending order (Z-A) in any mode</li>
          <li>Optional duplicate removal before sorting for clean output</li>
          <li>Reactive output updating as you type or change options</li>
          <li>Complete client-side processing with zero data transfer</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-alphabetical-line-sorter">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Organizes disorganized lists into readable, structured formats instantly</li>
          <li>Supports international character sets with locale-aware comparison algorithms</li>
          <li>Saves hours of manual list organization for data processing workflows</li>
          <li>Improves data accuracy by making duplicates and anomalies visible</li>
          <li>Protects sensitive information with fully local browser processing</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="alphabetical-line-sorter-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Sorting product lists, name directories, and customer databases alphabetically</li>
          <li>Organizing log files and error reports for easier analysis and pattern identification</li>
          <li>Preparing sorted data for import into spreadsheets and database systems</li>
          <li>Sorting bibliography entries and reference lists for academic publications</li>
          <li>Ordering configuration files and property lists for consistent formatting</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="alphabetical-line-sorter-technical-details">
          Technical Details
        </h2>
        <p>
          The tool uses native JavaScript string comparison methods. Standard mode uses localeCompare() for locale-aware
          comparison that correctly handles accented characters. ASCII mode uses the default JavaScript sort() with
          byte-order comparison for predictable ordering. The deduplication uses Set-based lookup for efficiency.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Alphabetical Line Sorter is completely free to use with no signup, registration, or usage limits
            required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            No, all processing happens locally in your browser. Your data never leaves your device and is not stored or
            logged anywhere.
          </p>
        </FAQItem>
        <FAQItem heading="What is alphabetical sorting?" headingId="what-is-alphabetical-sorting">
          <p>Lines are arranged in A-Z or Z-A order, useful for organizing lists and cleaning up data.</p>
        </FAQItem>
        <FAQItem heading="Standard vs ASCII sorting?" headingId="standard-vs-ascii-sorting">
          <p>
            Standard uses locale-aware comparison for correct handling of accented characters. ASCII uses byte-order
            comparison.
          </p>
        </FAQItem>
        <FAQItem heading="Can it remove duplicates?" headingId="can-it-remove-duplicates">
          <p>Yes, there is an option to remove duplicate lines before sorting.</p>
        </FAQItem>
        <FAQItem heading="Can I use this tool offline?" headingId="can-i-use-this-tool-offline">
          <p>
            Yes, since all processing happens client-side in your browser, this tool works offline once the page has
            loaded.
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
