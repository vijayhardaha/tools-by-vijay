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
 * Example data and option presets for the slugify tool.
 * Each button loads a predefined set of input values and options.
 *
 * @param {ExampleBlockProps} props - Component props
 *
 * @returns {JSX.Element} The rendered example buttons
 */
export function ExampleBlock({ onExample }: ExampleBlockProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="primary" onClick={() => onExample({ input: '10 Best JavaScript Frameworks in 2025!' })}>
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input: 'Premium Cotton T-Shirt (Large)',
            useUnderscore: false,
            removeNumbers: false,
            useLowercase: true,
            useLitinize: true,
          })
        }
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'Cómo están los niños? Déjà vu', useUnderscore: false, useLitinize: true })}
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'My Project Documentation Page', useUnderscore: true })}
      >
        Load Example 4
      </Button>
      <Button
        variant="primary"
        onClick={() => onExample({ input: 'Chapter 1: The Beginning of 2025', removeNumbers: true })}
      >
        Load Example 5
      </Button>
    </div>
  );
}
