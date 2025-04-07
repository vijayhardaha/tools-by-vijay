/**
 * Array of tool objects, each containing a name and a link.
 */
const tools = [
  {
    name: "Slugify",
    slug: "slugify",
    shortDescription: "Convert text into URL-friendly slugs.",
    pageDescription:
      "Use the Slugify tool to convert any string into a clean, readable URL slug.",
    seoDescription:
      "Convert text into SEO-friendly URL slugs instantly. Simple and effective slug generator.",
    seoTitle: "Slugify Tool – Generate SEO-Friendly Slugs Online",
  },
  {
    name: "Bulk Slugify",
    slug: "bulk-slugify",
    shortDescription: "Slugify multiple strings at once.",
    pageDescription:
      "Process multiple lines of text and turn them into slugs in one go using the Bulk Slugify tool.",
    seoDescription:
      "Quickly generate slugs from multiple strings. Ideal for bulk content operations.",
    seoTitle: "Bulk Slugify Tool – Convert Multiple Strings into Slugs",
  },
  {
    name: "Password Generator",
    slug: "password-generator",
    shortDescription: "Generate strong and secure passwords.",
    pageDescription:
      "Create complex and secure passwords for personal or professional use with our password generator.",
    seoDescription:
      "Generate secure, random passwords to protect your accounts. Free and customizable.",
    seoTitle: "Password Generator – Create Strong Passwords Online",
  },
  {
    name: "Password Strength Checker",
    slug: "password-strength-checker",
    shortDescription: "Check how strong your password is.",
    pageDescription:
      "Analyze your password’s strength to ensure it meets modern security standards.",
    seoDescription:
      "Test your password strength with real-time feedback. Improve your security today.",
    seoTitle: "Password Strength Checker – Test Your Password Security",
  },
  {
    name: "HTML Minifier",
    slug: "html-minifier",
    shortDescription: "Minify your HTML code easily.",
    pageDescription:
      "Reduce file size and optimize performance by minifying your HTML code.",
    seoDescription:
      "Minify and compress HTML code for better website speed and SEO.",
    seoTitle: "HTML Minifier – Optimize Your HTML Code",
  },
  {
    name: "CSS Minifier",
    slug: "css-minifier",
    shortDescription: "Compress your CSS code.",
    pageDescription:
      "Shrink your CSS files without losing readability or functionality using our CSS Minifier.",
    seoDescription:
      "Minify your CSS files to enhance website loading speed. Fast and efficient tool.",
    seoTitle: "CSS Minifier – Reduce CSS File Size Online",
  },
  {
    name: "JS Minifier",
    slug: "js-minifier",
    shortDescription: "Minify JavaScript code.",
    pageDescription:
      "Speed up your website by compressing and optimizing JavaScript files.",
    seoDescription:
      "Minify JavaScript files for better performance and faster load times.",
    seoTitle: "JavaScript Minifier – Compress JS Code Easily",
  },
  {
    name: "URL Shortener",
    slug: "url-shortener",
    shortDescription: "Generate short URLs in bulk using TinyURL.",
    pageDescription:
      "Easily shorten multiple URLs at once using TinyURL with this bulk URL shortener tool.",
    seoDescription:
      "Bulk URL Shortener powered by TinyURL. Quickly generate short links for multiple URLs.",
    seoTitle: "URL Shortener – Bulk Short Link Generator with TinyURL",
  },
  {
    name: "Dropdown to Array",
    slug: "dropdown-to-array",
    shortDescription: "Convert select options to PHP/JS array.",
    pageDescription:
      "This simple tool helps you convert HTML dropdown (select tag) options into PHP or JavaScript arrays easily.",
    seoDescription:
      "Convert dropdown options into arrays for PHP or JavaScript. Fast and easy utility for developers.",
    seoTitle: "Dropdown to Array – Convert Select Options to PHP/JS Array",
  },
  {
    name: "Text to Array",
    slug: "text-to-array",
    shortDescription: "Generate PHP/JS array from plain text.",
    pageDescription:
      "Turn a list of plain texts into an array format. This tool auto-generates array keys for PHP or JavaScript.",
    seoDescription:
      "Convert plain text into key-value arrays for PHP or JavaScript. Ideal for quick data formatting.",
    seoTitle: "Text to Array – Convert Text into PHP/JS Arrays Instantly",
  },
];

export default tools;
