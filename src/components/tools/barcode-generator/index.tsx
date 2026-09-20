'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import { createExampleHandler } from '@/components/tool/createExampleHandler';
import { ToolExampleBlock } from '@/components/tool/ToolExampleBlock';

import type { BarcodeFormat, BarcodeOptions, BarcodeTextAlign } from './constants';
import { EXAMPLES } from './examples';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * Default options for the barcode generator.
 *
 * Text is rendered at font size 16 with an 8px margin, centered on a white
 * background with black bars.
 *
 * @type {BarcodeOptions}
 */
const defaultOptions: BarcodeOptions = {
  format: 'CODE128',
  width: 2,
  height: 100,
  showText: true,
  textAlign: 'center',
};

/**
 * BarcodeGenerator is a React functional component that renders a client-side
 * barcode using the react-barcode library, with configurable format, bar
 * width, height, text visibility, and text alignment.
 *
 * @returns {JSX.Element} The rendered barcode generator tool component.
 */
export function BarcodeGenerator(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [options, setOptions] = useState<BarcodeOptions>(defaultOptions);

  /**
   * Updates a single barcode option while preserving the others.
   *
   * @template K - The option key type.
   *
   * @param {K} key - The option to update.
   * @param {BarcodeOptions[K]} value - The new value for the option.
   */
  const updateOption = <K extends keyof BarcodeOptions>(key: K, value: BarcodeOptions[K]): void => {
    setOptions((prevOptions) => ({ ...prevOptions, [key]: value }));
  };

  /**
   * Clears the input state.
   */
  const handleClear = (): void => {
    setInput('');
  };

  /**
   * Clears the input and resets all options to their defaults.
   */
  const handleReset = (): void => {
    handleClear();
    setOptions(defaultOptions);
  };

  const handleExample = createExampleHandler({
    input: setInput,
    format: (value) => updateOption('format', value as BarcodeFormat),
    width: (value) => updateOption('width', value),
    height: (value) => updateOption('height', value),
    showText: (value) => updateOption('showText', value),
    textAlign: (value) => updateOption('textAlign', value as BarcodeTextAlign),
  });

  return (
    <>
      <div className="space-y-6">
        <ToolExampleBlock examples={EXAMPLES} onExample={handleExample} />

        <InputBlock
          input={input}
          setInput={setInput}
          options={options}
          updateOption={updateOption}
          onClear={handleClear}
          onReset={handleReset}
        />

        <OutputBlock value={input} options={options} />
      </div>

      <InfoBlock />
    </>
  );
}
