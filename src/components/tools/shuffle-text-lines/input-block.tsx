'use client';

import type { JSX, SubmitEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import Checkbox from '@/components/ui/checkbox';
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
 * @property {() => void} onSubmit - Callback to trigger shuffling
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
  onSubmit: () => void;
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
export default function InputBlock({
  input,
  setInput,
  removeDuplicates,
  setRemoveDuplicates,
  removeEmptyLines,
  setRemoveEmptyLines,
  trimLines,
  setTrimLines,
  onSubmit,
  onReset,
  onClear,
}: InputBlockProps): JSX.Element {
  /**
   * Handles form submission to shuffle lines.
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
        <CardTitle>Shuffle Text Lines Input</CardTitle>
        <CardDescription>Enter your text and configure options to shuffle lines randomly.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default">
              Process
            </Button>

            <Button type="button" variant="outline" onClick={onClear}>
              Clear
            </Button>

            <Button type="button" variant="destructive" onClick={onReset}>
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
