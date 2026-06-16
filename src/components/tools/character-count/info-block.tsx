import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Character Counter Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-character-count-tool">
          What Is the Character Counter Tool?
        </h2>
        <p className="mb-4">
          The <strong>Character Counter</strong> is a free online utility that helps you get detailed text analysis
          including character count, word count, sentence count, paragraph count, and space count, perfect for meeting
          social media and content limits.
        </p>
        <p className="mb-4">
          The Character Counter analyzes your input text in real time using JavaScript string processing. It counts
          characters (with and without spaces), words (by splitting on whitespace), sentences (by detecting terminal
          punctuation), paragraphs (by detecting double line breaks), and spaces. All statistics update instantly as you
          type.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="character-count-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Real-time statistics updating with every keystroke for immediate feedback</li>
          <li>Character count with and without spaces for different requirements</li>
          <li>Word count, sentence count, paragraph count, and line count</li>
          <li>Space count for detailed text composition analysis</li>
          <li>Zero server communication for complete data privacy</li>
          <li>Clear button for quick text reset and new analysis</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-character-count">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Ensures content meets strict character limits for social media platforms and ad copy</li>
          <li>Helps writers optimize content length for SEO meta descriptions and title tags</li>
          <li>Provides comprehensive text metrics for editorial quality control</li>
          <li>Supports academic and professional writing requirements with word and sentence counts</li>
          <li>Protects sensitive content with fully client-side processing and analysis</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="character-count-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Checking tweet lengths against Twitter&apos;s 280-character limit before posting</li>
          <li>Optimizing meta descriptions to stay within Google&apos;s 155-160 character display limit</li>
          <li>Meeting word count requirements for academic essays, articles, and blog posts</li>
          <li>Analyzing SMS message lengths for marketing campaigns and alerts</li>
          <li>Tracking writing productivity with real-time word and character statistics</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="character-count-technical-details">
          Technical Details
        </h2>
        <p>
          All text analysis uses native JavaScript string methods operating entirely in the browser. Characters are
          counted using string length properties, words are identified by whitespace-split tokenization, sentences by
          terminal punctuation detection, and paragraphs by double newline separation. No data is transmitted to any
          server.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Character Counter is completely free to use with no signup, registration, or usage limits required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            No, all processing happens locally in your browser. Your data never leaves your device and is not stored or
            logged anywhere.
          </p>
        </FAQItem>
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
