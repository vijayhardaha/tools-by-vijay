import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the CSS Inliner Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="about-css-inliner-tool">
          About CSS Inliner Tool
        </h2>
        <p className="mb-4">
          The CSS Inliner Tool helps you embed CSS styles directly into your HTML, making it easier to send styled
          emails or create self-contained HTML files. Simply input your HTML and CSS, and the tool will generate the
          inlined HTML for you.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-use-a-css-inliner-tool">
          Why Use a CSS Inliner Tool?
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Ensures compatibility with email clients that don’t support external stylesheets.</li>
          <li>Makes your HTML self-contained and portable.</li>
          <li>Improves the reliability of your styles in constrained environments.</li>
        </ul>
      </section>

      <FAQ>
        <FAQItem heading="What is CSS inlining?" headingId="what-is-css-inlining">
          <p>
            CSS inlining applies styles directly to each HTML element as inline styles, essential for HTML email
            compatibility.
          </p>
        </FAQItem>
        <FAQItem heading="Why do emails need inlined CSS?" headingId="why-do-emails-need-inlined-css">
          <p>
            Email clients like Gmail and Outlook strip external stylesheets. Inlined CSS ensures consistent rendering
            across all clients.
          </p>
        </FAQItem>
        <FAQItem heading="Does inlining increase file size?" headingId="does-inlining-increase-file-size">
          <p>Yes, styles are repeated per element, but this trade-off is necessary for email compatibility.</p>
        </FAQItem>
        <FAQItem heading="What library is used?" headingId="what-library-is-used">
          <p>
            This tool uses <code>juice</code> for CSS inlining and <code>prettier</code> for formatting the output.
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
          .
        </p>
      </Credits>
    </div>
  );
}
