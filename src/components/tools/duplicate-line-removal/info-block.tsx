import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the Duplicate Line Removal tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="about-duplicate-line-removal">
          About Duplicate Line Removal
        </h2>
        <p className="mb-4">
          The Duplicate Line Removal tool helps you clean up text by removing duplicate lines. It also provides options
          to sort the lines alphabetically, by ASCII values, or leave them unsorted. This tool is useful for text
          processing, data cleanup, and ensuring unique entries in lists.
        </p>
        <p className="mb-4">
          All processing happens directly in your browser – your data is never sent to a server, ensuring privacy and
          security when working with sensitive information.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="how-to-use-this-tool">
          How to Use This Tool
        </h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Enter Your Text:</strong> Paste or type your text into the input area.
          </li>
          <li>
            <strong>Configure Options:</strong>
            <ul className="list-disc pt-2 pl-6">
              <li>
                <strong>Type of Sorting:</strong> Choose between no sorting, alphabetical sorting, or ASCII sorting.
              </li>
              <li>
                <strong>Reverse Sorting:</strong> Enable this option to reverse the sorting order (Z-A or 9-0).
              </li>
            </ul>
          </li>
          <li>
            <strong>Process Text:</strong> Click the “Process” button to remove duplicate lines and apply the selected
            sorting options.
          </li>
          <li>
            <strong>Copy Result:</strong> Copy the processed text to your clipboard for further use.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="example-usage">
          Example Usage
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium" id="input-example">
              Input Example:
            </h4>
            <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
              {`apple\nbanana\napple\norange\nbanana`}
            </pre>
          </div>

          <div>
            <h4 className="mb-2 font-medium" id="output-example-alphabetical-sort">
              Output Example (Alphabetical Sort):
            </h4>
            <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">{`apple\nbanana\norange`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-use-this-tool">
          Why Use This Tool
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Remove duplicate lines from text files or lists.</li>
          <li>Sort text data for better readability and organization.</li>
          <li>Prepare unique entries for further processing or analysis.</li>
          <li>Clean up messy data with minimal effort.</li>
        </ul>
      </section>

      <FAQ>
        <FAQItem heading="How are duplicates detected?" headingId="how-are-duplicates-detected">
          <p>Lines are compared after trimming whitespace. Identical lines after trimming are considered duplicates.</p>
        </FAQItem>
        <FAQItem heading="What sorting options are available?" headingId="what-sorting-options-are-available">
          <p>No sorting, Alphabetical (locale-aware), or ASCII (byte-order) sorting after removing duplicates.</p>
        </FAQItem>
        <FAQItem heading="Can I reverse sort order?" headingId="can-i-reverse-sort-order">
          <p>Yes, the Reverse Sorting option reverses the order for any selected sort type.</p>
        </FAQItem>
        <FAQItem heading="Is my data modified?" headingId="is-my-data-modified">
          <p>No, processing happens in your browser and nothing is stored. Original data remains unchanged.</p>
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
          . This tool is designed to simplify text processing tasks.
        </p>
      </Credits>
    </div>
  );
}
