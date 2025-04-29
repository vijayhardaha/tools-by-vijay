/**
 * Provides information about the Base64 Encode/Decode Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information
 */
const Base64EncodeDecodeInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Base64 Encode/Decode Tool</h2>
        <p className="mb-4">
          This tool helps you encode or decode Base64 strings easily. Encoding converts data into a
          Base64 format, while decoding reverses this process to retrieve the original data.
        </p>
        <p className="mb-4">
          We use the{" "}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">
            btoa
          </code>{" "}
          and{" "}
          <code className="bg-muted rounded px-1 py-0.5 text-sm font-medium text-pink-500">
            atob
          </code>{" "}
          functions under the hood to ensure accurate and reliable encoding and decoding of Base64
          strings.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why Use This Tool?</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Encode data to Base64 for safe transmission or storage.</li>
          <li>Decode Base64 strings to retrieve the original data.</li>
          <li>Useful for developers working with binary data, APIs, or file encoding.</li>
          <li>Helps debug and troubleshoot Base64-related issues in your projects.</li>
        </ul>
      </section>
    </div>
  );
};

export default Base64EncodeDecodeInfo;
