'use client';

import type { JSX, SubmitEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioBox } from '@/components/ui/radiobox';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the Replace Quotes input component props.
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  replaceType: 'simple-to-curly' | 'curly-to-simple';
  setReplaceType: (value: 'simple-to-curly' | 'curly-to-simple') => void;
  replaceApostrophes: boolean;
  setReplaceApostrophes: (value: boolean) => void;
  replaceStandaloneQuotes: boolean;
  setReplaceStandaloneQuotes: (value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
}

/**
 * Input component for the Replace Quotes tool.
 * Handles user input and actions for replacing quotes.
 *
 * @param {InputBlockProps} props - Component props
 *
 * @returns {JSX.Element} The input component for the Replace Quotes tool.
 */
const InputBlock = ({
  input,
  setInput,
  replaceType,
  setReplaceType,
  replaceApostrophes,
  setReplaceApostrophes,
  replaceStandaloneQuotes,
  setReplaceStandaloneQuotes,
  onSubmit,
  onClear,
  onReset,
}: InputBlockProps): JSX.Element => {
  /**
   * Handles form submission by preventing default behavior and triggering the replace action.
   *
   * @param {SubmitEvent} e - Form event object
   */
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Replace Quotes</CardTitle>
        <CardDescription>Enter text and choose the type of quote replacement</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            id="text-input"
            placeholder="Enter your text here..."
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-wrap gap-4">
            <RadioBox
              id="simple-to-curly"
              name="replace-type"
              checked={replaceType === 'simple-to-curly'}
              onCheckedChange={() => setReplaceType('simple-to-curly')}
            >
              Simple to Curly Quotes
            </RadioBox>
            <RadioBox
              id="curly-to-simple"
              name="replace-type"
              checked={replaceType === 'curly-to-simple'}
              onCheckedChange={() => setReplaceType('curly-to-simple')}
            >
              Curly to Simple Quotes
            </RadioBox>
          </div>

          <div className="flex flex-wrap gap-4">
            <Checkbox
              id="replace-apostrophes"
              checked={replaceApostrophes}
              onCheckedChange={(checked) => setReplaceApostrophes(checked)}
            >
              Replace Apostrophes
            </Checkbox>
            <Checkbox
              id="replace-standalone-quotes"
              checked={replaceStandaloneQuotes}
              onCheckedChange={(checked) => setReplaceStandaloneQuotes(checked)}
            >
              Replace Standalone Quotes
            </Checkbox>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input}>
              Replace Quotes
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
};

export default InputBlock;
