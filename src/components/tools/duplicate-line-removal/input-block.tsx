'use client';

import type { JSX, SubmitEvent } from 'react';

import { ToolInputHeader } from '@/components/tool/tool-input-header';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioBox } from '@/components/ui/radiobox';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the DuplicateLineRemovalInput component props.
 *
 * @type {InputBlockProps}
 * @property {string} input - The current text input
 * @property {(value: string) => void} setInput - Callback to update the input text
 * @property {string} sortType - The sorting type (none, alphabetical, ascii)
 * @property {(value: string) => void} setSortType - Callback to update sort type
 * @property {boolean} reverseSort - Whether to sort in reverse order
 * @property {(value: boolean) => void} setReverseSort - Callback to toggle reverse sort
 * @property {() => void} onSubmit - Callback to trigger processing
 * @property {() => void} onReset - Callback to reset all options
 * @property {() => void} onClear - Callback to clear input and output
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  sortType: string;
  setSortType: (value: string) => void;
  reverseSort: boolean;
  setReverseSort: (value: boolean) => void;
  onSubmit: () => void;
  onReset: () => void;
  onClear: () => void;
}

/**
 * Input component for the Duplicate Line Removal tool.
 * Provides a form for text input, sorting options, and reverse sorting.
 *
 *  @param {InputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered component.
 */
export function InputBlock({
  input,
  setInput,
  sortType,
  setSortType,
  reverseSort,
  setReverseSort,
  onSubmit,
  onReset,
  onClear,
}: InputBlockProps): JSX.Element {
  /**
   * Handles form submission by preventing default behavior and triggering conversion.
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
          title="Duplicate Line Removal Input"
          desc="Enter your text and configure options to remove duplicate lines and sort them."
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <Textarea
            id="text-input"
            placeholder="Enter text with duplicate lines..."
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-wrap gap-4">
            <RadioBox
              id="sort-none"
              name="sortType"
              checked={sortType === 'none'}
              onCheckedChange={() => setSortType('none')}
            >
              Don’t Sort Results
            </RadioBox>
            <RadioBox
              id="sort-alphabetical"
              name="sortType"
              checked={sortType === 'alphabetical'}
              onCheckedChange={() => setSortType('alphabetical')}
            >
              Alphabetical Sort
            </RadioBox>
            <RadioBox
              id="sort-ascii"
              name="sortType"
              checked={sortType === 'ascii'}
              onCheckedChange={() => setSortType('ascii')}
            >
              ASCII Sort
            </RadioBox>
          </div>

          <div className="flex flex-wrap">
            <Checkbox id="reverse-sort" checked={reverseSort} onCheckedChange={setReverseSort}>
              Reverse Sorting (Z-A or 9-0)
            </Checkbox>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default">
              Process
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
