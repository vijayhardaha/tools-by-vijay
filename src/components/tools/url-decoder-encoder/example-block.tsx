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
 * Example data and option presets for the url-decoder-encoder tool.
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
          onExample({ input: 'https://example.com/search?q=hello world&category=books & more', isEncoding: true })
        }
      >
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'user@example.com?name=John Doe&age=25', isEncoding: true })}
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({ input: 'https%3A%2F%2Fexample.com%2Fpath%3Fname%3DJohn%26age%3D25', isEncoding: false })
        }
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'search%3Djavascript%20tutorial%26page%3D1', isEncoding: false })}
      >
        Load Example 4
      </Button>
    </div>
  );
}
