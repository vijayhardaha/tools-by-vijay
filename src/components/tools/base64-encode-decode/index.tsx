'use client';

import type { JSX } from 'react';
import { useMemo, useState } from 'react';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * A tool for encoding and decoding Base64 strings. It provides input, output, and informational components.
 *
 * @returns {JSX.Element} The rendered Base64 Encode/Decode Tool component.
 */
export function Base64EncodeDecode(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [isEncoding, setIsEncoding] = useState<boolean>(true);

  /**
   * Computes the base64 encoded/decoded output reactively.
   */
  const output = useMemo<string>(() => {
    if (!input) return '';
    try {
      return isEncoding ? btoa(input) : atob(input);
    } catch {
      return 'Error: Invalid input for the selected mode.';
    }
  }, [input, isEncoding]);

  /**
   * Clears the input and output fields.
   */
  const handleClear = (): void => {
    setInput('');
  };

  /**
   * Resets the tool to its initial state, clearing input/output and setting mode to encoding.
   */
  const handleReset = (): void => {
    handleClear();
    setIsEncoding(true);
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
    if ('isEncoding' in values) {
      setIsEncoding(values.isEncoding);
    }
  };

  return (
    <>
      <div className="space-y-6 md:space-y-8">
        <InputBlock
          input={input}
          setInput={setInput}
          isEncoding={isEncoding}
          setIsEncoding={setIsEncoding}
          onClear={handleClear}
          onReset={handleReset}
        />

        <ExampleBlock onExample={handleExample} />

        <OutputBlock output={output} />
      </div>

      <InfoBlock />
    </>
  );
}
