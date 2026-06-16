'use client';

import type { JSX } from 'react';
import { useMemo, useState } from 'react';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * Main component for the Alphabetical Line Sorter tool.
 * Manages the state and functionality for sorting lines alphabetically.
 *
 * @returns {JSX.Element} The complete Alphabetical Line Sorter tool with input options, output display, and functionality
 */
export function AlphabeticalLineSorter(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [reverseSort, setReverseSort] = useState<boolean>(false);
  const [removeDuplicates, setRemoveDuplicates] = useState<boolean>(false);
  const [sortType, setSortType] = useState<'standard' | 'ascii'>('standard');

  /**
   * Processes the input based on the selected options (reverse sort, remove duplicates, sort type).
   */
  const output = useMemo<string>(() => {
    if (!input) return '';

    let lines = input.split('\n');

    if (removeDuplicates) {
      lines = Array.from(new Set(lines));
    }

    lines = lines
      .map((line) => line.trim())
      .filter((line) => line !== '')
      .filter((line) => line.length > 0);

    let sortedLines: any[];
    if (sortType === 'ascii') {
      sortedLines = [...lines].sort();
    } else {
      sortedLines = [...lines].sort((a, b) => a.localeCompare(b));
    }

    if (reverseSort) {
      sortedLines.reverse();
    }

    return sortedLines.join('\n');
  }, [input, removeDuplicates, sortType, reverseSort]);

  /**
   * Handles the clearing of the input and output states.
   * Resets the input and output to empty strings.
   *
   * @returns {void}
   *
   * @function
   */
  const handleClear = (): void => {
    setInput('');
  };

  /**
   * Handles the reset of the input and output states.
   * Resets all options to their default values.
   *
   * @returns {void}
   *
   * @function
   */
  const handleReset = (): void => {
    handleClear();
    setReverseSort(false);
    setRemoveDuplicates(false);
    setSortType('standard');
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
    if ('reverseSort' in values) {
      setReverseSort(values.reverseSort);
    }
    if ('removeDuplicates' in values) {
      setRemoveDuplicates(values.removeDuplicates);
    }
    if ('sortType' in values) {
      setSortType(values.sortType);
    }
  };

  return (
    <>
      <div className="space-y-6 md:space-y-8">
        <InputBlock
          input={input}
          setInput={setInput}
          reverseSort={reverseSort}
          setReverseSort={setReverseSort}
          removeDuplicates={removeDuplicates}
          setRemoveDuplicates={setRemoveDuplicates}
          sortType={sortType}
          setSortType={(value: string) => {
            if (value === 'standard' || value === 'ascii') {
              setSortType(value);
            }
          }}
          onReset={handleReset}
          onClear={handleClear}
        />

        <ExampleBlock onExample={handleExample} />

        <OutputBlock output={output} />
      </div>

      <InfoBlock />
    </>
  );
}
