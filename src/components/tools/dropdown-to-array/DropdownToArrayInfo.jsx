"use client";

/**
 * Provides information about the Dropdown to Array Converter tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information
 */
const DropdownToArrayInfo = () => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">
          About Dropdown to Array Converter
        </h2>
        <p className="mb-4">
          The Dropdown to Array Converter is a utility tool that helps
          developers convert HTML select/dropdown elements into various array
          and object formats for different programming languages. This tool
          saves time when working with form elements across platforms, allowing
          you to quickly transform dropdown options into usable data structures.
        </p>
        <p className="mb-4">
          All conversion happens directly in your browser – your HTML code is
          never sent to a server, ensuring privacy and security when working
          with sensitive data.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          How to Use This Tool
        </h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Paste Your HTML:</strong> Copy and paste your HTML select
            element with options into the input area. You can paste a complete
            select element or just the option tags.
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
                <strong>Simple:</strong> Just the text values in an array
              </li>
              <li>
                <strong>Numeric:</strong> Arrays containing both value and text
              </li>
              <li>
                <strong>Associative:</strong> Object/array with value as key and
                text as value
              </li>
            </ul>
          </li>
          <li>
            <strong>Convert:</strong> Click the "Convert to Array" button to
            generate your output.
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
            <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 dark:bg-gray-800">
              {`<select name="country">
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
  <option value="au">Australia</option>
</select>`}
            </pre>
          </div>

          <div>
            <h4 className="mb-2 font-medium">Output Examples:</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium">JSON (Associative):</h5>
                <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 dark:bg-gray-800">
                  {`{
  "us": "United States",
  "ca": "Canada",
  "uk": "United Kingdom",
  "au": "Australia"
}`}
                </pre>
              </div>

              <div>
                <h5 className="text-sm font-medium">
                  JavaScript Array (Simple):
                </h5>
                <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 dark:bg-gray-800">
                  {`const dropdownArray = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia"
];`}
                </pre>
              </div>

              <div>
                <h5 className="text-sm font-medium">
                  PHP Array (Associative):
                </h5>
                <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 dark:bg-gray-800">
                  {`<?php
$dropdown_array = [
  'us' => 'United States',
  'ca' => 'Canada',
  'uk' => 'United Kingdom',
  'au' => 'Australia'
];`}
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
            Quickly convert HTML dropdowns to usable data structures for your
            code.
          </li>
          <li>Save time when migrating between platforms or languages.</li>
          <li>
            Easily format data for use in JavaScript, PHP, or WordPress
            applications.
          </li>
          <li>
            Transform user interface elements directly into data structures for
            API integration.
          </li>
          <li>
            Generate WordPress-ready select option arrays with proper
            formatting.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          Credits & Source
        </h3>
        <p>
          Maintained by{" "}
          <strong>
            <a
              href="https://x.com/vijayhardaha"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-400 underline"
            >
              Vijay Hardaha
            </a>
          </strong>
          . This tool is built with web developers in mind to streamline the
          process of working with dropdown menus across different programming
          environments.
        </p>
      </section>
    </div>
  );
};

export default DropdownToArrayInfo;
