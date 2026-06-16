import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Duplicate Line Remover Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-duplicate-line-removal-tool">
          What Is the Duplicate Line Remover Tool?
        </h2>
        <p className="mb-4">
          The <strong>Duplicate Line Remover</strong> is a free online utility that helps you clean your datasets by
          removing repeated lines while maintaining original order and ensuring each entry is unique with configurable
          sorting options.
        </p>
        <p className="mb-4">
          The Duplicate Line Remover processes each line through a Set-based deduplication algorithm. Lines are trimmed
          of whitespace, then compared for equality. After removing duplicates, lines can be sorted alphabetically, by
          ASCII values, or left in their original order. An optional reverse sort is available for descending order.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="duplicate-line-removal-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Efficient duplicate removal preserving original line order or with sorting</li>
          <li>Three sorting options: no sort, alphabetical (locale-aware), and ASCII (byte-order)</li>
          <li>Reverse sort toggle for descending order in any sort mode</li>
          <li>Whitespace trimming before comparison for accurate deduplication</li>
          <li>Instant client-side processing with no data transmission</li>
          <li>Clear and reset options for quick workflow iteration</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-duplicate-line-removal">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Eliminates redundant entries from datasets, lists, and configuration files</li>
          <li>Ensures data integrity by maintaining only unique entries</li>
          <li>Organizes data with flexible sorting options for improved readability</li>
          <li>Accelerates data cleaning workflows that would take hours manually</li>
          <li>Protects sensitive data with fully client-side processing</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="duplicate-line-removal-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Cleaning email lists by removing duplicate addresses before marketing campaigns</li>
          <li>Deduplicating product SKUs, part numbers, and inventory lists</li>
          <li>Removing repeated entries from CSV exports and database dumps</li>
          <li>Cleaning configuration files and environment variable lists</li>
          <li>Preparing unique entries for dropdown menus, selectors, and form options</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="duplicate-line-removal-technical-details">
          Technical Details
        </h2>
        <p>
          The deduplication algorithm uses JavaScript Set objects for O(n) lookup performance. Lines are trimmed of
          surrounding whitespace before comparison to prevent false duplicates from formatting differences. The sorting
          uses either localeCompare for alphabetical ordering or native string comparison for ASCII ordering.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Duplicate Line Remover is completely free to use with no signup, registration, or usage limits
            required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            No, all processing happens locally in your browser. Your data never leaves your device and is not stored or
            logged anywhere.
          </p>
        </FAQItem>
        <FAQItem heading="How are duplicates detected?" headingId="how-are-duplicates-detected">
          <p>Lines are compared after trimming whitespace. Identical lines after trimming are considered duplicates.</p>
        </FAQItem>
        <FAQItem heading="What sorting options are available?" headingId="what-sorting-options-are-available">
          <p>No sorting, Alphabetical (locale-aware), or ASCII (byte-order) sorting after removing duplicates.</p>
        </FAQItem>
        <FAQItem heading="Can I reverse sort order?" headingId="can-i-reverse-sort-order">
          <p>Yes, the Reverse Sorting option reverses the order for any selected sort type.</p>
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
