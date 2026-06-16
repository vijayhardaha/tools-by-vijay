'use client';

import type { JSX } from 'react';
import { useMemo, useState } from 'react';

import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * BarcodeGeneratorTool is a React functional component that provides a tool
 * for generating barcodes based on user input. It includes input fields for
 * data and size, and displays the generated barcode.
 *
 * @returns {JSX.Element} The rendered barcode generator tool component.
 */
export function BarcodeGenerator(): JSX.Element {
  const [input, setInput] = useState<string>('');

  /**
   * Computes the barcode URL reactively.
   */
  const output = useMemo<string>(() => {
    if (!input) return '';
    return `https://barcode.tec-it.com/barcode.ashx?data=${encodeURIComponent(input)}&code=Code128&dpi=96`;
  }, [input]);

  /**
   * Clears the input and output states.
   */
  const handleClear = (): void => {
    setInput('');
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock input={input} setInput={setInput} onClear={handleClear} />

        <OutputBlock output={output} />
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
