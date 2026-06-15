'use client';

import type { JSX, SubmitEvent } from 'react';

import { ToolInputHeader } from '@/components/tools/tool-input-header';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

/**
 * Props for the BarcodeGeneratorInput component.
 *
 * @type {InputBlockProps}
 * @property {string} input - The current text input
 * @property {(value: string) => void} setInput - Callback to update the input text
 * @property {() => void} onSubmit - Callback to trigger barcode generation
 * @property {() => void} onClear - Callback to clear input and output
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

/**
 * BarcodeGeneratorInput is a React functional component that provides
 * input fields and controls for generating a barcode.
 *
 *  @param {InputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered barcode input component.
 */
export function InputBlock({ input, setInput, onSubmit, onClear }: InputBlockProps): JSX.Element {
  /**
   * Handles the form submission to generate the barcode.
   *
   * @param {SubmitEvent} e - The form submission event.
   */
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <ToolInputHeader title="Input Data" desc="Enter the text to generate a barcode" onClear={onClear} />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <Input
            id="barcode-input"
            type="text"
            placeholder="Enter text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input}>
              Generate
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
