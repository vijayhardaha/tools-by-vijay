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
 * Example data and option presets for the unminify tool.
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
            input: 'function hello(name){return"Hello, "+name+"!"}const greeting=hello("World");console.log(greeting);',
            codeType: 'javascript',
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
              'body{margin:0;padding:0;font-family:sans-serif}.container{max-width:1200px;margin:0 auto}.header{background:#333;color:#fff;padding:20px}',
            codeType: 'css',
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
              '<!DOCTYPE html><html><head><title>Test</title></head><body><h1>Hello</h1><p>World</p></body></html>',
            codeType: 'html',
          })
        }
      >
        Load Example 3
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input: '{"name":"John","age":30,"city":"New York","hobbies":["reading","coding","hiking"]}',
            codeType: 'json',
          })
        }
      >
        Load Example 4
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          onExample({
            input: '<?xml version="1.0"?><root><person><name>John</name><age>30</age></person></root>',
            codeType: 'xml',
          })
        }
      >
        Load Example 5
      </Button>
    </div>
  );
}
