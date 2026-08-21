'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import { createExampleHandler } from '@/components/tool/createExampleHandler';
import { ToolExampleBlock } from '@/components/tool/ToolExampleBlock';

import { EXAMPLES } from './examples';
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

  const handleExample = createExampleHandler({ pxValue: setPxValue, baseFontSize: setBaseFontSize });

  return (
    <>
      <div className="space-y-6">
        <ToolExampleBlock examples={EXAMPLES} onExample={handleExample} />

        <InputBlock
          pxValue={pxValue}
          setPxValue={setPxValue}
          baseFontSize={baseFontSize}
          setBaseFontSize={setBaseFontSize}
          onClear={handleClear}
          onReset={handleReset}
        />

        <OutputBlock remValue={remValue} />
      </div>

      <InfoBlock />
    </>
  );
}
