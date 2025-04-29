/**
 * Provides information about the Barcode Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying tool information
 */
const BarcodeGeneratorInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About Barcode Tool</h2>
        <p className="mb-4">
          Barcode Tool is an online utility that helps you generate barcodes for any text or data.
          You can customize the format and download the barcode for use in your projects. Simply
          input your data, generate the barcode, and download it instantly.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why Use Barcodes?</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Efficiently encode data for inventory or product tracking.</li>
          <li>Widely used in retail, logistics, and manufacturing industries.</li>
          <li>Enhance operational efficiency with scannable codes.</li>
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
          . This tool uses open-source libraries to ensure reliable and efficient barcode
          generation.
        </p>
      </section>
    </div>
  );
};

export default BarcodeGeneratorInfo;
