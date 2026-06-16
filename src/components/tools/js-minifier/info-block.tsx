import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the JavaScript Minifier Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="about-javascript-minifier-tool">
          About JavaScript Minifier Tool
        </h2>
        <p className="mb-4">
          The JavaScript Minifier Tool is an online utility designed to reduce the size of your JavaScript files by
          removing unnecessary characters, whitespace, comments, and optimizing the code structure. This process, known
          as minification, helps improve page load times and reduce bandwidth usage, resulting in a better user
          experience and potentially better search engine rankings.
        </p>
        <p className="mb-4">
          We use the{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">@putout/minify</code> package
          under the hood, which provides powerful and configurable JavaScript minification capabilities. With our tool,
          you can customize the minification process to suit your specific needs, whether you’re working on a small
          website or a large web application.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-you-should-use-a-javascript-minifier">
          Why You Should Use a JavaScript Minifier
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Reduces file size, leading to faster page loading and better user experience</li>
          <li>Decreases bandwidth usage, which can save costs on hosting and CDN services</li>
          <li>Improves website performance, which is a factor in search engine rankings</li>
          <li>Removes comments, unnecessary whitespace, and debug statements while preserving functionality</li>
          <li>Shortens variable and function names to minimize file size</li>
          <li>Helps to optimize your website for mobile and low-bandwidth connections</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="how-to-use-this-tool">
          How to Use This Tool
        </h3>
        <ol className="list-inside list-decimal space-y-1 pl-4">
          <li>Paste your JavaScript code into the input box</li>
          <li>Configure the minification options according to your preferences</li>
          <li>Click the “Minify” button to process your JavaScript</li>
          <li>Copy the minified output using the “Copy to Clipboard” button</li>
        </ol>
      </section>
      <FAQ>
        <FAQItem heading="What is JavaScript minification?" headingId="what-is-javascript-minification">
          <p>
            JavaScript minification removes unnecessary characters and transforms code to be more compact, often
            shortening variable names and removing dead code.
          </p>
        </FAQItem>
        <FAQItem heading="What library is used?" headingId="what-library-is-used">
          <p>
            This tool uses <code>@putout/minify</code> with options for mangling variables, removing console/debugger
            statements, and removing comments.
          </p>
        </FAQItem>
        <FAQItem heading="What options are available?" headingId="what-options-are-available">
          <p>
            Toggle variable name mangling, console.log removal, debugger removal, and comment removal for fine-grained
            control.
          </p>
        </FAQItem>
        <FAQItem heading="Does minification affect functionality?" headingId="does-minification-affect-functionality">
          <p>
            No, proper minification preserves all functionality. Only optional features like console removal are
            configurable.
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
          . This tool uses the open-source library{' '}
          <a
            href="https://www.npmjs.com/package/@putout/minify"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            @putout/minify
          </a>{' '}
          for JavaScript minification.
        </p>
      </Credits>
    </div>
  );
}
