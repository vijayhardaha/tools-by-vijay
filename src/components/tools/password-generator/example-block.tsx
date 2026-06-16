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
 * Example data and option presets for the password-generator tool.
 * Each button loads a predefined set of input values and options.
 *
 * @param {ExampleBlockProps} props - Component props
 *
 * @returns {JSX.Element} The rendered example buttons
 */
export function ExampleBlock({ onExample }: ExampleBlockProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            length: 16,
            useUppercase: true,
            useLowercase: true,
            useNumbers: true,
            useSymbols: true,
            excludeSimilar: false,
          })
        }
      >
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            length: 20,
            useUppercase: true,
            useLowercase: true,
            useNumbers: true,
            useSymbols: true,
            excludeSimilar: false,
          })
        }
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            length: 6,
            useUppercase: false,
            useLowercase: false,
            useNumbers: true,
            useSymbols: false,
            excludeSimilar: false,
          })
        }
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            length: 12,
            useUppercase: true,
            useLowercase: true,
            useNumbers: false,
            useSymbols: false,
            excludeSimilar: false,
          })
        }
      >
        Load Example 4
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            length: 16,
            useUppercase: true,
            useLowercase: true,
            useNumbers: true,
            useSymbols: true,
            excludeSimilar: true,
          })
        }
      >
        Load Example 5
      </Button>
    </div>
  );
}
