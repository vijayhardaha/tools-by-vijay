import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Expanded and SEO-optimized version of the Bulk Slugify Tool description.
 * Covers use cases, examples, instructions, and keyword-rich context.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="mt-12 space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-the-bulk-slugify-tool">
          What is the Bulk Slugify Tool?
        </h2>
        <p className="mb-4">
          The <strong>Bulk Slugify Tool</strong> is a powerful and efficient online utility that allows you to convert
          multiple strings into clean, SEO-friendly slugs at once. It is specifically designed for developers, SEO
          experts, marketers, and content managers who handle large volumes of titles, product names, blog post
          headings, or dynamic routes.
        </p>
        <p className="mb-4">
          This tool automates the process of slug generation by transforming long lists of text into web-safe,
          lowercase, hyphenated or underscored strings with support for character normalization, removal of special
          symbols, and exclusion of unwanted elements like numbers. Instead of processing one string at a time, you can
          now paste or upload dozens—or even hundreds—of titles and convert them all in one batch.
        </p>
        <p className="mb-4">
          It uses the robust{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">slugify</code> package in
          combination with{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">latinize</code> to handle
          international characters and accents, ensuring that your output slugs are universally compatible and
          web-ready.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="how-the-bulk-slugify-tool-works">
          How the Bulk Slugify Tool Works
        </h2>
        <p className="mb-4">The Bulk Slugify Tool works in three simple steps:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Input:</strong> Paste a list of titles, product names, or headings into the input field. Each line
            will be treated as a separate item.
          </li>
          <li>
            <strong>Configure Options:</strong> Choose whether to use hyphens or underscores, convert to lowercase,
            remove numbers, or normalize characters using Latinize.
          </li>
          <li>
            <strong>Generate:</strong> Click the button to instantly create a list of clean, SEO-friendly slugs. You can
            copy them or export them for use in your CMS or codebase.
          </li>
        </ol>
        <p className="mt-4">
          This tool saves hours of manual editing, ensures uniform formatting, and helps maintain high-quality,
          structured URLs.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-a-bulk-slug-generator">
          Why Use a Bulk Slug Generator?
        </h2>
        <p className="mb-4">
          A bulk slug generator is essential when dealing with dynamic content, large databases, or automated publishing
          pipelines. Here’s why:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Time-saving:</strong> Convert hundreds of strings into clean slugs in seconds.
          </li>
          <li>
            <strong>Consistency:</strong> Maintain consistent URL patterns across your entire website or platform.
          </li>
          <li>
            <strong>SEO optimization:</strong> Slugs are optimized for search engines with relevant keywords and clean
            formatting.
          </li>
          <li>
            <strong>Error reduction:</strong> Automatically removes invalid characters, extra spaces, or special symbols
            that cause broken URLs.
          </li>
          <li>
            <strong>Multi-language support:</strong> Convert special characters like “é”, “ç”, or “ñ” into plain English
            equivalents.
          </li>
        </ul>
        <p className="mt-4">
          Whether you’re launching a new site, importing data into an e-commerce store, or setting up blog routes, this
          tool helps you maintain perfect slug formatting at scale.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="top-use-cases">
          Top Use Cases
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Generating SEO-friendly URLs for bulk product listings on e-commerce platforms.</li>
          <li>Transforming a CSV export of blog titles into usable slugs for programmatic uploads.</li>
          <li>Creating slugs from database records for content migration or CMS automation.</li>
          <li>Generating dynamic page routes in frameworks like Next.js or Nuxt.</li>
          <li>Improving URL structure for large documentation sites or knowledge bases.</li>
        </ul>
        <p className="mt-4">
          This tool fits seamlessly into workflows for developers, marketers, SEO analysts, and data managers alike.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-makes-this-tool-different">
          What Makes This Tool Different?
        </h2>
        <p className="mb-4">
          There are many slug generators online, but few are built for batch processing or large-scale workflows. This
          Bulk Slugify Tool offers:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>High performance:</strong> Process large text blocks instantly in your browser.
          </li>
          <li>
            <strong>Flexible settings:</strong> Customize slug formatting based on your system’s requirements.
          </li>
          <li>
            <strong>Developer friendly:</strong> Ideal for integration with static site generators, headless CMSs, or
            automation pipelines.
          </li>
          <li>
            <strong>Free and accessible:</strong> No signup, no ads, and no limits on how many entries you can slugify.
          </li>
        </ul>
      </section>
      <FAQ>
        <FAQItem heading="What is the Bulk Slugify Tool?" headingId="what-is-the-bulk-slugify-tool">
          <p>
            The Bulk Slugify Tool lets you convert multiple strings into SEO-friendly slugs at once. It is designed for
            developers and content managers who need to process large volumes of titles or headings efficiently.
          </p>
        </FAQItem>
        <FAQItem heading="How many items can I process at once?" headingId="how-many-items-can-i-process-at-once">
          <p>
            There is no hard limit. You can paste hundreds of lines at once. All processing happens client-side in your
            browser, so performance depends on your device.
          </p>
        </FAQItem>
        <FAQItem heading="What options are available?" headingId="what-options-are-available">
          <p>
            You can choose between hyphens and underscores, enable lowercase conversion, remove numbers, normalize
            international characters, and keep or remove empty lines.
          </p>
        </FAQItem>
        <FAQItem heading="What are common use cases?" headingId="what-are-common-use-cases">
          <p>
            Common use cases include generating SEO-friendly URLs for e-commerce catalogs, transforming blog titles
            during CMS migrations, and creating dynamic routes for web applications.
          </p>
        </FAQItem>
        <FAQItem heading="Is this tool free?" headingId="is-this-tool-free">
          <p>
            Yes, the tool is completely free to use with no signup required. All processing happens locally for maximum
            privacy.
          </p>
        </FAQItem>
      </FAQ>

      <Credits heading="Credits & Source Libraries" headingId="credits-source-libraries">
        <p className="mb-4">
          Built and maintained by{' '}
          <a
            href="https://x.com/vijayhardaha"
            className="font-medium text-pink-500 underline hover:no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vijay Hardaha
          </a>
          , this tool leverages modern, battle-tested open-source libraries:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a
              href="https://www.npmjs.com/package/slugify"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              slugify
            </a>{' '}
            – A lightweight JavaScript library for creating slugs from strings.
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/latinize"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              latinize
            </a>{' '}
            – Helps normalize Unicode and accented characters into basic Latin.
          </li>
        </ul>
        <p className="mt-4">
          Together, these packages ensure fast, accurate, and multilingual slug generation for all modern web use cases.
        </p>
      </Credits>
    </div>
  );
}
