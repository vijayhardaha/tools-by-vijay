'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * Main component for the Px to Rem Converter tool.
 * Manages the state and functionality for converting px to rem.
 *
 * @returns {JSX.Element} The complete Px to Rem Converter tool with input options, output display, and information.
 */
export function PxToRemConverter(): JSX.Element {
  const [pxValue, setPxValue] = useState<string>('');
  const [baseFontSize, setBaseFontSize] = useState<number>(16);

  /**
   * Clears the input value and rem output.
   */
  const handleClear = (): void => {
    setPxValue('');
  };

  /**
   * Resets the input value and base font size to defaults.
   */
  const handleReset = (): void => {
    setPxValue('');
    setBaseFontSize(16);
  };

  /**
   * Converts px to rem based on the base font size.
   *
   * @param {string} px - The pixel value.
   * @param {number} base - The base font size.
   *
   * @returns {string} The calculated rem value.
   */
  const calculateRem = (px: string, base: number): string => {
    const pxNumber = parseFloat(px);
    return !isNaN(pxNumber) && base > 0 ? (pxNumber / base).toFixed(2) : '';
  };

  const remValue = calculateRem(pxValue, baseFontSize);

  /**
   * Loads an example with predefined input values and options.
   *
   * @param {object} values - The example values.
   *
   * @returns {void}
   */
  const handleExample = (values: Record<string, any>): void => {
    if ('pxValue' in values) {
      setPxValue(values.pxValue);
    }
    if ('baseFontSize' in values) {
      setBaseFontSize(values.baseFontSize);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
          pxValue={pxValue}
          setPxValue={setPxValue}
          baseFontSize={baseFontSize}
          setBaseFontSize={setBaseFontSize}
          onClear={handleClear}
          onReset={handleReset}
        />
        <ExampleBlock onExample={handleExample} />

        <OutputBlock remValue={remValue} />
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
