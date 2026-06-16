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
 * Example data and option presets for the url-shortener tool.
 * Each button loads a predefined set of input values and options.
 *
 * @param {ExampleBlockProps} props - Component props
 *
 * @returns {JSX.Element} The rendered example buttons
 */
export function ExampleBlock({ onExample }: ExampleBlockProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="primary" onClick={() => onExample({ input: 'https://github.com/vijayhardaha' })}>
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input: 'https://github.com/vijayhardaha\nhttps://x.com/vijayhardaha\nhttps://toolsbyvijay.vercel.app',
          })
        }
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'https://example.com/blog/post-1\nhttps://example.com/blog/post-2' })}
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input:
              'https://example.com/docs/getting-started\nhttps://example.com/docs/api-reference\nhttps://example.com/docs/guides',
          })
        }
      >
        Load Example 4
      </Button>
    </div>
  );
}
