const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, '..', 'src', 'components', 'tools');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function addHeadingIds(html) {
  return html.replace(/<(h[2345])([^>]*)>(.*?)<\/\1>/gs, function (match, tag, attrs, content) {
    var plainText = content.replace(/<[^>]*>/g, '').trim();
    var id = slugify(plainText);
    if (attrs.indexOf('id=') !== -1) return match;
    return '<' + tag + attrs + ' id="' + id + '">' + content + '</' + tag + '>';
  });
}

function addFaqImport(html) {
  if (html.indexOf('import { FAQ, FAQItem }') !== -1) return html;
  return html.replace(
    "import type { JSX } from 'react';",
    "import type { JSX } from 'react';\nimport { FAQ, FAQItem } from '@/components/tools/tool-faq';"
  );
}

var faqContent = {
  slugify: [
    {
      heading: 'What is a URL slug?',
      content:
        '<p>A URL slug is the part of a URL that identifies a specific page in a human-readable format. Slugs are derived from page titles and use hyphens or underscores to separate words, making URLs clean and SEO-friendly.</p>',
    },
    {
      heading: 'How does this slugify tool work?',
      content:
        '<p>This tool uses the <code>slugify</code> package combined with <code>latinize</code> to transform text into URL-safe slugs. It strips special characters, replaces spaces with your chosen separator, converts to lowercase, and normalizes accented characters into ASCII equivalents.</p>',
    },
    {
      heading: 'Why are slugs important for SEO?',
      content:
        '<p>Search engines use URL slugs to understand page content. Clean, keyword-rich slugs improve click-through rates and help with rankings. Slugs like <code>/best-javascript-frameworks</code> are far more effective than <code>/page123</code>.</p>',
    },
    {
      heading: 'Can I use underscores in slugs?',
      content:
        '<p>Yes, this tool supports both hyphens and underscores as separators. While hyphens are generally recommended for SEO (Google treats them as word separators), underscores are still widely used in many CMS platforms.</p>',
    },
    {
      heading: 'Does this tool handle international characters?',
      content:
        '<p>Yes, it uses the <code>latinize</code> library to normalize accented characters like <code>\u00e9</code>, <code>\u00e7</code>, <code>\u00f1</code> into their ASCII equivalents, ensuring your slugs are universally compatible.</p>',
    },
  ],
  'bulk-slugify': [
    {
      heading: 'What is the Bulk Slugify Tool?',
      content:
        '<p>The Bulk Slugify Tool lets you convert multiple strings into SEO-friendly slugs at once. It is designed for developers and content managers who need to process large volumes of titles or headings efficiently.</p>',
    },
    {
      heading: 'How many items can I process at once?',
      content:
        '<p>There is no hard limit. You can paste hundreds of lines at once. All processing happens client-side in your browser, so performance depends on your device.</p>',
    },
    {
      heading: 'What options are available?',
      content:
        '<p>You can choose between hyphens and underscores, enable lowercase conversion, remove numbers, normalize international characters, and keep or remove empty lines.</p>',
    },
    {
      heading: 'What are common use cases?',
      content:
        '<p>Common use cases include generating SEO-friendly URLs for e-commerce catalogs, transforming blog titles during CMS migrations, and creating dynamic routes for web applications.</p>',
    },
    {
      heading: 'Is this tool free?',
      content:
        '<p>Yes, the tool is completely free to use with no signup required. All processing happens locally for maximum privacy.</p>',
    },
  ],
  'url-decoder-encoder': [
    {
      heading: 'What is URL encoding?',
      content:
        '<p>URL encoding converts special characters into a format safe for transmission. For example, spaces become <code>%20</code> and special characters like <code>&amp;</code> become <code>%26</code>.</p>',
    },
    {
      heading: 'When should I encode a URL?',
      content:
        '<p>Encode URLs when they contain special characters, spaces, or non-ASCII characters. Common scenarios include query strings, API requests, and user-generated content in links.</p>',
    },
    {
      heading: 'What is encodeURIComponent?',
      content:
        '<p><code>encodeURIComponent</code> encodes all special characters in a URL component, making it suitable for query string parameters. This tool uses both <code>encodeURIComponent</code> and <code>decodeURIComponent</code>.</p>',
    },
    {
      heading: 'Is URL encoding reversible?',
      content:
        '<p>Yes, URL encoding is fully reversible. Encoding followed by decoding returns the original string, provided the encoding was done correctly.</p>',
    },
    {
      heading: 'Why would I need to decode a URL?',
      content:
        '<p>Decoding is useful when reading encoded URLs from logs, APIs, or user input. It converts percent-encoded sequences back to their original characters for readability.</p>',
    },
  ],
  'base64-encode-decode': [
    {
      heading: 'What is Base64 encoding?',
      content:
        '<p>Base64 is a binary-to-text encoding scheme that represents binary data in ASCII string format. It is commonly used to embed images in HTML, encode email attachments, and transmit binary data over text-based protocols.</p>',
    },
    {
      heading: 'When should I use Base64?',
      content:
        '<p>Base64 is useful for transmitting binary data through text-based systems like JSON APIs, HTML documents, or email. Common uses include embedding images and encoding file data for API requests.</p>',
    },
    {
      heading: 'Is Base64 secure?',
      content:
        '<p>No, Base64 is encoding, not encryption. Anyone can decode it without a key. Do not use Base64 to protect sensitive information.</p>',
    },
    {
      heading: 'What happens with invalid Base64?',
      content:
        '<p>The tool displays an error message for invalid input. Base64 decoding requires properly formatted strings with correct padding.</p>',
    },
    {
      heading: 'Why use Base64 instead of binary?',
      content:
        '<p>Base64 converts binary data into a safe text representation that works across all text-based protocols, JSON, and XML.</p>',
    },
  ],
  'url-shortener': [
    {
      heading: 'What is a URL shortener?',
      content:
        '<p>A URL shortener creates a shorter link that redirects to the original destination. Shortened URLs are easier to share on social media, in SMS, and in printed materials.</p>',
    },
    {
      heading: 'How does this tool work?',
      content:
        '<p>This tool uses the TinyURL API to create shortened links. Enter one or more URLs, and valid URLs get shortened links that redirect to your destination.</p>',
    },
    {
      heading: 'Can I shorten multiple URLs?',
      content:
        '<p>Yes, enter one URL per line. The tool processes all valid URLs simultaneously. Invalid URLs are skipped with an error message.</p>',
    },
    {
      heading: 'Are shortened URLs permanent?',
      content:
        '<p>URLs shortened through TinyURL are typically permanent. However, keep a backup of your original URLs as backups.</p>',
    },
  ],
  'text-case-changer': [
    {
      heading: 'What text cases are supported?',
      content:
        '<p>This tool supports Sentence case, lower case, UPPER CASE, Capitalized Case, Alternating Case, Title Case, and Inverse Case.</p>',
    },
    {
      heading: 'What is the difference between Title and Capitalized Case?',
      content:
        '<p>Title Case capitalizes the first letter of every word. Capitalized Case capitalizes the first letter of each line.</p>',
    },
    {
      heading: 'Is my text sent to a server?',
      content: '<p>No, all processing happens in your browser. Your data never leaves your device.</p>',
    },
    {
      heading: 'Can I convert multiple lines?',
      content: '<p>Yes, the tool handles multiline text, preserving line structure in the output.</p>',
    },
  ],
  'password-generator': [
    {
      heading: 'How strong are generated passwords?',
      content:
        '<p>With all character types enabled and a length of 16+, passwords have billions of combinations, making them resistant to brute-force attacks.</p>',
    },
    {
      heading: 'Are passwords stored or sent anywhere?',
      content: '<p>No, generation happens locally. Passwords are never transmitted, stored, or logged anywhere.</p>',
    },
    {
      heading: 'What length should I use?',
      content: '<p>We recommend at least 12 characters. Use 16+ for critical accounts like email and banking.</p>',
    },
    {
      heading: 'What does exclude similar characters do?',
      content:
        '<p>This removes characters that look alike (like O and 0), making passwords easier to read and type correctly.</p>',
    },
    {
      heading: 'Should I use a password manager?',
      content:
        '<p>Yes, we recommend using a password manager to securely store generated passwords across devices.</p>',
    },
    {
      heading: 'What if all character types are disabled?',
      content:
        '<p>The tool displays an error: "Select at least one character type." You need at least one set enabled.</p>',
    },
  ],
  'password-strength-checker': [
    {
      heading: 'How is strength measured?',
      content:
        '<p>Strength is evaluated based on length, character variety, and resistance to common attack patterns. Longer passwords with diverse character types score higher.</p>',
    },
    {
      heading: 'Is my password sent to a server?',
      content: '<p>No, all analysis happens locally in your browser for maximum privacy.</p>',
    },
    {
      heading: 'What makes a password weak?',
      content:
        '<p>Common weaknesses include short length, lack of variety, dictionary words, personal info, keyboard patterns, and password reuse.</p>',
    },
    {
      heading: 'What is a passphrase?',
      content:
        '<p>A passphrase is a sequence of random words that is easier to remember but still highly secure. It leverages length over complexity.</p>',
    },
  ],
  'qrcode-generator': [
    {
      heading: 'What is a QR code?',
      content:
        '<p>A QR code (Quick Response) is a two-dimensional barcode that stores data like URLs or text. It can be scanned by smartphones to quickly access the encoded data.</p>',
    },
    {
      heading: 'What data can be encoded?',
      content:
        '<p>QR codes can store URLs, text, phone numbers, emails, Wi-Fi credentials, and more. This tool supports encoding text or URL data.</p>',
    },
    {
      heading: 'How do I change the size?',
      content: '<p>Use the slider to adjust from 128px to 512px. Larger codes are easier to scan from a distance.</p>',
    },
    {
      heading: 'Is this tool free?',
      content: '<p>Yes, the QR code generator is completely free to use with no limits.</p>',
    },
  ],
  'barcode-generator': [
    {
      heading: 'What barcode formats are supported?',
      content:
        '<p>This tool generates Code128 barcodes, one of the most widely used formats supporting alphanumeric data for logistics and inventory.</p>',
    },
    {
      heading: 'What can I encode?',
      content:
        '<p>Encode any alphanumeric text like product SKUs, serial numbers, tracking IDs, or inventory codes.</p>',
    },
    {
      heading: 'How do I use the generated barcode?',
      content:
        '<p>The tool generates a barcode image URL you can display on web pages, print on labels, or use in inventory systems.</p>',
    },
    {
      heading: 'Is my data sent to a server?',
      content: '<p>Your input data is encoded into the URL. No data is stored or logged by this tool.</p>',
    },
  ],
  'html-minifier': [
    {
      heading: 'What is HTML minification?',
      content:
        '<p>HTML minification removes unnecessary characters like whitespace, comments, and unused quotes without changing functionality, reducing file size and improving load times.</p>',
    },
    {
      heading: 'Is minified HTML still valid?',
      content: '<p>Yes, minified HTML is functionally identical. All tags, attributes, and content are preserved.</p>',
    },
    {
      heading: 'What library is used?',
      content:
        '<p>This tool uses <code>html-minifier-terser</code>, a powerful HTML minification library with fine-grained control over optimizations.</p>',
    },
    {
      heading: 'What are the benefits?',
      content:
        '<p>Benefits include faster page loads, reduced bandwidth, improved Core Web Vitals, and better SEO.</p>',
    },
    {
      heading: 'Can I customize options?',
      content:
        '<p>Yes, options include removing comments, collapsing whitespace, removing attribute quotes, and minifying inline CSS/JS.</p>',
    },
  ],
  'css-minifier': [
    {
      heading: 'What is CSS minification?',
      content:
        '<p>CSS minification removes unnecessary characters and redundant properties without changing visual output, reducing file size.</p>',
    },
    {
      heading: 'What library is used?',
      content:
        '<p>This tool uses <code>clean-css</code>, which supports merging selectors, removing overridden properties, and compressing color values.</p>',
    },
    {
      heading: 'Is minified CSS harder to debug?',
      content:
        '<p>Yes, keep an unminified copy for development and use minified versions in production. Browsers have pretty-print tools for debugging.</p>',
    },
    {
      heading: 'How much can CSS be reduced?',
      content:
        '<p>Reduction typically ranges from 30% to 70%. Larger files with extensive comments see the most significant gains.</p>',
    },
  ],
  'js-minifier': [
    {
      heading: 'What is JavaScript minification?',
      content:
        '<p>JavaScript minification removes unnecessary characters and transforms code to be more compact, often shortening variable names and removing dead code.</p>',
    },
    {
      heading: 'What library is used?',
      content:
        '<p>This tool uses <code>@putout/minify</code> with options for mangling variables, removing console/debugger statements, and removing comments.</p>',
    },
    {
      heading: 'What options are available?',
      content:
        '<p>Toggle variable name mangling, console.log removal, debugger removal, and comment removal for fine-grained control.</p>',
    },
    {
      heading: 'Does minification affect functionality?',
      content:
        '<p>No, proper minification preserves all functionality. Only optional features like console removal are configurable.</p>',
    },
  ],
  unminify: [
    {
      heading: 'What is unminification?',
      content:
        '<p>Unminification formats minified code with proper indentation and spacing, making it readable and easier to debug.</p>',
    },
    {
      heading: 'What code types are supported?',
      content: '<p>This tool supports JavaScript, CSS, HTML, XML, and JSON using the Prettier formatter.</p>',
    },
    {
      heading: 'Is unminified code identical?',
      content:
        '<p>Functionally yes, but formatting is added back. Variable names shortened during minification remain shortened.</p>',
    },
    {
      heading: 'What library is used?',
      content:
        '<p>This tool uses Prettier, the industry-standard code formatter for consistent, opinionated formatting.</p>',
    },
  ],
  'css-inliner': [
    {
      heading: 'What is CSS inlining?',
      content:
        '<p>CSS inlining applies styles directly to each HTML element as inline styles, essential for HTML email compatibility.</p>',
    },
    {
      heading: 'Why do emails need inlined CSS?',
      content:
        '<p>Email clients like Gmail and Outlook strip external stylesheets. Inlined CSS ensures consistent rendering across all clients.</p>',
    },
    {
      heading: 'Does inlining increase file size?',
      content: '<p>Yes, styles are repeated per element, but this trade-off is necessary for email compatibility.</p>',
    },
    {
      heading: 'What library is used?',
      content:
        '<p>This tool uses <code>juice</code> for CSS inlining and <code>prettier</code> for formatting the output.</p>',
    },
  ],
  'character-count': [
    {
      heading: 'What statistics are provided?',
      content:
        '<p>The tool provides character count (with and without spaces), word count, sentence count, paragraph count, line count, and space count.</p>',
    },
    {
      heading: 'How are words counted?',
      content:
        '<p>Words are counted by splitting text on whitespace and filtering empty strings for accurate counting.</p>',
    },
    {
      heading: 'Why use a character counter?',
      content:
        '<p>Essential for content with length limits like social media posts, meta descriptions, and form fields.</p>',
    },
    {
      heading: 'Is my text sent to a server?',
      content: '<p>No, all analysis happens locally in your browser for complete privacy.</p>',
    },
  ],
  'text-to-array': [
    {
      heading: 'What formats can I convert to?',
      content:
        '<p>Convert text to JSON arrays, JavaScript arrays, PHP arrays, and WordPress-compatible PHP arrays.</p>',
    },
    {
      heading: 'What is the difference between array types?',
      content:
        '<p>Simple arrays store values. Numeric arrays add incrementing IDs. Associative arrays create key-value pairs with optional slugified keys.</p>',
    },
    {
      heading: 'What are slugified keys?',
      content:
        '<p>Slugified keys convert values to URL-friendly format (e.g., "United States" becomes "united_states").</p>',
    },
    {
      heading: 'Can I use this for large datasets?',
      content: '<p>Yes, all processing happens client-side with no server limits on input size.</p>',
    },
  ],
  'dropdown-to-array': [
    {
      heading: 'What is a dropdown converter?',
      content:
        '<p>This tool extracts option elements from HTML select dropdowns and converts them into structured arrays for JavaScript, PHP, or WordPress.</p>',
    },
    {
      heading: 'What HTML format is expected?',
      content:
        '<p>Paste a complete select element or just the option tags. The parser extracts both value and display text.</p>',
    },
    {
      heading: 'What output formats are available?',
      content:
        '<p>Output formats include JSON, JavaScript, PHP, and WordPress arrays with translation function support.</p>',
    },
    {
      heading: 'What are slugified keys?',
      content:
        '<p>For associative arrays, option values are transformed into clean keys (e.g., "New York" becomes "new_york").</p>',
    },
  ],
  'json-sorter': [
    {
      heading: 'Why sort JSON keys?',
      content:
        '<p>Sorting keys alphabetically makes files easier to read, compare, and manage in version control with fewer merge conflicts.</p>',
    },
    {
      heading: 'Does sorting affect functionality?',
      content: '<p>No, JSON object key order does not affect functionality in most modern applications.</p>',
    },
    {
      heading: 'What does spare plain arrays mean?',
      content: '<p>This preserves original array order when element order is meaningful, such as ranked lists.</p>',
    },
    {
      heading: 'What library is used?',
      content:
        '<p>This tool uses <code>jsonabc</code> for alphabetically sorting JSON object keys with nested object support.</p>',
    },
  ],
  'text-to-php-variables': [
    {
      heading: 'What naming conventions are supported?',
      content:
        '<p>camelCase, snake_case, and PascalCase. Each line becomes a valid PHP variable following your chosen convention.</p>',
    },
    {
      heading: 'What is the output format?',
      content: '<p>Each line becomes <code>$variableName = &#39;&#39;;</code> — ready-to-use PHP code.</p>',
    },
    {
      heading: 'Can I use this for large lists?',
      content: '<p>Yes, each line is processed independently, suitable for any list size.</p>',
    },
    {
      heading: 'How are special characters handled?',
      content:
        '<p>The tool uses slugify and latinize to convert text into valid PHP variable names with spaces replaced by underscores.</p>',
    },
  ],
  'alphabetical-line-sorter': [
    {
      heading: 'What is alphabetical sorting?',
      content: '<p>Lines are arranged in A-Z or Z-A order, useful for organizing lists and cleaning up data.</p>',
    },
    {
      heading: 'Standard vs ASCII sorting?',
      content:
        '<p>Standard uses locale-aware comparison for correct handling of accented characters. ASCII uses byte-order comparison.</p>',
    },
    {
      heading: 'Can it remove duplicates?',
      content: '<p>Yes, there is an option to remove duplicate lines before sorting.</p>',
    },
    { heading: 'Is my data private?', content: '<p>Yes, all sorting happens locally in your browser.</p>' },
  ],
  'duplicate-line-removal': [
    {
      heading: 'How are duplicates detected?',
      content:
        '<p>Lines are compared after trimming whitespace. Identical lines after trimming are considered duplicates.</p>',
    },
    {
      heading: 'What sorting options are available?',
      content:
        '<p>No sorting, Alphabetical (locale-aware), or ASCII (byte-order) sorting after removing duplicates.</p>',
    },
    {
      heading: 'Can I reverse sort order?',
      content: '<p>Yes, the Reverse Sorting option reverses the order for any selected sort type.</p>',
    },
    {
      heading: 'Is my data modified?',
      content: '<p>No, processing happens in your browser and nothing is stored. Original data remains unchanged.</p>',
    },
  ],
  'shuffle-text-lines': [
    {
      heading: 'How does shuffling work?',
      content: '<p>The tool uses the Fisher-Yates shuffle algorithm for unbiased randomization of your text lines.</p>',
    },
    {
      heading: 'Can I remove duplicates?',
      content: '<p>Yes, enable the Remove Duplicates option before shuffling for unique randomized lists.</p>',
    },
    {
      heading: 'What does Trim Lines do?',
      content: '<p>Removes leading and trailing whitespace from each line for consistent formatting.</p>',
    },
    {
      heading: 'Is the shuffling truly random?',
      content:
        '<p>Yes, the Fisher-Yates algorithm provides uniform random distribution across all possible permutations.</p>',
    },
  ],
  'replace-quotes': [
    {
      heading: 'Straight vs curly quotes?',
      content:
        '<p>Straight quotes are the basic keyboard marks. Curly quotes are typographically correct for professional publishing and improve readability.</p>',
    },
    {
      heading: 'When to use curly quotes?',
      content:
        '<p>Use curly quotes in professional publishing and formal documents. Straight quotes are fine for code and informal communication.</p>',
    },
    {
      heading: 'Does this replace apostrophes?',
      content:
        '<p>Yes, the Replace Apostrophes option converts apostrophes in contractions to typographically correct curly versions.</p>',
    },
    {
      heading: 'What are standalone quotes?',
      content:
        '<p>These are quotation marks without matching pairs. The Replace Standalone Quotes option handles these edge cases.</p>',
    },
  ],
  'country-name-generator': [
    {
      heading: 'How many countries are included?',
      content:
        '<p>The tool contains over 200 country names including sovereign nations, territories, and disputed regions.</p>',
    },
    {
      heading: 'Can I generate multiple names?',
      content: '<p>Yes, generate up to 200 names at once by adjusting the count setting.</p>',
    },
    {
      heading: 'Are names unique?',
      content:
        '<p>Each name is independently selected, so the same country may appear multiple times in one generation.</p>',
    },
    {
      heading: 'What is this useful for?',
      content:
        '<p>Testing, populating databases, creating demo data, generating sample content, and educational geography activities.</p>',
    },
  ],
  'random-username-generator': [
    {
      heading: 'How are usernames generated?',
      content:
        '<p>Usernames combine a random adjective, noun, and number (e.g., CoolTiger742) for readable, unique results.</p>',
    },
    {
      heading: 'How many can I generate?',
      content: '<p>Generate up to 200 usernames at once, each independently randomized.</p>',
    },
    {
      heading: 'Are generated usernames unique?',
      content: '<p>Not guaranteed since random combinations may produce duplicates with large generation counts.</p>',
    },
    {
      heading: 'What words are used?',
      content:
        '<p>The tool uses 31 adjectives and 31 nouns — all positive, memorable words for appealing combinations.</p>',
    },
  ],
  'px-to-rem-converter': [
    {
      heading: 'What is the difference between px and rem?',
      content:
        '<p>PX is an absolute pixel unit. REM is relative to the root font size (typically 16px), respecting user preferences for accessibility.</p>',
    },
    {
      heading: 'Why use rem over px?',
      content:
        '<p>REM units respect browser font size settings for better accessibility and make maintaining consistent spacing easier.</p>',
    },
    {
      heading: 'What is the default base font size?',
      content:
        '<p>The default is 16px, matching the typical browser default. Customize this to match your project design system.</p>',
    },
    {
      heading: 'How to calculate rem manually?',
      content: '<p>Divide the pixel value by the base font size. For example, with 16px base: 32px / 16 = 2rem.</p>',
    },
  ],
};

