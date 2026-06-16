import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the Replace Quotes Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold" id="about-replace-quotes-tool">
          About Replace Quotes Tool
        </h2>
        <p className="mb-4">
          The Replace Quotes Tool is a simple utility that helps you convert straight quotes (&apos; and &quot;) to
          curly quotes (‘, ’, “, and ”) and vice versa. This is particularly useful for text formatting, ensuring
          consistent quote styles in your content, and improving the overall readability of your text.
        </p>
        <p className="mb-4">
          Whether you’re preparing content for publishing, editing documents, or working on typography, this tool makes
          it easy to switch between quote styles with just a few clicks.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-you-should-use-the-replace-quotes-tool">
          Why You Should Use the Replace Quotes Tool
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Ensures consistent quote styles across your content.</li>
          <li>Improves the visual appeal and readability of your text.</li>
          <li>Helps meet style guide requirements for publishing or branding.</li>
          <li>Eliminates manual effort in replacing quotes in large documents.</li>
          <li>Great for writers, editors, and developers working on text-heavy projects.</li>
        </ul>
      </section>
      <FAQ>
        <FAQItem heading="Straight vs curly quotes?" headingId="straight-vs-curly-quotes">
          <p>
            Straight quotes are the basic keyboard marks. Curly quotes are typographically correct for professional
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
        <FAQItem heading="What are standalone quotes?" headingId="what-are-standalone-quotes">
          <p>
            These are quotation marks without matching pairs. The Replace Standalone Quotes option handles these edge
            cases.
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
          . This tool uses open-source libraries and custom algorithms to ensure accurate and efficient quote
          replacements.
        </p>
      </Credits>
    </div>
  );
}
