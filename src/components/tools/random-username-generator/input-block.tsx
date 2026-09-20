'use client';

import type { JSX, SubmitEvent } from 'react';

import { ToolInputHeader } from '@/components/tool/ToolInputHeader';
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

/**
 * Props for the RandomUsernameGenerator input component.
 *
 * @type {InputBlockProps}
 * @property {number} count - The number of usernames to generate
 * @property {(value: number) => void} setCount - Callback to update generation count
 * @property {() => void} onSubmit - Callback to generate usernames
 * @property {() => void} onClear - Callback to clear input and output
 * @property {string} [error] - Current error message, if any
 */
interface InputBlockProps {
  count: number;
  setCount: (value: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  error?: string;
}

/**
 * A component for accepting input to generate usernames.
 *
 *  @param {InputBlockProps} props - The props for the RandomUsernameGeneratorInput component.
 *
 * @returns {JSX.Element} The RandomUsernameGeneratorInput component.
 */
export function InputBlock({ count, setCount, onSubmit, onClear, error }: InputBlockProps): JSX.Element {
  /**
   * Handles form submission and triggers username generation.
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
        <ToolInputHeader title="Username Generator" desc="Generate random usernames" onClear={onClear} />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <Input
            id="count-input"
            type="number"
            placeholder="Enter number of usernames"
            value={count}
            min={1}
            step={1}
            max={200}
            onChange={(e) => setCount(Number(e.target.value))}
          />

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!!error}>
              Generate Usernames
            </Button>
          </div>

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
}
