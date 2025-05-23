/**
 * Provides information about the URL Shortener Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {React.JSX.Element} The rendered component displaying tool information
 */
const UrlShortenerInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About URL Shortener Tool</h2>
        <p className="mb-4">
          The URL Shortener Tool is an online utility designed to help you convert multiple long
          URLs into shorter, more manageable links in one operation. This tool uses the TinyURL API
          to create short, redirect links that are easier to share, especially in places with
          character limitations like social media posts, SMS messages, or printed materials.
        </p>
        <p className="mb-4">
          We perform validation on each URL to ensure that only properly formatted web addresses are
          processed. For each valid URL, you’ll receive a shortened link that redirects to your
          original destination.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why You Should Use a URL Shortener</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Save space in character-limited platforms like Twitter or SMS</li>
          <li>Create cleaner, more professional-looking links for sharing</li>
          <li>Make URLs easier to remember and type manually</li>
          <li>Process multiple URLs in bulk to save time</li>
          <li>Improve the appearance of links in printed materials</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">How to Use This Tool</h3>
        <ol className="list-inside list-decimal space-y-1 pl-4">
          <li>Enter one URL per line in the input field</li>
          <li>Ensure each URL includes the protocol (http:// or https://)</li>
          <li>Click the “Shorten URLs” button to process all links</li>
          <li>Copy individual shortened URLs or use “Copy All” for valid results</li>
          <li>Click on any shortened URL to test it</li>
        </ol>
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
          . This tool uses the{" "}
          <a
            href="https://tinyurl.com/"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            TinyURL
          </a>{" "}
          service for URL shortening and the{" "}
          <a
            href="https://www.npmjs.com/package/valid-url"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            valid-url
          </a>{" "}
          package for URL validation.
        </p>
      </section>
    </div>
  );
};

export default UrlShortenerInfo;
