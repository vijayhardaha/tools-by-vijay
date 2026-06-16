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
 * Example data and option presets for the html-minifier tool.
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
              '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n  <meta charset="UTF-8">\n</head>\n<body>\n  <header>\n    <h1>Welcome to My Site</h1>\n    <nav>\n      <a href="/">Home</a>\n      <a href="/about">About</a>\n      <a href="/contact">Contact</a>\n    </nav>\n  </header>\n  <main>\n    <p>This is a paragraph with <strong>bold</strong> text.</p>\n    <p>Another paragraph here.</p>\n  </main>\n  <footer>\n    <p>&copy; 2025 My Site</p>\n  </footer>\n</body>\n</html>',
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
              '<article>\n<h2>Getting Started with React</h2>\n<p>React is a <em>powerful</em> library for building user interfaces.</p>\n<ul>\n<li>Component-based architecture</li>\n<li>Virtual DOM for performance</li>\n<li>Rich ecosystem</li>\n</ul>\n</article>',
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
              '<form action="/submit" method="POST">\n<label for="name">Name:</label>\n<input type="text" id="name" name="name" />\n<label for="email">Email:</label>\n<input type="email" id="email" name="email" />\n<button type="submit">Submit</Button>\n</form>',
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
              '<div class="container">\n<div class="row">\n<div class="col">\n<div class="card">\n<div class="card-header">\n<h3>Card Title</h3>\n</div>\n<div class="card-body">\n<p>Card content goes here with <a href="#">a link</a>.</p>\n</div>\n</div>\n</div>\n</div>\n</div>',
          })
        }
      >
        Load Example 4
      </Button>
    </div>
  );
}
