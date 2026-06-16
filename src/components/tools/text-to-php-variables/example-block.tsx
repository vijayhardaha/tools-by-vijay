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
 * Example data and option presets for the text-to-php-variables tool.
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
          onExample({ input: 'first name\nlast name\nemail address\nphone number', variableCase: 'snake_case' })
        }
      >
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({ input: 'user name\nfull address\npostal code\nphone number', variableCase: 'camelCase' })
        }
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({ input: 'first name\nlast name\nemail address\nphone number', variableCase: 'PascalCase' })
        }
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({ input: 'api key\nsecret token\nbase url\ndatabase host', variableCase: 'SCREAMING_SNAKE_CASE' })
        }
      >
        Load Example 4
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({ input: 'first name\nlast name\nemail address\nphone number', variableCase: 'flatcase' })
        }
      >
        Load Example 5
      </Button>
    </div>
  );
}
