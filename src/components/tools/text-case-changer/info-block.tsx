import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the Text Case Changer Tool, including its purpose,
 * usage instructions, examples, and benefits.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold" id="about-text-case-changer">
          About Text Case Changer
        </h2>
        <p className="mb-4">
          The Text Case Changer tool helps you convert text into various cases such as camelCase, snake_case,
          PascalCase, UPPERCASE, and lowercase. This tool is useful for developers and content creators who need
          consistent text formatting.
        </p>
        <p className="mb-4">
          All processing happens directly in your browser – your text is never sent to a server, ensuring privacy and
          security when working with sensitive data.
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
            <strong>Select Text Case:</strong> Choose the desired text case from the dropdown menu.
          </li>
          <li>
            <strong>Convert:</strong> Click the “Convert” button to change the text case.
          </li>
          <li>
            <strong>Copy Result:</strong> Use the copy button to copy the converted text.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="example-usage">
          Example Usage
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium" id="input-example">
              Input Example:
            </h4>
            <pre className="bg-secondary overflow-x-auto rounded-xl p-4 text-sm">{`hello world\nexample text`}</pre>
          </div>

          <div>
            <h4 className="mb-2 font-medium" id="output-example">
              Output Example:
            </h4>
            <pre className="bg-secondary overflow-x-auto rounded-xl p-4 text-sm">{`helloWorld\nexampleText`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-use-this-tool">
          Why Use This Tool
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Quickly convert text into various cases for consistent formatting.</li>
          <li>Save time when working with repetitive text transformations.</li>
          <li>Ensure proper case formatting for programming or content creation.</li>
          <li>Prepare text for use in applications, scripts, or documents.</li>
        </ul>
      </section>
      <FAQ>
        <FAQItem heading="What text cases are supported?" headingId="what-text-cases-are-supported">
          <p>
            This tool supports Sentence case, lower case, UPPER CASE, Capitalized Case, Alternating Case, Title Case,
            and Inverse Case.
          </p>
        </FAQItem>
        <FAQItem
          heading="What is the difference between Title and Capitalized Case?"
          headingId="what-is-the-difference-between-title-and-capitalized-case"
        >
          <p>
            Title Case capitalizes the first letter of every word. Capitalized Case capitalizes the first letter of each
            line.
          </p>
        </FAQItem>
        <FAQItem heading="Is my text sent to a server?" headingId="is-my-text-sent-to-a-server">
          <p>No, all processing happens in your browser. Your data never leaves your device.</p>
        </FAQItem>
        <FAQItem heading="Can I convert multiple lines?" headingId="can-i-convert-multiple-lines">
          <p>Yes, the tool handles multiline text, preserving line structure in the output.</p>
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
          . This tool is built to simplify the process of converting text into various cases.
        </p>
      </Credits>
    </div>
  );
}
