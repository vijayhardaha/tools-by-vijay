import React, { JSX } from "react";

/**
 * Provides information about the Shuffle Text Lines Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information
 */
const ShuffleTextLinesInfo: React.FC = (): JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Shuffle Text Lines</h2>
        <p className="mb-4">
          The Shuffle Text Lines tool helps you randomize the order of lines in your text. It is
          useful for creating randomized lists, testing, or simply mixing up content.
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
                <strong>Remove Duplicates:</strong> Enable this option to remove duplicate lines
                before shuffling.
              </li>
              <li>
                <strong>Remove Empty Lines:</strong> Enable this option to exclude empty lines from
                the output.
              </li>
              <li>
                <strong>Trim Lines:</strong> Enable this option to remove leading and trailing
                spaces from each line.
              </li>
            </ul>
          </li>
          <li>
            <strong>Process Text:</strong> Click the “Process” button to shuffle the lines randomly.
          </li>
          <li>
            <strong>Copy Result:</strong> Copy the shuffled text to your clipboard for further use.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Example Usage</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium">Input Example:</h4>
            <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
              {`apple\nbanana\norange`}
            </pre>
          </div>

          <div>
            <h4 className="mb-2 font-medium">Output Example (Shuffled):</h4>
            <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm">
              {`banana\norange\napple`}
            </pre>
          </div>
        </div>
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
          . This tool is designed to be simple and effective, focusing on providing a fast and
          reliable way to shuffle text lines.
        </p>
      </section>
    </div>
  );
};

export default ShuffleTextLinesInfo;
