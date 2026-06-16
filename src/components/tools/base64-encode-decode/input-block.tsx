'use client';

import type { JSX } from 'react';

import { ToolInputHeader } from '@/components/tool/tool-input-header';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { RadioBox } from '@/components/ui/radiobox';
import { Textarea } from '@/components/ui/textarea';

/**
 * Props for the Base64EncodeDecodeInput component.
 *
 * @type {InputBlockProps}
 * @property {string} input - The current text input
 * @property {(value: string) => void} setInput - Callback to update the input text
 * @property {boolean} isEncoding - Whether the current mode is encoding
 * @property {(value: boolean) => void} setIsEncoding - Callback to toggle encode/decode mode
 * @property {() => void} onClear - Callback to clear input and output
 * @property {() => void} onReset - Callback to reset to defaults
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  isEncoding: boolean;
  setIsEncoding: (value: boolean) => void;
  onClear: () => void;
  onReset: () => void;
}

/**
 * A component for accepting user input for Base64 encoding or decoding.
 * It includes a textarea for input, radio buttons to select the mode, and action buttons.
 *
 *  @param {InputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered input component.
 */
export function InputBlock({
  input,
  setInput,
  isEncoding,
  setIsEncoding,
  onClear,
  onReset,
}: InputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Input Text"
          desc="Enter the text to base64 encode or decode"
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:gap-6">
          <Textarea
            id="base64-input"
            placeholder="Text to base64 encode or decode"
            rows={8}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex gap-4">
            <RadioBox
              id="encode-radio"
              name="base64-action"
              checked={isEncoding}
              onCheckedChange={(checked) => setIsEncoding(checked)}
            >
              Encode
            </RadioBox>
            <RadioBox
              id="decode-radio"
              name="base64-action"
              checked={!isEncoding}
              onCheckedChange={(checked) => setIsEncoding(!checked)}
            >
              Decode
            </RadioBox>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
