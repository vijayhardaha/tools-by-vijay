'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import InfoBlock from './info-block';
import InputBlock from './input-block';
import OutputBlock from './output-block';

/**
 * Interface for the CSS minification options.
 *
 * @type {MinificationOptions}
 * @property {number} level - The optimization level (0-2)
 * @property {boolean} compress - Whether to enable compression
 * @property {object} format - Formatting configuration
 * @property {number} format.indentBy - Number of spaces for indentation
 * @property {string} format.indentWith - Character used for indentation
 * @property {{ aroundSelectorRelation: boolean; beforeBlockBegins: boolean; beforeValue: boolean }} format.spaces - Space-related formatting options
 * @property {boolean | number} format.wrapAt - Line wrap configuration
 */
interface MinificationOptions {
  level: number;
  compress: boolean;
  format: {
    indentBy: number;
    indentWith: string;
    spaces: { aroundSelectorRelation: boolean; beforeBlockBegins: boolean; beforeValue: boolean };
    wrapAt: boolean | number;
  };
}

/**
 * Default minification options.
 *
 * @type {MinificationOptions}
 */
const defaultOptions: MinificationOptions = {
  level: 1,
  compress: true,
  format: {
    indentBy: 0,
    indentWith: 'space',
    spaces: { aroundSelectorRelation: false, beforeBlockBegins: false, beforeValue: false },
    wrapAt: false,
  },
};

/**
 * A tool for minifying CSS code. It provides input fields for CSS, options for customization,
 * and displays the minified output.
 *
 * @returns {JSX.Element} The rendered CssMinifierTool component.
 */
export default function CssMinifier(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<MinificationOptions>(defaultOptions);
  const [error, setError] = useState<string>('');

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
    setError('');

    try {
      // Call the API endpoint for minification
      const response = await fetch('/api/minify-css', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ css: input, options: options }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to minify CSS');
      }

      if (!data.minifiedCss) {
        throw new Error('Minified CSS is empty');
      }

      setOutput(data.minifiedCss);
    } catch (error) {
      console.error('CSS minification error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clears the input and output fields.
   * Resets the input, output, and error states to their initial values.
   *
   * @returns {void}
   *
   * @function
   */
  const handleClear = (): void => {
    setInput('');
    setOutput('');
    setError('');
  };

  /**
   * Resets all options to their default values.
   * Resets the options state to its initial values and clears input and output fields.
   *
   * @returns {void}
   *
   * @function
   */
  const handleReset = (): void => {
    handleClear();
    setOptions(defaultOptions);
  };

  /**
   * Updates a specific option in the options state.
   *
   * @param {string} key - The option key to update
   * @param {unknown} value - The new value for the option (must match the option type)
   *
   * @function
   */
  const updateOption = (key: string, value: unknown) => {
    setOptions((prevOptions) => ({ ...prevOptions, [key]: value }));
  };

  /**
   * Updates a spaces option in the format options.
   *
   * @param {string} key - The spaces option key to update.
   * @param {boolean} value - The new value for the spaces option.
   *
   * @function
   */
  const updateSpacesOption = (key: string, value: boolean) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      format: { ...prevOptions.format, spaces: { ...prevOptions.format.spaces, [key]: value } },
    }));
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <InputBlock
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

        {output && <OutputBlock output={output} input={input} />}
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
