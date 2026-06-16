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
 * Example data and option presets for the replace-quotes tool.
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
          onExample({ input: 'She said, "Hello!" and he replied, "Hi there."', replaceType: 'simple-to-curly' })
        }
      >
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input: 'She said, "I can\'t believe it\'s already Friday!"',
            replaceType: 'simple-to-curly',
            replaceApostrophes: true,
          })
        }
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: '“Welcome!’ she said with a smile.”', replaceType: 'curly-to-simple' })}
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input: 'He said "hello" and she said "goodbye" to everyone.',
            replaceType: 'simple-to-curly',
            replaceStandaloneQuotes: true,
          })
        }
      >
        Load Example 4
      </Button>
    </div>
  );
}
