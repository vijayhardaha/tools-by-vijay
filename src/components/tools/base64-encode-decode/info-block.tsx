import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Provides information about the Base64 Encode/Decode Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold" id="about-base64-encode-decode-tool">
          About Base64 Encode/Decode Tool
        </h2>
        <p className="mb-4">
          This tool helps you encode or decode Base64 strings easily. Encoding converts data into a Base64 format, while
          decoding reverses this process to retrieve the original data.
        </p>
        <p className="mb-4">
          We use the <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">btoa</code> and{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">atob</code> functions under
          the hood to ensure accurate and reliable encoding and decoding of Base64 strings.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-use-this-tool">
          Why Use This Tool?
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Encode data to Base64 for safe transmission or storage.</li>
          <li>Decode Base64 strings to retrieve the original data.</li>
          <li>Useful for developers working with binary data, APIs, or file encoding.</li>
          <li>Helps debug and troubleshoot Base64-related issues in your projects.</li>
        </ul>
      </section>

      <FAQ>
        <FAQItem heading="What is Base64 encoding?" headingId="what-is-base64-encoding">
          <p>
            Base64 encoding converts binary data into ASCII text using 64 printable characters (A-Z, a-z, 0-9, +, /, and
            = for padding). It is commonly used for transmitting data over media designed to handle text.
          </p>
        </FAQItem>
        <FAQItem heading="When should I use Base64 encoding?" headingId="when-should-i-use-base64-encoding">
          <p>
            Base64 is useful when embedding binary data in text formats like JSON, XML, or HTML, sending binary data in
            email attachments (MIME), storing binary data in databases as text, or including small images directly in
            CSS or HTML.
          </p>
        </FAQItem>
        <FAQItem heading="Is Base64 encoding secure?" headingId="is-base64-encoding-secure">
          <p>
            Base64 is not encryption — it is an encoding scheme. It does not provide any security. Encoded data can be
            easily decoded by anyone. Use proper encryption algorithms like AES or RSA if you need to protect your data.
          </p>
        </FAQItem>
        <FAQItem heading="How much does Base64 increase data size?" headingId="how-much-does-base64-increase-data-size">
          <p>
            Base64 encoding increases data size by approximately 33%. Every 3 bytes of binary data becomes 4 characters
            of Base64 output. This overhead makes it unsuitable for large file transfers.
          </p>
        </FAQItem>
        <FAQItem
          heading="What is the difference between btoa and atob?"
          headingId="what-is-the-difference-between-btoa-and-atob"
        >
          <p>
            <code>btoa</code> (binary to ASCII) encodes a string to Base64. <code>atob</code> (ASCII to binary) decodes
            a Base64 string back to its original form. These are built-in JavaScript functions available in all modern
            browsers.
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
          . This tool uses native browser APIs (<code>btoa</code> and <code>atob</code>) for reliable Base64 encoding
          and decoding directly in your browser.
        </p>
      </Credits>
    </div>
  );
}
