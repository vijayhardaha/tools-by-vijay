'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import InfoBlock from './info-block';
import InputBlock from './input-block';
import OutputBlock from './output-block';

/**
 * Main component for the Px to Rem Converter tool.
 * Manages the state and functionality for converting px to rem.
 *
 * @returns {JSX.Element} The complete Px to Rem Converter tool with input options, output display, and information.
 */
export default function PxToRemConverter(): JSX.Element {
  const [pxValue, setPxValue] = useState<string>('');
  const [baseFontSize, setBaseFontSize] = useState<number>(16);

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

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
          pxValue={pxValue}
          setPxValue={setPxValue}
          baseFontSize={baseFontSize}
          setBaseFontSize={setBaseFontSize}
        />
        <OutputBlock remValue={remValue} />
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
