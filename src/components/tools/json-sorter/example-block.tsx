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
 * Example data and option presets for the json-sorter tool.
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
              '{\n  "zebra": "africa",\n  "apple": "fruit",\n  "mango": "tropical",\n  "banana": "yellow",\n  "camel": "desert"\n}',
            spareArrays: true,
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
              '{\n  "name": "John",\n  "age": 30,\n  "email": "john@example.com",\n  "address": {\n    "zip": "10001",\n    "city": "New York",\n    "street": "123 Main St",\n    "country": "USA"\n  }\n}',
            spareArrays: true,
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
              '{\n  "version": "2.0",\n  "debug": false,\n  "database": {\n    "port": 5432,\n    "host": "localhost",\n    "name": "app_db"\n  },\n  "logging": {\n    "level": "info",\n    "file": "/var/log/app.log"\n  }\n}',
            spareArrays: true,
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
              '{\n  "name": "test",\n  "items": ["z", "a", "m"],\n  "config": {\n    "enable": true,\n    "timeout": 30\n  }\n}',
            spareArrays: true,
          })
        }
      >
        Load Example 4
      </Button>
    </div>
  );
}
