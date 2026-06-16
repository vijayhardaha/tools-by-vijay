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
 * Example data and option presets for the duplicate-line-removal tool.
 * Each button loads a predefined set of input values and options.
 *
 * @param {ExampleBlockProps} props - Component props
 *
 * @returns {JSX.Element} The rendered example buttons
 */
export function ExampleBlock({ onExample }: ExampleBlockProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="primary" onClick={() => onExample({ input: 'apple\nbanana\napple\norange\nbanana\ngrape' })}>
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({ input: 'zebra\napple\nmonkey\nelephant\ntiger\nmonkey\nzebra', sortType: 'alphabetical' })
        }
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'Orange\napple\nBanana\norange\nApple\nbanana', sortType: 'ascii' })}
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({ input: 'dog\ncat\nbird\nfish\ndog\ncat\nfish', sortType: 'alphabetical', reverseSort: true })
        }
      >
        Load Example 4
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'red\ngreen\nblue\nred\nyellow\ngreen\npurple\nblue' })}
      >
        Load Example 5
      </Button>
    </div>
  );
}
