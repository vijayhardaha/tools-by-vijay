/**
 * Provides information about the HTML Minifier Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {React.JSX.Element} The rendered component displaying tool information
 */
const HtmlMinifierInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About HTML Minifier Tool</h2>
        <p className="mb-4">
          The HTML Minifier Tool is an online utility designed to reduce the size of your HTML files
          by removing unnecessary characters, whitespace, comments, and optimizing the code
          structure. This process, known as minification, helps improve page load times and reduce
          bandwidth usage, resulting in a better user experience and potentially better search
          engine rankings.
        </p>
        <p className="mb-4">
          We use the{" "}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">
            html-minifier-terser
          </code>{" "}
          package under the hood, which provides powerful and configurable HTML minification
          capabilities. With our tool, you can customize the minification process to suit your
          specific needs, whether you’re working on a small website or a large web application.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why You Should Use an HTML Minifier</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Reduces file size, leading to faster page loading and better user experience</li>
          <li>Decreases bandwidth usage, which can save costs on hosting and CDN services</li>
          <li>Improves website performance, which is a factor in search engine rankings</li>
          <li>Removes comments and unnecessary code that might reveal sensitive information</li>
          <li>Makes your code harder to read for humans, adding a small layer of obfuscation</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">How to Use This Tool</h3>
        <ol className="list-inside list-decimal space-y-1 pl-4">
          <li>Paste your HTML code into the input box</li>
          <li>Configure the minification options according to your preferences</li>
          <li>Click the “Minify” button to process your HTML</li>
          <li>Copy the minified output using the “Copy to Clipboard” button</li>
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
            href="https://www.npmjs.com/package/html-minifier-terser"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            html-minifier-terser
          </a>{" "}
          for HTML minification.
        </p>
      </section>
    </div>
  );
};

export default HtmlMinifierInfo;
