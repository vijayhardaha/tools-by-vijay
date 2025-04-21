"use client";

import { useState } from "react";

import CssMinifierInfo from "./CssMinifierInfo";
import CssMinifierInput from "./CssMinifierInput";
import CssMinifierOutput from "./CssMinifierOutput";

/**
 * Default options for the CSS Minifier
 */
const defaultOptions = {
  level: 1,
  compress: true,
  format: {
    indentBy: 0,
    indentWith: "space",
    spaces: {
      aroundSelectorRelation: false,
      beforeBlockBegins: false,
      beforeValue: false,
    },
    wrapAt: false,
  },
};

/**
 * Main component for the CSS Minifier tool
 * Handles state management and minification logic
 *
 * @returns {JSX.Element} The CSS Minifier tool interface
 */
const CssMinifierTool = () => {
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
   */
  const handleSubmit = async () => {
    if (!input.trim()) return;

    setIsLoading(true);

    try {
      // Call the API endpoint for minification
      const response = await fetch("/api/minify-css", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          css: input,
          options: options,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to minify CSS");
      }

      setOutput(data.minifiedCss);
    } catch (error) {
      console.error("CSS minification error:", error);
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clears the input and output fields
   *
   * This function resets the input and output states to empty strings.
   * It is called when the user clicks the "Clear" button.
   * It does not affect the options state.
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
   * This function resets the options state to its initial values.
   * It is called when the user clicks the "Reset" button.
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
   * @param {any} value - The new value for the option
   */
  const updateOption = (key, value) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [key]: value,
    }));
  };

  /**
   * Updates a spaces option in the format options
   *
   * @function
   * @param {string} key - The spaces option key to update
   * @param {boolean} value - The new value for the spaces option
   */
  const updateSpacesOption = (key, value) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      format: {
        ...prevOptions.format,
        spaces: {
          ...prevOptions.format.spaces,
          [key]: value,
        },
      },
    }));
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <CssMinifierInput
          input={input}
          setInput={setInput}
          options={options}
          updateOption={updateOption}
          updateSpacesOption={updateSpacesOption}
          onSubmit={handleSubmit}
          onClear={handleClear}
          onReset={handleReset}
          isLoading={isLoading}
        />

        {output && <CssMinifierOutput output={output} input={input} />}
      </div>

      <div className="mt-16">
        <CssMinifierInfo />
      </div>
    </>
  );
};

export default CssMinifierTool;
