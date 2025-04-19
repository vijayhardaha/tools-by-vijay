/**
 * Provides information about the Alphabetical Line Sorter tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information
 */
const AlphabeticalLineSorterInfo = () => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Alphabetical Line Sorter</h2>
        <p className="mb-4">
          The Alphabetical Line Sorter tool helps you organize text by sorting lines alphabetically.
          It also provides an option to reverse the sorting order. This tool is useful for text
          organization, data cleanup, and improving readability.
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
                <strong>Reverse Sorting:</strong> Enable this option to reverse the sorting order
                (Z-A).
              </li>
            </ul>
          </li>
          <li>
            <strong>Process Text:</strong> Click the “Process” button to sort the lines
            alphabetically.
          </li>
          <li>
            <strong>Copy Result:</strong> Copy the sorted text to your clipboard for further use.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Example Usage</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium">Input Example:</h4>
            <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
              {`banana\napple\norange`}
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
          <li>Sort text data for better readability and organization.</li>
          <li>Prepare ordered entries for further processing or analysis.</li>
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

export default AlphabeticalLineSorterInfo;
