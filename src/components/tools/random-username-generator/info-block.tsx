import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Random Username Generator Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-random-username-generator-tool">
          What Is the Random Username Generator Tool?
        </h2>
        <p className="mb-4">
          The <strong>Random Username Generator</strong> is a free online utility that helps you create creative, unique
          usernames for gaming, social media, and online profiles by combining adjectives, nouns, and numbers for
          memorable handles.
        </p>
        <p className="mb-4">
          The Random Username Generator combines adjectives and nouns from curated word lists to create readable,
          memorable usernames. Each username follows the pattern [Adjective][Noun][Number], creating combinations like
          BraveWizard742. You control the quantity and regenerate for fresh results with one click.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="random-username-generator-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Combines adjectives and nouns for readable, memorable username patterns</li>
          <li>Appends random 2-4 digit numbers for uniqueness and availability</li>
          <li>Configurable quantity from 1 to 200 usernames per generation</li>
          <li>Clean, formatted output with sequential numbering</li>
          <li>One-click copy for immediate use in profiles and signup forms</li>
          <li>Positive, appropriate word choices suitable for all audiences</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-random-username-generator">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Generates creative, available usernames when your first choices are taken</li>
          <li>Produces readable, memorable names that are easy to share and recall</li>
          <li>Saves time brainstorming unique handles across multiple platforms</li>
          <li>Provides ready-to-use names for game characters and online profiles</li>
          <li>Supports batch generation for testing and development purposes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="random-username-generator-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Finding available usernames for social media platforms like Twitter, Instagram, and TikTok</li>
          <li>Creating character names for MMOs, RPGs, and online gaming communities</li>
          <li>Generating test user accounts for QA, development, and staging environments</li>
          <li>Producing anonymous usernames for forums, communities, and discussion boards</li>
          <li>Creating unique handles for streaming platforms like Twitch and YouTube</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="random-username-generator-technical-details">
          Technical Details
        </h2>
        <p>
          The generator maintains curated word lists of 31 adjectives and 31 nouns. Each username combines a randomly
          selected adjective with a randomly selected noun and a 2-4 digit random number suffix. The combination creates
          approximately 31 x 31 x 900 = 864,900 possible unique username combinations.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Random Username Generator is completely free to use with no signup, registration, or usage limits
            required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            No, all processing happens locally in your browser. Your data never leaves your device and is not stored or
            logged anywhere.
          </p>
        </FAQItem>
        <FAQItem heading="How are usernames generated?" headingId="how-are-usernames-generated">
          <p>Usernames combine a random adjective, noun, and number for readable, unique results.</p>
        </FAQItem>
        <FAQItem heading="How many can I generate?" headingId="how-many-can-i-generate">
          <p>Generate up to 200 usernames at once, each independently randomized.</p>
        </FAQItem>
        <FAQItem
          heading="Are generated usernames guaranteed unique?"
          headingId="are-generated-usernames-guaranteed-unique"
        >
          <p>Not guaranteed since random combinations may produce duplicates with large generation counts.</p>
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
