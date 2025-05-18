/**
 * Provides detailed information about the Barcode Tool,
 * including its purpose, benefits, usage instructions, and practical examples.
 *
 * @component
 * @returns {React.JSX.Element} The rendered component displaying tool information
 */
const BarcodeGeneratorInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="mb-4 text-xl font-bold">Barcode Tool: Generate Barcodes Instantly</h2>
        <p className="mb-4">
          The <strong>Barcode Tool</strong> is an easy-to-use online utility designed to help you
          generate professional-quality barcodes from any text, number, or data input. This tool
          supports multiple barcode formats, allowing you to customize the output for your specific
          needs. Once generated, you can instantly download the barcode image to incorporate into
          your projects, labels, inventory systems, or marketing materials.
        </p>
        <p className="mb-4">
          Built with efficiency and user privacy in mind, all barcode generation happens instantly
          without sending your data to any server, keeping your information secure.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">Benefits of Using the Barcode Tool</h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Generate high-quality barcodes suitable for print or digital use.</li>
          <li>
            Supports various common barcode formats including Code128, UPC, EAN, QR codes, and more.
          </li>
          <li>
            Simplifies inventory, retail, and logistics operations by creating scannable codes
            easily.
          </li>
          <li>Customize size, format, and data to fit your specific application.</li>
          <li>
            Instant download feature saves you time in integrating barcodes into your workflow.
          </li>
          <li>Process entirely in your browser, ensuring your data never leaves your device.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">How to Use the Barcode Tool</h2>
        <ol className="list-inside list-decimal space-y-2 pl-4">
          <li>
            <strong>Enter Your Data:</strong> Type or paste the text, number, or data you want to
            encode into the barcode input field.
          </li>
          <li>
            <strong>Select Barcode Format:</strong> Choose from supported barcode types such as
            Code128, UPC, EAN, or QR code based on your needs.
          </li>
          <li>
            <strong>Customize (Optional):</strong> Adjust size, resolution, or color settings if
            available to match your design requirements.
          </li>
          <li>
            <strong>Generate Barcode:</strong> Click the “Generate” button to create the barcode
            image instantly.
          </li>
          <li>
            <strong>Download or Copy:</strong> Save the barcode image to your device or copy it for
            use in your documents, labels, or websites.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">Why Use Barcodes?</h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Efficiently encode and represent data in a machine-readable format.</li>
          <li>
            Widely adopted in retail, manufacturing, logistics, healthcare, and asset tracking.
          </li>
          <li>Speeds up scanning processes, reducing errors and manual data entry.</li>
          <li>Improves inventory accuracy and operational workflow.</li>
          <li>Supports marketing and product identification with scannable codes.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">Example Usage</h2>
        <p className="mb-4">
          For instance, you can generate a <em>Code128</em> barcode for a product SKU or a{" "}
          <em>QR code</em> containing a URL for marketing campaigns. Just input your data, choose
          the format, and download the barcode instantly.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">Credits & Source</h2>
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
          . This tool leverages reliable open-source barcode generation libraries to ensure fast,
          accurate, and customizable barcode creation for all your needs.
        </p>
      </section>
    </div>
  );
};

export default BarcodeGeneratorInfo;
