/**
 * Provides detailed information about the Alphabetical Line Sorter tool,
 * including its purpose, benefits, usage instructions, and practical examples.
 *
 * @component
 * @returns {React.JSX.Element} The rendered component displaying tool information
 */
const AlphabeticalLineSorterInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-10 px-4 md:px-0">
      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Alphabetical Line Sorter Tool: Organize and Sort Your Text Lines with Ease
        </h2>
        <p className="mb-4">
          The <strong>Alphabetical Line Sorter</strong> is a powerful and easy-to-use online tool
          designed to help you quickly organize and sort lines of text alphabetically. Whether
          you're managing data lists, cleaning up text content, or preparing information for further
          processing, this tool provides a simple solution to make your text more structured and
          readable.
        </p>
        <p className="mb-4">
          This tool processes your text entirely <strong>within your web browser</strong>, ensuring
          that your data remains private and secure. There is no need to worry about uploading
          sensitive information to any server — everything happens locally on your device.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Benefits of Using Alphabetical Line Sorter</h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>
            <strong>Improve Data Readability:</strong> Sorted lines make large sets of text easier
            to scan and understand.
          </li>
          <li>
            <strong>Save Time and Effort:</strong> Automate the tedious task of sorting without
            manual copy-pasting or rearranging.
          </li>
          <li>
            <strong>Enhance Data Accuracy:</strong> Quickly identify duplicates, inconsistencies, or
            missing entries when text is ordered logically.
          </li>
          <li>
            <strong>Privacy Assured:</strong> Local browser processing keeps your data safe and
            confidential.
          </li>
          <li>
            <strong>Flexible Sorting Options:</strong> Supports normal alphabetical order (A-Z) and
            reverse order (Z-A) for customized sorting.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">How to Use the Alphabetical Line Sorter Tool</h2>
        <ol className="list-inside list-decimal space-y-2 pl-4">
          <li>
            <strong>Paste or Enter Your Text:</strong> Input the multiline text you want to sort
            into the designated text box.
          </li>
          <li>
            <strong>Choose Sorting Preferences:</strong> Decide if you want the text sorted in
            normal alphabetical order (A-Z) or reverse alphabetical order (Z-A) by toggling the
            reverse sort option.
          </li>
          <li>
            <strong>Click "Process":</strong> Start the sorting operation by clicking the button.
            The tool instantly rearranges your lines accordingly.
          </li>
          <li>
            <strong>Review and Copy:</strong> View the sorted output below and copy it for your
            documents, code, or data processing.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Why You Should Use the Alphabetical Line Sorter</h2>
        <p className="mb-4">
          Sorting text lines alphabetically is a fundamental step in many workflows such as data
          analysis, content management, and software development. By using this tool, you:
        </p>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>
            <strong>Increase Efficiency:</strong> Quickly process large blocks of text that would be
            time-consuming to organize manually.
          </li>
          <li>
            <strong>Maintain Consistency:</strong> Standardize data or text format to ensure
            uniformity across documents or datasets.
          </li>
          <li>
            <strong>Facilitate Further Processing:</strong> Prepare sorted text for easy importing,
            comparison, or integration with other tools and software.
          </li>
          <li>
            <strong>Improve Presentation:</strong> Well-ordered text is easier for others to read,
            interpret, and use.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Example of Alphabetical Sorting</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-1 text-lg font-semibold">Input Example:</h3>
            <pre className="bg-muted overflow-x-auto rounded-xl p-4 font-mono text-sm">
              {`banana\napple\norange`}
            </pre>
          </div>

          <div>
            <h3 className="mb-1 text-lg font-semibold">Output Example (Alphabetical Sort):</h3>
            <pre className="bg-muted overflow-x-auto rounded-xl p-4 font-mono text-sm">
              {`apple\nbanana\norange`}
            </pre>
          </div>

          <div>
            <h3 className="mb-1 text-lg font-semibold">
              Output Example (Reverse Alphabetical Sort):
            </h3>
            <pre className="bg-muted overflow-x-auto rounded-xl p-4 font-mono text-sm">
              {`orange\nbanana\napple`}
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Privacy & Security</h2>
        <p>
          All sorting operations are performed locally within your browser, which means your data
          never leaves your device. This approach guarantees that sensitive or private information
          remains secure at all times.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Credits & Source</h2>
        <p>
          This tool is maintained by{" "}
          <a
            href="https://x.com/vijayhardaha"
            className="font-medium text-pink-500 underline hover:no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vijay Hardaha
          </a>
          . Designed to simplify and speed up everyday text processing tasks, the Alphabetical Line
          Sorter is part of a comprehensive suite of web developer tools.
        </p>
      </section>
    </div>
  );
};

export default AlphabeticalLineSorterInfo;
