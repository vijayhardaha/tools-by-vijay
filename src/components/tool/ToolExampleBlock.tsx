import type { JSX } from 'react';

import { Button } from '@/components/ui/button';

/**
 * A single loadable example for a tool.
 *
 * @type {Example}
 * @property {string} label - Button label for the example.
 * @property {Record<string, unknown>} data - Field values to merge into tool state.
 */
export interface Example {
  label: string;
  data: Record<string, unknown>;
}

/**
 * Props for {@link ToolExampleBlock}.
 *
 * @type {ToolExampleBlockProps}
 * @property {Example[]} examples - The examples to render as buttons.
 * @property {(values: Record<string, unknown>) => void} onExample - Callback invoked with an example's data.
 */
export interface ToolExampleBlockProps {
  examples: Example[];
  onExample: (values: Record<string, unknown>) => void;
}

/**
 * Reusable row of example-loading buttons shared by every tool.
 *
 * @param {ToolExampleBlockProps} props - Examples + callback.
 *
 * @returns {JSX.Element | null} The example buttons, or null when there are none.
 */
export function ToolExampleBlock({ examples, onExample }: ToolExampleBlockProps): JSX.Element | null {
  if (!examples.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {examples.map((example, idx) => (
        <Button key={idx} variant="primary" onClick={() => onExample(example.data)}>
          {example.label}
        </Button>
      ))}
    </div>
  );
}
