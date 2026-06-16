import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Bulk Slugify Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-bulk-slugify-tool">
          What Is the Bulk Slugify Tool?
        </h2>
        <p className="mb-4">
          The <strong>Bulk Slugify</strong> is a free online utility that helps you transform multiple lines of text
          into SEO-friendly slugs simultaneously, ideal for batch processing large sets of URLs for e-commerce or
          migrations.
        </p>
        <p className="mb-4">
          The Bulk Slugify Tool processes each line of your input independently through the same slugification pipeline
          - removing special characters, normalizing Unicode, converting case, and applying your chosen separator. Each
          line becomes a clean, URL-safe slug, and results are returned line-by-line for easy copying and integration.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="bulk-slugify-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Batch processing of hundreds of lines simultaneously with instant results</li>
          <li>Custom separator selection with hyphens or underscores per line</li>
          <li>Lowercase conversion toggle for consistent formatting across all slugs</li>
          <li>Number removal option for cleaner categorical URL structures</li>
          <li>International character normalization via Latinize</li>
          <li>Empty line handling to maintain or filter blank entries</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-bulk-slugify">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Eliminates hours of manual slug creation for large content libraries and product catalogs</li>
          <li>Maintains consistent URL patterns and formatting across entire websites and platforms</li>
          <li>Reduces errors from manual data entry with automated special character filtering</li>
          <li>Provides multi-language support with Unicode and accented character normalization</li>
          <li>Accelerates content migration workflows for CMS transitions and site launches</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="bulk-slugify-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Generating SEO-optimized URLs for thousands of e-commerce product listings in bulk</li>
          <li>Transforming CSV or spreadsheet exports of blog titles into ready-to-use slugs for CMS uploads</li>
          <li>Creating dynamic page routes during content migration between platforms and frameworks</li>
          <li>Building URL structures for large documentation sites, knowledge bases, and help centers</li>
          <li>Processing database records into URL-friendly formats for API endpoints and headless CMS systems</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="bulk-slugify-technical-details">
          Technical Details
        </h2>
        <p>
          The Bulk Slugify Tool combines the{' '}
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
          open-source libraries with custom line-by-line processing logic. Each line is independently processed through
          the full slugification pipeline, ensuring that individual formatting rules apply consistently across all
          entries. The tool runs entirely client-side with no data transmission.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>Yes, the Bulk Slugify is completely free to use with no signup, registration, or usage limits required.</p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            <p>
              No, all processing happens locally in your browser. Your data never leaves your device and is not stored
              or logged anywhere.
            </p>
          </p>
        </FAQItem>
        <FAQItem heading="How many items can I process at once?" headingId="how-many-items-can-i-process-at-once">
          <p>
            There is no hard limit. You can paste hundreds of lines at once. All processing happens client-side in your
            browser, so performance depends on your device.
          </p>
        </FAQItem>
        <FAQItem
          heading="What are common use cases for bulk slugification?"
          headingId="what-are-common-use-cases-for-bulk-slugification"
        >
          <p>
            Common use cases include generating SEO-friendly URLs for e-commerce catalogs, transforming blog titles
            during CMS migrations, and creating dynamic routes for web applications.
          </p>
        </FAQItem>
        <FAQItem heading="What options are available?" headingId="bulk-slugify-what-options-are-available">
          <p>
            You can choose between hyphens and underscores, enable lowercase conversion, remove numbers, normalize
            international characters, and keep or remove empty lines.
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
