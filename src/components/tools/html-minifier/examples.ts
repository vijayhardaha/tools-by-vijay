import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the html-minifier tool.
 * Each example loads a predefined input plus minification option toggles.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Example 1',
    data: {
      input:
        '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n  <meta charset="UTF-8">\n</head>\n<body>\n  <header>\n    <h1>Welcome to My Site</h1>\n    <nav>\n      <a href="/">Home</a>\n      <a href="/about">About</a>\n      <a href="/contact">Contact</a>\n    </nav>\n  </header>\n  <main>\n    <p>This is a paragraph with <strong>bold</strong> text.</p>\n    <p>Another paragraph here.</p>\n  </main>\n  <footer>\n    <p>&copy; 2025 My Site</p>\n  </footer>\n</body>\n</html>',
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
    },
  },
  {
    label: 'Load Example 2',
    data: {
      input:
        '<article>\n<h2>Getting Started with React</h2>\n<p>React is a <em>powerful</em> library for building user interfaces.</p>\n<ul>\n<li>Component-based architecture</li>\n<li>Virtual DOM for performance</li>\n<li>Rich ecosystem</li>\n</ul>\n</article>',
      removeComments: false,
      collapseWhitespace: false,
    },
  },
  {
    label: 'Load Example 3',
    data: {
      input:
        '<form action="/submit" method="POST">\n<label for="name">Name:</label>\n<input type="text" id="name" name="name" />\n<label for="email">Email:</label>\n<input type="email" id="email" name="email" />\n<button type="submit">Submit</Button>\n</form>',
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: false,
      minifyJS: false,
    },
  },
  {
    label: 'Load Example 4',
    data: {
      input:
        '<div class="container">\n<div class="row">\n<div class="col">\n<div class="card">\n<div class="card-header">\n<h3>Card Title</h3>\n</div>\n<div class="card-body">\n<p>Card content goes here with <a href="#">a link</a>.</p>\n</div>\n</div>\n</div>\n</div>\n</div>',
      removeComments: false,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
    },
  },
];
