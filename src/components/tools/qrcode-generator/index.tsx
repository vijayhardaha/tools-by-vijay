'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * Supported QR code error correction levels.
 */
export const ERROR_LEVELS = ['L', 'M', 'Q', 'H'] as const;

/**
 * QR code error correction level.
 *
 * @type {QrErrorLevel}
 */
export type QrErrorLevel = (typeof ERROR_LEVELS)[number];

/**
 * Default QR code size in pixels.
 */
const defaultSize = 256;

/**
 * Default error correction level (medium, ~15% recovery).
 */
const defaultLevel: QrErrorLevel = 'M';

/**
 * QRCodeGenerator is a React functional component that renders a client-side
 * QR code using the qrcode.react library, with configurable size and error
 * correction level.
 *
 * @returns {JSX.Element} The rendered QR code generator tool component.
 */
export function QRCodeGenerator(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [size, setSize] = useState<number>(defaultSize);
  const [level, setLevel] = useState<QrErrorLevel>(defaultLevel);

  /**
   * Clears the input and output states.
   */
  const handleClear = (): void => {
    setInput('');
  };

  /**
   * Clears the input and resets the size and error level to their defaults.
   */
  const handleReset = (): void => {
    handleClear();
    setSize(defaultSize);
    setLevel(defaultLevel);
  };

  /**
   * Loads an example with predefined input values and options.
   *
   * @param {object} values - The example values.
   */
  const handleExample = (values: Record<string, any>): void => {
    if ('input' in values) {
      setInput(values.input);
    }
    if ('size' in values) {
      setSize(values.size);
    }
    if ('level' in values) {
      setLevel(values.level as QrErrorLevel);
    }
  };

  return (
    <>
      <div className="space-y-6 md:space-y-8">
        <InputBlock
          input={input}
          setInput={setInput}
          size={size}
          setSize={setSize}
          level={level}
          setLevel={setLevel}
          onClear={handleClear}
          onReset={handleReset}
        />

        <ExampleBlock onExample={handleExample} />

        <OutputBlock value={input} size={size} level={level} />
      </div>

      <InfoBlock />
    </>
  );
}
