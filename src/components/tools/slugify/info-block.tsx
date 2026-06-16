import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Fully expanded version of the Slugify Tool information for SEO purposes.
 * Includes in-depth explanations, keyword-rich content, and added sections.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="mt-12 space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-a-slug-and-why-it-matters">
          What is a Slug and Why It Matters?
        </h2>
        <p className="mb-4">
          A <strong>slug</strong> is the part of a URL that identifies a particular page in a format that’s easy to read
          for both humans and search engines. Typically found at the end of a URL, slugs are derived from page titles
          and contain keywords separated by hyphens or underscores. For example, a blog titled “10 Best JavaScript
          Frameworks in 2025” might generate a slug like{' '}
          <code className="text-sm">10-best-javascript-frameworks-2025</code>.
        </p>
        <p className="mb-4">
          Clean slugs improve user experience, help with site navigation, and play a critical role in{' '}
          <strong>on-page SEO</strong>. Search engines like Google use slugs to understand the context of a page, while
          users are more likely to click on links that look readable and relevant.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="about-the-slugify-tool">
          About the Slugify Tool
        </h2>
        <p className="mb-4">
          The <strong>Slugify Tool</strong> is a free, web-based utility designed to automatically convert any text—such
          as blog post titles, product names, or article headlines—into a properly formatted, URL-safe slug. It ensures
          that your URLs are <strong>clean, readable, and optimized for search engines</strong>. With just one click,
          you can transform messy strings full of spaces and special characters into slugs like:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <code>My First Blog Post!</code> → <code>my-first-blog-post</code>
          </li>
          <li>
            <code>2025: What&apos;s New in Tech?</code> → <code>2025-whats-new-in-tech</code>
          </li>
        </ul>
        <p className="mt-4">
          Whether you&apos;re a content manager creating dozens of URLs daily or a developer working on a CMS, this tool
          simplifies slug creation and avoids manual cleanup.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="features-of-the-slugify-tool">
          Features of the Slugify Tool
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Custom separator support</strong> (hyphens or underscores)
          </li>
          <li>
            <strong>Lowercase conversion</strong> for consistency
          </li>
          <li>
            <strong>Option to remove numbers</strong> from the slug
          </li>
          <li>
            <strong>Unicode character normalization</strong> via Latinize
          </li>
          <li>
            <strong>Instant preview</strong> of the final slug output
          </li>
          <li>
            <strong>Clipboard copy</strong> with one click
          </li>
        </ul>
        <p className="mt-4">
          These features give you complete control over how your slugs are formatted, making the tool useful for both
          general content creators and advanced technical users.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-this-slugify-tool">
          Why Use This Slugify Tool?
        </h2>
        <p className="mb-4">
          The Slugify Tool simplifies the process of transforming titles into URL-friendly strings, which is crucial for
          maintaining a clean and structured website. Here&apos;s why you should use this tool:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Improve SEO:</strong> Search engines prefer clean, descriptive URLs containing relevant keywords.
          </li>
          <li>
            <strong>Avoid Errors:</strong> Prevent broken links caused by spaces, special characters, or accents in
            URLs.
          </li>
          <li>
            <strong>Boost CTR:</strong> Slugs that look clean and relevant are more likely to be clicked.
          </li>
          <li>
            <strong>Save Time:</strong> No need to manually format or strip special characters from each title.
          </li>
          <li>
            <strong>International Support:</strong> Normalize accented characters to ASCII for consistent behavior.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="common-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Blog platforms</strong> like WordPress, Ghost, and custom CMS solutions
          </li>
          <li>
            <strong>Dynamic routing</strong> in frameworks like Next.js, Nuxt, Angular, or Gatsby
          </li>
          <li>
            <strong>E-commerce platforms</strong> generating product slugs automatically
          </li>
          <li>
            <strong>Marketing pages</strong> that require readable, shareable URLs
          </li>
          <li>
            <strong>Static site generators</strong> such as Jekyll, Hugo, or Eleventy
          </li>
        </ul>
        <p className="mt-4">
          Whether you&apos;re optimizing blog post links, creating clean category paths, or generating routes in your
          frontend framework, this tool can be part of your regular publishing workflow.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="how-it-works-under-the-hood">
          How It Works (Under the Hood)
        </h2>
        <p className="mb-4">
          This tool is built using the open-source <code className="text-sm font-medium text-pink-500">slugify</code>{' '}
          package, which provides advanced string manipulation capabilities. We’ve also integrated{' '}
          <code className="text-sm font-medium text-pink-500">latinize</code> to handle special characters and accents.
          Here&apos;s what happens behind the scenes:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Text is trimmed and converted to lowercase (unless specified otherwise).</li>
          <li>All special characters (e.g., &, %, $, #) are removed.</li>
          <li>Spaces are replaced with a hyphen or underscore, based on user preference.</li>
          <li>Unicode characters are normalized into ASCII using Latinize.</li>
          <li>The final string is returned as a clean, URL-friendly slug.</li>
        </ol>
      </section>
      <FAQ>
        <FAQItem heading="What is a URL slug?" headingId="what-is-a-url-slug">
          <p>
            A URL slug is the part of a URL that identifies a specific page in a human-readable format. Slugs are
            derived from page titles and use hyphens or underscores to separate words, making URLs clean and
            SEO-friendly.
          </p>
        </FAQItem>
        <FAQItem heading="How does this slugify tool work?" headingId="how-does-this-slugify-tool-work">
          <p>
            This tool uses the <code>slugify</code> package combined with <code>latinize</code> to transform text into
            URL-safe slugs. It strips special characters, replaces spaces with your chosen separator, converts to
            lowercase, and normalizes accented characters into ASCII equivalents.
          </p>
        </FAQItem>
        <FAQItem heading="Why are slugs important for SEO?" headingId="why-are-slugs-important-for-seo">
          <p>
            Search engines use URL slugs to understand page content. Clean, keyword-rich slugs improve click-through
            rates and help with rankings. Slugs like <code>/best-javascript-frameworks</code> are far more effective
            than <code>/page123</code>.
          </p>
        </FAQItem>
        <FAQItem heading="Can I use underscores in slugs?" headingId="can-i-use-underscores-in-slugs">
          <p>
            Yes, this tool supports both hyphens and underscores as separators. While hyphens are generally recommended
            for SEO (Google treats them as word separators), underscores are still widely used in many CMS platforms.
          </p>
        </FAQItem>
        <FAQItem
          heading="Does this tool handle international characters?"
          headingId="does-this-tool-handle-international-characters"
        >
          <p>
            Yes, it uses the <code>latinize</code> library to normalize accented characters like <code>é</code>,{' '}
            <code>ç</code>, <code>ñ</code> into their ASCII equivalents, ensuring your slugs are universally compatible.
          </p>
        </FAQItem>
      </FAQ>

      <Credits heading="Credits & Source Libraries" headingId="credits-source-libraries">
        <p className="mb-4">
          This project is developed and maintained by{' '}
          <a
            href="https://x.com/vijayhardaha"
            className="font-medium text-pink-500 underline hover:no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vijay Hardaha
          </a>
          . It uses the following open-source libraries to handle text transformation and normalization:
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
            – For converting strings into slugs
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
            – For replacing accented characters with ASCII equivalents
          </li>
        </ul>
      </Credits>
    </div>
  );
}
