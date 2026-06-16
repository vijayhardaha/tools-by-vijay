import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the URL Decoder / Encoder Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-url-decoder-encoder-tool">
          What Is the URL Decoder / Encoder Tool?
        </h2>
        <p className="mb-4">
          The <strong>URL Decoder / Encoder</strong> is a free online utility that helps you encode or decode URL
          components to ensure special characters are transmitted correctly across browsers, servers, and API endpoints.
        </p>
        <p className="mb-4">
          The URL Decoder/Encoder uses native browser functions - encodeURIComponent() for encoding and
          decodeURIComponent() for decoding. Encoding converts special characters (spaces, &amp;, ?, #, etc.) into
          percent-encoded sequences. Decoding reverses percent-encoded sequences back to their original characters.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="url-decoder-encoder-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Two-way encoding and decoding with simple mode toggle</li>
          <li>Native browser API integration for standards-compliant conversion</li>
          <li>Percent-encoding for all special characters including spaces, symbols, and Unicode</li>
          <li>Real-time output updates as you type, paste, or switch modes</li>
          <li>Error handling for malformed percent-encoded input during decoding</li>
          <li>Complete client-side processing with zero data transmission</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-url-decoder-encoder">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Ensures URLs with special characters are correctly transmitted across networks and servers</li>
          <li>Prevents broken links and malformed API requests caused by unencoded characters</li>
          <li>Helps debug URL encoding issues in web applications and API integrations</li>
          <li>Supports international characters and Unicode in URL parameters</li>
          <li>Processes entirely in-browser with complete privacy for sensitive URL data</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="url-decoder-encoder-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Encoding query string parameters for API requests to prevent parsing errors</li>
          <li>Decoding percent-encoded URLs from web server logs for readability</li>
          <li>Preparing user-generated content for safe URL inclusion in web applications</li>
          <li>Debugging URL encoding issues in form submissions and redirect handling</li>
          <li>Converting international characters to percent-encoded format for URL compatibility</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="url-decoder-encoder-technical-details">
          Technical Details
        </h2>
        <p>
          This tool uses the native browser functions encodeURIComponent() and decodeURIComponent(). Unlike encodeURI(),
          which preserves URL structure characters, encodeURIComponent() encodes ALL special characters, making it
          suitable for encoding individual query parameters and URL components.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the URL Decoder / Encoder is completely free to use with no signup, registration, or usage limits
            required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            No, all processing happens locally in your browser. Your data never leaves your device and is not stored or
            logged anywhere.
          </p>
        </FAQItem>
        <FAQItem heading="What is URL encoding?" headingId="what-is-url-encoding">
          <p>
            URL encoding converts special characters into a format safe for transmission. For example, spaces become %20
            and & becomes %26.
          </p>
        </FAQItem>
        <FAQItem heading="When should I encode a URL?" headingId="when-should-i-encode-a-url">
          <p>
            Encode URLs when they contain special characters, spaces, or non-ASCII characters. Common scenarios include
            query strings and API requests.
          </p>
        </FAQItem>
        <FAQItem heading="Is URL encoding reversible?" headingId="is-url-encoding-reversible">
          <p>Yes, URL encoding is fully reversible. Encoding followed by decoding returns the original string.</p>
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
