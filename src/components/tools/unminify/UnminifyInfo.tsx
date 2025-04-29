/**
 * Provides information about the Unminify Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information.
 */
const UnminifyInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Unminify Tool</h2>
        <p className="mb-4">
          The Unminify Tool is an online utility designed to make minified or obfuscated code
          readable and pretty. It supports JavaScript, CSS, HTML, XML, and JSON code.
        </p>
        <p className="mb-4">
          We use the{" "}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">
            Prettier
          </code>{" "}
          package under the hood, which provides powerful and configurable unminification
          capabilities. With our tool, you can customize the formatting to suit your specific needs,
          whether you’re working on a small project or a large application.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why You Should Use an Unminify Tool</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Makes minified or obfuscated code readable and easier to debug</li>
          <li>Improves code maintainability by formatting it in a structured way</li>
          <li>Supports multiple file types, including JavaScript, CSS, HTML, XML, and JSON</li>
          <li>Helps developers understand third-party or legacy code</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">How to Use This Tool</h3>
        <ol className="list-inside list-decimal space-y-1 pl-4">
          <li>Paste your minified or obfuscated code into the input box</li>
          <li>Click the “Unminify” button to process your code</li>
          <li>Copy the unminified output using the “Copy to Clipboard” button</li>
        </ol>
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
          . This tool uses the open-source library{" "}
          <a
            href="https://prettier.io/"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            Prettier
          </a>{" "}
          for unminification.
        </p>
      </section>
    </div>
  );
};

export default UnminifyInfo;
