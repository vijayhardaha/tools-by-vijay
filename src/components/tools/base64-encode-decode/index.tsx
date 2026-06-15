'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import InfoBlock from './info-block';
import InputBlock from './input-block';
import OutputBlock from './output-block';

/**
 * A tool for encoding and decoding Base64 strings. It provides input, output, and informational components.
 *
 * @returns {JSX.Element} The rendered Base64 Encode/Decode Tool component.
 */
export default function Base64EncodeDecode(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isEncoding, setIsEncoding] = useState<boolean>(true);

  /**
   * Processes the input string by encoding or decoding it based on the current mode.
   */
  const handleProcess = (): void => {
    try {
      const result = isEncoding ? btoa(input) : atob(input);
      setOutput(result);
    } catch (error) {
      console.error('Error processing Base64:', error);
      setOutput('Error: Invalid input for the selected mode.');
    }
  };

  /**
   * Clears the input and output fields.
   */
  const handleClear = (): void => {
    setInput('');
    setOutput('');
  };

  /**
   * Resets the tool to its initial state, clearing input/output and setting mode to encoding.
   */
  const handleReset = (): void => {
    handleClear();
    setIsEncoding(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
          input={input}
          setInput={setInput}
          isEncoding={isEncoding}
          setIsEncoding={setIsEncoding}
          onProcess={handleProcess}
          onClear={handleClear}
          onReset={handleReset}
        />

        {output && <OutputBlock output={output} />}
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
