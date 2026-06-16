'use client';

import type { JSX } from 'react';
import { useMemo, useState } from 'react';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * Main component for the Duplicate Line Removal tool.
 * Manages the state and functionality for removing duplicate lines and sorting.
 *
 * @returns {JSX.Element} The complete Duplicate Line Removal tool with input options, output display, and functionality
 */
export function DuplicateLineRemoval(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [sortType, setSortType] = useState<'none' | 'alphabetical' | 'ascii'>('none');
  const [reverseSort, setReverseSort] = useState<boolean>(false);

  /**
   * Processes the input to remove duplicate lines, sort them based on the selected sort type,
   * and optionally reverse the order.
   */
  const output = useMemo<string>(() => {
    if (!input) return '';

    const lines = input
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line !== '')
      .filter((line) => line.length > 0)
      .filter((line, index, self) => self.indexOf(line) === index);

    let sortedLines = lines;

    if (sortType === 'alphabetical') {
      sortedLines = [...lines].sort((a, b) => a.localeCompare(b));
    } else if (sortType === 'ascii') {
      sortedLines = [...lines].sort();
    }

    if (reverseSort) {
      sortedLines.reverse();
    }

    return sortedLines.join('\n');
  }, [input, sortType, reverseSort]);

  /**
   * Clears the input and output fields.
   *
   * @returns {void}
   *
   * @function
   */
  const handleClear = (): void => {
    setInput('');
  };

  /**
   * Resets all states to their initial values.
   *
   * @returns {void}
   *
   * @function
   */
  const handleReset = (): void => {
    handleClear();
    setSortType('none');
    setReverseSort(false);
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
    if ('sortType' in values) {
      setSortType(values.sortType);
    }
    if ('reverseSort' in values) {
      setReverseSort(values.reverseSort);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
          input={input}
          setInput={setInput}
          sortType={sortType}
          setSortType={(value: string) => {
            if (value === 'none' || value === 'alphabetical' || value === 'ascii') {
              setSortType(value);
            }
          }}
          reverseSort={reverseSort}
          setReverseSort={setReverseSort}
          onReset={handleReset}
          onClear={handleClear}
        />

        <ExampleBlock onExample={handleExample} />

        <OutputBlock output={output} />
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
