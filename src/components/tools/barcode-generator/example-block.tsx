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
 * Each button loads a predefined combination of input value, format,
 * bar width, height, text visibility, and text alignment.
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
          onExample({
            input: 'SKU-12345-ABC',
            format: 'CODE128',
            width: 2,
            height: 100,
            showText: true,
            textAlign: 'center',
          })
        }
      >
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input: '4006381333931',
            format: 'EAN13',
            width: 2,
            height: 120,
            showText: true,
            textAlign: 'center',
          })
        }
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input: 'SN-2025-XYZ-789',
            format: 'CODE39',
            width: 1,
            height: 150,
            showText: true,
            textAlign: 'left',
          })
        }
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input: '012345678905',
            format: 'UPC',
            width: 3,
            height: 90,
            showText: false,
            textAlign: 'center',
          })
        }
      >
        Load Example 4
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input: '15400141288763',
            format: 'ITF14',
            width: 4,
            height: 150,
            showText: true,
            textAlign: 'right',
          })
        }
      >
        Load Example 5
      </Button>
    </div>
  );
}
