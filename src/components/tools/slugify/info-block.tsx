import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Slugify Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-slugify-tool">
          What Is the Slugify Tool?
        </h2>
        <p className="mb-4">
          The <strong>Slugify</strong> is a free online utility that helps you convert any text into clean,
          SEO-optimized URL slugs, perfect for creating readable, search-engine-friendly permalinks for blogs and
          websites.
        </p>
        <p className="mb-4">
          The Slugify Tool processes your input text by removing special characters, converting spaces to separators
          (hyphens or underscores), transforming to lowercase, and normalizing accented characters into ASCII
          equivalents using the slugify and latinize open-source libraries. All processing happens instantly in your
          browser with no server round-trips.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="slugify-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Custom separator selection between hyphens (recommended for SEO) and underscores</li>
          <li>Lowercase conversion for consistent, standardized URL formatting</li>
          <li>Optional number removal from generated slugs</li>
          <li>Unicode and international character normalization via Latinize</li>
          <li>Instant reactive output updates as you type or adjust options</li>
          <li>One-click copy to clipboard for rapid workflow integration</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-slugify">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Improves search engine rankings with clean, keyword-rich URL structures</li>
          <li>Prevents broken links caused by spaces, special characters, and unsupported symbols</li>
          <li>Boosts click-through rates with readable, user-friendly URL paths</li>
          <li>Saves development time by eliminating manual slug formatting</li>
          <li>Ensures international compatibility by normalizing accented and special characters</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="slugify-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>
            Generating SEO-friendly permalinks for blog posts and articles in CMS platforms like WordPress and Ghost
          </li>
          <li>Creating clean dynamic routes in modern frameworks such as Next.js, Nuxt, Angular, and Gatsby</li>
          <li>Automating product URL generation for e-commerce platforms and catalog management systems</li>
          <li>Formatting readable, shareable URLs for marketing campaigns and landing pages</li>
          <li>Processing bulk content migrations and static site generation with Jekyll, Hugo, or Eleventy</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="slugify-technical-details">
          Technical Details
        </h2>
        <p>
          This tool leverages two battle-tested open-source JavaScript libraries. The{' '}
          <a
            href="https://www.npmjs.com/package/slugify"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            slugify
          </a>{' '}
          package provides robust string-to-slug conversion with configurable separators and strict mode filtering. The{' '}
          <a
            href="https://www.npmjs.com/package/latinize"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            latinize
          </a>{' '}
          package handles Unicode normalization, converting accented characters like &eacute;, &ccedil;, &ntilde;, and
          &uuml; into their ASCII equivalents for universal browser compatibility.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>Yes, the Slugify is completely free to use with no signup, registration, or usage limits required.</p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            No, all processing happens locally in your browser. Your data never leaves your device and is not stored or
            logged anywhere.
          </p>
        </FAQItem>
        <FAQItem heading="What is a URL slug?" headingId="what-is-a-url-slug">
          <p>
            A URL slug is the readable part of a URL that identifies a specific page. It is derived from the page title
            and uses hyphens or underscores to separate words, making URLs clean and SEO-friendly.
          </p>
        </FAQItem>
        <FAQItem heading="Why are slugs important for SEO?" headingId="why-are-slugs-important-for-seo">
          <p>
            Search engines use URL slugs to understand page content. Clean, keyword-rich slugs improve click-through
            rates and help with rankings. Slugs like /best-javascript-frameworks are far more effective than /page123.
          </p>
        </FAQItem>
        <FAQItem heading="Can I use underscores in slugs?" headingId="can-i-use-underscores-in-slugs">
          <p>
            Yes, this tool supports both hyphens and underscores as separators. Hyphens are generally recommended for
            SEO since Google treats them as word separators, but underscores are still widely used in many CMS
            platforms.
          </p>
        </FAQItem>
        <FAQItem
          heading="Does this tool handle international characters?"
          headingId="does-this-tool-handle-international-characters"
        >
          <p>
            Yes, it uses the latinize library to normalize accented characters like &eacute;, &ccedil;, &ntilde; into
            their ASCII equivalents, ensuring your slugs are universally compatible.
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
