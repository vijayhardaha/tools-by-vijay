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
 * Example data and option presets for the qrcode-generator tool.
 * Each button loads a predefined combination of input value, size,
 * and error correction level.
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
        onClick={() => onExample({ input: 'https://toolsbyvijay.vercel.app', size: 256, level: 'M' })}
      >
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'https://x.com/vijayhardaha', size: 256, level: 'L' })}
      >
        Load Example 2
      </Button>
      <Button variant="primary" onClick={() => onExample({ input: 'mailto:hello@example.com', size: 256, level: 'H' })}>
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'https://github.com/vijayhardaha', size: 400, level: 'Q' })}
      >
        Load Example 4
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'WIFI:S:MyNetwork;T:WPA;P:MyPassword123;;', size: 320, level: 'M' })}
      >
        Load Example 5
      </Button>
    </div>
  );
}
