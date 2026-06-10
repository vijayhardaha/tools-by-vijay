'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import InfoBlock from './info-block';
import InputBlock from './input-block';
import OutputBlock from './output-block';

/**
 * A tool for shuffling lines of text with options to remove duplicates.
 *
 * @returns {JSX.Element} The ShuffleTextLinesTool component.
 */
export default function ShuffleTextLines(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [removeDuplicates, setRemoveDuplicates] = useState<boolean>(false);
  const [removeEmptyLines, setRemoveEmptyLines] = useState<boolean>(true);
  const [trimLines, setTrimLines] = useState<boolean>(true);

  /**
   * Handles the submission of the input text, shuffles the lines, and updates the output.
   */
  const handleSubmit = (): void => {
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
  };

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

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <InputBlock
          input={input}
          setInput={setInput}
          removeDuplicates={removeDuplicates}
          setRemoveDuplicates={setRemoveDuplicates}
          removeEmptyLines={removeEmptyLines}
          setRemoveEmptyLines={setRemoveEmptyLines}
          trimLines={trimLines}
          setTrimLines={setTrimLines}
          onSubmit={handleSubmit}
          onReset={handleReset}
          onClear={handleClear}
        />

        {output && <OutputBlock output={output} />}
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
