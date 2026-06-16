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
 * Example data and option presets for the text-to-array tool.
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
        onClick={() => onExample({ input: 'United States\nCanada\nUnited Kingdom\nAustralia\nIndia' })}
      >
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({ input: 'Apple\nBanana\nOrange\nGrape\nMango', outputFormat: 'jsArray', arrayType: 'simple' })
        }
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input: 'red\ngreen\nblue\nyellow',
            outputFormat: 'php',
            arrayType: 'associative',
            useSlugKeys: true,
          })
        }
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({ input: 'Option A\nOption B\nOption C', outputFormat: 'wordpress', arrayType: 'numeric' })
        }
      >
        Load Example 4
      </Button>
    </div>
  );
}
