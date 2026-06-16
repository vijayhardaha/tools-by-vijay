import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Unminify / Beautifier Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-unminify-tool">
          What Is the Unminify / Beautifier Tool?
        </h2>
        <p className="mb-4">
          The <strong>Unminify / Beautifier</strong> is a free online utility that helps you reverse minification for
          HTML, CSS, and JavaScript, beautifying compressed code into readable, properly indented format for debugging
          and code analysis.
        </p>
        <p className="mb-4">
          The Unminify Tool sends your minified code to a server-side API powered by{' '}
          <a
            href="https://prettier.io/"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            Prettier
          </a>
          , the industry-standard code formatter. The API parses the code according to its detected type (JavaScript,
          CSS, HTML, JSON, or XML) and reformats it with proper indentation, line breaks, and spacing for maximum
          readability.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="unminify-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Multi-language support for JavaScript, CSS, HTML, XML, and JSON</li>
          <li>Automatic code type detection for correct formatting rules</li>
          <li>Prettier-powered formatting with industry-standard output</li>
          <li>Proper indentation, line breaks, and spacing for readability</li>
          <li>One-click copy for immediate use in editors and IDEs</li>
          <li>Edge runtime processing for fast, reliable formatting</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-unminify">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Restores readability to minified code for effective debugging and maintenance</li>
          <li>Helps developers understand third-party, obfuscated, or legacy code structures</li>
          <li>Produces consistently formatted code that follows established style conventions</li>
          <li>Saves time compared to manual code reformatting in editors</li>
          <li>Supports multiple languages in a single unified interface</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="unminify-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Debugging minified production code to identify and fix JavaScript errors</li>
          <li>Analyzing third-party scripts and libraries by restoring readable formatting</li>
          <li>Recovering readable code from compressed CSS and HTML sources</li>
          <li>Preparing minified code for code review and team collaboration</li>
          <li>Converting single-line JSON responses into readable, structured output</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="unminify-technical-details">
          Technical Details
        </h2>
        <p>
          This tool uses{' '}
          <a
            href="https://prettier.io/"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            Prettier
          </a>
          , the industry-standard code formatter, via a serverless API endpoint. Prettier parses the code into an AST
          (Abstract Syntax Tree) and reprints it with consistent formatting rules. The tool runs on the Vercel Edge
          Runtime for low-latency processing with automatic language detection.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Unminify / Beautifier is completely free to use with no signup, registration, or usage limits
            required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            <p>
              Your data is sent to our server-side API for processing only. It is not stored, logged, or shared with any
              third parties and is discarded immediately after processing.
            </p>
          </p>
        </FAQItem>
        <FAQItem heading="What is unminification?" headingId="what-is-unminification">
          <p>
            Unminification formats minified code with proper indentation and spacing, making it readable and easier to
            debug while preserving functionality.
          </p>
        </FAQItem>
        <FAQItem heading="What code types are supported?" headingId="what-code-types-are-supported">
          <p>This tool supports JavaScript, CSS, HTML, XML, and JSON using the Prettier formatter.</p>
        </FAQItem>
        <FAQItem heading="Is unminified code identical to the original?" headingId="is-unminified-code-identical">
          <p>
            Functionally yes, but formatting is added back. Variable names shortened during minification remain
            shortened.
          </p>
        </FAQItem>
        <FAQItem heading="Can I use this tool offline?" headingId="can-i-use-this-tool-offline">
          <p>
            <p>This tool requires a server-side API call, so an internet connection is needed for processing.</p>
          </p>
        </FAQItem>
      </FAQ>

      <Credits>
        <p>
          Maintained by{' '}
          <a
            href="https://x.com/vijayhardaha"
            className="font-medium text-pink-500 underline hover:no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vijay Hardaha
          </a>
          . This tool is built with modern web technologies and industry-standard open-source libraries to deliver
          reliable, high-quality results.
        </p>
      </Credits>
    </div>
  );
}
