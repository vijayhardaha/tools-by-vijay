"use client";

import React, { useState } from "react";

import HtmlMinifierInfo from "./HtmlMinifierInfo";
import HtmlMinifierInput from "./HtmlMinifierInput";
import HtmlMinifierOutput from "./HtmlMinifierOutput";

/**
 * Type definition for the HTML Minifier options.
 */
export interface HtmlMinifierOptions {
  removeComments: boolean;
  collapseWhitespace: boolean;
  conservativeCollapse: boolean;
  collapseBooleanAttributes: boolean;
  removeAttributeQuotes: boolean;
  removeEmptyAttributes: boolean;
  removeEmptyElements: boolean;
  removeRedundantAttributes: boolean;
  removeScriptTypeAttributes: boolean;
  removeStyleLinkTypeAttributes: boolean;
  sortAttributes: boolean;
  sortClassName: boolean;
  minifyCSS: boolean;
  minifyJS: boolean;
  minifyURLs: boolean;
  decodeEntities: boolean;
  useShortDoctype: boolean;
}

/**
 * Default options for the HTML Minifier
 */
const defaultOptions: HtmlMinifierOptions = {
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
 * @returns {React.JSX.Element} The HTML Minifier tool interface
 */
const HtmlMinifierTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<HtmlMinifierOptions>(defaultOptions);
  const [error, setError] = useState<string>("");

  /**
   * Handles the minification process when the "Minify" button is clicked
   * Makes an API call to the server-side minification endpoint
   *
   * @async
   * @function
   * @returns {void}
   */
  const handleSubmit = async (): Promise<void> => {
    if (!input.trim()) return;

    setIsLoading(true);
    setError("");

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
      setError(error instanceof Error ? error.message : "An error occurred");
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
  const handleClear = (): void => {
    setInput("");
    setOutput("");
    setError("");
  };

  /**
   * Resets all options to their default values
   *
   * @function
   * @returns {void}
   */
  const handleReset = (): void => {
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
  const updateOption = (key: keyof HtmlMinifierOptions, value: boolean): void => {
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
          error={error}
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
