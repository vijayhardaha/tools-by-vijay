import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Text to Array Converter Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-text-to-array-tool">
          What Is the Text to Array Converter Tool?
        </h2>
        <p className="mb-4">
          The <strong>Text to Array Converter</strong> is a free online utility that helps you convert plain text lists
          into structured PHP, JavaScript, JSON, or WordPress arrays with configurable key generation and formatting
          options.
        </p>
        <p className="mb-4">
          The Text to Array Converter parses multiline text input, applies preprocessing options (trimming, empty line
          removal), then formats each line into the selected output format. For associative arrays, it generates keys
          from the text values with optional slugification for clean, URL-friendly keys.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="text-to-array-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Multi-format output: JSON, JavaScript arrays, JavaScript objects, PHP arrays, and WordPress arrays</li>
          <li>Three array structures: simple values, numeric with IDs, and associative key-value pairs</li>
          <li>Optional slugified key generation for clean, consistent associative array keys</li>
          <li>Text preprocessing with trimming and empty line removal options</li>
          <li>WordPress output with __() translation function wrapper for internationalization</li>
          <li>One-click copy for direct use in code development</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-text-to-array">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Eliminates manual array construction for data migration and platform transitions</li>
          <li>Saves hours of formatting time when converting between data representation formats</li>
          <li>Provides WordPress-ready output with translation function integration</li>
          <li>Produces consistent, readable array formatting following language best practices</li>
          <li>Supports multiple output targets from a single text input interface</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="text-to-array-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Converting CSV and text exports into structured JSON for API development</li>
          <li>Transforming configuration lists into PHP arrays for WordPress theme and plugin development</li>
          <li>Generating JavaScript array constants for front-end application development</li>
          <li>Creating test data arrays in multiple formats for cross-platform testing</li>
          <li>Building dropdown option arrays and select menu data structures for web forms</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="text-to-array-technical-details">
          Technical Details
        </h2>
        <p>
          The tool processes text entirely client-side. It uses{' '}
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
          for key generation in associative arrays. Output formatting uses custom JavaScript logic for each target
          language, applying proper syntax, indentation, and language-specific conventions.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Text to Array Converter is completely free to use with no signup, registration, or usage limits
            required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            No, all processing happens locally in your browser. Your data never leaves your device and is not stored or
            logged anywhere.
          </p>
        </FAQItem>
        <FAQItem heading="What formats can I convert to?" headingId="what-formats-can-i-convert-to">
          <p>Convert text to JSON arrays, JavaScript arrays, PHP arrays, and WordPress-compatible PHP arrays.</p>
        </FAQItem>
        <FAQItem
          heading="What is the difference between array types?"
          headingId="what-is-the-difference-between-array-types"
        >
          <p>
            Simple arrays store values. Numeric arrays add incrementing IDs. Associative arrays create key-value pairs
            with optional slugified keys.
          </p>
        </FAQItem>
        <FAQItem heading="What are slugified keys?" headingId="what-are-slugified-keys">
          <p>
            Slugified keys convert values to URL-friendly format, for example &quot;United States&quot; becomes
            &quot;united_states&quot;.
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
