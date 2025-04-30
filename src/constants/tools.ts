import { Tool } from "@/types";

/**
 * Array of tool objects, each containing metadata for display and SEO purposes.
 * @type {Tool[]}
 */
const tools: Tool[] = [
  {
    name: "Slugify",
    slug: "slugify",
    shortDescription: "Convert any text into clean, SEO-friendly slugs.",
    pageDescription:
      "Effortlessly transform text into readable, URL-safe slugs for better SEO and structure.",
    seoTitle: "Slugify Tool – Instantly Create SEO-Friendly URL Slugs",
    seoDescription:
      "Generate optimized, readable slugs from text. Improve your URLs for search engines and users.",
    category: "text-transformation",
  },
  {
    name: "Bulk Slugify",
    slug: "bulk-slugify",
    shortDescription: "Create multiple slugs from text in bulk.",
    pageDescription:
      "Quickly convert several lines of text into clean slugs using the Bulk Slugify tool.",
    seoTitle: "Bulk Slugify Tool – Batch Convert Strings into URL Slugs",
    seoDescription:
      "Efficiently slugify multiple lines of text at once. Perfect for bulk URL generation.",
    category: "text-transformation",
  },
  {
    name: "Password Generator",
    slug: "password-generator",
    shortDescription: "Create strong and secure passwords instantly.",
    pageDescription:
      "Generate highly secure, complex passwords for your accounts or projects in seconds.",
    seoTitle: "Password Generator – Create Strong & Secure Passwords Online",
    seoDescription:
      "Generate complex, secure passwords quickly. Ideal for personal and professional use.",
    category: "security",
  },
  {
    name: "Password Strength Checker",
    slug: "password-strength-checker",
    shortDescription: "Test the strength of your password.",
    pageDescription:
      "Instantly evaluate how secure your password is and get tips for improving it.",
    seoTitle: "Password Strength Checker – Analyze Password Security",
    seoDescription:
      "Check how strong your password is with real-time analysis and security suggestions.",
    category: "security",
  },
  {
    name: "HTML Minifier",
    slug: "html-minifier",
    shortDescription: "Minify your HTML code for faster load times.",
    pageDescription:
      "Reduce the size of your HTML files and optimize performance with this minifier tool.",
    seoTitle: "HTML Minifier – Compress HTML for Better Performance",
    seoDescription:
      "Shrink HTML files and improve SEO and speed by removing unnecessary whitespace.",
    category: "code-optimization",
  },
  {
    name: "CSS Minifier",
    slug: "css-minifier",
    shortDescription: "Minify and optimize CSS code effortlessly.",
    pageDescription:
      "Compress CSS files without affecting readability or behavior using this efficient minifier.",
    seoTitle: "CSS Minifier – Optimize CSS for Faster Load Times",
    seoDescription:
      "Minify CSS for reduced file size and improved page speed. Quick and effective.",
    category: "code-optimization",
  },
  {
    name: "JS Minifier",
    slug: "js-minifier",
    shortDescription: "Minify JavaScript to enhance performance.",
    pageDescription:
      "Optimize your JavaScript files by removing extra spaces and comments for faster loading.",
    seoTitle: "JavaScript Minifier – Compress JS Code Instantly",
    seoDescription: "Speed up your site with compressed JavaScript. Simple, efficient, and fast.",
    category: "code-optimization",
  },
  {
    name: "URL Shortener",
    slug: "url-shortener",
    shortDescription: "Shorten multiple URLs quickly using TinyURL.",
    pageDescription:
      "Generate short links in bulk with the help of TinyURL and simplify your URLs.",
    seoTitle: "URL Shortener – Bulk Short URL Generator with TinyURL",
    seoDescription: "Shorten many links at once using TinyURL. Ideal for marketers and developers.",
    category: "web-utilities",
  },
  {
    name: "Dropdown to Array",
    slug: "dropdown-to-array",
    shortDescription: "Convert HTML dropdowns to code arrays.",
    pageDescription: "Turn HTML <select> options into usable PHP or JavaScript arrays instantly.",
    seoTitle: "Dropdown to Array – Convert HTML Options to Code",
    seoDescription:
      "Easily convert dropdown options into PHP or JS arrays for seamless integration.",
    category: "data-conversion",
  },
  {
    name: "Text to Array",
    slug: "text-to-array",
    shortDescription: "Transform plain text into code arrays.",
    pageDescription:
      "Convert a list of text into PHP or JavaScript arrays with automatically generated keys.",
    seoTitle: "Text to Array – Instantly Generate PHP/JS Arrays",
    seoDescription:
      "Turn text into clean, structured arrays for coding purposes. Fast and developer-friendly.",
    category: "data-conversion",
  },
  {
    name: "JSON Sorter",
    slug: "json-sorter",
    shortDescription: "Sort JSON keys alphabetically.",
    pageDescription:
      "Organize your JSON data by sorting object keys for better structure and consistency.",
    seoTitle: "JSON Sorter – Organize JSON Keys Alphabetically",
    seoDescription:
      "Sort JSON data for clarity and ease of use. Great for developers and data handling.",
    category: "code-optimization",
  },
  {
    name: "Duplicate Line Removal",
    slug: "duplicate-line-removal",
    shortDescription: "Clean text by removing repeated lines.",
    pageDescription:
      "Automatically detect and remove duplicate lines while preserving order in your text.",
    seoTitle: "Duplicate Line Remover – Eliminate Repeated Lines",
    seoDescription:
      "Remove duplicate lines in your content with one click. Clean up your data instantly.",
    category: "text-transformation",
  },
  {
    name: "Alphabetical Line Sorter",
    slug: "alphabetical-line-sorter",
    shortDescription: "Sort text lines alphabetically or by number.",
    pageDescription:
      "Arrange lines in alphabetical, reverse, or numeric order with this line sorting tool.",
    seoTitle: "Text Line Sorter – Sort Lines Alphabetically or Numerically",
    seoDescription: "Sort text lines in multiple ways for organized content. Fast and reliable.",
    category: "text-transformation",
  },
  {
    name: "CSS Inliner",
    slug: "css-inliner",
    shortDescription: "Inline CSS styles into HTML tags.",
    pageDescription:
      "Convert CSS rules to inline styles for HTML emails and simplified HTML documents.",
    seoTitle: "CSS Inliner – Convert CSS into Inline HTML Styles",
    seoDescription:
      "Inline your CSS for email compatibility or simplified delivery. Quick and effective.",
    category: "code-optimization",
  },
  {
    name: "Replace Quotes",
    slug: "replace-quotes",
    shortDescription: "Switch between curly and straight quotes.",
    pageDescription:
      "Convert straight quotes to curly ones or vice versa for clean, professional typography.",
    seoTitle: "Replace Quotes Tool – Toggle Between Curly and Straight Quotes",
    seoDescription:
      "Easily convert between smart and straight quotes for better text presentation.",
    category: "text-transformation",
  },
  {
    name: "Shuffle Text Lines",
    slug: "shuffle-text-lines",
    shortDescription: "Randomize the order of text lines.",
    pageDescription:
      "Instantly shuffle your text line order for creative output or randomized lists.",
    seoTitle: "Shuffle Text Lines – Randomize Line Order Online",
    seoDescription:
      "Reorder text lines randomly in a click. Great for contests, ideas, or presentations.",
    category: "text-transformation",
  },
  {
    name: "Character Count",
    slug: "character-count",
    shortDescription: "Count letters, words, and spaces in text.",
    pageDescription:
      "Analyze your text for character, word, and space counts with real-time output.",
    seoTitle: "Character Counter – Count Words, Characters & Spaces",
    seoDescription: "Track word count, character length, and spacing in your text instantly.",
    category: "text-transformation",
  },
  {
    name: "URL Decoder/Encoder",
    slug: "url-decoder-encoder",
    shortDescription: "Easily encode or decode any URL.",
    pageDescription:
      "Quickly encode or decode URLs to ensure compatibility across browsers and systems.",
    seoTitle: "URL Decoder & Encoder – Convert URLs with Ease",
    seoDescription: "Effortlessly encode or decode URLs for clean, usable web links.",
    category: "web-utilities",
  },
  {
    name: "Base64 Encode/Decode",
    slug: "base64-encode-decode",
    shortDescription: "Encode or decode Base64 easily.",
    pageDescription: "Convert files or strings to and from Base64 format quickly and securely.",
    seoTitle: "Base64 Converter – Encode or Decode Text and Files",
    seoDescription: "Convert Base64 to text or vice versa for secure data transfer. Easy to use.",
    category: "data-conversion",
  },
  {
    name: "Country Name Generator",
    slug: "country-name-generator",
    shortDescription: "Create unique country names randomly.",
    pageDescription: "Generate fictional country names for fun, writing, or simulation projects.",
    seoTitle: "Country Name Generator – Random Country Name Creator",
    seoDescription: "Create random country names for creativity or games. Fast and fun.",
    category: "web-utilities",
  },
  {
    name: "Random Username Generator",
    slug: "random-username-generator",
    shortDescription: "Generate cool and unique usernames.",
    pageDescription: "Generate random usernames instantly for new accounts or creative use.",
    seoTitle: "Username Generator – Create Random & Unique Usernames",
    seoDescription: "Find unique usernames for your accounts or projects. Free and easy.",
    category: "web-utilities",
  },
  {
    name: "Text Case Changer",
    slug: "text-case-changer",
    shortDescription: "Easily convert text case styles.",
    pageDescription: "Switch text to uppercase, lowercase, or title case in seconds.",
    seoTitle: "Text Case Converter – Change Case Instantly",
    seoDescription:
      "Quickly convert text to any case format. Useful for editors, devs, and writers.",
    category: "text-transformation",
  },
  {
    name: "Text to PHP Variables",
    slug: "text-to-php-variables",
    shortDescription: "Turn text into PHP variable code.",
    pageDescription: "Convert each line of text into PHP variable assignments automatically.",
    seoTitle: "Text to PHP Variables – Generate PHP Code from Text",
    seoDescription: "Transform plain text into PHP variables for coding ease. Fast and simple.",
    category: "data-conversion",
  },
  {
    name: "PX to REM Converter",
    slug: "px-to-rem-converter",
    shortDescription: "Convert pixel values to REM units.",
    pageDescription: "Translate PX values to REM for scalable and responsive web design.",
    seoTitle: "PX to REM Converter – Convert CSS Units Easily",
    seoDescription: "Convert PX to REM for better responsiveness. Ideal for modern web design.",
    category: "code-optimization",
  },
  {
    name: "Unminify",
    slug: "unminify",
    shortDescription: "Beautify compressed code for readability.",
    pageDescription: "Restore readable format from minified HTML, CSS, or JavaScript files.",
    seoTitle: "Unminify Code – Beautify Minified HTML, CSS, JS",
    seoDescription: "Convert minified code into human-readable format. Simple online formatter.",
    category: "code-optimization",
  },
  {
    name: "Barcode Generator",
    slug: "barcode-generator",
    shortDescription: "Generate barcodes quickly and easily.",
    pageDescription:
      "Create barcodes for inventory, products, or business use with this generator.",
    seoTitle: "Barcode Generator – Create Product Barcodes Instantly",
    seoDescription:
      "Generate standard barcodes in seconds. Useful for product labeling and tracking.",
    category: "web-utilities",
  },
  {
    name: "QRCode Generator",
    slug: "qrcode-generator",
    shortDescription: "Create QR codes from text or URLs.",
    pageDescription: "Generate QR codes for links, contact info, or plain text easily.",
    seoTitle: "QR Code Generator – Make Custom QR Codes Online",
    seoDescription: "Create personalized QR codes for sharing URLs or data. Simple and free.",
    category: "web-utilities",
  },
];

export default tools;
