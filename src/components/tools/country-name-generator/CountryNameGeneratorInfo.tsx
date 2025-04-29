/**
 * Provides information about the Country Name Generator Tool, including its purpose,
 * usage instructions, and benefits.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information
 */
const CountryNameGeneratorInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Country Name Generator</h2>
        <p className="mb-4">
          The Country Name Generator tool helps you generate random country names for testing,
          educational purposes, or creative projects. It is useful for developers, educators, and
          content creators.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">How to Use This Tool</h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Enter Count:</strong> Specify the number of country names to generate.
          </li>
          <li>
            <strong>Generate:</strong> Click the “Generate” button to create random country names.
          </li>
          <li>
            <strong>Copy Result:</strong> Use the copy button to copy the generated names.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why Use This Tool</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Quickly generate random country names for testing or mock data.</li>
          <li>Save time when working on projects requiring placeholder data.</li>
          <li>Enhance creativity by using random country names in stories or games.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Example Usage</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium">Input Example:</h4>
            <pre className="bg-secondary overflow-x-auto rounded-xl p-4 text-sm">{`Count: 5`}</pre>
          </div>

          <div>
            <h4 className="mb-2 font-medium">Output Example:</h4>
            <pre className="bg-secondary overflow-x-auto rounded-xl p-4 text-sm">
              {`1. Eldoria\n2. Zynthar\n3. Lumora\n4. Virelia\n5. Drakonia`}
            </pre>
          </div>
        </div>
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
          . This tool is designed to assist with generating random country names for various
          purposes.
        </p>
      </section>
    </div>
  );
};

export default CountryNameGeneratorInfo;
