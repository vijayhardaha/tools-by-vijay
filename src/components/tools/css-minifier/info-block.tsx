import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the CSS Minifier Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold" id="about-css-minifier-tool">
          About CSS Minifier Tool
        </h2>
        <p className="mb-4">
          The CSS Minifier Tool is an online utility designed to reduce the size of your CSS files by removing
          unnecessary characters, whitespace, comments, and optimizing the code structure. This process, known as
          minification, helps improve page load times and reduce bandwidth usage, resulting in a better user experience
          and potentially better search engine rankings.
        </p>
        <p className="mb-4">
          We use the <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">clean-css</code>{' '}
          package under the hood, which provides powerful and configurable CSS minification capabilities. With our tool,
          you can customize the minification process to suit your specific needs, whether you’re working on a small
          website or a large web application.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-you-should-use-a-css-minifier">
          Why You Should Use a CSS Minifier
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Reduces file size, leading to faster page loading and better user experience</li>
          <li>Decreases bandwidth usage, which can save costs on hosting and CDN services</li>
          <li>Improves website performance, which is a factor in search engine rankings</li>
          <li>Removes comments and unnecessary whitespace while preserving functionality</li>
          <li>Helps to optimize your website for mobile and low-bandwidth connections</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="how-to-use-this-tool">
          How to Use This Tool
        </h3>
        <ol className="list-inside list-decimal space-y-1 pl-4">
          <li>Paste your CSS code into the input box</li>
          <li>Configure the minification options according to your preferences</li>
          <li>Click the “Minify” button to process your CSS</li>
          <li>Copy the minified output using the “Copy to Clipboard” button</li>
        </ol>
      </section>
      <FAQ>
        <FAQItem heading="What is CSS minification?" headingId="what-is-css-minification">
          <p>
            CSS minification removes unnecessary characters and redundant properties without changing visual output,
            reducing file size.
          </p>
        </FAQItem>
        <FAQItem heading="What library is used?" headingId="what-library-is-used">
          <p>
            This tool uses <code>clean-css</code>, which supports merging selectors, removing overridden properties, and
            compressing color values.
          </p>
        </FAQItem>
        <FAQItem heading="Is minified CSS harder to debug?" headingId="is-minified-css-harder-to-debug">
          <p>
            Yes, keep an unminified copy for development and use minified versions in production. Browsers have
            pretty-print tools for debugging.
          </p>
        </FAQItem>
        <FAQItem heading="How much can CSS be reduced?" headingId="how-much-can-css-be-reduced">
          <p>
            Reduction typically ranges from 30% to 70%. Larger files with extensive comments see the most significant
            gains.
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
            href="https://www.npmjs.com/package/clean-css"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            clean-css
          </a>{' '}
          for CSS minification.
        </p>
      </Credits>
    </div>
  );
}
