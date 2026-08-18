'use client';

import type { JSX } from 'react';

import { ToolInputHeader } from '@/components/tool/ToolInputHeader';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

import { BARCODE_FORMATS } from './index';
import type { BarcodeOptions, BarcodeFormat, BarcodeTextAlign } from './index';

/**
 * Props for the BarcodeGeneratorInput component.
 *
 * @type {InputBlockProps}
 * @property {string} input - The current text input
 * @property {(value: string) => void} setInput - Callback to update the input text
 * @property {BarcodeOptions} options - The current barcode generation options
 * @property {(key: keyof BarcodeOptions, value: BarcodeOptions[keyof BarcodeOptions]) => void} updateOption - Callback to update an option
 * @property {() => void} onClear - Callback to clear input
 * @property {() => void} onReset - Callback to reset options to defaults
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  options: BarcodeOptions;
  updateOption: (key: keyof BarcodeOptions, value: BarcodeOptions[keyof BarcodeOptions]) => void;
  onClear: () => void;
  onReset: () => void;
}

/**
 * BarcodeGeneratorInput is a React functional component that provides input
 * fields and controls for generating a barcode, including the data value and
 * the barcode settings (format, width, height, text visibility, alignment).
 *
 * @param {InputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered barcode input component.
 */
export function InputBlock({ input, setInput, options, updateOption, onClear, onReset }: InputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Input Data"
          desc="Enter the text to generate a barcode"
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="barcode-input">Data</Label>
            <Input
              id="barcode-input"
              type="text"
              placeholder="Enter text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="barcode-format">Format</Label>
                <Select
                  id="barcode-format"
                  className="w-full"
                  value={options.format}
                  onValueChange={(value) => updateOption('format', value as BarcodeFormat)}
                  options={BARCODE_FORMATS.map((format) => ({ value: format, label: format }))}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="barcode-text-align">Text Align</Label>
                <Select
                  id="barcode-text-align"
                  className="w-full"
                  value={options.textAlign}
                  onValueChange={(value) => updateOption('textAlign', value as BarcodeTextAlign)}
                  options={[
                    { value: 'left', label: 'Left' },
                    { value: 'center', label: 'Center' },
                    { value: 'right', label: 'Right' },
                  ]}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="barcode-show-text">Show Text</Label>
                <Select
                  id="barcode-show-text"
                  className="w-full"
                  value={options.showText ? 'show' : 'hide'}
                  onValueChange={(value) => updateOption('showText', value === 'show')}
                  options={[
                    { value: 'show', label: 'Show' },
                    { value: 'hide', label: 'Hide' },
                  ]}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="barcode-width">
                  Bar Width:{' '}
                  <span className="text-muted-foreground text-sm">
                    <code className="bg-muted px-1 font-medium text-pink-500">{options.width}px</code>
                  </span>
                </Label>
                <Slider
                  id="barcode-width"
                  min={1}
                  max={4}
                  step={1}
                  value={options.width}
                  onValueChange={(value) => updateOption('width', value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="barcode-height">
                  Height:{' '}
                  <span className="text-muted-foreground text-sm">
                    <code className="bg-muted px-1 font-medium text-pink-500">{options.height}px</code>
                  </span>
                </Label>
                <Slider
                  id="barcode-height"
                  min={50}
                  max={150}
                  step={1}
                  value={options.height}
                  onValueChange={(value) => updateOption('height', value)}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
