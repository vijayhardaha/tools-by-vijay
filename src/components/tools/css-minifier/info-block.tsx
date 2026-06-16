import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the CSS Minifier Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-css-minifier-tool">
          What Is the CSS Minifier Tool?
        </h2>
        <p className="mb-4">
          The <strong>CSS Minifier</strong> is a free online utility that helps you optimize your stylesheets by
          removing redundant spaces, comments, and unused properties, achieving faster CSS rendering and improved site
          performance.
        </p>
        <p className="mb-4">
          The CSS Minifier sends your CSS to a server-side API powered by the{' '}
          <a
            href="https://www.npmjs.com/package/clean-css"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            clean-css
          </a>{' '}
          library. The minification engine removes whitespace and comments, merges overlapping selectors, removes
          overridden properties, compresses color values, and applies other optimizations to produce the smallest
          possible valid CSS output.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="css-minifier-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Advanced CSS compression using the clean-css optimization engine</li>
          <li>Automatic whitespace removal and comment stripping</li>
          <li>Selector merging and property consolidation for duplicate reduction</li>
          <li>Color value compression (hex, RGB, HSL optimization)</li>
          <li>File size comparison with before and after statistics</li>
          <li>Preserves all visual functionality while minimizing code footprint</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-css-minifier">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Reduces CSS file size by 30-70%, accelerating page render and time-to-interactive</li>
          <li>Eliminates redundant and overridden CSS properties that bloat stylesheets</li>
          <li>Improves mobile performance by reducing total CSS payload delivered to devices</li>
          <li>Decreases bandwidth costs for high-traffic applications serving large stylesheets</li>
          <li>Enhances Lighthouse performance scores and overall site speed metrics</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="css-minifier-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Optimizing production CSS bundles before deployment to reduce initial page load</li>
          <li>Compressing CSS framework files like Bootstrap and Tailwind for production use</li>
          <li>Minimizing third-party CSS libraries and vendor stylesheets for performance</li>
          <li>Preparing CSS for email templates where file size limits apply</li>
          <li>Integrating into build toolchains with Webpack, Vite, or Gulp for automated minification</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="css-minifier-technical-details">
          Technical Details
        </h2>
        <p>
          This tool uses the{' '}
          <a
            href="https://www.npmjs.com/package/clean-css"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            clean-css
          </a>{' '}
          npm package via a server-side API endpoint. The library performs multi-level optimization including structural
          optimizations like merging selectors with identical rules, removing redundant properties, and compressing
          color and dimension values. All processing happens server-side with results returned as compressed CSS.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>Yes, the CSS Minifier is completely free to use with no signup, registration, or usage limits required.</p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            Your data is sent to our server-side API for processing only. It is not stored, logged, or shared with any
            third parties and is discarded immediately after processing.
          </p>
        </FAQItem>
        <FAQItem heading="What is CSS minification?" headingId="what-is-css-minification">
          <p>
            CSS minification removes unnecessary characters and redundant properties without changing visual output,
            reducing file size significantly.
          </p>
        </FAQItem>
        <FAQItem heading="What library is used?" headingId="css-minifier-what-library-is-used">
          <p>
            This tool uses clean-css, which supports merging selectors, removing overridden properties, and compressing
            color values.
          </p>
        </FAQItem>
        <FAQItem heading="How much can CSS be reduced?" headingId="how-much-can-css-be-reduced">
          <p>
            Reduction typically ranges from 30% to 70%. Larger files with extensive comments see the most significant
            gains.
          </p>
        </FAQItem>
        <FAQItem heading="Can I use this tool offline?" headingId="can-i-use-this-tool-offline">
          <p>This tool requires a server-side API call, so an internet connection is needed for processing.</p>
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
