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
 * Example data and option presets for the shuffle-text-lines tool.
 * Each button loads a predefined set of input values and options.
 *
 * @param {ExampleBlockProps} props - Component props
 *
 * @returns {JSX.Element} The rendered example buttons
 */
export function ExampleBlock({ onExample }: ExampleBlockProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="primary" onClick={() => onExample({ input: 'item 1\nitem 2\nitem 3\nitem 4\nitem 5\nitem 6' })}>
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'Alice\nBob\nCharlie\nDiana\nEve\nFrank\nGrace\nHenry' })}
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'red\nblue\ngreen\nred\nyellow\nblue', removeDuplicates: true })}
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'line 1\n\nline 2\n\nline 3\n\nline 4', removeEmptyLines: false })}
      >
        Load Example 4
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: '  spaced\nnormal\n  indented\n  more space\nplain', trimLines: false })}
      >
        Load Example 5
      </Button>
    </div>
  );
}
