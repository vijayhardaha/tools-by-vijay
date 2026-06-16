'use client';

import type { JSX } from 'react';
import { useEffect, useState } from 'react';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * A tool for shuffling lines of text with options to remove duplicates.
 *
 * @returns {JSX.Element} The ShuffleTextLinesTool component.
 */
export function ShuffleTextLines(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [removeDuplicates, setRemoveDuplicates] = useState<boolean>(false);
  const [removeEmptyLines, setRemoveEmptyLines] = useState<boolean>(true);
  const [trimLines, setTrimLines] = useState<boolean>(true);

  const [output, setOutput] = useState<string>('');

  /**
   * Shuffles the lines whenever input or options change.
   * Uses useEffect + setState because Math.random() is impure
   * (cannot be used in useMemo which must be pure).
   */
  useEffect(() => {
    if (!input) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Must use useEffect because Math.random() is impure
      setOutput('');
      return;
    }

    let lines: string[] = input.split('\n');

    if (removeDuplicates) {
      lines = Array.from(new Set(lines));
    }

    if (trimLines) {
      lines = lines.map((line) => line.trim());
    }

    if (removeEmptyLines) {
      lines = lines.filter((line) => line !== '').filter((line) => line.length > 0);
    }

    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }

    setOutput(lines.join('\n'));
  }, [input, removeDuplicates, removeEmptyLines, trimLines]);

  /**
   * Clears the input and output fields.
   */
  const handleClear = (): void => {
    setInput('');
    setOutput('');
  };

  /**
   * Resets the tool to its initial state, clearing input, output, and options.
   */
  const handleReset = (): void => {
    handleClear();
    setRemoveDuplicates(false);
    setRemoveEmptyLines(true);
    setTrimLines(true);
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
    if ('removeDuplicates' in values) {
      setRemoveDuplicates(values.removeDuplicates);
    }
    if ('removeEmptyLines' in values) {
      setRemoveEmptyLines(values.removeEmptyLines);
    }
    if ('trimLines' in values) {
      setTrimLines(values.trimLines);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
          input={input}
          setInput={setInput}
          removeDuplicates={removeDuplicates}
          setRemoveDuplicates={setRemoveDuplicates}
          removeEmptyLines={removeEmptyLines}
          setRemoveEmptyLines={setRemoveEmptyLines}
          trimLines={trimLines}
          setTrimLines={setTrimLines}
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
