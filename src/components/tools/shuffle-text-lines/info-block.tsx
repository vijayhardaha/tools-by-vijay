import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Shuffle Text Lines Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-shuffle-text-lines-tool">
          What Is the Shuffle Text Lines Tool?
        </h2>
        <p className="mb-4">
          The <strong>Shuffle Text Lines</strong> is a free online utility that helps you randomize the order of your
          text lines instantly using the Fisher-Yates algorithm, perfect for creating randomized lists and unbiased
          sampling.
        </p>
        <p className="mb-4">
          The Shuffle Text Lines tool splits input into individual lines, applies optional preprocessing (duplicate
          removal, empty line filtering, whitespace trimming), then randomizes the order using the Fisher-Yates shuffle
          algorithm - the gold standard for unbiased random permutation.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="shuffle-text-lines-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Unbiased random shuffling using the Fisher-Yates algorithm</li>
          <li>Optional duplicate removal before shuffling for unique randomized lists</li>
          <li>Empty line filtering to exclude blank entries from output</li>
          <li>Whitespace trimming for clean, consistent line formatting</li>
          <li>Instant client-side processing with no data transmission</li>
          <li>Multiple preprocessing options configurable before shuffling</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-shuffle-text-lines">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Creates truly unbiased random ordering for fair results in contests and giveaways</li>
          <li>Eliminates manual randomization effort for sampling and testing workflows</li>
          <li>Generates varied content orders for A/B testing and user experience research</li>
          <li>Supports data anonymization by randomizing record order in datasets</li>
          <li>Processes entirely in-browser with complete data privacy assurance</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="shuffle-text-lines-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Randomizing contest entries and giveaway participants for fair winner selection</li>
          <li>Creating randomized test data for quality assurance and load testing</li>
          <li>Shuffling flashcard decks and quiz questions for varied learning experiences</li>
          <li>Generating random orderings for A/B test variants and experiment conditions</li>
          <li>Randomizing playlist items, to-do lists, and task assignments for variety</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="shuffle-text-lines-technical-details">
          Technical Details
        </h2>
        <p>
          The Fisher-Yates (also known as Knuth) shuffle algorithm provides unbiased random permutation. The algorithm
          iterates through the array from the last element to the first, swapping each element with a randomly selected
          earlier element. This guarantees each of the n! possible permutations is equally likely.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Shuffle Text Lines is completely free to use with no signup, registration, or usage limits
            required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            <p>
              No, all processing happens locally in your browser. Your data never leaves your device and is not stored
              or logged anywhere.
            </p>
          </p>
        </FAQItem>
        <FAQItem heading="How does shuffling work?" headingId="how-does-shuffling-work">
          <p>The tool uses the Fisher-Yates shuffle algorithm for unbiased randomization of your text lines.</p>
        </FAQItem>
        <FAQItem
          heading="Can I remove duplicates before shuffling?"
          headingId="can-i-remove-duplicates-before-shuffling"
        >
          <p>Yes, enable the Remove Duplicates option before shuffling for unique randomized lists.</p>
        </FAQItem>
        <FAQItem heading="What does Trim Lines do?" headingId="what-does-trim-lines-do">
          <p>Removes leading and trailing whitespace from each line for clean, consistent formatting.</p>
        </FAQItem>
        <FAQItem heading="Can I use this tool offline?" headingId="can-i-use-this-tool-offline">
          <p>
            <p>
              Yes, since all processing happens client-side in your browser, this tool works offline once the page has
              loaded.
            </p>
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
