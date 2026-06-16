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
 * Example data and option presets for the alphabetical-line-sorter tool.
 * Each button loads a predefined set of input values and options.
 *
 * @param {ExampleBlockProps} props - Component props
 *
 * @returns {JSX.Element} The rendered example buttons
 */
export function ExampleBlock({ onExample }: ExampleBlockProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="primary" onClick={() => onExample({ input: 'orange\nbanana\napple\ngrape\nkiwi' })}>
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'apple\nbanana\norange\ngrape\nkiwi', reverseSort: true })}
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'cat\ndog\nbird\ncat\nfish\ndog\nbird', removeDuplicates: true })}
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'Zebra\napple\nBanana\nOrange\nbanana', sortType: 'ascii' })}
      >
        Load Example 4
      </Button>
    </div>
  );
}
