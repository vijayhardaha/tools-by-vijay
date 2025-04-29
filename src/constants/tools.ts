import { Tool } from "@/types";

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
    category: "code-optimization",
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
  {
    name: "Character Count",
    slug: "character-count",
    shortDescription: "Count characters, words, and spaces in text.",
    pageDescription: "Analyze your text by counting characters, words, and spaces instantly.",
    seoTitle: "Character Count Tool – Analyze Text Online",
    seoDescription: "Count characters, words, and spaces in your text. Simple and fast tool.",
    category: "text-transformation",
  },
  {
    name: "URL Decoder/Encoder",
    slug: "url-decoder-encoder",
    shortDescription: "Encode or decode URLs easily.",
    pageDescription: "Convert URLs to encoded or decoded formats with this simple tool.",
    seoTitle: "URL Decoder/Encoder – Convert URLs Online",
    seoDescription: "Encode or decode URLs quickly and efficiently. Free online tool.",
    category: "web-utilities",
  },
  {
    name: "Base64 Encode/Decode",
    slug: "base64-encode-decode",
    shortDescription: "Encode or decode Base64 strings.",
    pageDescription: "Convert text or files to Base64 format or decode Base64 strings easily.",
    seoTitle: "Base64 Encode/Decode Tool – Convert Text or Files",
    seoDescription: "Encode or decode Base64 strings or files online. Simple and fast tool.",
    category: "data-conversion",
  },
  {
    name: "Country Name Generator",
    slug: "country-name-generator",
    shortDescription: "Generate random country names.",
    pageDescription: "Create random country names for creative or educational purposes.",
    seoTitle: "Country Name Generator – Generate Random Country Names",
    seoDescription: "Generate random country names for fun or creative projects. Free tool.",
    category: "web-utilities",
  },
  {
    name: "Random Username Generator",
    slug: "random-username-generator",
    shortDescription: "Generate unique usernames.",
    pageDescription: "Create random and unique usernames for your accounts or projects.",
    seoTitle: "Random Username Generator – Create Unique Usernames",
    seoDescription: "Generate random usernames for accounts or creative projects. Free tool.",
    category: "web-utilities",
  },
  {
    name: "Text Case Changer",
    slug: "text-case-changer",
    shortDescription: "Change text case easily.",
    pageDescription: "Convert text to uppercase, lowercase, or title case with one click.",
    seoTitle: "Text Case Changer – Convert Text Case Online",
    seoDescription: "Change text case to uppercase, lowercase, or title case instantly.",
    category: "text-transformation",
  },
  {
    name: "Text to PHP Variables",
    slug: "text-to-php-variables",
    shortDescription: "Convert text into PHP variables.",
    pageDescription: "Transform plain text into PHP variable declarations easily.",
    seoTitle: "Text to PHP Variables – Convert Text to PHP Code",
    seoDescription: "Generate PHP variable declarations from plain text. Simple and fast tool.",
    category: "data-conversion",
  },
  {
    name: "PX to REM Converter",
    slug: "px-to-rem-converter",
    shortDescription: "Convert PX to REM units.",
    pageDescription: "Easily convert pixel (PX) values to REM units for responsive design.",
    seoTitle: "PX to REM Converter – Convert Units Online",
    seoDescription: "Convert PX to REM units for responsive web design. Free online tool.",
    category: "code-optimization",
  },
  {
    name: "Unminify",
    slug: "unminify",
    shortDescription: "Unminify HTML, CSS, or JS code.",
    pageDescription: "Beautify and format minified HTML, CSS, or JavaScript code.",
    seoTitle: "Unminify Tool – Beautify Minified Code",
    seoDescription: "Unminify HTML, CSS, or JS code for better readability. Free online tool.",
    category: "code-optimization",
  },
  {
    name: "Barcode Generator",
    slug: "barcode-generator",
    shortDescription: "Generate barcodes easily.",
    pageDescription: "Create barcodes for products or projects with this simple tool.",
    seoTitle: "Barcode Generator – Create Barcodes Online",
    seoDescription: "Generate barcodes for products or projects. Free and easy-to-use tool.",
    category: "web-utilities",
  },
  {
    name: "QRCode Generator",
    slug: "qrcode-generator",
    shortDescription: "Generate QR codes for URLs or text.",
    pageDescription: "Create QR codes for links, text, or other data with this tool.",
    seoTitle: "QRCode Generator – Create QR Codes Online",
    seoDescription: "Generate QR codes for URLs, text, or other data. Free online tool.",
    category: "web-utilities",
  },
];

export default tools;
