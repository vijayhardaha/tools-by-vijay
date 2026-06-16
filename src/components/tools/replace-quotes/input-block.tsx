'use client';

import type { JSX } from 'react';

import { ToolInputHeader } from '@/components/tool/tool-input-header';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioBox } from '@/components/ui/radiobox';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the Replace Quotes input component props.
 *
 * @type {InputBlockProps}
 * @property {string} input - The current text input
 * @property {(value: string) => void} setInput - Callback to update the input text
 * @property {'simple-to-curly' | 'curly-to-simple'} replaceType - The quote replacement direction
 * @property {(value: 'simple-to-curly' | 'curly-to-simple') => void} setReplaceType - Callback to update replacement type
 * @property {boolean} replaceApostrophes - Whether to replace apostrophes
 * @property {(value: boolean) => void} setReplaceApostrophes - Callback to toggle apostrophe replacement
 * @property {boolean} replaceStandaloneQuotes - Whether to replace standalone quotes
 * @property {(value: boolean) => void} setReplaceStandaloneQuotes - Callback to toggle standalone quote replacement
 * @property {() => void} onClear - Callback to clear input and output
 * @property {() => void} onReset - Callback to reset all options
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
export function InputBlock({
  input,
  setInput,
  replaceType,
  setReplaceType,
  replaceApostrophes,
  setReplaceApostrophes,
  replaceStandaloneQuotes,
  setReplaceStandaloneQuotes,
  onClear,
  onReset,
}: InputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Text Input"
          desc="Enter text and choose the type of quote replacement"
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:gap-6">
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
        </div>
      </CardContent>
    </Card>
  );
}
