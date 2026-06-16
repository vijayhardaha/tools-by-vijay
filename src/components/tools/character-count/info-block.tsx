import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the Character Count Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information.
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="about-character-count-tool">
          About Character Count Tool
        </h2>
        <p className="mb-4">
          The Character Count Tool is a utility that provides detailed statistics about your text, including character
          count, word count, sentence count, paragraph count, and space count.
        </p>
        <p className="mb-4">
          All processing happens directly in your browser – your data is never sent to a server, ensuring privacy and
          security when working with sensitive information.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="how-to-use-this-tool">
          How to Use This Tool
        </h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Enter Your Text:</strong> Paste or type your text into the input area.
          </li>
          <li>
            <strong>View Statistics:</strong> The tool will automatically calculate and display text statistics.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-use-this-tool">
          Why Use This Tool
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Analyze text for writing or editing purposes.</li>
          <li>Prepare content for character or word-limited platforms.</li>
          <li>Improve readability by understanding text structure.</li>
        </ul>
      </section>

      <FAQ>
        <FAQItem heading="What statistics are provided?" headingId="what-statistics-are-provided">
          <p>
            The tool provides character count (with and without spaces), word count, sentence count, paragraph count,
            line count, and space count.
          </p>
        </FAQItem>
        <FAQItem heading="How are words counted?" headingId="how-are-words-counted">
          <p>Words are counted by splitting text on whitespace and filtering empty strings for accurate counting.</p>
        </FAQItem>
        <FAQItem heading="Why use a character counter?" headingId="why-use-a-character-counter">
          <p>Essential for content with length limits like social media posts, meta descriptions, and form fields.</p>
        </FAQItem>
        <FAQItem heading="Is my text sent to a server?" headingId="is-my-text-sent-to-a-server">
          <p>No, all analysis happens locally in your browser for complete privacy.</p>
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
          . This tool is designed to simplify text processing tasks.
        </p>
      </Credits>
    </div>
  );
}
