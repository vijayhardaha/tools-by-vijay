import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the QR Code Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold" id="about-qr-code-tool">
          About QR Code Tool
        </h2>
        <p className="mb-4">
          QR Code Tool is an online utility that helps you generate QR codes for any text, URL, or other data. You can
          customize the size, color, and format of the QR code to suit your needs. Simply input your data, adjust the
          settings, and download your QR code instantly.
        </p>
        <p className="mb-4">
          This tool leverages open-source libraries to ensure high-quality QR code generation that works seamlessly
          across various devices and platforms.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-you-should-use-a-qr-code-tool">
          Why You Should Use a QR Code Tool
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Quickly share links, contact details, or other information.</li>
          <li>Enhance user engagement with scannable, interactive codes.</li>
          <li>Perfect for marketing campaigns, product packaging, and event promotions.</li>
          <li>Customizable options to match your branding or design requirements.</li>
          <li>Great for developers integrating QR codes into apps or websites.</li>
        </ul>
      </section>
      <FAQ>
        <FAQItem heading="What is a QR code?" headingId="what-is-a-qr-code">
          <p>
            A QR code (Quick Response) is a two-dimensional barcode that stores data like URLs or text. It can be
            scanned by smartphones to quickly access the encoded data.
          </p>
        </FAQItem>
        <FAQItem heading="What data can be encoded?" headingId="what-data-can-be-encoded">
          <p>
            QR codes can store URLs, text, phone numbers, emails, Wi-Fi credentials, and more. This tool supports
            encoding text or URL data.
          </p>
        </FAQItem>
        <FAQItem heading="How do I change the size?" headingId="how-do-i-change-the-size">
          <p>Use the slider to adjust from 128px to 512px. Larger codes are easier to scan from a distance.</p>
        </FAQItem>
        <FAQItem heading="Is this tool free?" headingId="is-this-tool-free">
          <p>Yes, the QR code generator is completely free to use with no limits.</p>
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
          . This tool uses open-source libraries to ensure reliable and efficient QR code generation.
        </p>
      </Credits>
    </div>
  );
}
