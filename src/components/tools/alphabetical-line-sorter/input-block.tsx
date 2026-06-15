'use client';

import type { JSX, SubmitEvent } from 'react';

import { ToolInputHeader } from '@/components/tools/tool-input-header';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioBox } from '@/components/ui/radiobox';
import { Textarea } from '@/components/ui/textarea';

/**
 * Props for the AlphabeticalLineSorterInput component.
 *
 * @type {InputBlockProps}
 * @property {string} input - The current text input
 * @property {(value: string) => void} setInput - Callback to update the input text
 * @property {boolean} reverseSort - Whether to sort in reverse order
 * @property {(value: boolean) => void} setReverseSort - Callback to toggle reverse sort
 * @property {boolean} removeDuplicates - Whether to remove duplicate lines
 * @property {(value: boolean) => void} setRemoveDuplicates - Callback to toggle duplicate removal
 * @property {string} sortType - The sorting algorithm (standard or ascii)
 * @property {(value: string) => void} setSortType - Callback to update sort type
 * @property {() => void} onSubmit - Callback to trigger sorting
 * @property {() => void} onReset - Callback to reset all options
 * @property {() => void} onClear - Callback to clear input and output
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  reverseSort: boolean;
  setReverseSort: (value: boolean) => void;
  removeDuplicates: boolean;
  setRemoveDuplicates: (value: boolean) => void;
  sortType: string;
  setSortType: (value: string) => void;
  onSubmit: () => void;
  onReset: () => void;
  onClear: () => void;
}

/**
 * Input component for the Alphabetical Line Sorter tool.
 * Provides a form for text input, sorting type, reverse sorting option, and duplicate removal.
 *
 * @param {InputBlockProps} props - Component props
 *
 * @returns {JSX.Element} The rendered input form
 */
export function InputBlock({
  input,
  setInput,
  reverseSort,
  setReverseSort,
  removeDuplicates,
  setRemoveDuplicates,
  sortType,
  setSortType,
  onSubmit,
  onReset,
  onClear,
}: InputBlockProps): JSX.Element {
  /**
   * Handles form submission to sort lines alphabetically
   *
   * @param {SubmitEvent} e - Event object
   */
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Alphabetical Line Sorter Input"
          desc="Enter your text and configure options to sort lines alphabetically."
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <Textarea
            id="text-input"
            placeholder="Enter text to sort alphabetically..."
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-wrap gap-4">
            <RadioBox
              id="sort-standard"
              name="sortType"
              checked={sortType === 'standard'}
              onCheckedChange={() => setSortType('standard')}
            >
              Standard Alphabetical Order
            </RadioBox>
            <RadioBox
              id="sort-ascii"
              name="sortType"
              checked={sortType === 'ascii'}
              onCheckedChange={() => setSortType('ascii')}
            >
              ASCII Sorting
            </RadioBox>
          </div>

          <div className="flex flex-wrap gap-4">
            <Checkbox id="reverse-sort" checked={reverseSort} onCheckedChange={setReverseSort}>
              Reverse Sorting (Z-A)
            </Checkbox>

            <Checkbox id="remove-duplicates" checked={removeDuplicates} onCheckedChange={setRemoveDuplicates}>
              Remove Duplicate Lines
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
