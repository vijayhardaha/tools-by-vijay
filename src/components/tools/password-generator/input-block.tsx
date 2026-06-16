'use client';

import type { JSX } from 'react';

import { ToolInputHeader } from '@/components/tool/tool-input-header';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { HelpTip } from '@/components/ui/helptip';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

/**
 * Interface for the password generation input component props.
 *
 * @type {InputBlockProps}
 * @property {number} length - The password length
 * @property {(value: number) => void} setLength - Callback to update password length
 * @property {boolean} useUppercase - Whether to include uppercase letters
 * @property {(value: boolean) => void} setUseUppercase - Callback to toggle uppercase inclusion
 * @property {boolean} useLowercase - Whether to include lowercase letters
 * @property {(value: boolean) => void} setUseLowercase - Callback to toggle lowercase inclusion
 * @property {boolean} useNumbers - Whether to include numbers
 * @property {(value: boolean) => void} setUseNumbers - Callback to toggle number inclusion
 * @property {boolean} useSymbols - Whether to include symbols
 * @property {(value: boolean) => void} setUseSymbols - Callback to toggle symbol inclusion
 * @property {boolean} excludeSimilar - Whether to exclude similar looking characters
 * @property {(value: boolean) => void} setExcludeSimilar - Callback to toggle similar character exclusion
 * @property {() => void} onReset - Callback to reset all options
 */
interface InputBlockProps {
  length: number;
  setLength: (value: number) => void;
  useUppercase: boolean;
  setUseUppercase: (value: boolean) => void;
  useLowercase: boolean;
  setUseLowercase: (value: boolean) => void;
  useNumbers: boolean;
  setUseNumbers: (value: boolean) => void;
  useSymbols: boolean;
  setUseSymbols: (value: boolean) => void;
  excludeSimilar: boolean;
  setExcludeSimilar: (value: boolean) => void;
  onReset: () => void;
}

/**
 * Component for configuring password generation options.
 * Provides a form with controls for password length, character types, and other settings.
 *
 *  @param {InputBlockProps} props - Component props.
 *
 * @returns {JSX.Element} The rendered form with password generation options.
 */
export function InputBlock({
  length,
  setLength,
  useUppercase,
  setUseUppercase,
  useLowercase,
  setUseLowercase,
  useNumbers,
  setUseNumbers,
  useSymbols,
  setUseSymbols,
  excludeSimilar,
  setExcludeSimilar,
  onReset,
}: InputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <ToolInputHeader title="Password Options" desc="Customize your password settings" onReset={onReset} />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="space-y-2">
            <Label htmlFor="password-length">
              Password Length:{' '}
              <span className="text-muted-foreground text-sm">
                <code className="bg-muted px-1 font-medium text-pink-500">{length}</code> characters
              </span>
            </Label>

            <Slider
              id="password-length"
              min={8}
              max={64}
              step={1}
              value={length}
              onValueChange={(value) => setLength(value)}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <Checkbox id="useUppercase" checked={useUppercase} onCheckedChange={setUseUppercase}>
              Include Uppercase (A-Z)
            </Checkbox>

            <Checkbox id="useLowercase" checked={useLowercase} onCheckedChange={setUseLowercase}>
              Include Lowercase (a-z)
            </Checkbox>

            <Checkbox id="useNumbers" checked={useNumbers} onCheckedChange={setUseNumbers}>
              Include Numbers (0-9)
            </Checkbox>

            <Checkbox id="useSymbols" checked={useSymbols} onCheckedChange={setUseSymbols}>
              Include Symbols (!@#$...)
            </Checkbox>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="excludeSimilar" checked={excludeSimilar} onCheckedChange={setExcludeSimilar}>
              Exclude similar characters (i, l, 1, L, o, 0, O)
            </Checkbox>

            <HelpTip text="This option removes characters that look alike (such as the letter 'O' and number '0'). Use this to create passwords that are less confusing to read and type, especially when sharing passwords verbally or in print." />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
