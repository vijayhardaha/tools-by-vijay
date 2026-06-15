'use client';

import type { JSX, SubmitEvent } from 'react';

import ToolInputHeader from '@/components/tools/tool-input-header';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Checkbox from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { cn } from '@/utils/classnames';

/**
 * Interface for the SlugifyInput component props.
 *
 * @type {InputBlockProps}
 * @property {string} input - The current text input to slugify
 * @property {(value: string) => void} setInput - Callback to update the input text
 * @property {boolean} useUnderscore - Whether to use underscores instead of dashes
 * @property {(value: boolean) => void} setUseUnderscore - Callback to toggle underscore usage
 * @property {boolean} removeNumbers - Whether to remove numbers from the slug
 * @property {(value: boolean) => void} setRemoveNumbers - Callback to toggle number removal
 * @property {boolean} useLowercase - Whether to convert to lowercase
 * @property {(value: boolean) => void} setUseLowercase - Callback to toggle lowercase conversion
 * @property {boolean} useLitinize - Whether to normalize unicode characters
 * @property {(value: boolean) => void} setUseLitinize - Callback to toggle latinize
 * @property {() => void} onSubmit - Callback to trigger slug generation
 * @property {() => void} onClear - Callback to clear input and output
 * @property {() => void} onReset - Callback to reset all options
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  useUnderscore: boolean;
  setUseUnderscore: (value: boolean) => void;
  removeNumbers: boolean;
  setRemoveNumbers: (value: boolean) => void;
  useLowercase: boolean;
  setUseLowercase: (value: boolean) => void;
  useLitinize: boolean;
  setUseLitinize: (value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
}

/**
 * A React component for generating slugs from input strings with various options.
 *
 *  @param {InputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered SlugifyInput component.
 */
export default function InputBlock({
  input = '',
  setInput,
  useUnderscore = false,
  setUseUnderscore,
  removeNumbers = false,
  setRemoveNumbers,
  useLowercase = true,
  setUseLowercase,
  useLitinize = true,
  setUseLitinize,
  onSubmit,
  onClear,
  onReset,
}: InputBlockProps): JSX.Element {
  /**
   * Handles form submission and triggers slug generation.
   *
   * @param {SubmitEvent} e - The form event.
   */
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Input String"
          desc="Article title, tutorial title or any web page title"
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <Input
            id="text-input"
            type="text"
            placeholder="Enter text to slugify"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-sm">
              Currently separating with:{' '}
              <span className="font-bold">{useUnderscore ? 'Underscore (_)' : 'Dash (-)'}</span>
            </p>

            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={!useUnderscore ? 'default' : 'outline'}
                onClick={() => setUseUnderscore(false)}
                disabled={!useUnderscore}
                className={cn('opacity-100!')}
              >
                <span className="text-xs">With dash (-)</span>
              </Button>

              <Button
                size="sm"
                variant={useUnderscore ? 'default' : 'outline'}
                onClick={() => setUseUnderscore(true)}
                disabled={useUnderscore}
                className={cn('opacity-100!')}
              >
                <span className="text-xs">With underscore (_)</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Checkbox id="useLowercase" checked={useLowercase} onCheckedChange={setUseLowercase}>
              Convert to lowercase
            </Checkbox>

            <Checkbox id="remove-numbers" checked={removeNumbers} onCheckedChange={setRemoveNumbers}>
              Remove numbers
            </Checkbox>

            <Checkbox id="use-latinize" checked={useLitinize} onCheckedChange={setUseLitinize}>
              Use latinize
            </Checkbox>
          </div>

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
