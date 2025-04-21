"use client";

import { useState } from "react";

// Remove the direct import of html-minifier-terser

import HtmlMinifierInfo from "./HtmlMinifierInfo";
import HtmlMinifierInput from "./HtmlMinifierInput";
import HtmlMinifierOutput from "./HtmlMinifierOutput";

/**
 * Default options for the HTML Minifier
 */
const defaultOptions = {
  removeComments: true,
  collapseWhitespace: true,
  conservativeCollapse: false,
  collapseBooleanAttributes: false,
  removeAttributeQuotes: false,
  removeEmptyAttributes: true,
  removeEmptyElements: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: false,
  removeStyleLinkTypeAttributes: false,
  sortAttributes: true,
  sortClassName: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  decodeEntities: false,
  useShortDoctype: false,
};

/**
 * Main component for the HTML Minifier tool
 * Handles state management and minification logic
 *
 * @returns {JSX.Element} The HTML Minifier tool interface
 */
const HtmlMinifierTool = () => {
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
      const response = await fetch("/api/minify-html", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          html: input,
          options: options,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to minify HTML");
      }

      setOutput(data.minifiedHtml);
    } catch (error) {
      console.error("HTML minification error:", error);
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
   * Updates a specific option in the options state
   *
   * @function
   * @param {string} key - The option key to update
   * @param {boolean} value - The new value for the option
   */
  const updateOption = (key, value) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [key]: value,
    }));
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <HtmlMinifierInput
          input={input}
          setInput={setInput}
          options={options}
          updateOption={updateOption}
          onSubmit={handleSubmit}
          onClear={handleClear}
          onReset={handleReset}
          isLoading={isLoading}
        />

        {output && <HtmlMinifierOutput output={output} input={input} />}
      </div>

      <div className="mt-16">
        <HtmlMinifierInfo />
      </div>
    </>
  );
};

export default HtmlMinifierTool;
