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
 * Example data and option presets for the character-count tool.
 * Each button loads a predefined set of input values and options.
 *
 * @param {ExampleBlockProps} props - Component props
 *
 * @returns {JSX.Element} The rendered example buttons
 */
export function ExampleBlock({ onExample }: ExampleBlockProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="primary" onClick={() => onExample({ text: 'The quick brown fox jumps over the lazy dog.' })}>
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            text: 'Line one of the text.\nLine two continues here.\nLine three has more content.\nLine four is the final one.',
          })
        }
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            text: 'This is the first paragraph. It has multiple sentences. Here is another sentence.\n\nThis is the second paragraph. It also has several sentences. And one more for good measure.\n\nThis is the third and final paragraph. It concludes the text.',
          })
        }
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ text: 'function hello() {\n  console.log("Hello, World!");\n  return true;\n}' })}
      >
        Load Example 4
      </Button>
    </div>
  );
}
