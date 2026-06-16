'use client';

import type { JSX } from 'react';
import { useMemo, useState } from 'react';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * QRCodeGeneratorTool is a React functional component that provides a tool
 * for generating QR codes based on user input. It includes input fields for
 * data and size, and displays the generated QR code.
 *
 * @returns {JSX.Element} The rendered QR code generator tool component.
 */
export function QRCodeGenerator(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [size, setSize] = useState<number>(256);

  /**
   * Computes the QR code URL reactively.
   */
  const output = useMemo<string>(() => {
    if (!input) return '';
    return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=${size}x${size}`;
  }, [input, size]);

  /**
   * Clears the input and output states.
   */
  const handleClear = (): void => {
    setInput('');
  };

  /**
   * Resets the input, output, and size states to their default values.
   */
  const handleReset = (): void => {
    handleClear();
    setSize(256);
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
    if ('size' in values) {
      setSize(values.size);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
          input={input}
          setInput={setInput}
          size={size}
          setSize={setSize}
          onClear={handleClear}
          onReset={handleReset}
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
