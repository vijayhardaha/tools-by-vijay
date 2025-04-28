/**
 * Provides information about the Slugify Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information
 */
const SlugifyInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Slugify Tool</h2>
        <p className="mb-4">
          Slugify Tool is an online utility that helps you convert any string—like article titles or
          page headings—into a clean, URL-friendly slug format. You can choose to use hyphens or
          underscores, remove numbers, convert to lowercase, and even normalize special characters
          using Latinize. Simply enter your text, adjust your settings, and generate a perfect slug
          in one click.
        </p>
        <p className="mb-4">
          We use the{" "}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">
            slugify
          </code>{" "}
          package under the hood, with support for{" "}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">
            latinize
          </code>{" "}
          to ensure that your output works seamlessly across the web and maintains compatibility
          with different languages and character sets.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why You Should Use a Slugify Tool</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>
            Creates SEO-friendly URLs that help search engines better understand your content.
          </li>
          <li>Removes unwanted characters, spaces, and symbols that can cause URL errors.</li>
          <li>Improves the readability and shareability of your links.</li>
          <li>Automatically converts long or complex titles into simple, usable slugs.</li>
          <li>Great for developers building blogs, CMS, or dynamic routing systems.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Credits & Source</h3>
        <p>
          Maintained by{" "}
          <a
            href="https://x.com/vijayhardaha"
            className="font-medium text-pink-500 underline hover:no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vijay Hardaha
          </a>
          . This tool uses open-source libraries like{" "}
          <a
            href="https://www.npmjs.com/package/slugify"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            slugify
          </a>{" "}
          and{" "}
          <a
            href="https://www.npmjs.com/package/latinize"
            className="font-medium text-pink-500 underline hover:no-underline"
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

export default SlugifyInfo;
