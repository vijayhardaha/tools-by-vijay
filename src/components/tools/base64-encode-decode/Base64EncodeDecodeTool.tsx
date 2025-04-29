"use client";

import { useState } from "react";

import Base64EncodeDecodeInfo from "./Base64EncodeDecodeInfo";
import Base64EncodeDecodeInput from "./Base64EncodeDecodeInput";
import Base64EncodeDecodeOutput from "./Base64EncodeDecodeOutput";

/**
 * A tool for encoding and decoding Base64 strings. It provides input, output, and informational components.
 *
 * @returns {React.JSX.Element} The rendered Base64 Encode/Decode Tool component.
 */
const Base64EncodeDecodeTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [isEncoding, setIsEncoding] = useState<boolean>(true);

  /**
   * Processes the input string by encoding or decoding it based on the current mode.
   */
  const handleProcess = (): void => {
    try {
      const result = isEncoding ? btoa(input) : atob(input);
      setOutput(result);
    } catch (error) {
      setOutput("Error: Invalid input for the selected mode.");
    }
  };

  /**
   * Clears the input and output fields.
   */
  const handleClear = (): void => {
    setInput("");
    setOutput("");
  };

  /**
   * Resets the tool to its initial state, clearing input/output and setting mode to encoding.
   */
  const handleReset = (): void => {
    handleClear();
    setIsEncoding(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <Base64EncodeDecodeInput
          input={input}
          setInput={setInput}
          isEncoding={isEncoding}
          setIsEncoding={setIsEncoding}
          onProcess={handleProcess}
          onClear={handleClear}
          onReset={handleReset}
        />

        {output && <Base64EncodeDecodeOutput output={output} />}
      </div>

      <div className="mt-16">
        <Base64EncodeDecodeInfo />
      </div>
    </>
  );
};

export default Base64EncodeDecodeTool;
