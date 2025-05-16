"use client";

import { useState } from "react";

import JsMinifierInfo from "./JsMinifierInfo";
import JsMinifierInput from "./JsMinifierInput";
import JsMinifierOutput from "./JsMinifierOutput";

export interface IMinifyOptions {
  mangle: boolean;
  removeConsole: boolean;
  removeDebugger: boolean;
  removeComments: boolean;
}

/**
 * Main component for the JavaScript Minifier tool.
 *
 * @returns {React.JSX.Element} The JavaScript Minifier tool interface.
 */
const JsMinifierTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<IMinifyOptions>({
    mangle: true,
    removeConsole: false,
    removeDebugger: true,
    removeComments: true,
  });
  const [error, setError] = useState<string>("");

  /**
   * Handles the minification process when the "Minify" button is clicked.
   */
  const handleSubmit = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      // Call the API endpoint for minification
      const response = await fetch("/api/minify-js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          js: input,
          options: options,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to minify JavaScript");
      }

      setOutput(data.minifiedJs);
    } catch (error) {
      console.error("JavaScript minification error:", error);
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clears the input and output fields.
   */
  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  /**
   * Resets all options to their default values.
   */
  const handleReset = () => {
    handleClear();
    setOptions({
      mangle: true,
      removeConsole: false,
      removeDebugger: true,
      removeComments: true,
    });
  };

  /**
   * Updates an option in the options state.
   */
  const updateOption = (key: keyof IMinifyOptions, value: boolean) => {
    setOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <JsMinifierInput
          input={input}
          setInput={setInput}
          options={options}
          updateOption={updateOption}
          onSubmit={handleSubmit}
          onClear={handleClear}
          onReset={handleReset}
          isLoading={isLoading}
          error={error}
        />

        {output && <JsMinifierOutput output={output} input={input} />}
      </div>

      <div className="mt-16">
        <JsMinifierInfo />
      </div>
    </>
  );
};

export default JsMinifierTool;
