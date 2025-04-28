import React, { JSX } from "react";

/**
 * Provides information about the Replace Quotes Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information
 */
const ReplaceQuotesInfo: React.FC = (): JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Replace Quotes Tool</h2>
        <p className="mb-4">
          The Replace Quotes Tool is a simple utility that helps you convert straight quotes (&apos;
          and &quot;) to curly quotes (‘, ’, “, and ”) and vice versa. This is particularly useful
          for text formatting, ensuring consistent quote styles in your content, and improving the
          overall readability of your text.
        </p>
        <p className="mb-4">
          Whether you’re preparing content for publishing, editing documents, or working on
          typography, this tool makes it easy to switch between quote styles with just a few clicks.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          Why You Should Use the Replace Quotes Tool
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Ensures consistent quote styles across your content.</li>
          <li>Improves the visual appeal and readability of your text.</li>
          <li>Helps meet style guide requirements for publishing or branding.</li>
          <li>Eliminates manual effort in replacing quotes in large documents.</li>
          <li>Great for writers, editors, and developers working on text-heavy projects.</li>
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
          . This tool uses open-source libraries and custom algorithms to ensure accurate and
          efficient quote replacements.
        </p>
      </section>
    </div>
  );
};

export default ReplaceQuotesInfo;
