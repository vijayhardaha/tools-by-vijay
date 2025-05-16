/**
 * Provides information about the QR Code Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @component
 * @returns {React.JSX.Element} The rendered component displaying tool information
 */
const QRCodeGeneratorInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About QR Code Tool</h2>
        <p className="mb-4">
          QR Code Tool is an online utility that helps you generate QR codes for any text, URL, or
          other data. You can customize the size, color, and format of the QR code to suit your
          needs. Simply input your data, adjust the settings, and download your QR code instantly.
        </p>
        <p className="mb-4">
          This tool leverages open-source libraries to ensure high-quality QR code generation that
          works seamlessly across various devices and platforms.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why You Should Use a QR Code Tool</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Quickly share links, contact details, or other information.</li>
          <li>Enhance user engagement with scannable, interactive codes.</li>
          <li>Perfect for marketing campaigns, product packaging, and event promotions.</li>
          <li>Customizable options to match your branding or design requirements.</li>
          <li>Great for developers integrating QR codes into apps or websites.</li>
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
          . This tool uses open-source libraries to ensure reliable and efficient QR code
          generation.
        </p>
      </section>
    </div>
  );
};

export default QRCodeGeneratorInfo;
