'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * Supported barcode symbologies (subset of the formats provided by JsBarcode).
 */
export const BARCODE_FORMATS = [
  'CODE128',
  'CODE128A',
  'CODE128B',
  'CODE128C',
  'CODE39',
  'EAN13',
  'EAN8',
  'UPC',
  'UPCE',
  'ITF14',
  'ITF',
  'MSI',
  'pharmacode',
  'codabar',
] as const;

/**
 * Barcode symbology identifier.
 *
 * @type {BarcodeFormat}
 */
export type BarcodeFormat = (typeof BARCODE_FORMATS)[number];

/**
 * Horizontal alignment of the human-readable text under the barcode.
 *
 * @type {BarcodeTextAlign}
 */
export type BarcodeTextAlign = 'left' | 'center' | 'right';

/**
 * User-configurable barcode generation options.
 *
 * @type {BarcodeOptions}
 * @property {BarcodeFormat} format - The barcode symbology to use
 * @property {number} width - Width of a single bar in pixels
 * @property {number} height - Height of the barcode in pixels
 * @property {boolean} showText - Whether to display the human-readable text
 * @property {BarcodeTextAlign} textAlign - Alignment of the displayed text
 */
export interface BarcodeOptions {
  format: BarcodeFormat;
  width: number;
  height: number;
  showText: boolean;
  textAlign: BarcodeTextAlign;
}

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

  /**
   * Loads an example with predefined input values and options.
   *
   * @param {object} values - The example values.
   */
  const handleExample = (values: Record<string, any>): void => {
    if ('input' in values) {
      setInput(values.input);
    }
    if ('format' in values) {
      updateOption('format', values.format as BarcodeFormat);
    }
    if ('width' in values) {
      updateOption('width', values.width);
    }
    if ('height' in values) {
      updateOption('height', values.height);
    }
    if ('showText' in values) {
      updateOption('showText', values.showText);
    }
    if ('textAlign' in values) {
      updateOption('textAlign', values.textAlign as BarcodeTextAlign);
    }
  };

  return (
    <>
      <div className="space-y-6">
        <ExampleBlock onExample={handleExample} />

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
