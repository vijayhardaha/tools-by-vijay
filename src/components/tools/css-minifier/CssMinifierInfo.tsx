/**
 * Provides information about the CSS Minifier Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information
 */
const CssMinifierInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About CSS Minifier Tool</h2>
        <p className="mb-4">
          The CSS Minifier Tool is an online utility designed to reduce the size of your CSS files
          by removing unnecessary characters, whitespace, comments, and optimizing the code
          structure. This process, known as minification, helps improve page load times and reduce
          bandwidth usage, resulting in a better user experience and potentially better search
          engine rankings.
        </p>
        <p className="mb-4">
          We use the{" "}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">
            clean-css
          </code>{" "}
          package under the hood, which provides powerful and configurable CSS minification
          capabilities. With our tool, you can customize the minification process to suit your
          specific needs, whether you’re working on a small website or a large web application.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why You Should Use a CSS Minifier</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Reduces file size, leading to faster page loading and better user experience</li>
          <li>Decreases bandwidth usage, which can save costs on hosting and CDN services</li>
          <li>Improves website performance, which is a factor in search engine rankings</li>
          <li>Removes comments and unnecessary whitespace while preserving functionality</li>
          <li>Helps to optimize your website for mobile and low-bandwidth connections</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">How to Use This Tool</h3>
        <ol className="list-inside list-decimal space-y-1 pl-4">
          <li>Paste your CSS code into the input box</li>
          <li>Configure the minification options according to your preferences</li>
          <li>Click the “Minify” button to process your CSS</li>
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
            href="https://www.npmjs.com/package/clean-css"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            clean-css
          </a>{" "}
          for CSS minification.
        </p>
      </section>
    </div>
  );
};

export default CssMinifierInfo;
