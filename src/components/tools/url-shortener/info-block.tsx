import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the URL Shortener Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-url-shortener-tool">
          What Is the URL Shortener Tool?
        </h2>
        <p className="mb-4">
          The <strong>URL Shortener</strong> is a free online utility that helps you convert long URLs into short,
          manageable links using the TinyURL API, perfect for social media, SMS marketing, and clean campaign URLs.
        </p>
        <p className="mb-4">
          The URL Shortener sends each valid URL to the{' '}
          <a
            href="https://tinyurl.com/"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            TinyURL
          </a>{' '}
          API, which generates a short redirect link. URLs are validated before processing to ensure they include proper
          protocol prefixes (http:// or https://). Invalid URLs are reported with clear error messages. The tool
          processes all valid URLs simultaneously.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="url-shortener-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Bulk URL shortening with batch processing of multiple links simultaneously</li>
          <li>URL validation to ensure only properly formatted web addresses are processed</li>
          <li>TinyURL API integration for reliable short link generation</li>
          <li>Individual copy buttons for each shortened URL</li>
          <li>Copy All button for bulk copying of all valid results</li>
          <li>Clickable shortened links for immediate testing and verification</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-url-shortener">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Creates clean, shareable links optimized for character-limited platforms like Twitter and SMS</li>
          <li>Reduces visual clutter in marketing materials and printed communications</li>
          <li>Provides professional-looking links for brand presentations and campaign materials</li>
          <li>Processes multiple URLs simultaneously for time-saving bulk operations</li>
          <li>Validates URLs before processing to prevent errors and wasted API calls</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="url-shortener-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Shortening links for social media posts with character limitations on Twitter and LinkedIn</li>
          <li>Creating clean SMS marketing links from long tracking URLs and affiliate links</li>
          <li>Preparing shortened URLs for print materials, business cards, and billboards</li>
          <li>Bulk processing of marketing campaign URLs for email newsletters</li>
          <li>Generating short links for QR codes from long destination URLs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="url-shortener-technical-details">
          Technical Details
        </h2>
        <p>
          This tool uses the{' '}
          <a
            href="https://tinyurl.com/"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            TinyURL
          </a>{' '}
          API service for URL shortening and the{' '}
          <a
            href="https://www.npmjs.com/package/valid-url"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            valid-url
          </a>{' '}
          npm package for URL validation. Each URL is validated for proper formatting, then sent to TinyURL&apos;s API
          to generate a shortened redirect link. The tool processes one URL per line in the input, handling each
          independently.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the URL Shortener is completely free to use with no signup, registration, or usage limits required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            Your data is sent to our server-side API for processing only. It is not stored, logged, or shared with any
            third parties and is discarded immediately after processing.
          </p>
        </FAQItem>
        <FAQItem heading="What is a URL shortener?" headingId="what-is-a-url-shortener">
          <p>
            A URL shortener creates a shorter link that redirects to the original destination. Shortened URLs are easier
            to share on social media and in print materials.
          </p>
        </FAQItem>
        <FAQItem heading="How does this tool work?" headingId="how-does-this-tool-work">
          <p>
            This tool uses the TinyURL API to create shortened links. Enter one or more URLs, and valid URLs get
            shortened links that redirect to your destination.
          </p>
        </FAQItem>
        <FAQItem heading="Can I shorten multiple URLs?" headingId="can-i-shorten-multiple-urls">
          <p>Yes, enter one URL per line. The tool processes all valid URLs simultaneously.</p>
        </FAQItem>
        <FAQItem heading="Are shortened URLs permanent?" headingId="are-shortened-urls-permanent">
          <p>URLs shortened through TinyURL are typically permanent. However, keep a backup of your original URLs.</p>
        </FAQItem>
        <FAQItem heading="Can I use this tool offline?" headingId="can-i-use-this-tool-offline">
          <p>This tool requires a server-side API call, so an internet connection is needed for processing.</p>
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
