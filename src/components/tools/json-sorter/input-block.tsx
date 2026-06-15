'use client';

import type { JSX, SubmitEvent } from 'react';

import { ToolInputHeader } from '@/components/tools/tool-input-header';
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { HelpTip } from '@/components/ui/helptip';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the JSON sorter input component props.
 *
 * @type {InputBlockProps}
 * @property {string} input - The JSON input string
 * @property {(value: string) => void} setInput - Callback to update the input
 * @property {boolean} spareArrays - Whether to preserve array element order
 * @property {(value: boolean) => void} setSpareArrays - Callback to toggle array sparing
 * @property {() => void} onSubmit - Callback to trigger sorting
 * @property {() => void} onClear - Callback to clear input and output
 * @property {() => void} onReset - Callback to reset all options
 * @property {string} [error] - Current error message, if any
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  spareArrays: boolean;
  setSpareArrays: (value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
  error?: string;
}

/**
 * Component for inputting JSON and configuring sorting options.
 *
 *  @param {InputBlockProps} props - Component props.
 *
 * @returns {JSX.Element} The rendered form with sorting options.
 */
export function InputBlock({
  input,
  setInput,
  spareArrays,
  setSpareArrays,
  onSubmit,
  onClear,
  onReset,
  error,
}: InputBlockProps): JSX.Element {
  /**
   * Handles form submission by preventing default behavior and triggering sorting.
   *
   * @param {SubmitEvent} e - Form event object.
   */
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="JSON Input"
          desc="Paste your JSON and sort keys alphabetically"
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="json-input">JSON Content</Label>
              <HelpTip text="Enter or paste valid JSON that you want to sort alphabetically by keys." />
            </div>

            <Textarea
              id="json-input"
              placeholder={`{\n\t"zebra": 1,\n\t"apple": 2,\n\t"banana": 3\n}`}
              rows={10}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="spare-arrays" checked={spareArrays} onCheckedChange={setSpareArrays}>
              Spare plain arrays
            </Checkbox>
            <HelpTip text="Preserve the original order of simple arrays (don't sort array elements)" />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input}>
              Sort JSON
            </Button>
          </div>

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
}
