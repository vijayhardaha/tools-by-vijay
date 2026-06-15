/**
 * Interface representing a tool.
 *
 * @type {Tool}
 * @property {string} name - The display name of the tool
 * @property {string} slug - The unique URL slug for the tool
 * @property {string} description - A brief description of the tool's functionality
 * @property {string} seoTitle - The SEO-optimized title for the tool page
 * @property {string} seoDescription - The SEO-optimized description for the tool page
 * @property {string} category - The category slug the tool belongs to
 */
export interface Tool {
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
}

/**
 * Array of tool objects, each containing metadata for display and SEO purposes.
 *
 * @type {Tool[]}
 */
const tools: Tool[] = [
  {
    name: 'Slugify',
    slug: 'slugify',
    description:
      'Convert any string into clean, SEO-optimized URL slugs. Perfect for creating readable, search-engine-friendly permalinks for blogs and websites.',
    seoTitle: 'Slugify Tool – Generate SEO-Friendly URL Slugs Instantly',
    seoDescription:
      'Convert text into clean, SEO-optimized URL slugs. Improve your website search rankings with readable and shareable permalinks.',
    category: 'writing-editing',
  },
  {
    name: 'Bulk Slugify',
    slug: 'bulk-slugify',
    description:
      'Transform multiple lines of text into SEO-friendly slugs simultaneously. Ideal for batch processing large sets of URLs for e-commerce or migrations.',
    seoTitle: 'Bulk Slugify Tool – Batch Convert Text to URL Slugs',
    seoDescription:
      'Generate multiple SEO-friendly URL slugs at once. The fastest way to batch-process permalinks for large-scale content updates.',
    category: 'writing-editing',
  },
  {
    name: 'Password Generator',
    slug: 'password-generator',
    description:
      'Create strong, high-entropy passwords instantly. Customize length and complexity to secure your professional and personal accounts against breaches.',
    seoTitle: 'Strong Password Generator – Create Secure Random Passwords',
    seoDescription:
      'Generate complex, secure passwords instantly to protect your accounts. Customizable length and character sets for maximum security.',
    category: 'security-privacy',
  },
  {
    name: 'Password Strength Checker',
    slug: 'password-strength-checker',
    description:
      'Analyze your password strength in real-time. Receive instant security feedback and actionable tips to protect yourself from brute-force attacks.',
    seoTitle: 'Password Strength Checker – Analyze & Test Password Security',
    seoDescription:
      'Test your password strength instantly. Get expert security recommendations to make your passwords unhackable.',
    category: 'security-privacy',
  },
  {
    name: 'HTML Minifier',
    slug: 'html-minifier',
    description:
      'Compress HTML files by removing unnecessary whitespace, comments, and characters. Reduce page size to significantly improve website load speed.',
    seoTitle: 'HTML Minifier – Compress HTML Code for Faster Page Load',
    seoDescription:
      'Minify HTML code to reduce file size and boost page speed. Optimize your website performance and Core Web Vitals today.',
    category: 'developer-suite',
  },
  {
    name: 'CSS Minifier',
    slug: 'css-minifier',
    description:
      'Optimize your stylesheets by removing redundant spaces and comments. Achieve faster CSS rendering and improved overall site performance.',
    seoTitle: 'CSS Minifier – Compress CSS Files for Web Performance',
    seoDescription:
      'Reduce CSS file size instantly. Minify your stylesheets to ensure faster rendering and a better user experience.',
    category: 'developer-suite',
  },
  {
    name: 'JS Minifier',
    slug: 'js-minifier',
    description:
      'Compress JavaScript files to minimize payload size. Improve browser execution speed and reduce bandwidth consumption for your web applications.',
    seoTitle: 'JavaScript Minifier – Compress JS Code for Faster Loading',
    seoDescription:
      'Shrink your JavaScript files with our JS minifier. Improve site speed and performance by removing unnecessary code bloat.',
    category: 'developer-suite',
  },
  {
    name: 'URL Shortener',
    slug: 'url-shortener',
    description:
      'Convert long, cumbersome URLs into short, manageable links using the TinyURL API. Perfect for social media and clean marketing campaigns.',
    seoTitle: 'Bulk URL Shortener – Create Short Links via TinyURL',
    seoDescription:
      'Shorten multiple URLs instantly. Create clean, clickable links for social media and marketing using the TinyURL API.',
    category: 'web-url-tools',
  },
  {
    name: 'Dropdown to Array',
    slug: 'dropdown-to-array',
    description:
      'Quickly transform HTML `<select>` dropdown options into structured PHP or JavaScript arrays. Eliminate manual coding for data migration.',
    seoTitle: 'Dropdown to Array Converter – HTML Options to PHP/JS Array',
    seoDescription:
      'Convert HTML dropdown menus into usable PHP or JS arrays instantly. Save time on manual data entry and coding.',
    category: 'developer-suite',
  },
  {
    name: 'Text to Array',
    slug: 'text-to-array',
    description:
      'Convert plain text lists into valid PHP or JavaScript arrays with auto-generated keys. Streamline your development workflow for configuration files.',
    seoTitle: 'Text to Array Tool – Generate PHP & JS Arrays from Text',
    seoDescription:
      'Transform plain text lists into structured PHP or JavaScript arrays. Quickly generate code-ready arrays for your projects.',
    category: 'developer-suite',
  },
  {
    name: 'JSON Sorter',
    slug: 'json-sorter',
    description:
      'Alphabetically sort JSON keys to make complex data structures readable. Perfect for debugging API responses and ensuring data consistency.',
    seoTitle: 'JSON Sorter – Alphabetize and Organize JSON Keys',
    seoDescription:
      'Sort JSON object keys alphabetically. Improve data readability and make comparing JSON files easier for developers.',
    category: 'developer-suite',
  },
  {
    name: 'Duplicate Line Removal',
    slug: 'duplicate-line-removal',
    description:
      'Clean your datasets by removing duplicate lines of text. Maintain original order while ensuring every entry is unique.',
    seoTitle: 'Duplicate Line Remover – Remove Repeated Lines from Text',
    seoDescription:
      'Instantly remove duplicate lines from your text. Clean up lists and datasets while preserving original line order.',
    category: 'writing-editing',
  },
  {
    name: 'Alphabetical Line Sorter',
    slug: 'alphabetical-line-sorter',
    description:
      'Organize text lines alphabetically, numerically, or in reverse order. Efficiently manage lists, logs, and data sets.',
    seoTitle: 'Text Line Sorter – Sort Lines Alphabetically or Numerically',
    seoDescription:
      'Easily sort lines of text in ascending or descending order. A powerful tool for organizing lists and data sets quickly.',
    category: 'writing-editing',
  },
  {
    name: 'CSS Inliner',
    slug: 'css-inliner',
    description:
      'Transform external or internal CSS rules into inline HTML styles. Essential for maximizing email template compatibility across all clients.',
    seoTitle: 'CSS Inliner – Convert CSS to Inline HTML Styles for Email',
    seoDescription:
      'Convert CSS to inline styles to ensure your HTML emails look perfect across all mail clients and devices.',
    category: 'developer-suite',
  },
  {
    name: 'Replace Quotes',
    slug: 'replace-quotes',
    description:
      'Easily toggle between "smart" curly quotes and straight quotes. Ensure professional typography for publishing or clean code for development.',
    seoTitle: 'Replace Quotes Tool – Convert Curly and Straight Quotes',
    seoDescription:
      'Switch between smart curly quotes and straight quotes instantly. Perfect for cleaning text for code or refining typography.',
    category: 'writing-editing',
  },
  {
    name: 'Shuffle Text Lines',
    slug: 'shuffle-text-lines',
    description:
      'Randomize the order of your text lines instantly. Useful for creating fair lists, randomized test data, or creative brainstorming.',
    seoTitle: 'Shuffle Text Lines – Randomize Order of Text Lines Online',
    seoDescription:
      'Randomly shuffle lines of text with one click. Ideal for contests, randomized lists, and data sampling.',
    category: 'writing-editing',
  },
  {
    name: 'Character Count',
    slug: 'character-count',
    description:
      'Get a detailed analysis of your text, including character count, word count, and space count. Perfect for meeting strict social media or academic limits.',
    seoTitle: 'Character Counter – Word & Character Count Tool',
    seoDescription:
      'Count words, characters, and spaces in real-time. Ensure your content fits perfectly within SEO and social media limits.',
    category: 'writing-editing',
  },
  {
    name: 'URL Decoder/Encoder',
    slug: 'url-decoder-encoder',
    description:
      'Encode or decode URL components to ensure special characters are handled correctly across different web browsers and servers.',
    seoTitle: 'URL Encoder & Decoder – Convert URL Special Characters',
    seoDescription:
      'Easily encode or decode URL strings. Ensure your web links are functional and free of character-encoding errors.',
    category: 'web-url-tools',
  },
  {
    name: 'Base64 Encode/Decode',
    slug: 'base64-encode-decode',
    description:
      'Convert text or files to Base64 format and back again. Essential for embedding images in CSS/HTML or transmitting binary data via text.',
    seoTitle: 'Base64 Converter – Encode and Decode Text & Files',
    seoDescription:
      'Quickly encode or decode Base64 strings and files. The ideal tool for secure data transmission and web embedding.',
    category: 'web-url-tools',
  },
  {
    name: 'Country Name Generator',
    slug: 'country-name-generator',
    description:
      'Generate unique, fictional country names for world-building. Ideal for authors, RPG game masters, and creative simulation projects.',
    seoTitle: 'Country Name Generator – Random Fictional Country Creator',
    seoDescription:
      'Create imaginative and unique country names instantly. Perfect for creative writing, gaming, and fantasy world-building.',
    category: 'creative-generators',
  },
  {
    name: 'Random Username Generator',
    slug: 'random-username-generator',
    description:
      'Generate creative and unique usernames based on your preferences. Stop struggling to find available handles for social media or gaming.',
    seoTitle: 'Username Generator – Create Unique & Random Usernames',
    seoDescription:
      'Find the perfect unique username instantly. Generate creative handles for gaming, social media, and online profiles.',
    category: 'creative-generators',
  },
  {
    name: 'Text Case Changer',
    slug: 'text-case-changer',
    description:
      'Instantly convert text between UPPERCASE, lowercase, Title Case, and Sentence case. Quickly fix formatting errors in large blocks of text.',
    seoTitle: 'Text Case Converter – Change Case of Text Instantly',
    seoDescription:
      'Convert text to uppercase, lowercase, or title case in one click. The fastest way to fix text formatting errors.',
    category: 'writing-editing',
  },
  {
    name: 'Text to PHP Variables',
    slug: 'text-to-php-variables',
    description:
      'Automatically wrap lines of text into PHP variable declarations. Streamline the process of creating configuration lists and arrays.',
    seoTitle: 'Text to PHP Variables – Generate PHP Code from Text Lists',
    seoDescription:
      'Convert plain text lists into PHP variable declarations instantly. Speed up your backend development workflow.',
    category: 'developer-suite',
  },
  {
    name: 'PX to REM Converter',
    slug: 'px-to-rem-converter',
    description:
      'Convert pixel (PX) values to REM units for scalable web typography. Essential for building accessible, responsive designs that adapt to user settings.',
    seoTitle: 'PX to REM Converter – Convert CSS Pixels to REM',
    seoDescription:
      'Translate PX to REM units instantly for responsive web design. Improve accessibility and scalability in your CSS.',
    category: 'developer-suite',
  },
  {
    name: 'Unminify',
    slug: 'unminify',
    description:
      'Reverse minification for HTML, CSS, and JavaScript. Beautify compressed code to make it readable for debugging and auditing.',
    seoTitle: 'Unminify Code – Beautify Minified HTML, CSS & JS',
    seoDescription:
      'Convert compressed, minified code back into a readable, indented format. Perfect for debugging and code analysis.',
    category: 'developer-suite',
  },
  {
    name: 'Barcode Generator',
    slug: 'barcode-generator',
    description:
      'Create industry-standard barcodes for product tracking and inventory management. Generate high-quality images ready for printing.',
    seoTitle: 'Barcode Generator – Create Custom Product Barcodes',
    seoDescription:
      'Generate professional barcodes instantly for inventory, shipping, and retail. Fast, free, and ready to print.',
    category: 'creative-generators',
  },
  {
    name: 'QRCode Generator',
    slug: 'qrcode-generator',
    description:
      'Generate high-resolution QR codes from URLs, text, or contact information. Bridge the gap between physical media and digital content.',
    seoTitle: 'QR Code Generator – Create Custom QR Codes Online',
    seoDescription:
      'Generate personalized QR codes for URLs, text, or WiFi passwords. Create high-quality, scannable codes in seconds.',
    category: 'creative-generators',
  },
];

export default tools;
