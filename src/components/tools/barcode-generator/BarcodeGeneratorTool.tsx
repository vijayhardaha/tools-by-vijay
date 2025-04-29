"use client";

import { useState } from "react";

import BarcodeInfo from "./BarcodeGeneratorInfo";
import BarcodeInput from "./BarcodeGeneratorInput";
import BarcodeOutput from "./BarcodeGeneratorOutput";

/**
 * BarcodeGeneratorTool is a React functional component that provides a tool
 * for generating barcodes based on user input. It includes input fields for
 * data and size, and displays the generated barcode.
 *
 * @returns {React.JSX.Element} The rendered barcode generator tool component.
 */
const BarcodeGeneratorTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  /**
   * Generates a barcode URL based on the input data.
   * Updates the output state with the generated barcode URL.
   */
  const generateBarcode = (): void => {
    if (!input) return;
    const barcodeUrl = `https://barcode.tec-it.com/barcode.ashx?data=${encodeURIComponent(input)}&code=Code128&dpi=96`;
    setOutput(barcodeUrl);
  };

  /**
   * Clears the input and output states.
   */
  const handleClear = (): void => {
    setInput("");
    setOutput("");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <BarcodeInput
          input={input}
          setInput={setInput}
          onSubmit={generateBarcode}
          onClear={handleClear}
        />

        {output && <BarcodeOutput output={output} />}
      </div>

      <div className="mt-16">
        <BarcodeInfo />
      </div>
    </>
  );
};

export default BarcodeGeneratorTool;
