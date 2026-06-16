'use client';

import type { JSX } from 'react';

import { ToolInputHeader } from '@/components/tool/tool-input-header';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the Shuffle Text Lines input component props.
 *
 * @type {InputBlockProps}
 * @property {string} input - The current text input
 * @property {(value: string) => void} setInput - Callback to update the input text
 * @property {boolean} removeDuplicates - Whether to remove duplicate lines
 * @property {(value: boolean) => void} setRemoveDuplicates - Callback to toggle duplicate removal
 * @property {boolean} removeEmptyLines - Whether to remove empty lines
 * @property {(value: boolean) => void} setRemoveEmptyLines - Callback to toggle empty line removal
 * @property {boolean} trimLines - Whether to trim whitespace from lines
 * @property {(value: boolean) => void} setTrimLines - Callback to toggle line trimming
 * @property {() => void} onReset - Callback to reset all options
 * @property {() => void} onClear - Callback to clear input and output
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  removeDuplicates: boolean;
  setRemoveDuplicates: (value: boolean) => void;
  removeEmptyLines: boolean;
  setRemoveEmptyLines: (value: boolean) => void;
  trimLines: boolean;
  setTrimLines: (value: boolean) => void;
  onReset: () => void;
  onClear: () => void;
}

/**
 * Input component for the Shuffle Text Lines tool.
 * Provides a form for text input and options to shuffle lines randomly.
 *
 *  @param {InputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The input component for the Shuffle Text Lines tool.
 */
export function InputBlock({
  input,
  setInput,
  removeDuplicates,
  setRemoveDuplicates,
  removeEmptyLines,
  setRemoveEmptyLines,
  trimLines,
  setTrimLines,
  onReset,
  onClear,
}: InputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Input Strings"
          desc="Enter your text and configure options to shuffle lines randomly."
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:gap-6">
          <Textarea
            id="text-input"
            placeholder="Enter text to shuffle..."
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-wrap gap-4">
            <Checkbox id="remove-duplicates" checked={removeDuplicates} onCheckedChange={setRemoveDuplicates}>
              Remove Duplicate Lines
            </Checkbox>

            <Checkbox id="remove-empty-lines" checked={removeEmptyLines} onCheckedChange={setRemoveEmptyLines}>
              Remove Empty Lines
            </Checkbox>

            <Checkbox id="trim-lines" checked={trimLines} onCheckedChange={setTrimLines}>
              Trim Lines
            </Checkbox>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
