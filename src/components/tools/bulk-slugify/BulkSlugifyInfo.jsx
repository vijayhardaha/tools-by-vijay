/**
 * Provides information about the Bulk Slugify Tool
 *
 * This component renders detailed information about the Bulk Slugify Tool,
 * including its purpose, benefits, and credits.
 *
 * @returns {JSX.Element} Information section about the Bulk Slugify Tool
 */
const BulkSlugifyInfo = () => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">
          About Bulk Slugify Tool
        </h2>
        <p className="mb-4">
          Bulk Slugify Tool is an online utility designed to help you convert
          multiple strings—like article titles or page headings—into clean,
          URL-friendly slug formats in one go. You can choose to use hyphens or
          underscores, remove numbers, convert to lowercase, and normalize
          special characters using Latinize. Simply upload or paste your text
          list, adjust your settings, and generate perfect slugs for all your
          entries with a single click.
        </p>
        <p className="mb-4">
          We use the{" "}
          <code className="bg-dark2 rounded px-1 py-0.5">slugify</code> package
          under the hood, with support for{" "}
          <code className="bg-dark2 rounded px-1 py-0.5">latinize</code> to
          ensure that your output works seamlessly across the web and maintains
          compatibility with different languages and character sets.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          Why You Should Use a Bulk Slugify Tool
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>
            Saves time by processing multiple strings into slugs in one batch.
          </li>
          <li>
            Ensures consistency across all your URLs for better SEO and
            readability.
          </li>
          <li>
            Removes unwanted characters, spaces, and symbols that can cause URL
            errors.
          </li>
          <li>
            Ideal for developers and content managers handling large datasets or
            bulk content uploads.
          </li>
          <li>
            Great for automating workflows in blogs, CMS, or e-commerce
            platforms.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          Credits & Source
        </h3>
        <p>
          Maintained by{" "}
          <a
            href="https://x.com/vijayhardaha"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-400 underline"
          >
            Vijay Hardaha
          </a>
          . This tool uses open-source libraries like{" "}
          <a
            href="https://www.npmjs.com/package/slugify"
            className="text-blue-400 underline"
            target="_blank"
            rel="noreferrer"
          >
            slugify
          </a>{" "}
          and{" "}
          <a
            href="https://www.npmjs.com/package/latinize"
            className="text-blue-400 underline"
            target="_blank"
            rel="noreferrer"
          >
            latinize
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default BulkSlugifyInfo;
