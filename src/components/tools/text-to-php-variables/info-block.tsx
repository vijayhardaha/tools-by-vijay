import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Text to PHP Variables Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-text-to-php-variables-tool">
          What Is the Text to PHP Variables Tool?
        </h2>
        <p className="mb-4">
          The <strong>Text to PHP Variables</strong> is a free online utility that helps you automatically convert
          multiline text into PHP variable declarations with configurable naming conventions, streamlining configuration
          file and data list creation.
        </p>
        <p className="mb-4">
          The Text to PHP Variables tool processes each line of your input through a slugification pipeline that
          converts text into valid PHP variable names. Each resulting variable name is prefixed with $ and assigned an
          empty string value. You can choose from six naming conventions including camelCase, snake_case, and
          PascalCase.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="text-to-php-variables-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>
            Support for 6 naming conventions: camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, flatcase, and
            UPPERCASE
          </li>
          <li>Automatic slugification of special characters for valid PHP variable names</li>
          <li>Multiline input processing with each line becoming a separate variable declaration</li>
          <li>Reactive output updates as you type or change naming convention</li>
          <li>One-click copy for direct use in PHP files and development environments</li>
          <li>Complete client-side processing with zero data transmission</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-text-to-php-variables">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Eliminates repetitive PHP variable declaration typing for configuration lists and data sets</li>
          <li>Ensures consistent naming convention adherence across PHP projects and teams</li>
          <li>Saves development time when creating test data and configuration arrays</li>
          <li>Handles special character conversion to produce valid PHP identifiers automatically</li>
          <li>Processes entirely in-browser with complete privacy for sensitive code</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="text-to-php-variables-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Generating PHP variable declarations from configuration spreadsheets and data exports</li>
          <li>Creating test data arrays for PHP unit tests and development environments</li>
          <li>Transforming database column lists into PHP variable declarations for ORM models</li>
          <li>Building PHP configuration files from structured text input and documentation</li>
          <li>Preparing form field variable declarations from form specification documents</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="text-to-php-variables-technical-details">
          Technical Details
        </h2>
        <p>
          The tool uses the{' '}
          <a
            href="https://www.npmjs.com/package/slugify"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            slugify
          </a>{' '}
          and{' '}
          <a
            href="https://www.npmjs.com/package/latinize"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            latinize
          </a>{' '}
          libraries to convert text into valid PHP variable identifiers. Each line is slugified, transformed to the
          selected naming convention, and wrapped in PHP variable syntax ($name = &apos;&apos;;). The tool runs entirely
          client-side with no external API calls.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Text to PHP Variables is completely free to use with no signup, registration, or usage limits
            required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            No, all processing happens locally in your browser. Your data never leaves your device and is not stored or
            logged anywhere.
          </p>
        </FAQItem>
        <FAQItem heading="What naming conventions are supported?" headingId="what-naming-conventions-are-supported">
          <p>
            camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, flatcase, and UPPERCASE. Each line becomes a valid
            PHP variable following your chosen convention.
          </p>
        </FAQItem>
        <FAQItem heading="What is the output format?" headingId="what-is-the-output-format">
          <p>Each line becomes $variableName = &apos;&apos;; - ready-to-use PHP code.</p>
        </FAQItem>
        <FAQItem heading="How are special characters handled?" headingId="how-are-special-characters-handled">
          <p>The tool uses slugify and latinize to convert text into valid PHP variable names.</p>
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
