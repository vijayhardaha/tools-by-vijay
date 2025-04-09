"use client";

import { useState } from "react";

// Remove the direct import of html-minifier-terser

import HtmlMinifierInfo from "./HtmlMinifierInfo";
import HtmlMinifierInput from "./HtmlMinifierInput";
import HtmlMinifierOutput from "./HtmlMinifierOutput";

/**
 * Main component for the HTML Minifier tool
 * Handles state management and minification logic
 *
 * @returns {JSX.Element} The HTML Minifier tool interface
 */
const HtmlMinifierTool = () => {
  const [input, setInput] = useState("");
  const [minifiedOutput, setMinifiedOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState({
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
  });

  /**
   * Handles the minification process when the "Minify" button is clicked
   * Makes an API call to the server-side minification endpoint
   *
   * @async
   * @function
   */
  const handleMinify = async () => {
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

      setMinifiedOutput(data.minifiedHtml);
    } catch (error) {
      console.error("HTML minification error:", error);
      setMinifiedOutput(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clears the input and output fields
   *
   * @function
   */
  const handleClear = () => {
    setInput("");
    setMinifiedOutput("");
  };

  /**
   * Resets all options to their default values
   *
   * @function
   */
  const handleReset = () => {
    setInput("");
    setMinifiedOutput("");
    setOptions({
      removeComments: true,
      collapseWhitespace: true,
      conservativeCollapse: false,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes: true,
      removeEmptyElements: false,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      sortAttributes: false,
      sortClassName: false,
      minifyCSS: false,
      minifyJS: false,
      minifyURLs: false,
      decodeEntities: false,
      useShortDoctype: false,
    });
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
          onMinify={handleMinify}
          onClear={handleClear}
          onReset={handleReset}
          isLoading={isLoading}
        />
        <HtmlMinifierOutput output={minifiedOutput} />
      </div>

      <div className="mt-16">
        <HtmlMinifierInfo />
      </div>
    </>
  );
};

export default HtmlMinifierTool;
