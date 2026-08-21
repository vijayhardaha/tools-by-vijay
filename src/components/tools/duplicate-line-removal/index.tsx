'use client';

import type { JSX } from 'react';
import { useMemo, useState } from 'react';

import { createExampleHandler } from '@/components/tool/createExampleHandler';
import { ToolExampleBlock } from '@/components/tool/ToolExampleBlock';

import { EXAMPLES } from './examples';
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
   * @function
   */
  const handleClear = (): void => {
    setInput('');
  };

  /**
   * Resets all states to their initial values.
   *
   * @function
   */
  const handleReset = (): void => {
    handleClear();
    setSortType('none');
    setReverseSort(false);
  };

  const handleExample = createExampleHandler({ input: setInput, sortType: setSortType, reverseSort: setReverseSort });

  return (
    <>
      <div className="space-y-6">
        <ToolExampleBlock examples={EXAMPLES} onExample={handleExample} />

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

        <OutputBlock output={output} />
      </div>

      <InfoBlock />
    </>
  );
}
