import React, { JSX } from "react";

/**
 * Provides information about the CSS Inliner Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information
 */
const CssInlinerInfo: React.FC = (): JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About CSS Inliner Tool</h2>
        <p className="mb-4">
          The CSS Inliner Tool helps you embed CSS styles directly into your HTML, making it easier
          to send styled emails or create self-contained HTML files. Simply input your HTML and CSS,
          and the tool will generate the inlined HTML for you.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why Use a CSS Inliner Tool?</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Ensures compatibility with email clients that don’t support external stylesheets.</li>
          <li>Makes your HTML self-contained and portable.</li>
          <li>Improves the reliability of your styles in constrained environments.</li>
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
          .
        </p>
      </section>
    </div>
  );
};

export default CssInlinerInfo;
