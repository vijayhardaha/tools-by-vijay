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
 * Example data and option presets for the js-minifier tool.
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
              'function formatDate(date) {\n  const d = new Date(date);\n  const year = d.getFullYear();\n  const month = String(d.getMonth() + 1).padStart(2, "0");\n  const day = String(d.getDate()).padStart(2, "0");\n  return `${year}-${month}-${day}`;\n}\n\nfunction validateEmail(email) {\n  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return re.test(email);\n}',
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
              'const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst evens = numbers.filter(n => n % 2 === 0);\nconst doubled = numbers.map(n => n * 2);\nconst sum = numbers.reduce((a, b) => a + b, 0);\nconsole.log("Evens:", evens);\nconsole.log("Doubled:", doubled);\nconsole.log("Sum:", sum);',
            mangle: true,
            removeConsole: true,
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
              'class User {\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n  }\n\n  getGreeting() {\n    return `Hello, my name is ${this.name}`;\n  }\n\n  isValidEmail() {\n    return this.email.includes("@");\n  }\n}\n\nconst user = new User("John", "john@example.com");\nconsole.log(user.getGreeting());',
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
              'import React, { useState, useEffect } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `Count: ${count}`;\n  }, [count]);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Increment</Button>\n    </div>\n  );\n}',
          })
        }
      >
        Load Example 4
      </Button>
    </div>
  );
}
