import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the HTML Minifier Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-html-minifier-tool">
          What Is the HTML Minifier Tool?
        </h2>
        <p className="mb-4">
          The <strong>HTML Minifier</strong> is a free online utility that helps you compress HTML files by removing
          unnecessary whitespace, comments, and redundant code, reducing page size to significantly improve website load
          speed and Core Web Vitals.
        </p>
        <p className="mb-4">
          The HTML Minifier sends your HTML code to a server-side API powered by the{' '}
          <a
            href="https://www.npmjs.com/package/html-minifier-terser"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            html-minifier-terser
          </a>{' '}
          library. The minification engine removes comments, collapses whitespace, removes redundant attributes,
          minifies inline CSS and JavaScript, and applies various optimizations to reduce file size while preserving
          complete functionality. After minification, the tool displays a file size comparison showing exactly how much
          was saved.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="html-minifier-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Comprehensive HTML compression with 17+ configurable optimization options</li>
          <li>Automatic comment removal and whitespace collapsing for maximum size reduction</li>
          <li>Options to remove redundant, empty, and boolean attributes</li>
          <li>Inline CSS and JavaScript minification for complete page optimization</li>
          <li>Attribute sorting and class name organization for consistent output</li>
          <li>File size comparison showing compression statistics and savings</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-html-minifier">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Accelerates page load times by reducing HTML file size by 30-70%</li>
          <li>Improves Core Web Vitals scores, directly impacting search engine rankings</li>
          <li>Reduces bandwidth consumption and hosting costs for high-traffic websites</li>
          <li>Removes verbose comments and unnecessary code that can expose implementation details</li>
          <li>Delivers better user experience on mobile devices and slow network connections</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="html-minifier-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Optimizing production HTML output before deployment to web servers and CDNs</li>
          <li>Reducing page weight for performance-sensitive landing pages and marketing sites</li>
          <li>Preparing HTML email templates with minimized code for faster rendering</li>
          <li>Compressing HTML documentation and knowledge base articles for faster delivery</li>
          <li>Integrating into build pipelines and CI/CD workflows for automated optimization</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="html-minifier-technical-details">
          Technical Details
        </h2>
        <p>
          This tool uses the{' '}
          <a
            href="https://www.npmjs.com/package/html-minifier-terser"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            html-minifier-terser
          </a>{' '}
          npm package via a server-side API endpoint. The API accepts HTML content and an options object, processes the
          minification server-side, and returns the compressed output along with size statistics. The library provides
          granular control over each optimization aspect.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the HTML Minifier is completely free to use with no signup, registration, or usage limits required.
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
        <FAQItem heading="What is HTML minification?" headingId="what-is-html-minification">
          <p>
            HTML minification removes unnecessary characters like whitespace, comments, and unused quotes without
            changing functionality, reducing file size and improving load times.
          </p>
        </FAQItem>
        <FAQItem heading="Is minified HTML still valid?" headingId="is-minified-html-still-valid">
          <p>
            Yes, minified HTML is functionally identical. All tags, attributes, and content are preserved and render the
            same way in browsers.
          </p>
        </FAQItem>
        <FAQItem heading="What library is used?" headingId="html-minifier-what-library-is-used">
          <p>
            This tool uses html-minifier-terser, a powerful HTML minification library that provides fine-grained control
            over optimizations.
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
