import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the HTML Minifier Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold" id="about-html-minifier-tool">
          About HTML Minifier Tool
        </h2>
        <p className="mb-4">
          The HTML Minifier Tool is an online utility designed to reduce the size of your HTML files by removing
          unnecessary characters, whitespace, comments, and optimizing the code structure. This process, known as
          minification, helps improve page load times and reduce bandwidth usage, resulting in a better user experience
          and potentially better search engine rankings.
        </p>
        <p className="mb-4">
          We use the{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">html-minifier-terser</code>{' '}
          package under the hood, which provides powerful and configurable HTML minification capabilities. With our
          tool, you can customize the minification process to suit your specific needs, whether you’re working on a
          small website or a large web application.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-you-should-use-an-html-minifier">
          Why You Should Use an HTML Minifier
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Reduces file size, leading to faster page loading and better user experience</li>
          <li>Decreases bandwidth usage, which can save costs on hosting and CDN services</li>
          <li>Improves website performance, which is a factor in search engine rankings</li>
          <li>Removes comments and unnecessary code that might reveal sensitive information</li>
          <li>Makes your code harder to read for humans, adding a small layer of obfuscation</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="how-to-use-this-tool">
          How to Use This Tool
        </h3>
        <ol className="list-inside list-decimal space-y-1 pl-4">
          <li>Paste your HTML code into the input box</li>
          <li>Configure the minification options according to your preferences</li>
          <li>Click the “Minify” button to process your HTML</li>
          <li>Copy the minified output using the “Copy to Clipboard” button</li>
        </ol>
      </section>
      <FAQ>
        <FAQItem heading="What is HTML minification?" headingId="what-is-html-minification">
          <p>
            HTML minification removes unnecessary characters like whitespace, comments, and unused quotes without
            changing functionality, reducing file size and improving load times.
          </p>
        </FAQItem>
        <FAQItem heading="Is minified HTML still valid?" headingId="is-minified-html-still-valid">
          <p>Yes, minified HTML is functionally identical. All tags, attributes, and content are preserved.</p>
        </FAQItem>
        <FAQItem heading="What library is used?" headingId="what-library-is-used">
          <p>
            This tool uses <code>html-minifier-terser</code>, a powerful HTML minification library with fine-grained
            control over optimizations.
          </p>
        </FAQItem>
        <FAQItem heading="What are the benefits?" headingId="what-are-the-benefits">
          <p>Benefits include faster page loads, reduced bandwidth, improved Core Web Vitals, and better SEO.</p>
        </FAQItem>
        <FAQItem heading="Can I customize options?" headingId="can-i-customize-options">
          <p>
            Yes, options include removing comments, collapsing whitespace, removing attribute quotes, and minifying
            inline CSS/JS.
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
            href="https://www.npmjs.com/package/html-minifier-terser"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            html-minifier-terser
          </a>{' '}
          for HTML minification.
        </p>
      </Credits>
    </div>
  );
}
