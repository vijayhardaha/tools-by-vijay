"use client";

import { useState } from "react";

import UnminifyInfo from "./UnminifyInfo";
import UnminifyInput from "./UnminifyInput";
import UnminifyOutput from "./UnminifyOutput";

/**
 * A tool for unminifying code. It provides input fields for code, options for customization,
 * and displays the unminified output.
 *
 * @returns {React.JSX.Element} The rendered UnminifyTool component.
 */
const UnminifyTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [codeType, setCodeType] = useState<string>("javascript");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  /**
   * Handles the unminification process when the "Unminify" button is clicked.
   *
   * @function
   */
  const handleSubmit = async (): Promise<void> => {
    if (!input.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/unminify-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: input.trim(), codeType }),
      });

      if (!response.ok) {
        throw new Error(`Failed to unminify: ${response.statusText}`);
      }

      const data = await response.json();
      setOutput(data.unminifiedCode);
    } catch (error) {
      console.error("Unminification error:", error);
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clears the input and output fields.
   *
   * @function
   */
  const handleClear = (): void => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <UnminifyInput
          input={input}
          setInput={setInput}
          codeType={codeType}
          setCodeType={setCodeType}
          onSubmit={handleSubmit}
          onClear={handleClear}
          isLoading={isLoading}
          error={error}
        />

        {output && <UnminifyOutput output={output} />}
      </div>

      <div className="mt-16">
        <UnminifyInfo />
      </div>
    </>
  );
};

export default UnminifyTool;
