'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import { createExampleHandler } from '@/components/tool/createExampleHandler';
import { ToolExampleBlock } from '@/components/tool/ToolExampleBlock';

import { EXAMPLES } from './examples';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';
import { sortJson } from './sort';
import type { SortMode, SortOrder } from './sort';

/**
 * Main component for the JSON Sorter tool.
 * Manages the state and functionality for sorting JSON object keys.
 *
 * @returns {JSX.Element} The complete JSON sorter tool with input options, output display, and information
 */
export function JsonSorter(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [spareArrays, setSpareArrays] = useState<boolean>(true);
  const [sortMode, setSortMode] = useState<SortMode>('alphabetical');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [error, setError] = useState<string>('');

  /**
   * Handles the sorting process when user submits the form
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

      // Sort the JSON using the selected method and order
      const sorted = sortJson(input, { mode: sortMode, order: sortOrder, spareArrays });
      setOutput(sorted);
    } catch (err) {
      setError(`Error sorting JSON: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setOutput('');
    }
  };

  /**
   * Clears only the JSON input field
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
   * @function
   */
  const handleReset = (): void => {
    handleClear();
    setSpareArrays(true);
    setSortMode('alphabetical');
    setSortOrder('asc');
  };

  const handleExample = createExampleHandler({
    input: setInput,
    spareArrays: setSpareArrays,
    sortMode: setSortMode,
    sortOrder: setSortOrder,
  });

  return (
    <>
      <div className="space-y-6">
        <ToolExampleBlock examples={EXAMPLES} onExample={handleExample} />

        <InputBlock
          input={input}
          setInput={setInput}
          spareArrays={spareArrays}
          setSpareArrays={setSpareArrays}
          sortMode={sortMode}
          setSortMode={setSortMode}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          onSubmit={handleSubmit}
          onClear={handleClear}
          onReset={handleReset}
          error={error}
        />

        {output && <OutputBlock output={output} />}
      </div>

      <InfoBlock />
    </>
  );
}
