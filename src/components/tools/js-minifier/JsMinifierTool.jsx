"use client";

import { useState } from "react";

import JsMinifierInfo from "./JsMinifierInfo";
import JsMinifierInput from "./JsMinifierInput";
import JsMinifierOutput from "./JsMinifierOutput";

/**
 * Putout Minify options
 */
const defaultOptions = {
  mangle: true,
  removeConsole: false,
  removeDebugger: true,
  removeComments: true,
};

/**
 * Main component for the JavaScript Minifier tool
 * Handles state management and minification logic
 * Uses @putout/minify for JavaScript minification
 *
 * @returns {JSX.Element} The JavaScript Minifier tool interface
 */
const JsMinifierTool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);

  /**
   * Handles the minification process when the "Minify" button is clicked
   * Makes an API call to the server-side minification endpoint
   *
   * @async
   * @function
   * @returns {void}
   */
  const handleSubmit = async () => {
    if (!input.trim()) return;

    setIsLoading(true);

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
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clears the input and output fields
   *
   * @function
   * @returns {void}
   */
  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  /**
   * Resets all options to their default values
   *
   * @function
   * @returns {void}
   */
  const handleReset = () => {
    handleClear();
    setOptions(defaultOptions);
  };

  /**
   * Updates an option in the options state
   *
   * @function
   * @param {string} key - The option key to update
   * @param {any} value - The new value for the option
   */
  const updateOption = (key, value) => {
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
