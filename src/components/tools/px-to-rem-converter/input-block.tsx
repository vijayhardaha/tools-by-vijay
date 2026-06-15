'use client';

import type { JSX } from 'react';

import ToolInputHeader from '@/components/tools/tool-input-header';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/**
 * Interface for the PxToRemInput component props.
 *
 * @type {InputBlockProps}
 * @property {string} pxValue - The pixel value to convert
 * @property {(value: string) => void} setPxValue - Callback to update the pixel value
 * @property {number} baseFontSize - The base font size in pixels
 * @property {(value: number) => void} setBaseFontSize - Callback to update the base font size
 * @property {() => void} onClear - Callback to clear input and output
 * @property {() => void} onReset - Callback to reset all options
 */
interface InputBlockProps {
  pxValue: string;
  setPxValue: (value: string) => void;
  baseFontSize: number;
  setBaseFontSize: (value: number) => void;
  onClear: () => void;
  onReset: () => void;
}

/**
 * Component for inputting px value and base font size.
 *
 *  @param {InputBlockProps} props - Component props.
 *
 * @returns {JSX.Element} The rendered input form.
 */
export default function InputBlock({
  pxValue,
  setPxValue,
  baseFontSize,
  setBaseFontSize,
  onClear,
  onReset,
}: InputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Px to Rem Input"
          desc="Enter pixel value and base font size"
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="px-value">Pixel Value (px)</Label>
            <Input
              id="px-value"
              type="number"
              value={pxValue}
              onChange={(e) => setPxValue(e.target.value)}
              placeholder="Enter px value"
              aria-label="Pixel value input"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="base-font-size">Base Font Size (px)</Label>
            <Input
              id="base-font-size"
              type="number"
              value={baseFontSize}
              onChange={(e) => setBaseFontSize(parseFloat(e.target.value) || 16)}
              placeholder="16"
              aria-label="Base font size input"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