var tools = [
  'alphabetical-line-sorter',
  'barcode-generator',
  'base64-encode-decode',
  'bulk-slugify',
  'character-count',
  'country-name-generator',
  'css-inliner',
  'css-minifier',
  'dropdown-to-array',
  'duplicate-line-removal',
  'html-minifier',
  'js-minifier',
  'json-sorter',
  'password-generator',
  'password-strength-checker',
  'px-to-rem-converter',
  'qrcode-generator',
  'random-username-generator',
  'replace-quotes',
  'shuffle-text-lines',
  'slugify',
  'text-case-changer',
  'text-to-array',
  'text-to-php-variables',
  'unminify',
  'url-decoder-encoder',
  'url-shortener',
];

function buildFaqSection(slug) {
  var faqs = faqContent[slug];
  if (!faqs || faqs.length === 0) return '';

  var items = faqs
    .map(function (q) {
      var headingId = slugify(q.heading);
      return (
        '      <FAQItem heading="'
        + q.heading.replace(/"/g, '&quot;')
        + '" headingId="'
        + headingId
        + '">\n'
        + '        '
        + q.content
        + '\n'
        + '      </FAQItem>'
      );
    })
    .join('\n');

  return '      <FAQ>\n' + items + '\n      </FAQ>\n\n';
}

function findCreditsSection(html) {
  var lines = html.split('\n');
  var creditsLine = -1;
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].indexOf('Credits') !== -1 && lines[i].indexOf('Source') !== -1) {
      creditsLine = i;
      break;
    }
  }
  return creditsLine;
}

