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
 * Example data and option presets for the text-case-changer tool.
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
        onClick={() => onExample({ input: 'hello world, this is a test sentence.', textCase: 'UPPER CASE' })}
      >
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'HELLO WORLD, THIS IS A TEST SENTENCE.', textCase: 'lower case' })}
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'the quick brown fox jumps over the lazy dog', textCase: 'Title Case' })}
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'first line\nsecond line\nthird line', textCase: 'Capitalized Case' })}
      >
        Load Example 4
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'this is alternating case example', textCase: 'aLtErNaTiNg cAsE' })}
      >
        Load Example 5
      </Button>
    </div>
  );
}
