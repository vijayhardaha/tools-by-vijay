const QRCodeGeneratorInfo: React.FC = (): React.JSX.Element => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">About QR Code Generator</h2>
        <p className="mb-4">
          The QR Code Generator tool allows you to create QR codes for any text or URL. Customize
          the size of the QR code and download it for use in your projects.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">Why Use QR Codes?</h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Share links, contact information, or text easily.</li>
          <li>Enhance user engagement with scannable codes.</li>
          <li>Use in marketing, business cards, or product packaging.</li>
        </ul>
      </section>
    </div>
  );
};

export default QRCodeGeneratorInfo;
