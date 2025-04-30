/**
 * Provides information about the Character Count Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information.
 */
const CharacterCountInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Character Count Tool</h2>
        <p className="mb-4">
          The Character Count Tool is a utility that provides detailed statistics about your text,
          including character count, word count, sentence count, paragraph count, and space count.
        </p>
        <p className="mb-4">
          All processing happens directly in your browser – your data is never sent to a server,
          ensuring privacy and security when working with sensitive information.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">How to Use This Tool</h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Enter Your Text:</strong> Paste or type your text into the input area.
          </li>
          <li>
            <strong>View Statistics:</strong> The tool will automatically calculate and display text
            statistics.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why Use This Tool</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Analyze text for writing or editing purposes.</li>
          <li>Prepare content for character or word-limited platforms.</li>
          <li>Improve readability by understanding text structure.</li>
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
          . This tool is designed to simplify text processing tasks.
        </p>
      </section>
    </div>
  );
};

export default CharacterCountInfo;
