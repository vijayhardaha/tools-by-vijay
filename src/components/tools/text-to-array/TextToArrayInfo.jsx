"use client";

/**
 * Provides information about the Text to Array Converter tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information
 */
const TextToArrayInfo = () => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">
          About Text to Array Converter
        </h2>
        <p className="mb-4">
          The Text to Array Converter is a utility tool that helps developers
          convert multiline text into various array and object formats for
          different programming languages. This tool is especially useful for
          quickly transforming lists, comma-separated values, or any line-based
          data into structured arrays for your code.
        </p>
        <p className="mb-4">
          All conversion happens directly in your browser – your text is never
          sent to a server, ensuring privacy and security when working with
          sensitive data.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          How to Use This Tool
        </h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Enter Your Text:</strong> Type or paste your multiline text
            into the input area. Each line will become an element in the
            resulting array.
          </li>
          <li>
            <strong>Configure Processing Options:</strong> Choose whether to
            trim whitespace from each line and whether to remove empty lines
            from the input.
          </li>
          <li>
            <strong>Select Output Format:</strong> Choose the programming
            language and format you want to convert to (JSON, JavaScript, PHP,
            or WordPress).
          </li>
          <li>
            <strong>Choose Array Structure:</strong> Pick how you want your data
            structured:
            <ul className="list-disc pt-2 pl-6">
              <li>
                <strong>Simple:</strong> Just the values in a basic array
              </li>
              <li>
                <strong>Numeric:</strong> Arrays containing both ID and text
                value
              </li>
              <li>
                <strong>Associative:</strong> Key-value pairs with slugified
                keys or numeric keys
              </li>
            </ul>
          </li>
          <li>
            <strong>Enable Slugified Keys:</strong> For associative arrays, you
            can enable this feature to automatically generate clean,
            URL-friendly keys from the line text.
          </li>
          <li>
            <strong>Convert:</strong> Click the “Convert” button to generate
            your output.
          </li>
          <li>
            <strong>Copy Result:</strong> Use the copy button to copy the result
            to your clipboard.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Example Usage</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium">Input Example:</h4>
            <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
              {`United States
Canada
United Kingdom
Australia`}
            </pre>
          </div>

          <div>
            <h4 className="mb-2 font-medium">Output Examples:</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium">JSON (Simple):</h5>
                <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
                  {`[
  "United States",
  "Canada",
  "United Kingdom",
  "Australia"
]`}
                </pre>
              </div>

              <div>
                <h5 className="text-sm font-medium">
                  JavaScript Array (Associative with Slugified Keys):
                </h5>
                <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
                  {`const textArray = [
  {
    "key": "united_states",
    "value": "United States"
  },
  {
    "key": "canada",
    "value": "Canada"
  },
  {
    "key": "united_kingdom",
    "value": "United Kingdom"
  },
  {
    "key": "australia",
    "value": "Australia"
  }
];`}
                </pre>
              </div>

              <div>
                <h5 className="text-sm font-medium">PHP Array (Numeric):</h5>
                <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
                  {`<?php
$data = array(
  1 => 'United States',
  2 => 'Canada',
  3 => 'United Kingdom',
  4 => 'Australia'
);`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          Why Use This Tool
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>
            Convert any line-based text into structured data arrays quickly.
          </li>
          <li>
            Transform plain lists into code-ready arrays for immediate use.
          </li>
          <li>
            Prepare data from spreadsheets or text files for use in your
            applications.
          </li>
          <li>
            Generate slugified keys automatically for cleaner code and better
            compatibility.
          </li>
          <li>
            Format text data for use in JavaScript, PHP, or WordPress
            applications.
          </li>
          <li>
            Process and clean up text data by trimming whitespace and removing
            empty lines.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          Credits & Source
        </h3>
        <p>
          Maintained by{" "}
          <a
            href="https://x.com/vijayhardaha"
            className="font-medium text-pink-500 underline hover:no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vijay Hardaha
          </a>
          . This tool is built with web developers in mind to streamline the
          process of working with text data in different programming
          environments.
        </p>
      </section>
    </div>
  );
};

export default TextToArrayInfo;
