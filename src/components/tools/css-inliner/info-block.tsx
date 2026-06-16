import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the CSS Inliner Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-css-inliner-tool">
          What Is the CSS Inliner Tool?
        </h2>
        <p className="mb-4">
          The <strong>CSS Inliner</strong> is a free online utility that helps you transform external and internal CSS
          rules into inline HTML styles, essential for email template compatibility across Gmail, Outlook, and other
          email clients.
        </p>
        <p className="mb-4">
          The CSS Inliner combines your HTML and CSS, then uses the{' '}
          <a
            href="https://www.npmjs.com/package/juice"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            juice
          </a>{' '}
          library to apply all style rules directly to each HTML element as inline styles. The result is reformatted
          with{' '}
          <a
            href="https://prettier.io/"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            Prettier
          </a>{' '}
          for readability. This process ensures consistent rendering across email clients that strip external
          stylesheets.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="css-inliner-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Combines external and internal CSS styles into inline HTML attributes</li>
          <li>Prettier formatting for clean, readable output HTML</li>
          <li>Support for complex CSS selectors including class and element targeting</li>
          <li>Preserves existing inline styles while adding computed styles</li>
          <li>Client-side and server-side processing options</li>
          <li>One-click copy for email template integration</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-css-inliner">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Ensures consistent email rendering across all email clients including Gmail and Outlook</li>
          <li>Eliminates the need for multiple email versions for different clients</li>
          <li>Preserves complex CSS selectors by computing and applying final computed styles</li>
          <li>Produces self-contained HTML that renders correctly without external resources</li>
          <li>Saves hours of manual inline styling for email template development</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="css-inliner-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Preparing HTML email templates for marketing campaigns and transactional emails</li>
          <li>Creating self-contained HTML documents for offline viewing and distribution</li>
          <li>Ensuring newsletter compatibility across diverse email clients and devices</li>
          <li>Converting existing websites with external CSS into portable HTML snapshots</li>
          <li>Building email templates in frameworks that use external CSS during development</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="css-inliner-technical-details">
          Technical Details
        </h2>
        <p>
          This tool uses the{' '}
          <a
            href="https://www.npmjs.com/package/juice"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            juice
          </a>{' '}
          npm package for CSS inlining combined with{' '}
          <a
            href="https://prettier.io/"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            Prettier
          </a>{' '}
          for output formatting. The juice library parses CSS rules and applies them to matching HTML elements by
          computing the final style for each element and writing it as an inline style attribute. The API runs
          server-side for reliable processing.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>Yes, the CSS Inliner is completely free to use with no signup, registration, or usage limits required.</p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            Your data is sent to our server-side API for processing only. It is not stored, logged, or shared with any
            third parties and is discarded immediately after processing.
          </p>
        </FAQItem>
        <FAQItem heading="What is CSS inlining?" headingId="what-is-css-inlining">
          <p>
            CSS inlining applies styles directly to each HTML element as inline styles, essential for HTML email
            compatibility since email clients strip external stylesheets.
          </p>
        </FAQItem>
        <FAQItem heading="Why do emails need inlined CSS?" headingId="why-do-emails-need-inlined-css">
          <p>
            Email clients like Gmail and Outlook strip external and internal stylesheets. Inlined CSS ensures consistent
            rendering across all clients.
          </p>
        </FAQItem>
        <FAQItem heading="Does inlining increase file size?" headingId="does-inlining-increase-file-size">
          <p>
            Yes, styles are repeated per element, but this trade-off is necessary for email compatibility and consistent
            rendering.
          </p>
        </FAQItem>
        <FAQItem heading="What library is used?" headingId="css-inliner-what-library-is-used">
          <p>This tool uses juice for CSS inlining and Prettier for formatting the output.</p>
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
