"use client";

import { useState } from "react";

import QRCodeInfo from "./QRCodeGeneratorInfo";
import QRCodeInput from "./QRCodeGeneratorInput";
import QRCodeOutput from "./QRCodeGeneratorOutput";

/**
 * QRCodeGeneratorTool is a React functional component that provides a tool
 * for generating QR codes based on user input. It includes input fields for
 * data and size, and displays the generated QR code.
 *
 * @returns {React.JSX.Element} The rendered QR code generator tool component.
 */
const QRCodeGeneratorTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [size, setSize] = useState<number>(256);
  const [output, setOutput] = useState<string>("");

  /**
   * Generates a QR code URL based on the input data and size.
   * Updates the output state with the generated QR code URL.
   */
  const generateQRCode = (): void => {
    if (!input) return;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      input
    )}&size=${size}x${size}`;
    setOutput(qrCodeUrl);
  };

  /**
   * Clears the input and output states.
   */
  const handleClear = (): void => {
    setInput("");
    setOutput("");
  };

  /**
   * Resets the input, output, and size states to their default values.
   */
  const handleReset = (): void => {
    handleClear();
    setSize(256);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <QRCodeInput
          input={input}
          setInput={setInput}
          size={size}
          setSize={setSize}
          onSubmit={generateQRCode}
          onClear={handleClear}
          onReset={handleReset}
        />

        {output && <QRCodeOutput output={output} />}
      </div>

      <div className="mt-16">
        <QRCodeInfo />
      </div>
    </>
  );
};

export default QRCodeGeneratorTool;
