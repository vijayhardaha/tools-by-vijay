/**
 * Provides information about the Text to PHP Variables Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {React.JSX.Element} The rendered component displaying tool information
 */
const TextToPhpVariablesInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Text to PHP Variables</h2>
        <p className="mb-4">
          The Text to PHP Variables tool helps developers convert multiline text into PHP variable
          declarations. This tool is especially useful for quickly generating PHP code from lists or
          line-based data.
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
            <strong>Enter Your Text:</strong> Type or paste your multiline text into the input area.
            Each line will be converted into a PHP variable.
          </li>
          <li>
            <strong>Select Variable Case:</strong> Choose the naming convention for your variables
            (camelCase, snake_case, or PascalCase).
          </li>
          <li>
            <strong>Generate:</strong> Click the “Generate” button to create the PHP variable
            declarations.
          </li>
          <li>
            <strong>Copy Result:</strong> Use the copy button to copy the generated PHP code to your
            clipboard.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Example Usage</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium">Input Example:</h4>
            <pre className="bg-secondary overflow-x-auto rounded-xl p-4 text-sm">
              {`firstName\nlastName\nemailAddress`}
            </pre>
          </div>

          <div>
            <h4 className="mb-2 font-medium">Output Example:</h4>
            <pre className="bg-secondary overflow-x-auto rounded-xl p-4 text-sm">
              {`$firstName = "";\n$lastName = "";\n$emailAddress = "";`}
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why Use This Tool</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Quickly generate PHP variable declarations from plain text.</li>
          <li>Save time when working with repetitive tasks involving PHP variables.</li>
          <li>Ensure consistent variable naming conventions in your code.</li>
          <li>Prepare data for use in PHP applications or scripts.</li>
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
          . This tool is built to simplify the process of generating PHP variables from text data.
        </p>
      </section>
    </div>
  );
};

export default TextToPhpVariablesInfo;
