'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import InfoBlock from './info-block';
import InputBlock from './input-block';
import OutputBlock from './output-block';

/**
 * Interface for the JS minification options.
 *
 * @type {MinifyOptions}
 * @property {boolean} mangle - Whether to mangle variable names
 * @property {boolean} removeConsole - Whether to remove console statements
 * @property {boolean} removeDebugger - Whether to remove debugger statements
 * @property {boolean} removeComments - Whether to remove comments
 */
export interface MinifyOptions {
  mangle: boolean;
  removeConsole: boolean;
  removeDebugger: boolean;
  removeComments: boolean;
}

/**
 * Main component for the JavaScript Minifier tool.
 *
 * @returns {JSX.Element} The JavaScript Minifier tool interface.
 */
export default function JsMinifier(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<MinifyOptions>({
    mangle: true,
    removeConsole: false,
    removeDebugger: true,
    removeComments: true,
  });
  const [error, setError] = useState<string>('');

  /**
   * Handles the minification process when the "Minify" button is clicked.
   */
  const handleSubmit = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      // Call the API endpoint for minification
      const response = await fetch('/api/minify-js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ js: input, options: options }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to minify JavaScript');
      }

      setOutput(data.minifiedJs);
    } catch (error) {
      console.error('JavaScript minification error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clears the input and output fields.
   */
  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  /**
   * Resets all options to their default values.
   */
  const handleReset = () => {
    handleClear();
    setOptions({ mangle: true, removeConsole: false, removeDebugger: true, removeComments: true });
  };

  /**
   * Updates an option in the options state.
   *
   * @param {keyof MinifyOptions} key - The option key to update
   * @param {boolean} value - The new value for the option
   */
  const updateOption = (key: keyof MinifyOptions, value: boolean) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
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

        {output && <OutputBlock output={output} input={input} />}
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
