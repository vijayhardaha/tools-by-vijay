/**
 * Provides information about the Dropdown to Array Converter tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {React.JSX.Element} The rendered component displaying tool information
 */
const DropdownToArrayInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Dropdown to Array Converter</h2>
        <p className="mb-4">
          The Dropdown to Array Converter is a utility tool that helps developers convert HTML
          select/dropdown elements into various array and object formats for different programming
          languages. This tool saves time when working with form elements across platforms, allowing
          you to quickly transform dropdown options into usable data structures.
        </p>
        <p className="mb-4">
          All conversion happens directly in your browser – your HTML code is never sent to a
          server, ensuring privacy and security when working with sensitive data.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">How to Use This Tool</h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Paste Your HTML:</strong> Copy and paste your HTML select element with options
            into the input area. You can paste a complete select element or just the option tags.
          </li>
          <li>
            <strong>Select Output Format:</strong> Choose the programming language and format you
            want to convert to (JSON, JavaScript, PHP, or WordPress).
          </li>
          <li>
            <strong>Choose Array Structure:</strong> Pick how you want your data structured:
            <ul className="list-disc pt-2 pl-6">
              <li>
                <strong>Associative:</strong> Object/array with value as key and text as value
              </li>
              <li>
                <strong>Numeric:</strong> Arrays containing both ID and text value
              </li>
              <li>
                <strong>Simple:</strong> Just the text values in an array
              </li>
            </ul>
          </li>
          <li>
            <strong>Enable Slugified Keys:</strong> Optionally, you can enable this feature to
            automatically generate clean, URL-friendly keys from the option values instead of using
            the raw values, which is especially useful for associative structures.
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
        <h3 className="text-primary mb-4 text-lg font-bold">Example Usage</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium">Input Example:</h4>
            <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
              {`<select name="country">\n<option value="us">United States</option>\n<option value="ca">Canada</option>\n<option value="uk">United Kingdom</option>\n<option value="au">Australia</option>\nselect>`}
            </pre>
          </div>

          <div>
            <h4 className="mb-2 font-medium">Output Examples:</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium">JSON Associative Output:</h5>
                <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
                  {`[\n\t{\n\t\t"key": "us",\n\t\t"value": "United States"\n\t},\n\t{\n\t\t"key": "ca",\n\t\t"value": "Canada"\n\t},\n\t{\n\t\t"key": "uk",\n\t\t"value": "United Kingdom"\n\t},\n\t{\n\t\t"key": "au",\n\t\t"value": "Australia"\n\t}\n]`}
                </pre>
              </div>

              <div>
                <h5 className="text-sm font-medium">
                  JavaScript Array (Associative with Slugified Keys):
                </h5>
                <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
                  {`const dropdownArray = [\n\t{\n\t\t"key": "us",\n\t\t"value": "United States"\n\t},\n\t{\n\t\t"key": "ca",\n\t\t"value": "Canada"\n\t},\n\t{\n\t\t"key": "uk",\n\t\t"value": "United Kingdom"\n\t},\n\t{\n\t\t"key": "au",\n\t\t"value": "Australia"\n\t}\n];`}
                </pre>
              </div>

              <div>
                <h5 className="text-sm font-medium">PHP Array (Simple):</h5>
                <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
                  {`<?php\n$data = array(\n\t'United States',\n\t'Canada',\n\t'United Kingdom',\n\t'Australia'\n);`}
                </pre>
              </div>

              <div>
                <h5 className="text-sm font-medium">WordPress Select Options (Associative):</h5>
                <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
                  {`<?php\n$data = array(\n\t'us' => __( 'United States', 'text-domain' ),\n\t'ca' => __( 'Canada', 'text-domain' ),\n\t'uk' => __( 'United Kingdom', 'text-domain' ),\n\t'au' => __( 'Australia', 'text-domain' )\n);`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why Use This Tool</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Quickly convert HTML dropdowns to usable data structures for your code.</li>
          <li>Save time when migrating between platforms or languages.</li>
          <li>Generate slugified keys automatically for cleaner code and better compatibility.</li>
          <li>Easily format data for use in JavaScript, PHP, or WordPress applications.</li>
          <li>
            Transform user interface elements directly into data structures for API integration.
          </li>
          <li>Generate WordPress-ready select option arrays with proper formatting.</li>
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
          . This tool is built with web developers in mind to streamline the process of working with
          dropdown menus across different programming environments.
        </p>
      </section>
    </div>
  );
};

export default DropdownToArrayInfo;
