'use client';

import type { JSX, SubmitEvent } from 'react';

import Alert from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

/**
 * Interface for the CountryNameGeneratorInput component props.
 *
 * @type {InputBlockProps}
 * @property {number} count - The number of names to generate
 * @property {(value: number) => void} setCount - Callback to update generation count
 * @property {() => void} onGenerate - Callback to trigger name generation
 * @property {() => void} onClear - Callback to clear the output
 * @property {string} [error] - Current error message, if any
 */
interface InputBlockProps {
  count: number;
  setCount: (value: number) => void;
  onGenerate: () => void;
  onClear: () => void;
  error?: string;
}

/**
 * A component for accepting input to generate country names.
 *
 * @param {InputBlockProps}props - The props for the CountryNameGeneratorInput component.
 *
 * @returns {JSX.Element} The CountryNameGeneratorInput component.
 */
export default function InputBlock({ count, setCount, onGenerate, onClear, error }: InputBlockProps): JSX.Element {
  /**
   * Handles the form submission event.
   *
   * @param {SubmitEvent} e - The form submission event.
   */
  const handleSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Country Name Generator</CardTitle>
        <CardDescription>Generate random country names</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <Input
            id="count-input"
            type="number"
            placeholder="Enter number of countries"
            value={count}
            min={1}
            step={1}
            max={200}
            onChange={(e) => setCount(Number(e.target.value))}
          />

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default">
              Generate
            </Button>

            <Button type="button" variant="outline" onClick={onClear}>
              Clear
            </Button>
          </div>

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
}
