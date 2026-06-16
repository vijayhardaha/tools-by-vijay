'use client';

import type { JSX } from 'react';

import { ToolInputHeader } from '@/components/tool/tool-input-header';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
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
  onClear: () => void;
  onReset: () => void;
}

/**
 * A React component for generating slugs from input strings Various options.
 *
 *  @param {InputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered SlugifyInput component.
 */
export function InputBlock({
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
  onClear,
  onReset,
}: InputBlockProps): JSX.Element {
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
        <div className="flex flex-col gap-4 md:gap-6">
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
                <span className="text-xs">Dash (-)</span>
              </Button>

              <Button
                size="sm"
                variant={useUnderscore ? 'default' : 'outline'}
                onClick={() => setUseUnderscore(true)}
                disabled={useUnderscore}
                className={cn('opacity-100!')}
              >
                <span className="text-xs">Underscore (_)</span>
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
        </div>
      </CardContent>
    </Card>
  );
}
