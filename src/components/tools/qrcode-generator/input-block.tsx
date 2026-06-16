'use client';

import type { JSX } from 'react';

import { ToolInputHeader } from '@/components/tool/tool-input-header';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

/**
 * Interface for the QR code generator input component props.
 *
 * @type {InputBlockProps}
 * @property {string} input - The text or URL to encode in the QR code
 * @property {(value: string) => void} setInput - Callback to update the input
 * @property {number} size - The QR code size in pixels
 * @property {(value: number) => void} setSize - Callback to update the size
 * @property {() => void} onClear - Callback to clear input and output
 * @property {() => void} onReset - Callback to reset all options
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  size: number;
  setSize: (value: number) => void;
  onClear: () => void;
  onReset: () => void;
}

/**
 * InputBlock is a React functional component that provides
 * input fields and controls for generating a QR code.
 *
 *  @param {InputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered QR code input component.
 */
export function InputBlock({ input, setInput, size, setSize, onClear, onReset }: InputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Input Data"
          desc="Enter the text or URL to generate a QR code"
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:gap-6">
          <Input
            id="qr-input"
            type="text"
            placeholder="Enter text or URL"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-col gap-2">
            <Label htmlFor="qr-size">
              QR Code Size:{' '}
              <span className="text-muted-foreground text-sm">
                <code className="bg-muted px-1 font-medium text-pink-500">{size}px</code>
              </span>
            </Label>
            <Slider id="qr-size" value={size} min={128} max={512} step={1} onValueChange={(value) => setSize(value)} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
