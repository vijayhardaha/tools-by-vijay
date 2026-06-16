import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Replace Quotes Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-replace-quotes-tool">
          What Is the Replace Quotes Tool?
        </h2>
        <p className="mb-4">
          The <strong>Replace Quotes</strong> is a free online utility that helps you convert between straight quotes
          and typographically correct curly quotes, ensuring professional typography for publishing or clean code for
          development.
        </p>
        <p className="mb-4">
          The Replace Quotes tool uses pattern matching to identify quotation marks and apostrophes in your text, then
          replaces them according to your selected conversion direction. It handles straight-to-curly and
          curly-to-straight conversions, with optional handling of apostrophes and standalone (unmatched) quotes.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="replace-quotes-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Two conversion directions: straight to curly and curly to straight</li>
          <li>Optional apostrophe replacement for typographically correct contractions</li>
          <li>Standalone quote handling for unmatched or orphaned quotation marks</li>
          <li>Reactive output updates as you type or change conversion options</li>
          <li>Multiline text support for document-level quote replacement</li>
          <li>Complete client-side processing with zero data transmission</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-replace-quotes">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Elevates text quality with professional typographic quotation marks</li>
          <li>Ensures consistent quote styling across documents and publications</li>
          <li>Prepares text for publishing platforms that require straight quotes for compatibility</li>
          <li>Saves hours of manual find-and-replace editing in long documents</li>
          <li>Handles edge cases like apostrophes and standalone quotes automatically</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="replace-quotes-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Preparing manuscripts and articles for publication with proper typographic quotes</li>
          <li>Converting curly quotes to straight quotes for code compatibility in development</li>
          <li>Formatting blog posts and web content with professional typography standards</li>
          <li>Cleaning up text pasted from word processors that use inconsistent quote styles</li>
          <li>Standardizing quote formatting across large content libraries and CMS imports</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="replace-quotes-technical-details">
          Technical Details
        </h2>
        <p>
          The quote replacement uses regular expressions to identify straight quotes and curly quotes in text. Smart
          detection handles opening vs. closing quote orientation for accurate curly quote replacement. Processing is
          entirely client-side using native JavaScript regex.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Replace Quotes is completely free to use with no signup, registration, or usage limits required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            No, all processing happens locally in your browser. Your data never leaves your device and is not stored or
            logged anywhere.
          </p>
        </FAQItem>
        <FAQItem heading="Straight vs curly quotes?" headingId="straight-vs-curly-quotes">
          <p>
            Straight quotes are basic keyboard marks. Curly quotes are typographically correct for professional
            publishing and improve readability.
          </p>
        </FAQItem>
        <FAQItem heading="When to use curly quotes?" headingId="when-to-use-curly-quotes">
          <p>
            Use curly quotes in professional publishing and formal documents. Straight quotes are fine for code and
            informal communication.
          </p>
        </FAQItem>
        <FAQItem heading="Does this replace apostrophes?" headingId="does-this-replace-apostrophes">
          <p>
            Yes, the Replace Apostrophes option converts apostrophes in contractions to typographically correct curly
            versions.
          </p>
        </FAQItem>
        <FAQItem heading="Can I use this tool offline?" headingId="can-i-use-this-tool-offline">
          <p>
            Yes, since all processing happens client-side in your browser, this tool works offline once the page has
            loaded.
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
