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
 * Example data and option presets for the dropdown-to-array tool.
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
          onExample({
            input:
              '<select>\n<option value="us">United States</option>\n<option value="ca">Canada</option>\n<option value="uk">United Kingdom</option>\n<option value="au">Australia</option>\n</select>',
          })
        }
      >
        Load Example 1
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input:
              '<option value="red">Red Color</option>\n<option value="green">Green Color</option>\n<option value="blue">Blue Color</option>',
          })
        }
      >
        Load Example 2
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input:
              '<select>\n<option value="small">Small</option>\n<option value="medium">Medium</option>\n<option value="large">Large</option>\n</select>',
            outputFormat: 'php',
          })
        }
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input:
              '<select>\n<option value="yes">Yes</option>\n<option value="no">No</option>\n<option value="maybe">Maybe</option>\n</select>',
            outputFormat: 'wordpress',
          })
        }
      >
        Load Example 4
      </Button>
    </div>
  );
}
