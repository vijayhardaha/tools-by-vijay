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
 * Example data and option presets for the barcode-generator tool.
 * Each button loads a predefined set of input values and options.
 *
 * @param {ExampleBlockProps} props - Component props
 *
 * @returns {JSX.Element} The rendered example buttons
 */
export function ExampleBlock({ onExample }: ExampleBlockProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="primary" onClick={() => onExample({ input: 'SKU-12345-ABC' })}>
        Load Example 1
      </Button>
      <Button variant="primary" onClick={() => onExample({ input: 'SN-2025-XYZ-789' })}>
        Load Example 2
      </Button>
      <Button variant="primary" onClick={() => onExample({ input: 'TRACK-1A2B3C4D' })}>
        Load Example 3
      </Button>
      <Button variant="primary" onClick={() => onExample({ input: 'INV-2025-001' })}>
        Load Example 4
      </Button>
      <Button variant="primary" onClick={() => onExample({ input: 'AST-001-COMP-APPLE' })}>
        Load Example 5
      </Button>
    </div>
  );
}
