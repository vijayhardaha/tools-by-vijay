import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the JavaScript Minifier Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-js-minifier-tool">
          What Is the JavaScript Minifier Tool?
        </h2>
        <p className="mb-4">
          The <strong>JavaScript Minifier</strong> is a free online utility that helps you compress JavaScript files to
          minimize payload size, improving execution speed and reducing bandwidth with configurable mangling, console
          removal, and comment stripping.
        </p>
        <p className="mb-4">
          The JavaScript Minifier sends your code to a server-side API powered by the{' '}
          <a
            href="https://www.npmjs.com/package/@putout/minify"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            @putout/minify
          </a>{' '}
          library. The minification engine removes whitespace and comments, shortens variable and function names
          (mangling), strips debugger statements and console logs, and produces compact, production-ready JavaScript
          output.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="js-minifier-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Variable and function name mangling for significant size reduction</li>
          <li>Console.log and debugging statement removal for production code</li>
          <li>Debugger statement stripping to eliminate breakpoints</li>
          <li>Comment removal for complete code compression</li>
          <li>All optimizations configurable via toggle switches</li>
          <li>File size comparison showing compression ratio and savings</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-js-minifier">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Reduces JavaScript file size by 40-80% through name mangling and code stripping</li>
          <li>Improves page load times and execution speed for JavaScript-heavy applications</li>
          <li>Removes debugging artifacts that have no place in production environments</li>
          <li>Decreases bandwidth consumption for script delivery across networks</li>
          <li>Provides a basic layer of code obfuscation through identifier shortening</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="js-minifier-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Optimizing production JavaScript bundles for faster initial page loads</li>
          <li>Preparing library files for CDN distribution with minimal payload size</li>
          <li>Stripping development-only code like console logs and debugger statements</li>
          <li>Compressing API response scripts and dynamically loaded JavaScript modules</li>
          <li>Integrating into build pipelines for automated production optimization</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="js-minifier-technical-details">
          Technical Details
        </h2>
        <p>
          This tool uses the{' '}
          <a
            href="https://www.npmjs.com/package/@putout/minify"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            @putout/minify
          </a>{' '}
          npm package via a server-side API. The minifier performs AST-based transformations including identifier
          shortening (mangling), dead code elimination, and configurable removal of console and debugger statements. The
          library provides fine-grained control over which optimizations to apply.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the JavaScript Minifier is completely free to use with no signup, registration, or usage limits
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
        <FAQItem heading="What is JavaScript minification?" headingId="what-is-javascript-minification">
          <p>
            JavaScript minification removes unnecessary characters and transforms code to be more compact, often
            shortening variable names and removing dead code.
          </p>
        </FAQItem>
        <FAQItem heading="What library is used?" headingId="js-minifier-what-library-is-used">
          <p>
            This tool uses @putout/minify with options for mangling variables, removing console/debugger statements, and
            removing comments.
          </p>
        </FAQItem>
        <FAQItem heading="Does minification affect functionality?" headingId="does-minification-affect-functionality">
          <p>
            No, proper minification preserves all functionality. Only optional features like console removal are
            configurable.
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
