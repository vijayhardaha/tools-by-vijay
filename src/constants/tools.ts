type Tool = {
  name: string;
  slug: string;
  shortDescription: string;
  pageDescription: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
};

/**
 * Array of tool objects, each containing metadata for display and SEO purposes.
 * @type {Tool[]}
 */
const tools: Tool[] = [
  {
    name: "Slugify",
    slug: "slugify",
    shortDescription: "Convert text into URL-friendly slugs.",
    pageDescription: "Use the Slugify tool to convert any string into a clean, readable URL slug.",
    seoTitle: "Slugify Tool – Generate SEO-Friendly Slugs Online",
    seoDescription:
      "Convert text into SEO-friendly URL slugs instantly. Simple and effective slug generator.",
    category: "text-transformation",
  },
  {
    name: "Bulk Slugify",
    slug: "bulk-slugify",
    shortDescription: "Slugify multiple strings at once.",
    pageDescription:
      "Process multiple lines of text and turn them into slugs in one go using the Bulk Slugify tool.",
    seoTitle: "Bulk Slugify Tool – Convert Multiple Strings into Slugs",
    seoDescription:
      "Quickly generate slugs from multiple strings. Ideal for bulk content operations.",
    category: "text-transformation",
  },
  {
    name: "Password Generator",
    slug: "password-generator",
    shortDescription: "Generate strong and secure passwords.",
    pageDescription:
      "Create complex and secure passwords for personal or professional use with our password generator.",
    seoTitle: "Password Generator – Create Strong Passwords Online",
    seoDescription:
      "Generate secure, random passwords to protect your accounts. Free and customizable.",
    category: "security",
  },
  {
    name: "Password Strength Checker",
    slug: "password-strength-checker",
    shortDescription: "Check how strong your password is.",
    pageDescription:
      "Analyze your password’s strength to ensure it meets modern security standards.",
    seoTitle: "Password Strength Checker – Test Your Password Security",
    seoDescription:
      "Test your password strength with real-time feedback. Improve your security today.",
    category: "security",
  },
  {
    name: "HTML Minifier",
    slug: "html-minifier",
    shortDescription: "Minify your HTML code easily.",
    pageDescription: "Reduce file size and optimize performance by minifying your HTML code.",
    seoTitle: "HTML Minifier – Optimize Your HTML Code",
    seoDescription: "Minify and compress HTML code for better website speed and SEO.",
    category: "code-optimization",
  },
  {
    name: "CSS Minifier",
    slug: "css-minifier",
    shortDescription: "Compress your CSS code.",
    pageDescription:
      "Shrink your CSS files without losing readability or functionality using our CSS Minifier.",
    seoTitle: "CSS Minifier – Reduce CSS File Size Online",
    seoDescription:
      "Minify your CSS files to enhance website loading speed. Fast and efficient tool.",
    category: "code-optimization",
  },
  {
    name: "JS Minifier",
    slug: "js-minifier",
    shortDescription: "Minify JavaScript code.",
    pageDescription: "Speed up your website by compressing and optimizing JavaScript files.",
    seoTitle: "JavaScript Minifier – Compress JS Code Easily",
    seoDescription: "Minify JavaScript files for better performance and faster load times.",
    category: "code-optimization",
  },
  {
    name: "URL Shortener",
    slug: "url-shortener",
    shortDescription: "Generate short URLs in bulk using TinyURL.",
    pageDescription:
      "Easily shorten multiple URLs at once using TinyURL with this bulk URL shortener tool.",
    seoTitle: "URL Shortener – Bulk Short Link Generator with TinyURL",
    seoDescription:
      "Bulk URL Shortener powered by TinyURL. Quickly generate short links for multiple URLs.",
    category: "web-utilities",
  },
  {
    name: "Dropdown to Array",
    slug: "dropdown-to-array",
    shortDescription: "Convert select options to PHP/JS array.",
    pageDescription:
      "This simple tool helps you convert HTML dropdown (select tag) options into PHP or JavaScript arrays easily.",
    seoTitle: "Dropdown to Array – Convert Select Options to PHP/JS Array",
    seoDescription:
      "Convert dropdown options into arrays for PHP or JavaScript. Fast and easy utility for developers.",
    category: "data-conversion",
  },
  {
    name: "Text to Array",
    slug: "text-to-array",
    shortDescription: "Generate PHP/JS array from plain text.",
    pageDescription:
      "Turn a list of plain texts into an array format. This tool auto-generates array keys for PHP or JavaScript.",
    seoTitle: "Text to Array – Convert Text into PHP/JS Arrays Instantly",
    seoDescription:
      "Convert plain text into key-value arrays for PHP or JavaScript. Ideal for quick data formatting.",
    category: "data-conversion",
  },
  {
    name: "JSON Sorter",
    slug: "json-sorter",
    shortDescription: "Sort JSON objects alphabetically by key.",
    pageDescription:
      "Organize your JSON data by sorting keys alphabetically for better readability and consistency.",
    seoTitle: "JSON Sorter – Alphabetically Sort JSON Keys Online",
    seoDescription:
      "Sort JSON objects alphabetically by their keys. Make your JSON data more readable and consistent.",
    category: "data-formatting",
  },
  {
    name: "Duplicate Line Removal",
    slug: "duplicate-line-removal",
    shortDescription: "Remove duplicate lines from text.",
    pageDescription:
      "Clean up your text by automatically removing duplicate lines while preserving the original order.",
    seoTitle: "Duplicate Line Remover – Clean Text Data Online",
    seoDescription:
      "Remove duplicate lines from your text instantly. Keep your data clean and organized with our simple tool.",
    category: "text-transformation",
  },
  {
    name: "Alphabetical Line Sorter",
    slug: "alphabetical-line-sorter",
    shortDescription: "Sort text lines alphabetically or numerically.",
    pageDescription:
      "Organize your text by sorting lines in alphabetical, reverse alphabetical, or numerical order.",
    seoTitle: "Text Line Sorter – Sort Text Lines Online",
    seoDescription:
      "Sort your text lines alphabetically or numerically. Simple tool for organizing content quickly.",
    category: "text-transformation",
  },
  {
    name: "CSS Inliner",
    slug: "css-inliner",
    shortDescription: "Convert CSS to inline styles for HTML.",
    pageDescription:
      "Transform external CSS into inline styles for HTML elements, perfect for email templates and simpler distribution.",
    seoTitle: "CSS Inliner – Convert CSS to Inline Styles for HTML",
    seoDescription:
      "Convert external CSS to inline HTML styles. Ideal for email templates and single-file HTML distribution.",
    category: "code-optimization",
  },
  {
    name: "Replace Quotes",
    slug: "replace-quotes",
    shortDescription: "Convert between straight and curly quotes.",
    pageDescription:
      "Easily convert straight quotes (' and \") to curly quotes (‘, ’, “, and ”) and vice versa in your text.",
    seoTitle: "Replace Quotes – Convert Between Straight and Curly Quotes",
    seoDescription:
      "Replace straight quotes (' and \") with curly quotes (‘, ’, “, and ”) or curly quotes with straight quotes. Simplify your text formatting.",
    category: "text-transformation",
  },
  {
    name: "Shuffle Text Lines",
    slug: "shuffle-text-lines",
    shortDescription: "Randomize the order of text lines.",
    pageDescription:
      "Rearrange the lines of your text in random order with the Shuffle Text Lines tool.",
    seoTitle: "Shuffle Text Lines – Randomize Text Line Order Online",
    seoDescription:
      "Randomly shuffle the lines of your text for creative or organizational purposes. Simple and fast tool.",
    category: "text-transformation",
  },
];

export default tools;
