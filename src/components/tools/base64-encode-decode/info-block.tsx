import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Base64 Encoder / Decoder Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-base64-encode-decode-tool">
          What Is the Base64 Encoder / Decoder Tool?
        </h2>
        <p className="mb-4">
          The <strong>Base64 Encoder / Decoder</strong> is a free online utility that helps you convert text or data to
          Base64 format and back, essential for embedding images in CSS/HTML, transmitting binary data via text-based
          protocols, and API development.
        </p>
        <p className="mb-4">
          The Base64 Encoder/Decoder uses native browser functions - btoa() for encoding (binary to ASCII) and atob()
          for decoding (ASCII to binary). Encoding converts binary data into a 64-character ASCII subset safe for
          text-based transmission. Decoding reverses the process to retrieve the original data.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="base64-encode-decode-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Two-way encoding and decoding with mode toggle for flexible operation</li>
          <li>Native browser API integration for reliable, standards-compliant conversion</li>
          <li>Real-time output updates as you type or switch modes</li>
          <li>Error handling for invalid Base64 input during decoding</li>
          <li>One-click copy for immediate use in code and configuration</li>
          <li>Complete client-side processing with zero data transmission</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-base64-encode-decode">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Enables safe embedding of binary data in JSON, XML, HTML, and text-based protocols</li>
          <li>Supports image embedding directly in CSS and HTML without external file references</li>
          <li>Facilitates binary data transmission through APIs and messaging systems</li>
          <li>Helps debug and inspect Base64-encoded data in development workflows</li>
          <li>Processes entirely in-browser with no server communication</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="base64-encode-decode-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Embedding small images directly in CSS as data URIs for faster page loads</li>
          <li>Encoding binary data for transmission in JSON API requests and responses</li>
          <li>Converting file content for storage in text-based databases and configuration files</li>
          <li>Debugging Base64-encoded data from email attachments and web services</li>
          <li>Preparing data for Basic Authentication headers and token encoding</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="base64-encode-decode-technical-details">
          Technical Details
        </h2>
        <p>
          This tool uses the native browser functions btoa() and atob(), which are part of the Window API available in
          all modern browsers. btoa() converts binary strings to Base64 ASCII, while atob() reverses the process. The
          tool handles Unicode strings properly by ensuring correct character encoding before conversion.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Base64 Encoder / Decoder is completely free to use with no signup, registration, or usage limits
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
        <FAQItem heading="What is Base64 encoding?" headingId="what-is-base64-encoding">
          <p>
            Base64 encoding converts binary data into ASCII text using 64 printable characters. It is commonly used for
            transmitting data over media designed to handle text.
          </p>
        </FAQItem>
        <FAQItem heading="When should I use Base64?" headingId="when-should-i-use-base64-encoding">
          <p>
            Base64 is useful when embedding binary data in text formats like JSON, XML, or HTML, sending binary data in
            email attachments, or storing binary data in databases.
          </p>
        </FAQItem>
        <FAQItem heading="Is Base64 encoding secure?" headingId="is-base64-encoding-secure">
          <p>
            Base64 is not encryption, it is an encoding scheme. It does not provide any security. Use proper encryption
            like AES if you need to protect your data.
          </p>
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
