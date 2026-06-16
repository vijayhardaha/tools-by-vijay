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
 * Example data and option presets for the base64-encode-decode tool.
 * Each button loads a predefined set of input values and options.
 *
 * @param {ExampleBlockProps} props - Component props
 *
 * @returns {JSX.Element} The rendered example buttons
 */
export function ExampleBlock({ onExample }: ExampleBlockProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="primary" onClick={() => onExample({ input: 'Hello, World! This is a test.', isEncoding: true })}>
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: '{"name":"John","age":30,"city":"New York"}', isEncoding: true })}
      >
        Load Example 2
      </Button>
      <Button variant="primary" onClick={() => onExample({ input: 'SGVsbG8sIFdvcmxkIQ==', isEncoding: false })}>
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({ input: 'VGhpcyBpcyBhbiBlbmNvZGVkIG1lc3NhZ2UuIFBsZWFzZSBkZWNvZGUgbWUu', isEncoding: false })
        }
      >
        Load Example 4
      </Button>
    </div>
  );
}