function findSectionStart(lines, creditsLine) {
  for (var i = creditsLine; i >= 0; i--) {
    if (lines[i].trim().indexOf('<section>') === 0 || lines[i].trim() === '<section>') {
      return i;
    }
  }
  return creditsLine;
}

function processFile(filePath) {
  var slug = path.basename(path.dirname(filePath));
  var content = fs.readFileSync(filePath, 'utf-8');

  // Step 1: Add heading IDs
  content = addHeadingIds(content);

  // Step 2: Add FAQ import
  content = addFaqImport(content);

  // Step 3: Insert FAQ section before Credits & Source
  var faqSection = buildFaqSection(slug);
  if (faqSection) {
    var lines = content.split('\n');
    var creditsLine = findCreditsSection(content);
    if (creditsLine !== -1) {
      var sectionStart = findSectionStart(lines, creditsLine);
      // Insert FAQ before the credits section
      var before = lines.slice(0, sectionStart).join('\n');
      var after = lines.slice(sectionStart).join('\n');
      content = before + faqSection + after;
    }
  }

  fs.writeFileSync(filePath, content);
  console.log('Updated: ' + slug + '/info-block.tsx');
}

// Process all tool info-block files
for (var t = 0; t < tools.length; t++) {
  var filePath = path.join(toolsDir, tools[t], 'info-block.tsx');
  if (fs.existsSync(filePath)) {
    processFile(filePath);
  } else {
    console.log('Skipped: ' + tools[t] + '/info-block.tsx (not found)');
  }
}

console.log('\nDone!');
