'use client';

import type { JSX } from 'react';

import { ToolInputHeader } from '@/components/tool/tool-input-header';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/utils/classnames';

/**
 * Interface for the BulkSlugifyInput component props.
 *
 * @type {InputBlockProps}
 * @property {string} input - The current text input
 * @property {boolean} useUnderscore - Whether to use underscores instead of dashes
 * @property {(value: string) => void} setInput - Callback to update the input text
 * @property {boolean} removeNumbers - Whether to remove numbers from slugs
 * @property {boolean} useLowercase - Whether to convert to lowercase
 * @property {boolean} useLitinize - Whether to normalize unicode characters
 * @property {(value: boolean) => void} setUseUnderscore - Callback to toggle underscore usage
 * @property {(value: boolean) => void} setRemoveNumbers - Callback to toggle number removal
 * @property {(value: boolean) => void} setUseLowercase - Callback to toggle lowercase conversion
 * @property {(value: boolean) => void} setUseLitinize - Callback to toggle latinize
 * @property {() => void} onClear - Callback to clear input and output
 * @property {() => void} onReset - Callback to reset all options
 * @property {boolean} keepEmptyLines - Whether to keep empty lines in output
 * @property {(value: boolean) => void} setKeepEmptyLines - Callback to toggle empty line preservation
 */
interface InputBlockProps {
  input: string;
  useUnderscore: boolean;
  setInput: (value: string) => void;
  removeNumbers: boolean;
  useLowercase: boolean;
  useLitinize: boolean;
  setUseUnderscore: (value: boolean) => void;
  setRemoveNumbers: (value: boolean) => void;
  setUseLowercase: (value: boolean) => void;
  setUseLitinize: (value: boolean) => void;
  onClear: () => void;
  onReset: () => void;
  keepEmptyLines: boolean;
  setKeepEmptyLines: (value: boolean) => void;
}

/**
 * Component for user input and configuration options for the Bulk Slugify tool
 *
 * This component provides a form for users to input text strings to be slugified,
 * along Configuration options for the slugification process such as separator
 * type, case conversion, number removal, and character normalization.
 *
 * @param {InputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered barcode input component.
 */
export function InputBlock({
  input = '',
  useUnderscore = false,
  setInput,
  removeNumbers = false,
  useLowercase = true,
  useLitinize = true,
  setUseUnderscore,
  setRemoveNumbers,
  setUseLowercase,
  setUseLitinize,
  onClear,
  onReset,
  keepEmptyLines = false,
  setKeepEmptyLines,
}: InputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Input Strings"
          desc="(Article titles, tutorial titles or any web page titles)"
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:gap-6">
          <Textarea
            id="text-input"
            placeholder="Enter multiple lines of text to slugify"
            rows={10}
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
            <Checkbox id="use-lowercase" checked={useLowercase} onCheckedChange={setUseLowercase}>
              Convert to lowercase
            </Checkbox>

            <Checkbox id="remove-numbers" checked={removeNumbers} onCheckedChange={setRemoveNumbers}>
              Remove numbers
            </Checkbox>

            <Checkbox id="use-latinize" checked={useLitinize} onCheckedChange={setUseLitinize}>
              Use latinize
            </Checkbox>

            <Checkbox id="keep-empty-lines" checked={keepEmptyLines} onCheckedChange={setKeepEmptyLines}>
              Keep empty lines
            </Checkbox>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
