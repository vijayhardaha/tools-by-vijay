import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the URL Decoder/Encoder Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold" id="about-url-decoder-encoder-tool">
          About URL Decoder/Encoder Tool
        </h2>
        <p className="mb-4">
          This tool helps you encode or decode URLs easily. Encoding ensures that special characters in a URL are
          converted to a format that can be transmitted over the internet. Decoding reverses this process, converting
          encoded URLs back to their original form.
        </p>
        <p className="mb-4">
          We use the{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">encodeURIComponent</code> and{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">decodeURIComponent</code>{' '}
          functions under the hood to ensure accurate and reliable encoding and decoding of URLs.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-use-this-tool">
          Why Use This Tool?
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Encode URLs to make them safe for transmission over the internet.</li>
          <li>Decode URLs to view their original content in a human-readable format.</li>
          <li>Useful for developers working with web applications, APIs, and query strings.</li>
          <li>Helps debug and troubleshoot URL-related issues in your projects.</li>
        </ul>
      </section>
      <FAQ>
        <FAQItem heading="What is URL encoding?" headingId="what-is-url-encoding">
          <p>
            URL encoding converts special characters into a format safe for transmission. For example, spaces become{' '}
            <code>%20</code> and special characters like <code>&amp;</code> become <code>%26</code>.
          </p>
        </FAQItem>
        <FAQItem heading="When should I encode a URL?" headingId="when-should-i-encode-a-url">
          <p>
            Encode URLs when they contain special characters, spaces, or non-ASCII characters. Common scenarios include
            query strings, API requests, and user-generated content in links.
          </p>
        </FAQItem>
        <FAQItem heading="What is encodeURIComponent?" headingId="what-is-encodeuricomponent">
          <p>
            <code>encodeURIComponent</code> encodes all special characters in a URL component, making it suitable for
            query string parameters. This tool uses both <code>encodeURIComponent</code> and{' '}
            <code>decodeURIComponent</code>.
          </p>
        </FAQItem>
        <FAQItem heading="Is URL encoding reversible?" headingId="is-url-encoding-reversible">
          <p>
            Yes, URL encoding is fully reversible. Encoding followed by decoding returns the original string, provided
            the encoding was done correctly.
          </p>
        </FAQItem>
        <FAQItem heading="Why would I need to decode a URL?" headingId="why-would-i-need-to-decode-a-url">
          <p>
            Decoding is useful when reading encoded URLs from logs, APIs, or user input. It converts percent-encoded
            sequences back to their original characters for readability.
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
          . This tool leverages built-in JavaScript functions like{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            encodeURIComponent
          </a>{' '}
          and{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            decodeURIComponent
          </a>{' '}
          for its functionality.
        </p>
      </Credits>
    </div>
  );
}
