import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the js-minifier tool.
 * Each example loads a predefined set of input values and options.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Example 1',
    data: {
      input:
        'function formatDate(date) {\n  const d = new Date(date);\n  const year = d.getFullYear();\n  const month = String(d.getMonth() + 1).padStart(2, "0");\n  const day = String(d.getDate()).padStart(2, "0");\n  return `${year}-${month}-${day}`;\n}\n\nfunction validateEmail(email) {\n  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return re.test(email);\n}',
    },
  },
  {
    label: 'Load Example 2',
    data: {
      input:
        'const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst evens = numbers.filter(n => n % 2 === 0);\nconst doubled = numbers.map(n => n * 2);\nconst sum = numbers.reduce((a, b) => a + b, 0);\nconsole.log("Evens:", evens);\nconsole.log("Doubled:", doubled);\nconsole.log("Sum:", sum);',
      mangle: true,
      removeConsole: true,
    },
  },
  {
    label: 'Load Example 3',
    data: {
      input:
        'class User {\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n  }\n\n  getGreeting() {\n    return `Hello, my name is ${this.name}`;\n  }\n\n  isValidEmail() {\n    return this.email.includes("@");\n  }\n}\n\nconst user = new User("John", "john@example.com");\nconsole.log(user.getGreeting());',
    },
  },
  {
    label: 'Load Example 4',
    data: {
      input:
        'import React, { useState, useEffect } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `Count: ${count}`;\n  }, [count]);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}',
    },
  },
];
