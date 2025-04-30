/**
 * Provides information about the Px to Rem Converter Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information.
 */
const PxToRemInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Px to Rem Converter Tool</h2>
        <p className="mb-4">
          The Px to Rem Converter Tool helps you convert pixel values to rem units based on a base
          font size. This is useful for creating responsive and scalable designs in web development.
        </p>
        <p className="mb-4">
          This tool simplifies the process of maintaining consistent spacing, typography, and layout
          across your project by using relative units instead of fixed pixel values.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why You Should Use This Tool</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Ensures your designs are scalable and responsive across devices.</li>
          <li>Helps maintain consistency in typography and spacing.</li>
          <li>Reduces the effort required to calculate rem values manually.</li>
          <li>Improves accessibility by adhering to relative units for font sizing.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">How to Use This Tool</h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Enter Pixel Value:</strong> Input the pixel value you want to convert.
          </li>
          <li>
            <strong>Set Base Font Size:</strong> Specify the base font size (default is 16px).
          </li>
          <li>
            <strong>View Result:</strong> The tool will display the equivalent rem value.
          </li>
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
          . This tool is designed to simplify web development workflows and improve design
          consistency.
        </p>
      </section>
    </div>
  );
};

export default PxToRemInfo;
