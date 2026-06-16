import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Text Case Changer Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-text-case-changer-tool">
          What Is the Text Case Changer Tool?
        </h2>
        <p className="mb-4">
          The <strong>Text Case Changer</strong> is a free online utility that helps you instantly convert text between
          various cases including camelCase, snake_case, PascalCase, UPPERCASE, lowercase, and more for programming and
          content formatting.
        </p>
        <p className="mb-4">
          The Text Case Changer processes your input text through JavaScript string transformation functions. It splits
          text into words, then reassembles them according to your selected case convention. Each word is transformed
          appropriately - capitalized, lowercased, or left as-is - then joined with the correct separator for the chosen
          case.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="text-case-changer-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>
            Support for 8+ case formats: camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, flatcase, UPPERCASE,
            lowercase, and more
          </li>
          <li>Reactive output updates as you type or change case selection</li>
          <li>Multiline text support preserving line structure in output</li>
          <li>Client-side processing with zero data transmission for privacy</li>
          <li>One-click copy for immediate use in code and content</li>
          <li>Clear and reset options for quick workflow iteration</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-text-case-changer">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Eliminates manual text reformatting errors in code and documentation</li>
          <li>Ensures consistent naming convention adherence across large projects</li>
          <li>Speeds up development workflows with instant case conversion</li>
          <li>Handles batch processing of multiple lines simultaneously</li>
          <li>Supports both developer naming conventions and content formatting needs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="text-case-changer-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Converting variable names between camelCase and snake_case for cross-language projects</li>
          <li>Formatting database column names and API response keys consistently</li>
          <li>Preparing content for title case and sentence case formatting in publications</li>
          <li>Transforming configuration keys and environment variable names to UPPERCASE</li>
          <li>Normalizing user-generated input for consistent data storage and processing</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="text-case-changer-technical-details">
          Technical Details
        </h2>
        <p>
          All case conversion happens client-side using JavaScript string manipulation. The tool splits input into
          words, applies the selected case transformation rules, and rejoins them with appropriate separators. No
          external libraries are required - all transformations use native JavaScript regular expressions and string
          methods.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Text Case Changer is completely free to use with no signup, registration, or usage limits required.
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
        <FAQItem heading="What text cases are supported?" headingId="what-text-cases-are-supported">
          <p>
            This tool supports camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, flatcase, UPPERCASE, and
            lowercase conversions.
          </p>
        </FAQItem>
        <FAQItem heading="Is my text sent to a server?" headingId="text-case-changer-is-my-text-sent-to-a-server">
          <p>No, all processing happens in your browser. Your data never leaves your device.</p>
        </FAQItem>
        <FAQItem heading="Can I convert multiple lines?" headingId="can-i-convert-multiple-lines">
          <p>Yes, the tool handles multiline text, preserving line structure in the output.</p>
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
