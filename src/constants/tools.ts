import { ITool } from "@/types";

/**
 * Array of tool objects, each containing metadata for display and SEO purposes.
 * @type {ITool[]}
 */
const tools: ITool[] = [
  {
    name: "Slugify",
    slug: "slugify",
    description:
      "Quickly convert any string into clean, SEO-optimized slugs that are perfect for readable and shareable URLs.",
    seoTitle: "Slugify Tool – Instantly Create SEO-Friendly URL Slugs",
    seoDescription:
      "Easily generate clean and readable URL slugs from any text. Improve your website’s SEO with optimized links.",
    category: "text-transformation-tools",
  },
  {
    name: "Bulk Slugify",
    slug: "bulk-slugify",
    description:
      "Convert multiple lines of text into SEO-friendly slugs in bulk, perfect for batch URL processing.",
    seoTitle: "Bulk Slugify Tool – Batch Convert Strings into URL Slugs",
    seoDescription:
      "Slugify many lines of text at once for optimized URLs. Great for SEO-focused content creation and automation.",
    category: "text-transformation-tools",
  },
  {
    name: "Password Generator",
    slug: "password-generator",
    description:
      "Generate strong, complex passwords instantly to secure your personal and professional accounts.",
    seoTitle: "Password Generator – Create Strong & Secure Passwords Online",
    seoDescription:
      "Create complex and highly secure passwords quickly. Ideal for all your security needs.",
    category: "security-tools",
  },
  {
    name: "Password Strength Checker",
    slug: "password-strength-checker",
    description:
      "Instantly assess the strength of your password and receive actionable security tips.",
    seoTitle: "Password Strength Checker – Analyze Password Security",
    seoDescription:
      "Evaluate your password strength in real-time and get expert recommendations to enhance security.",
    category: "security-tools",
  },
  {
    name: "HTML Minifier",
    slug: "html-minifier",
    description:
      "Minify HTML files to reduce size and speed up your website load times effectively.",
    seoTitle: "HTML Minifier – Compress HTML for Better Performance",
    seoDescription:
      "Shrink HTML files by removing unnecessary whitespace for faster loading and better SEO.",
    category: "code-optimization-tools",
  },
  {
    name: "CSS Minifier",
    slug: "css-minifier",
    description:
      "Compress and optimize your CSS files quickly without changing their functionality.",
    seoTitle: "CSS Minifier – Optimize CSS for Faster Load Times",
    seoDescription: "Reduce CSS file size efficiently to enhance page speed and performance.",
    category: "code-optimization-tools",
  },
  {
    name: "JS Minifier",
    slug: "js-minifier",
    description: "Minify JavaScript code to improve loading speed and website performance.",
    seoTitle: "JavaScript Minifier – Compress JS Code Instantly",
    seoDescription: "Speed up your site by compressing JavaScript files easily and quickly.",
    category: "code-optimization-tools",
  },
  {
    name: "URL Shortener",
    slug: "url-shortener",
    description: "Shorten multiple URLs efficiently in bulk using the TinyURL API for convenience.",
    seoTitle: "URL Shortener – Bulk Short URL Generator with TinyURL",
    seoDescription: "Create short links in bulk for easy sharing and marketing campaigns.",
    category: "web-utility-tools",
  },
  {
    name: "Dropdown to Array",
    slug: "dropdown-to-array",
    description: "Convert HTML dropdown options into usable PHP or JavaScript arrays instantly.",
    seoTitle: "Dropdown to Array – Convert HTML Options to Code",
    seoDescription:
      "Easily transform dropdown <select> options into clean PHP or JS arrays for coding.",
    category: "data-conversion-tools",
  },
  {
    name: "Text to Array",
    slug: "text-to-array",
    description:
      "Transform plain text lists into structured PHP or JavaScript arrays with auto-generated keys.",
    seoTitle: "Text to Array – Instantly Generate PHP/JS Arrays",
    seoDescription: "Convert text into organized arrays for efficient programming use.",
    category: "data-conversion-tools",
  },
  {
    name: "JSON Sorter",
    slug: "json-sorter",
    description:
      "Alphabetically sort JSON object keys for improved readability and data consistency.",
    seoTitle: "JSON Sorter – Organize JSON Keys Alphabetically",
    seoDescription: "Sort your JSON data keys to enhance clarity and structure for development.",
    category: "code-optimization-tools",
  },
  {
    name: "Duplicate Line Removal",
    slug: "duplicate-line-removal",
    description:
      "Remove duplicate lines from your text automatically while preserving the original order.",
    seoTitle: "Duplicate Line Remover – Eliminate Repeated Lines",
    seoDescription:
      "Clean up your content by quickly removing repeated lines to ensure uniqueness.",
    category: "text-transformation-tools",
  },
  {
    name: "Alphabetical Line Sorter",
    slug: "alphabetical-line-sorter",
    description:
      "Sort lines of text alphabetically, in reverse, or numerically to organize your data.",
    seoTitle: "Text Line Sorter – Sort Lines Alphabetically or Numerically",
    seoDescription:
      "Arrange your text lines in various orders to improve readability and workflow.",
    category: "text-transformation-tools",
  },
  {
    name: "CSS Inliner",
    slug: "css-inliner",
    description:
      "Convert CSS rules into inline styles within HTML tags, perfect for emails and simple documents.",
    seoTitle: "CSS Inliner – Convert CSS into Inline HTML Styles",
    seoDescription: "Inline CSS to enhance email compatibility and simplify HTML delivery.",
    category: "code-optimization-tools",
  },
  {
    name: "Replace Quotes",
    slug: "replace-quotes",
    description: "Toggle between curly and straight quotes for clean and professional typography.",
    seoTitle: "Replace Quotes Tool – Toggle Between Curly and Straight Quotes",
    seoDescription:
      "Convert straight quotes to smart curly quotes or vice versa to improve text presentation.",
    category: "text-transformation-tools",
  },
  {
    name: "Shuffle Text Lines",
    slug: "shuffle-text-lines",
    description:
      "Randomly reorder lines of text for creative or practical uses like contests or presentations.",
    seoTitle: "Shuffle Text Lines – Randomize Line Order Online",
    seoDescription: "Shuffle the order of your text lines quickly and easily for varied output.",
    category: "text-transformation-tools",
  },
  {
    name: "Character Count",
    slug: "character-count",
    description: "Count the number of characters, words, and spaces in any text instantly.",
    seoTitle: "Character Counter – Count Words, Characters & Spaces",
    seoDescription:
      "Track text length and composition in real-time for writing and editing purposes.",
    category: "text-transformation-tools",
  },
  {
    name: "URL Decoder/Encoder",
    slug: "url-decoder-encoder",
    description:
      "Encode or decode URLs quickly to ensure they work across different browsers and platforms.",
    seoTitle: "URL Decoder & Encoder – Convert URLs with Ease",
    seoDescription: "Effortlessly encode or decode URLs for clean and functional web links.",
    category: "web-utility-tools",
  },
  {
    name: "Base64 Encode/Decode",
    slug: "base64-encode-decode",
    description: "Easily convert files or text to and from Base64 format for secure data handling.",
    seoTitle: "Base64 Converter – Encode or Decode Text and Files",
    seoDescription: "Quickly encode or decode Base64 to support secure transmission of data.",
    category: "data-conversion-tools",
  },
  {
    name: "Country Name Generator",
    slug: "country-name-generator",
    description:
      "Generate fictional country names randomly for creative writing, games, or simulations.",
    seoTitle: "Country Name Generator – Random Country Name Creator",
    seoDescription: "Create unique and imaginative country names instantly for various projects.",
    category: "web-utility-tools",
  },
  {
    name: "Random Username Generator",
    slug: "random-username-generator",
    description: "Generate unique and creative usernames instantly for accounts or entertainment.",
    seoTitle: "Username Generator – Create Random & Unique Usernames",
    seoDescription:
      "Find fresh and interesting usernames quickly for your online profiles and apps.",
    category: "web-utility-tools",
  },
  {
    name: "Text Case Changer",
    slug: "text-case-changer",
    description: "Convert text between uppercase, lowercase, and title case styles instantly.",
    seoTitle: "Text Case Converter – Change Case Instantly",
    seoDescription: "Switch text case easily for writing, editing, and formatting needs.",
    category: "text-transformation-tools",
  },
  {
    name: "Text to PHP Variables",
    slug: "text-to-php-variables",
    description: "Automatically convert lines of text into PHP variable declarations for coding.",
    seoTitle: "Text to PHP Variables – Generate PHP Code from Text",
    seoDescription: "Transform plain text into PHP variables quickly for seamless development.",
    category: "data-conversion-tools",
  },
  {
    name: "PX to REM Converter",
    slug: "px-to-rem-converter",
    description: "Convert pixel values to REM units for responsive and scalable web design.",
    seoTitle: "PX to REM Converter – Convert CSS Units Easily",
    seoDescription: "Easily translate PX to REM units to improve your site’s responsiveness.",
    category: "code-optimization-tools",
  },
  {
    name: "Unminify",
    slug: "unminify",
    description: "Beautify minified HTML, CSS, or JavaScript code to restore readability.",
    seoTitle: "Unminify Code – Beautify Minified HTML, CSS, JS",
    seoDescription: "Convert compressed code back into a readable format quickly and easily.",
    category: "code-optimization-tools",
  },
  {
    name: "Barcode Generator",
    slug: "barcode-generator",
    description: "Create standard barcodes quickly for products, inventory, or business use.",
    seoTitle: "Barcode Generator – Create Product Barcodes Instantly",
    seoDescription:
      "Generate professional barcodes easily to aid in product labeling and tracking.",
    category: "web-utility-tools",
  },
  {
    name: "QRCode Generator",
    slug: "qrcode-generator",
    description: "Generate QR codes from text, URLs, or contact info easily and efficiently.",
    seoTitle: "QR Code Generator – Make Custom QR Codes Online",
    seoDescription: "Create personalized QR codes quickly for sharing data or URLs.",
    category: "web-utility-tools",
  },
];

export default tools;
