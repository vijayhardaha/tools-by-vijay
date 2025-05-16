/**
 * Provides information about the Text Case Changer Tool, including its purpose,
 * usage instructions, examples, and benefits.
 *
 * @component
 * @returns {React.JSX.Element} The rendered component displaying tool information
 */
const TextCaseChangerInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Text Case Changer</h2>
        <p className="mb-4">
          The Text Case Changer tool helps you convert text into various cases such as camelCase,
          snake_case, PascalCase, UPPERCASE, and lowercase. This tool is useful for developers and
          content creators who need consistent text formatting.
        </p>
        <p className="mb-4">
          All processing happens directly in your browser – your text is never sent to a server,
          ensuring privacy and security when working with sensitive data.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">How to Use This Tool</h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Enter Your Text:</strong> Paste or type your text into the input area.
          </li>
          <li>
            <strong>Select Text Case:</strong> Choose the desired text case from the dropdown menu.
          </li>
          <li>
            <strong>Convert:</strong> Click the “Convert” button to change the text case.
          </li>
          <li>
            <strong>Copy Result:</strong> Use the copy button to copy the converted text.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Example Usage</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium">Input Example:</h4>
            <pre className="bg-secondary overflow-x-auto rounded-xl p-4 text-sm">
              {`hello world\nexample text`}
            </pre>
          </div>

          <div>
            <h4 className="mb-2 font-medium">Output Example:</h4>
            <pre className="bg-secondary overflow-x-auto rounded-xl p-4 text-sm">
              {`helloWorld\nexampleText`}
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why Use This Tool</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Quickly convert text into various cases for consistent formatting.</li>
          <li>Save time when working with repetitive text transformations.</li>
          <li>Ensure proper case formatting for programming or content creation.</li>
          <li>Prepare text for use in applications, scripts, or documents.</li>
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
          . This tool is built to simplify the process of converting text into various cases.
        </p>
      </section>
    </div>
  );
};

export default TextCaseChangerInfo;
