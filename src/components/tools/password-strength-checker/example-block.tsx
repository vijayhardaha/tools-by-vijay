'use client';

import type { JSX } from 'react';

import { Button } from '@/components/ui/button';

/**
 * Props for the ExampleBlock component.
 */
interface ExampleBlockProps {
  onExample: (values: Record<string, any>) => void;
}

/**
 * Example data and option presets for the password-strength-checker tool.
 * Each button loads a predefined set of input values and options.
 *
 * @param {ExampleBlockProps} props - Component props
 *
 * @returns {JSX.Element} The rendered example buttons
 */
export function ExampleBlock({ onExample }: ExampleBlockProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="primary" onClick={() => onExample({ password: '12345' })}>
        Load Example 1
      </Button>
      <Button variant="primary" onClick={() => onExample({ password: 'Password1' })}>
        Load Example 2
      </Button>
      <Button variant="primary" onClick={() => onExample({ password: 'P@ssw0rd!' })}>
        Load Example 3
      </Button>
      <Button variant="primary" onClick={() => onExample({ password: 'MyS3cur3P@ssw0rd!2025' })}>
        Load Example 4
      </Button>
      <Button variant="primary" onClick={() => onExample({ password: 'qwerty123' })}>
        Load Example 5
      </Button>
    </div>
  );
}
