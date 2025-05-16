/**
 * Provides information about the Duplicate Line Removal tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {React.JSX.Element} The rendered component displaying tool information
 */
const DuplicateLineRemovalInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Duplicate Line Removal</h2>
        <p className="mb-4">
          The Duplicate Line Removal tool helps you clean up text by removing duplicate lines. It
          also provides options to sort the lines alphabetically, by ASCII values, or leave them
          unsorted. This tool is useful for text processing, data cleanup, and ensuring unique
          entries in lists.
        </p>
        <p className="mb-4">
          All processing happens directly in your browser – your data is never sent to a server,
          ensuring privacy and security when working with sensitive information.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">How to Use This Tool</h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Enter Your Text:</strong> Paste or type your text into the input area.
          </li>
          <li>
            <strong>Configure Options:</strong>
            <ul className="list-disc pt-2 pl-6">
              <li>
                <strong>Type of Sorting:</strong> Choose between no sorting, alphabetical sorting,
                or ASCII sorting.
              </li>
              <li>
                <strong>Reverse Sorting:</strong> Enable this option to reverse the sorting order
                (Z-A or 9-0).
              </li>
            </ul>
          </li>
          <li>
            <strong>Process Text:</strong> Click the “Process” button to remove duplicate lines and
            apply the selected sorting options.
          </li>
          <li>
            <strong>Copy Result:</strong> Copy the processed text to your clipboard for further use.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Example Usage</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium">Input Example:</h4>
            <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
              {`apple\nbanana\napple\norange\nbanana`}
            </pre>
          </div>

          <div>
            <h4 className="mb-2 font-medium">Output Example (Alphabetical Sort):</h4>
            <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
              {`apple\nbanana\norange`}
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why Use This Tool</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Remove duplicate lines from text files or lists.</li>
          <li>Sort text data for better readability and organization.</li>
          <li>Prepare unique entries for further processing or analysis.</li>
          <li>Clean up messy data with minimal effort.</li>
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
          . This tool is designed to simplify text processing tasks.
        </p>
      </section>
    </div>
  );
};

export default DuplicateLineRemovalInfo;
