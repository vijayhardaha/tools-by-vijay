/**
 * Provides information about the URL Decoder/Encoder Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information
 */
const UrlDecoderEncoderInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About URL Decoder/Encoder Tool</h2>
        <p className="mb-4">
          This tool helps you encode or decode URLs easily. Encoding ensures that special characters
          in a URL are converted to a format that can be transmitted over the internet. Decoding
          reverses this process, converting encoded URLs back to their original form.
        </p>
        <p className="mb-4">
          We use the{" "}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">
            encodeURIComponent
          </code>{" "}
          and{" "}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">
            decodeURIComponent
          </code>{" "}
          functions under the hood to ensure accurate and reliable encoding and decoding of URLs.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why Use This Tool?</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Encode URLs to make them safe for transmission over the internet.</li>
          <li>Decode URLs to view their original content in a human-readable format.</li>
          <li>Useful for developers working with web applications, APIs, and query strings.</li>
          <li>Helps debug and troubleshoot URL-related issues in your projects.</li>
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
          . This tool leverages built-in JavaScript functions like{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            encodeURIComponent
          </a>{" "}
          and{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent"
            className="font-medium text-pink-500 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            decodeURIComponent
          </a>{" "}
          for its functionality.
        </p>
      </section>
    </div>
  );
};

export default UrlDecoderEncoderInfo;
