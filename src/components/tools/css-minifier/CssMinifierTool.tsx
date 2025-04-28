"use client";

import { useState } from "react";

import CssMinifierInfo from "./CssMinifierInfo";
import CssMinifierInput from "./CssMinifierInput";
import CssMinifierOutput from "./CssMinifierOutput";

/**
 * Interface for minification options.
 * @property {number} level - The optimization level for minification.
 * @property {boolean} compress - Whether to enable compression.
 * @property {object} format - Formatting options for the output.
 * @property {number} format.indentBy - Number of spaces for indentation.
 * @property {string} format.indentWith - Type of indentation ("space" or "tab").
 * @property {object} format.spaces - Space formatting options.
 * @property {boolean} format.spaces.aroundSelectorRelation - Space around selector relations.
 * @property {boolean} format.spaces.beforeBlockBegins - Space before blocks.
 * @property {boolean} format.spaces.beforeValue - Space before values.
 * @property {boolean | number} format.wrapAt - Wrap output at a specific character count or disable wrapping.
 */
interface MinificationOptions {
  level: number;
  compress: boolean;
  format: {
    indentBy: number;
    indentWith: string;
    spaces: {
      aroundSelectorRelation: boolean;
      beforeBlockBegins: boolean;
      beforeValue: boolean;
    };
    wrapAt: boolean | number;
  };
}

/**
 * Default minification options.
 */
const defaultOptions: MinificationOptions = {
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
 * A tool for minifying CSS code. It provides input fields for CSS, options for customization,
 * and displays the minified output.
 *
 * @returns {React.JSX.Element} The rendered CssMinifierTool component.
 */
const CssMinifierTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<MinificationOptions>(defaultOptions);
  const [error, setError] = useState<string>("");

  /**
   * Handles the minification process when the "Minify" button is clicked.
   * Makes an API call to the server-side minification endpoint.
   *
   * @async
   * @function
   */
  const handleSubmit = async (): Promise<void> => {
    if (!input.trim()) return;

    setIsLoading(true);
    setError("");

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

      if (!data.minifiedCss) {
        throw new Error("Minified CSS is empty");
      }

      setOutput(data.minifiedCss);
    } catch (error) {
      console.error("CSS minification error:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clears the input and output fields.
   * Resets the input, output, and error states to their initial values.
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
   * Resets all options to their default values.
   * Resets the options state to its initial values and clears input and output fields.
   *
   * @function
   * @returns {void}
   */
  const handleReset = (): void => {
    handleClear();
    setOptions(defaultOptions);
  };

  /**
   * Updates a specific option in the options state.
   *
   * @function
   * @param {string} key - The option key to update.
   * @param {any} value - The new value for the option.
   */
  const updateOption = (key: string, value: any) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [key]: value,
    }));
  };

  /**
   * Updates a spaces option in the format options.
   *
   * @function
   * @param {string} key - The spaces option key to update.
   * @param {boolean} value - The new value for the spaces option.
   */
  const updateSpacesOption = (key: string, value: boolean) => {
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
          error={error}
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
