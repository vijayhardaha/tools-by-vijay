'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * Type definition for the HTML Minifier options.
 *
 * @type {HtmlMinifierOptions}
 * @property {boolean} removeComments - Whether to remove HTML comments
 * @property {boolean} collapseWhitespace - Whether to collapse whitespace
 * @property {boolean} conservativeCollapse - Whether to collapse whitespace conservatively
 * @property {boolean} collapseBooleanAttributes - Whether to collapse boolean attributes
 * @property {boolean} removeAttributeQuotes - Whether to remove attribute quotes
 * @property {boolean} removeEmptyAttributes - Whether to remove empty attributes
 * @property {boolean} removeEmptyElements - Whether to remove empty elements
 * @property {boolean} removeRedundantAttributes - Whether to remove redundant attributes
 * @property {boolean} removeScriptTypeAttributes - Whether to remove script type attributes
 * @property {boolean} removeStyleLinkTypeAttributes - Whether to remove style/link type attributes
 * @property {boolean} sortAttributes - Whether to sort attributes alphabetically
 * @property {boolean} sortClassName - Whether to sort class names
 * @property {boolean} minifyCSS - Whether to minify inline CSS
 * @property {boolean} minifyJS - Whether to minify inline JavaScript
 * @property {boolean} minifyURLs - Whether to minify URLs
 * @property {boolean} decodeEntities - Whether to decode HTML entities
 * @property {boolean} useShortDoctype - Whether to use short doctype
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
 * Default options for the HTML Minifier.
 *
 * @type {HtmlMinifierOptions}
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
 * @returns {JSX.Element} The HTML Minifier tool interface
 */
export function HtmlMinifier(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<HtmlMinifierOptions>(defaultOptions);
  const [error, setError] = useState<string>('');

  /**
   * Handles the minification process when the "Minify" button is clicked
   * Makes an API call to the server-side minification endpoint
   *
   * @returns {void}
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
      const response = await fetch('/api/minify-html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html: input, options: options }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to minify HTML');
      }

      setOutput(data.minifiedHtml);
    } catch (error) {
      console.error('HTML minification error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clears the input and output fields
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
   * Resets all options to their default values
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
   * Updates a specific option in the options state
   *
   * @param {string} key - The option key to update
   * @param {boolean} value - The new value for the option
   *
   * @function
   */
  const updateOption = (key: keyof HtmlMinifierOptions, value: boolean): void => {
    setOptions((prevOptions) => ({ ...prevOptions, [key]: value }));
  };

  /**
   * Loads an example with predefined input values and options.
   *
   * @param {object} values - The example values.
   *
   * @returns {void}
   */
  const handleExample = (values: Record<string, any>): void => {
    if ('input' in values) {
      setInput(values.input);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
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

        <ExampleBlock onExample={handleExample} />

        {output && <OutputBlock output={output} input={input} />}
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
