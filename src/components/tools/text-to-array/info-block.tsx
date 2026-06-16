import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the Text to Array Converter Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="about-text-to-array-converter">
          About Text to Array Converter
        </h2>
        <p className="mb-4">
          The Text to Array Converter is a utility tool that helps developers convert multiline text into various array
          and object formats for different programming languages. This tool is especially useful for quickly
          transforming lists, comma-separated values, or any line-based data into structured arrays for your code.
        </p>
        <p className="mb-4">
          All conversion happens directly in your browser – your text is never sent to a server, ensuring privacy and
          security when working with sensitive data.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="how-to-use-this-tool">
          How to Use This Tool
        </h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Enter Your Text:</strong> Type or paste your multiline text into the input area. Each line will
            become an element in the resulting array.
          </li>
          <li>
            <strong>Configure Processing Options:</strong> Choose whether to trim whitespace from each line and whether
            to remove empty lines from the input.
          </li>
          <li>
            <strong>Select Output Format:</strong> Choose the programming language and format you want to convert to
            (JSON, JavaScript, PHP, or WordPress).
          </li>
          <li>
            <strong>Choose Array Structure:</strong> Pick how you want your data structured:
            <ul className="list-disc pt-2 pl-6">
              <li>
                <strong>Simple:</strong> Just the values in a basic array
              </li>
              <li>
                <strong>Numeric:</strong> Arrays containing both ID and text value
              </li>
              <li>
                <strong>Associative:</strong> Key-value pairs with slugified keys or numeric keys
              </li>
            </ul>
          </li>
          <li>
            <strong>Enable Slugified Keys:</strong> For associative arrays, you can enable this feature to automatically
            generate clean, URL-friendly keys from the line text.
          </li>
          <li>
            <strong>Convert:</strong> Click the “Convert” button to generate your output.
          </li>
          <li>
            <strong>Copy Result:</strong> Use the copy button to copy the result to your clipboard.
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
              {`United States\nCanada\nUnited Kingdom\nAustralia`}
            </pre>
          </div>

          <div>
            <h4 className="mb-2 font-medium" id="output-examples">
              Output Examples:
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium" id="json-simple">
                  JSON (Simple):
                </h5>
                <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
                  {`[\n\t"United States",\n\t"Canada",\n\t"United Kingdom",\n\t"Australia"\n]`}
                </pre>
              </div>

              <div>
                <h5 className="text-sm font-medium" id="javascript-array-associative-with-slugified-keys">
                  JavaScript Array (Associative with Slugified Keys):
                </h5>
                <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
                  {`const textArray = [\n\t{\n\t\t"key": "united_states",\n\t\t"value": "United States"\n\t},\n\t{\n\t\t"key": "canada",\n\t\t"value": "Canada"\n\t},\n\t{\n\t\t"key": "united_kingdom",\n\t\t"value": "United Kingdom"\n\t},\n\t{\n\t\t"key": "australia",\n\t\t"value": "Australia"\n\t}\n];`}
                </pre>
              </div>

              <div>
                <h5 className="text-sm font-medium" id="php-array-numeric">
                  PHP Array (Numeric):
                </h5>
                <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
                  {`<?php\n$data = array(\n\t1 => 'United States',\n\t2 => 'Canada',\n\t3 => 'United Kingdom',\n\t4 => 'Australia'\n);`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-use-this-tool">
          Why Use This Tool
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Convert any line-based text into structured data arrays quickly.</li>
          <li>Transform plain lists into code-ready arrays for immediate use.</li>
          <li>Prepare data from spreadsheets or text files for use in your applications.</li>
          <li>Generate slugified keys automatically for cleaner code and better compatibility.</li>
          <li>Format text data for use in JavaScript, PHP, or WordPress applications.</li>
          <li>Process and clean up text data by trimming whitespace and removing empty lines.</li>
        </ul>
      </section>

      <FAQ>
        <FAQItem heading="What formats can I convert to?" headingId="what-formats-can-i-convert-to">
          <p>Convert text to JSON arrays, JavaScript arrays, PHP arrays, and WordPress-compatible PHP arrays.</p>
        </FAQItem>
        <FAQItem
          heading="What is the difference between array types?"
          headingId="what-is-the-difference-between-array-types"
        >
          <p>
            Simple arrays store values. Numeric arrays add incrementing IDs. Associative arrays create key-value pairs
            with optional slugified keys.
          </p>
        </FAQItem>
        <FAQItem heading="What are slugified keys?" headingId="what-are-slugified-keys">
          <p>
            Slugified keys convert values to URL-friendly format (e.g., &quot;United States&quot; becomes
            &quot;united_states&quot;).
          </p>
        </FAQItem>
        <FAQItem heading="Can I use this for large datasets?" headingId="can-i-use-this-for-large-datasets">
          <p>Yes, all processing happens client-side with no server limits on input size.</p>
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
          . This tool is built with web developers in mind to streamline the process of working with text data in
          different programming environments.
        </p>
      </Credits>
    </div>
  );
}
