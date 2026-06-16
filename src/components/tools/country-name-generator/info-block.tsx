import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Country Name Generator Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-country-name-generator-tool">
          What Is the Country Name Generator Tool?
        </h2>
        <p className="mb-4">
          The <strong>Country Name Generator</strong> is a free online utility that helps you generate random fictional
          country names for world-building, creative writing, RPG gaming, and simulation projects from a curated
          database.
        </p>
        <p className="mb-4">
          The Country Name Generator randomly selects names from a curated database of over 200 fictional country names.
          Each name is independently and randomly chosen with replacement, allowing for any quantity of names to be
          generated. You can specify the count from 1 to 200 names per generation.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="country-name-generator-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Database of 200+ unique fictional country names for diverse generation</li>
          <li>Configurable quantity from 1 to 200 names per generation batch</li>
          <li>Random selection with independent choice for each name</li>
          <li>Clean, formatted output with sequential numbering for readability</li>
          <li>One-click copy for immediate use in documents and projects</li>
          <li>Client-side generation with no server communication required</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-country-name-generator">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Sparks creativity for authors and game masters building fictional worlds and settings</li>
          <li>Eliminates the struggle of inventing believable country names from scratch</li>
          <li>Provides ready-to-use names for maps, scenarios, and storytelling projects</li>
          <li>Supports rapid prototyping of game environments and narrative settings</li>
          <li>Offers unlimited combinations for diverse and varied naming needs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="country-name-generator-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Creating fictional nations for fantasy and sci-fi novels, stories, and world-building</li>
          <li>Populating RPG campaign settings with diverse country names for exploration</li>
          <li>Generating placeholder data for software testing and database seeding</li>
          <li>Developing fictional maps and geopolitical scenarios for educational activities</li>
          <li>Building simulation and strategy game environments with varied nation names</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="country-name-generator-technical-details">
          Technical Details
        </h2>
        <p>
          The generator uses a curated array of 200+ fictional country names stored client-side. Each generation
          randomly selects names from this array using JavaScript&apos;s Math.random() with uniform distribution. Names
          are independently selected, allowing the same name to appear multiple times in a single generation batch.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Country Name Generator is completely free to use with no signup, registration, or usage limits
            required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            No, all processing happens locally in your browser. Your data never leaves your device and is not stored or
            logged anywhere.
          </p>
        </FAQItem>
        <FAQItem heading="How many country names are included?" headingId="how-many-countries-are-included">
          <p>The tool contains over 200 fictional country names for diverse and creative naming.</p>
        </FAQItem>
        <FAQItem heading="Can I generate multiple names?" headingId="can-i-generate-multiple-names">
          <p>Yes, generate up to 200 names at once by adjusting the count setting.</p>
        </FAQItem>
        <FAQItem heading="Are generated names unique?" headingId="are-names-unique">
          <p>Each name is independently selected, so the same country may appear multiple times in one generation.</p>
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
