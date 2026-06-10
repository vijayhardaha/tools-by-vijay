'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import jsonabc from 'jsonabc';

import InfoBlock from './info-block';
import InputBlock from './input-block';
import OutputBlock from './output-block';

/**
 * Main component for the JSON Sorter tool.
 * Manages the state and functionality for sorting JSON objects alphabetically.
 *
 * @returns {JSX.Element} The complete JSON sorter tool with input options, output display, and information
 */
const JsonSorter = (): JSX.Element => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [spareArrays, setSpareArrays] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  /**
   * Handles the sorting process when user submits the form
   *
   * @returns {void}
   *
   * @function
   */
  const handleSubmit = (): void => {
    try {
      setError('');

      if (!input.trim()) {
        setError('Please enter valid JSON content');
        setOutput('');
        return;
      }

      // Parse the JSON to validate it
      try {
        JSON.parse(input);
      } catch (err) {
        setError(`Invalid JSON: ${err instanceof Error ? err.message : 'Unknown error'}`);
        setOutput('');
        return;
      }

      // Sort the JSON using jsonabc
      const output = jsonabc.sort(input, spareArrays);
      setOutput(output);
    } catch (err) {
      setError(`Error sorting JSON: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setOutput('');
    }
  };

  /**
   * Clears only the JSON input field
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
   * Resets all input fields and output
   *
   * @returns {void}
   *
   * @function
   */
  const handleReset = (): void => {
    handleClear();
    setSpareArrays(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <InputBlock
          input={input}
          setInput={setInput}
          spareArrays={spareArrays}
          setSpareArrays={setSpareArrays}
          onSubmit={handleSubmit}
          onClear={handleClear}
          onReset={handleReset}
          error={error}
        />

        {output && <OutputBlock output={output} />}
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
};

export default JsonSorter;
