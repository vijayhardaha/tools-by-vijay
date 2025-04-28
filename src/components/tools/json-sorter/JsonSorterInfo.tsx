import React, { JSX } from "react";

/**
 * Provides information about the JSON Sorter Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information
 */
const JsonSorterInfo: React.FC = (): JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About JSON Sorter</h2>
        <p className="mb-4">
          The JSON Sorter is a developer utility that alphabetically sorts the keys in JSON objects.
          This tool helps maintain consistent ordering in JSON files, making them easier to read,
          compare, and manage in version control systems.
        </p>
        <p className="mb-4">
          All sorting happens directly in your browser – your data is never sent to a server,
          ensuring privacy and security when working with sensitive information.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">How to Use This Tool</h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Enter Your JSON:</strong> Paste valid JSON content into the input area.
          </li>
          <li>
            <strong>Configure Sorting Options:</strong>
            <ul className="list-disc pt-2 pl-6">
              <li>
                <strong>Spare plain arrays:</strong> Keep the original order of simple arrays
                instead of sorting their elements.
              </li>
            </ul>
          </li>
          <li>
            <strong>Sort JSON:</strong> Click the “Sort JSON” button to generate alphabetically
            sorted output.
          </li>
          <li>
            <strong>Copy Result:</strong> Use the copy button to copy the sorted JSON to your
            clipboard.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Example Usage</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium">Input Example:</h4>
            <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
              {`{\n\t"zebra": 1,\n\t"apple": 2,\n\t"colors": ["red", "green", "blue"],\n\t"banana": {\n\t\t"yellow": true,\n\t\t"ripe": false\n\t}\n}`}
            </pre>
          </div>

          <div>
            <h4 className="mb-2 font-medium">Output Example:</h4>
            <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
              {`{\n\t"apple": 2,\n\t"banana": {\n\t\t"ripe": false,\n\t\t"yellow": true\n\t},\n\t"colors": ["red", "green", "blue"],\n\t"zebra": 1\n}`}
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why Use This Tool</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Create consistent JSON formatting for better version control.</li>
          <li>Easily compare JSON structures when keys are in a predictable order.</li>
          <li>Clean up and standardize JSON configuration files.</li>
          <li>Prepare API responses for documentation or testing.</li>
          <li>Improve readability of complex nested JSON structures.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Credits & Source</h3>
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
          . This tool uses{" "}
          <a
            href="https://github.com/ShivrajRath/jsonabc"
            className="font-medium text-pink-500 underline hover:no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            jsonabc
          </a>{" "}
          for JSON sorting functionality.
        </p>
      </section>
    </div>
  );
};

export default JsonSorterInfo;
