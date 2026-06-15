'use client';

import type { JSX, SubmitEvent } from 'react';

import Alert from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the TextCaseChangerInput component props.
 *
 * @type {InputBlockProps}
 * @property {string} input - The current text input
 * @property {(value: string) => void} setInput - Callback to update the input text
 * @property {string} textCase - The selected text case option
 * @property {(value: string) => void} setTextCase - Callback to update the text case option
 * @property {() => void} onSubmit - Callback to trigger text case conversion
 * @property {() => void} onClear - Callback to clear input and output
 * @property {() => void} onReset - Callback to reset all options
 * @property {string} [error] - Current error message, if any
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  textCase: string;
  setTextCase: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
  error?: string;
}

/**
 * Component for accepting text input and selecting a text case transformation.
 *
 * @param {InputBlockProps} props - The props for the TextCaseChangerInput component.
 *
 * @returns {JSX.Element} The TextCaseChangerInput component.
 */
export default function InputBlock({
  input,
  setInput,
  textCase,
  setTextCase,
  onSubmit,
  onClear,
  onReset,
  error,
}: InputBlockProps): JSX.Element {
  /**
   * Handles the form submission event.
   *
   * @param {SubmitEvent} e - The form submission event.
   */
  const handleSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Text Input</CardTitle>
        <CardDescription>Paste multiline text to change its case</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            id="text-input"
            placeholder={`Item 1\nItem 2\nItem 3`}
            rows={5}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Select
            id="text-case"
            value={textCase}
            onValueChange={setTextCase}
            options={[
              { value: 'Sentence case', label: 'Sentence Case' },
              { value: 'lower case', label: 'Lower Case' },
              { value: 'UPPER CASE', label: 'UPPER CASE' },
              { value: 'Capitalized Case', label: 'Capitalized Case' },
              { value: 'aLtErNaTiNg cAsE', label: 'Alternating Case' },
              { value: 'Title Case', label: 'Title Case' },
              { value: 'InVeRsE CaSe', label: 'Inverse Case' },
            ]}
          />

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input}>
              Convert
            </Button>

            <Button type="button" variant="outline" onClick={onClear}>
              Clear
            </Button>

            <Button type="button" variant="destructive" onClick={onReset}>
              Reset
            </Button>
          </div>

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
}
