const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, '..', 'src', 'components', 'tools');

// Define examples for each tool
// Each example has a label and a values object mapping state keys to values
const examples = {
  slugify: [
    { label: 'Blog Post Title', values: { input: '10 Best JavaScript Frameworks in 2025!' } },
    {
      label: 'Product Name',
      values: {
        input: 'Premium Cotton T-Shirt (Large)',
        useUnderscore: false,
        removeNumbers: false,
        useLowercase: true,
        useLitinize: true,
      },
    },
    {
      label: 'Accented Text',
      values: { input: 'Cómo están los niños? Déjà vu', useUnderscore: false, useLitinize: true },
    },
    { label: 'URL with underscores', values: { input: 'My Project Documentation Page', useUnderscore: true } },
    { label: 'Remove numbers', values: { input: 'Chapter 1: The Beginning of 2025', removeNumbers: true } },
  ],
  'bulk-slugify': [
    {
      label: 'Blog Titles',
      values: {
        input:
          '10 Best JavaScript Frameworks\nGetting Started with React\nAdvanced TypeScript Tips\nCSS Grid Layout Guide\nNode.js Performance Optimization',
      },
    },
    {
      label: 'Product Names',
      values: {
        input:
          'Premium Cotton T-Shirt\nWireless Bluetooth Headphones\nOrganic Green Tea\nLeather Messenger Bag\nStainless Steel Water Bottle',
      },
    },
    {
      label: 'Category Names',
      values: { input: "Electronics & Gadgets\nMen's Clothing\nHome & Kitchen\nBooks & Media\nSports & Outdoors" },
    },
    {
      label: 'Event Names',
      values: {
        input:
          'Annual Tech Conference 2025\nSummer Music Festival\nWinter Fashion Week\nFood & Wine Expo\nMarathon for Charity',
        removeNumbers: true,
      },
    },
    {
      label: 'Underscore Slugs',
      values: {
        input: 'Project Documentation\nAPI Reference Guide\nUser Manual\nDeveloper Guide\nRelease Notes',
        useUnderscore: true,
      },
    },
  ],
  'url-decoder-encoder': [
    {
      label: 'Encode URL',
      values: { input: 'https://example.com/search?q=hello world&category=books & more', isEncoding: true },
    },
    { label: 'Encode special chars', values: { input: 'user@example.com?name=John Doe&age=25', isEncoding: true } },
    {
      label: 'Decode URL',
      values: { input: 'https%3A%2F%2Fexample.com%2Fpath%3Fname%3DJohn%26age%3D25', isEncoding: false },
    },
    { label: 'Decode query string', values: { input: 'search%3Djavascript%20tutorial%26page%3D1', isEncoding: false } },
  ],
  'base64-encode-decode': [
    { label: 'Encode text', values: { input: 'Hello, World! This is a test.', isEncoding: true } },
    { label: 'Encode JSON', values: { input: '{"name":"John","age":30,"city":"New York"}', isEncoding: true } },
    { label: 'Decode Base64', values: { input: 'SGVsbG8sIFdvcmxkIQ==', isEncoding: false } },
    {
      label: 'Decode longer text',
      values: { input: 'VGhpcyBpcyBhbiBlbmNvZGVkIG1lc3NhZ2UuIFBsZWFzZSBkZWNvZGUgbWUu', isEncoding: false },
    },
  ],
  'text-case-changer': [
    { label: 'To UPPERCASE', values: { input: 'hello world, this is a test sentence.', textCase: 'UPPER CASE' } },
    { label: 'To lower case', values: { input: 'HELLO WORLD, THIS IS A TEST SENTENCE.', textCase: 'lower case' } },
    {
      label: 'To Title Case',
      values: { input: 'the quick brown fox jumps over the lazy dog', textCase: 'Title Case' },
    },
    {
      label: 'To Capitalized Case',
      values: { input: 'first line\nsecond line\nthird line', textCase: 'Capitalized Case' },
    },
    {
      label: 'To Alternating Case',
      values: { input: 'this is alternating case example', textCase: 'aLtErNaTiNg cAsE' },
    },
  ],
  'password-generator': [
    {
      label: 'Strong 16-char',
      values: {
        length: 16,
        useUppercase: true,
        useLowercase: true,
        useNumbers: true,
        useSymbols: true,
        excludeSimilar: false,
      },
    },
    {
      label: 'Strong 20-char',
      values: {
        length: 20,
        useUppercase: true,
        useLowercase: true,
        useNumbers: true,
        useSymbols: true,
        excludeSimilar: false,
      },
    },
    {
      label: 'Pin Code 6-digit',
      values: {
        length: 6,
        useUppercase: false,
        useLowercase: false,
        useNumbers: true,
        useSymbols: false,
        excludeSimilar: false,
      },
    },
    {
      label: 'Letters only',
      values: {
        length: 12,
        useUppercase: true,
        useLowercase: true,
        useNumbers: false,
        useSymbols: false,
        excludeSimilar: false,
      },
    },
    {
      label: 'No similar chars',
      values: {
        length: 16,
        useUppercase: true,
        useLowercase: true,
        useNumbers: true,
        useSymbols: true,
        excludeSimilar: true,
      },
    },
  ],
  'country-name-generator': [
    { label: '5 Countries', values: { count: 5 } },
    { label: '10 Countries', values: { count: 10 } },
    { label: '3 Countries', values: { count: 3 } },
    { label: '1 Country', values: { count: 1 } },
  ],
  'random-username-generator': [
    { label: '5 Usernames', values: { count: 5 } },
    { label: '10 Usernames', values: { count: 10 } },
    { label: '3 Usernames', values: { count: 3 } },
    { label: '1 Username', values: { count: 1 } },
  ],
  'duplicate-line-removal': [
    { label: 'Simple list', values: { input: 'apple\nbanana\napple\norange\nbanana\ngrape' } },
    {
      label: 'Sorted A-Z',
      values: { input: 'zebra\napple\nmonkey\nelephant\ntiger\nmonkey\nzebra', sortType: 'alphabetical' },
    },
    { label: 'Sorted ASC', values: { input: 'Orange\napple\nBanana\norange\nApple\nbanana', sortType: 'ascii' } },
    {
      label: 'Reversed sorted',
      values: { input: 'dog\ncat\nbird\nfish\ndog\ncat\nfish', sortType: 'alphabetical', reverseSort: true },
    },
    { label: 'Mixed duplicates', values: { input: 'red\ngreen\nblue\nred\nyellow\ngreen\npurple\nblue' } },
  ],
  'alphabetical-line-sorter': [
    { label: 'Simple A-Z', values: { input: 'orange\nbanana\napple\ngrape\nkiwi' } },
    { label: 'Reverse Z-A', values: { input: 'apple\nbanana\norange\ngrape\nkiwi', reverseSort: true } },
    { label: 'Remove duplicates', values: { input: 'cat\ndog\nbird\ncat\nfish\ndog\nbird', removeDuplicates: true } },
    { label: 'ASCII sort', values: { input: 'Zebra\napple\nBanana\nOrange\nbanana', sortType: 'ascii' } },
  ],
  'replace-quotes': [
    {
      label: 'Simple to curly',
      values: { input: 'She said, "Hello!" and he replied, "Hi there."', replaceType: 'simple-to-curly' },
    },
    {
      label: 'With contractions',
      values: {
        input: 'She said, "I can\'t believe it\'s already Friday!"',
        replaceType: 'simple-to-curly',
        replaceApostrophes: true,
      },
    },
    {
      label: 'Curly to simple',
      values: { input: '\u201cWelcome!\u2019 she said with a smile.\u201d', replaceType: 'curly-to-simple' },
    },
    {
      label: 'Standalone quotes',
      values: {
        input: 'He said "hello" and she said "goodbye" to everyone.',
        replaceType: 'simple-to-curly',
        replaceStandaloneQuotes: true,
      },
    },
  ],
  'shuffle-text-lines': [
    { label: 'Simple list', values: { input: 'item 1\nitem 2\nitem 3\nitem 4\nitem 5\nitem 6' } },
    { label: 'Names list', values: { input: 'Alice\nBob\nCharlie\nDiana\nEve\nFrank\nGrace\nHenry' } },
    { label: 'No duplicates', values: { input: 'red\nblue\ngreen\nred\nyellow\nblue', removeDuplicates: true } },
    { label: 'With empty lines', values: { input: 'line 1\n\nline 2\n\nline 3\n\nline 4', removeEmptyLines: false } },
    { label: 'No trim', values: { input: '  spaced\nnormal\n  indented\n  more space\nplain', trimLines: false } },
  ],
  'character-count': [
    { label: 'Simple text', values: { text: 'The quick brown fox jumps over the lazy dog.' } },
    {
      label: 'Multiline',
      values: {
        text: 'Line one of the text.\nLine two continues here.\nLine three has more content.\nLine four is the final one.',
      },
    },
    {
      label: 'Paragraph',
      values: {
        text: 'This is the first paragraph. It has multiple sentences. Here is another sentence.\n\nThis is the second paragraph. It also has several sentences. And one more for good measure.\n\nThis is the third and final paragraph. It concludes the text.',
      },
    },
    {
      label: 'Code snippet',
      values: { text: 'function hello() {\n  console.log("Hello, World!");\n  return true;\n}' },
    },
  ],
  'px-to-rem-converter': [
    { label: 'Common sizes (16px)', values: { pxValue: '16', baseFontSize: 16 } },
    { label: 'Heading sizes (16px)', values: { pxValue: '32', baseFontSize: 16 } },
    { label: 'Small sizes (16px)', values: { pxValue: '8', baseFontSize: 16 } },
    { label: 'Custom base 14px', values: { pxValue: '28', baseFontSize: 14 } },
    { label: 'Large values (16px)', values: { pxValue: '48', baseFontSize: 16 } },
  ],
  'text-to-php-variables': [
    {
      label: 'User fields',
      values: { input: 'first name\nlast name\nemail address\nphone number', variableCase: 'snake_case' },
    },
    {
      label: 'Camel case',
      values: { input: 'user name\nfull address\npostal code\nphone number', variableCase: 'camelCase' },
    },
    {
      label: 'Pascal case',
      values: { input: 'first name\nlast name\nemail address\nphone number', variableCase: 'PascalCase' },
    },
    {
      label: 'Screaming snake',
      values: { input: 'api key\nsecret token\nbase url\ndatabase host', variableCase: 'SCREAMING_SNAKE_CASE' },
    },
    {
      label: 'Flat case',
      values: { input: 'first name\nlast name\nemail address\nphone number', variableCase: 'flatcase' },
    },
  ],
  'text-to-array': [
    { label: 'Countries JSON', values: { input: 'United States\nCanada\nUnited Kingdom\nAustralia\nIndia' } },
    {
      label: 'JS Array simple',
      values: { input: 'Apple\nBanana\nOrange\nGrape\nMango', outputFormat: 'jsArray', arrayType: 'simple' },
    },
    {
      label: 'PHP associative',
      values: { input: 'red\ngreen\nblue\nyellow', outputFormat: 'php', arrayType: 'associative', useSlugKeys: true },
    },
    {
      label: 'WP numeric',
      values: { input: 'Option A\nOption B\nOption C', outputFormat: 'wordpress', arrayType: 'numeric' },
    },
  ],
  'dropdown-to-array': [
    {
      label: 'Simple dropdown',
      values: {
        input:
          '<select>\n<option value="us">United States</option>\n<option value="ca">Canada</option>\n<option value="uk">United Kingdom</option>\n<option value="au">Australia</option>\n</select>',
      },
    },
    {
      label: 'Options only',
      values: {
        input:
          '<option value="red">Red Color</option>\n<option value="green">Green Color</option>\n<option value="blue">Blue Color</option>',
      },
    },
    {
      label: 'PHP format',
      values: {
        input:
          '<select>\n<option value="small">Small</option>\n<option value="medium">Medium</option>\n<option value="large">Large</option>\n</select>',
        outputFormat: 'php',
      },
    },
    {
      label: 'WP format',
      values: {
        input:
          '<select>\n<option value="yes">Yes</option>\n<option value="no">No</option>\n<option value="maybe">Maybe</option>\n</select>',
        outputFormat: 'wordpress',
      },
    },
  ],
  'json-sorter': [
    {
      label: 'Nested JSON',
      values: {
        input:
          '{\n  "zebra": "africa",\n  "apple": "fruit",\n  "mango": "tropical",\n  "banana": "yellow",\n  "camel": "desert"\n}',
        spareArrays: true,
      },
    },
    {
      label: 'User profile',
      values: {
        input:
          '{\n  "name": "John",\n  "age": 30,\n  "email": "john@example.com",\n  "address": {\n    "zip": "10001",\n    "city": "New York",\n    "street": "123 Main St",\n    "country": "USA"\n  }\n}',
        spareArrays: true,
      },
    },
    {
      label: 'Config file',
      values: {
        input:
          '{\n  "version": "2.0",\n  "debug": false,\n  "database": {\n    "port": 5432,\n    "host": "localhost",\n    "name": "app_db"\n  },\n  "logging": {\n    "level": "info",\n    "file": "/var/log/app.log"\n  }\n}',
        spareArrays: true,
      },
    },
    {
      label: 'Array preserved',
      values: {
        input:
          '{\n  "name": "test",\n  "items": ["z", "a", "m"],\n  "config": {\n    "enable": true,\n    "timeout": 30\n  }\n}',
        spareArrays: true,
      },
    },
  ],
  'password-strength-checker': [
    { label: 'Weak password', values: { password: '12345' } },
    { label: 'Medium password', values: { password: 'Password1' } },
    { label: 'Strong password', values: { password: 'P@ssw0rd!' } },
    { label: 'Very strong', values: { password: 'MyS3cur3P@ssw0rd!2025' } },
    { label: 'Common password', values: { password: 'qwerty123' } },
  ],
  'barcode-generator': [
    { label: 'Product SKU', values: { input: 'SKU-12345-ABC' } },
    { label: 'Serial Number', values: { input: 'SN-2025-XYZ-789' } },
    { label: 'Tracking ID', values: { input: 'TRACK-1A2B3C4D' } },
    { label: 'Invoice Number', values: { input: 'INV-2025-001' } },
    { label: 'Asset Tag', values: { input: 'AST-001-COMP-APPLE' } },
  ],
  'qrcode-generator': [
    { label: 'Website URL', values: { input: 'https://toolsbyvijay.vercel.app', size: 256 } },
    { label: 'Social Profile', values: { input: 'https://x.com/vijayhardaha', size: 256 } },
    { label: 'Contact Info', values: { input: 'mailto:hello@example.com', size: 256 } },
    { label: 'Large QR', values: { input: 'https://github.com/vijayhardaha', size: 400 } },
    { label: 'WiFi Config', values: { input: 'WIFI:S:MyNetwork;T:WPA;P:MyPassword123;;', size: 256 } },
  ],
  'html-minifier': [
    {
      label: 'Simple page',
      values: {
        input:
          '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n  <meta charset="UTF-8">\n</head>\n<body>\n  <header>\n    <h1>Welcome to My Site</h1>\n    <nav>\n      <a href="/">Home</a>\n      <a href="/about">About</a>\n      <a href="/contact">Contact</a>\n    </nav>\n  </header>\n  <main>\n    <p>This is a paragraph with <strong>bold</strong> text.</p>\n    <p>Another paragraph here.</p>\n  </main>\n  <footer>\n    <p>&copy; 2025 My Site</p>\n  </footer>\n</body>\n</html>',
      },
    },
    {
      label: 'Article snippet',
      values: {
        input:
          '<article>\n<h2>Getting Started with React</h2>\n<p>React is a <em>powerful</em> library for building user interfaces.</p>\n<ul>\n<li>Component-based architecture</li>\n<li>Virtual DOM for performance</li>\n<li>Rich ecosystem</li>\n</ul>\n</article>',
      },
    },
    {
      label: 'Form markup',
      values: {
        input:
          '<form action="/submit" method="POST">\n<label for="name">Name:</label>\n<input type="text" id="name" name="name" />\n<label for="email">Email:</label>\n<input type="email" id="email" name="email" />\n<button type="submit">Submit</button>\n</form>',
      },
    },
    {
      label: 'Complex layout',
      values: {
        input:
          '<div class="container">\n<div class="row">\n<div class="col">\n<div class="card">\n<div class="card-header">\n<h3>Card Title</h3>\n</div>\n<div class="card-body">\n<p>Card content goes here with <a href="#">a link</a>.</p>\n</div>\n</div>\n</div>\n</div>\n</div>',
      },
    },
  ],
  'css-minifier': [
    {
      label: 'Button styles',
      values: {
        input:
          '.btn {\n  background-color: #007bff;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: #0056b3;\n}',
      },
    },
    {
      label: 'Layout CSS',
      values: {
        input:
          '.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -15px;\n}\n\n.col {\n  flex: 1;\n  padding: 0 15px;\n}',
      },
    },
    {
      label: 'Typography',
      values: {
        input:
          'h1 { font-size: 2.5rem; font-weight: bold; color: #333; margin-bottom: 0.5rem; }\nh2 { font-size: 2rem; font-weight: bold; color: #444; margin-bottom: 0.5rem; }\np { font-size: 1rem; line-height: 1.6; color: #666; margin-bottom: 1rem; }',
      },
    },
    {
      label: 'Card component',
      values: {
        input:
          '.card {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.card-header {\n  background: #f8f9fa;\n  padding: 12px 16px;\n  border-bottom: 1px solid #ddd;\n  font-weight: bold;\n}\n\n.card-body {\n  padding: 16px;\n}',
      },
    },
  ],
  'js-minifier': [
    {
      label: 'Utility functions',
      values: {
        input:
          'function formatDate(date) {\n  const d = new Date(date);\n  const year = d.getFullYear();\n  const month = String(d.getMonth() + 1).padStart(2, "0");\n  const day = String(d.getDate()).padStart(2, "0");\n  return `${year}-${month}-${day}`;\n}\n\nfunction validateEmail(email) {\n  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return re.test(email);\n}',
      },
    },
    {
      label: 'Array helpers',
      values: {
        input:
          'const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst evens = numbers.filter(n => n % 2 === 0);\nconst doubled = numbers.map(n => n * 2);\nconst sum = numbers.reduce((a, b) => a + b, 0);\nconsole.log("Evens:", evens);\nconsole.log("Doubled:", doubled);\nconsole.log("Sum:", sum);',
        mangle: true,
        removeConsole: true,
      },
    },
    {
      label: 'Class example',
      values: {
        input:
          'class User {\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n  }\n\n  getGreeting() {\n    return `Hello, my name is ${this.name}`;\n  }\n\n  isValidEmail() {\n    return this.email.includes("@");\n  }\n}\n\nconst user = new User("John", "john@example.com");\nconsole.log(user.getGreeting());',
      },
    },
    {
      label: 'React component',
      values: {
        input:
          'import React, { useState, useEffect } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `Count: ${count}`;\n  }, [count]);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}',
      },
    },
  ],
  'css-inliner': [
    {
      label: 'Simple email',
      values: {
        htmlInput:
          '<div class="container">\n<h1>Welcome!</h1>\n<p>Thank you for signing up.</p>\n<a href="#" class="btn">Get Started</a>\n</div>',
        cssInput:
          '.container { max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; }\nh1 { color: #333; font-size: 24px; }\np { color: #666; font-size: 16px; line-height: 1.5; }\n.btn { display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; }',
      },
    },
    {
      label: 'Newsletter',
      values: {
        htmlInput:
          '<table>\n<tr>\n<td class="header">\n<img src="logo.png" alt="Logo" />\n</td>\n</tr>\n<tr>\n<td class="content">\n<h2>Monthly Update</h2>\n<p>Here are the latest news and updates.</p>\n</td>\n</tr>\n</table>',
        cssInput:
          '.header { background: #f8f9fa; padding: 20px; text-align: center; }\n.content { padding: 30px; }\nh2 { color: #2c3e50; font-size: 22px; }\np { color: #555; font-size: 14px; line-height: 1.6; }',
      },
    },
    {
      label: 'Promo card',
      values: {
        htmlInput:
          '<div class="promo">\n<h2>Special Offer!</h2>\n<p class="discount">50% OFF</p>\n<p>Limited time offer. Shop now!</p>\n<a href="#" class="cta">Shop Sale</a>\n</div>',
        cssInput:
          '.promo { max-width: 400px; border: 2px solid #e74c3c; border-radius: 8px; padding: 20px; text-align: center; }\nh2 { color: #e74c3c; font-size: 28px; margin: 0 0 10px; }\n.discount { font-size: 36px; font-weight: bold; color: #27ae60; margin: 10px 0; }\n.cta { display: inline-block; padding: 12px 30px; background: #e74c3c; color: white; text-decoration: none; border-radius: 4px; }',
      },
    },
    {
      label: 'Invoice template',
      values: {
        htmlInput:
          '<div class="invoice">\n<div class="header">\n<h1>Invoice</h1>\n<p>Invoice #: INV-2025-001</p>\n</div>\n<table class="items">\n<tr><th>Item</th><th>Qty</th><th>Price</th></tr>\n<tr><td>Web Design</td><td>1</td><td>$500</td></tr>\n<tr><td>Hosting</td><td>12</td><td>$120</td></tr>\n</table>\n<p class="total">Total: $620</p>\n</div>',
        cssInput:
          '.invoice { max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; padding: 20px; }\n.header { border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px; }\nh1 { color: #333; font-size: 24px; margin: 0; }\n.items { width: 100%; border-collapse: collapse; }\n.items th { background: #f5f5f5; padding: 8px; text-align: left; }\n.items td { padding: 8px; border-bottom: 1px solid #ddd; }\n.total { font-size: 18px; font-weight: bold; text-align: right; margin-top: 20px; }',
      },
    },
  ],
  unminify: [
    {
      label: 'Minified JS',
      values: {
        input: 'function hello(name){return"Hello, "+name+"!"}const greeting=hello("World");console.log(greeting);',
        codeType: 'javascript',
      },
    },
    {
      label: 'Minified CSS',
      values: {
        input:
          'body{margin:0;padding:0;font-family:sans-serif}.container{max-width:1200px;margin:0 auto}.header{background:#333;color:#fff;padding:20px}',
        codeType: 'css',
      },
    },
    {
      label: 'Minified HTML',
      values: {
        input: '<!DOCTYPE html><html><head><title>Test</title></head><body><h1>Hello</h1><p>World</p></body></html>',
        codeType: 'html',
      },
    },
    {
      label: 'Minified JSON',
      values: {
        input: '{"name":"John","age":30,"city":"New York","hobbies":["reading","coding","hiking"]}',
        codeType: 'json',
      },
    },
    {
      label: 'Minified XML',
      values: {
        input: '<?xml version="1.0"?><root><person><name>John</name><age>30</age></person></root>',
        codeType: 'xml',
      },
    },
  ],
  'url-shortener': [
    { label: 'Single URL', values: { input: 'https://github.com/vijayhardaha' } },
    {
      label: 'Multiple URLs',
      values: { input: 'https://github.com/vijayhardaha\nhttps://x.com/vijayhardaha\nhttps://toolsbyvijay.vercel.app' },
    },
    { label: 'Blog links', values: { input: 'https://example.com/blog/post-1\nhttps://example.com/blog/post-2' } },
    {
      label: 'Doc links',
      values: {
        input:
          'https://example.com/docs/getting-started\nhttps://example.com/docs/api-reference\nhttps://example.com/docs/guides',
      },
    },
  ],
};

// Helper: determine state keys for a tool
function getStateKeys(tool) {
  const toolExamples = examples[tool];
  if (!toolExamples) return [];
  const keys = new Set();
  for (const ex of toolExamples) {
    for (const key of Object.keys(ex.values)) {
      keys.add(key);
    }
  }
  return Array.from(keys);
}

// Generate ExampleBlock content
function generateExampleBlock(tool) {
  const toolExamples = examples[tool];
  if (!toolExamples) return null;

  let content = `'use client';

import type { JSX } from 'react';

/**
 * Props for the ExampleBlock component.
 */
interface ExampleBlockProps {
  onExample: (values: Record<string, any>) => void;
}

/**
 * Example data and option presets for the ${tool} tool.
 * Each button loads a predefined set of input values and options.
 *
 * @param {ExampleBlockProps} props - Component props
 *
 * @returns {JSX.Element} The rendered example buttons
 */
export function ExampleBlock({ onExample }: ExampleBlockProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
`;

  for (let i = 0; i < toolExamples.length; i++) {
    const ex = toolExamples[i];
    const exampleNumber = i + 1;
    content += `      <button
        type="button"
        onClick={() => onExample(${JSON.stringify(ex.values)})}
        className="bg-secondary hover:bg-muted rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
      >
        Load Example ${exampleNumber}
      </button>\n`;
  }

  content += `    </div>
  );
}
`;

  return content;
}

// Generate all ExampleBlock files
for (const tool of Object.keys(examples)) {
  const content = generateExampleBlock(tool);
  if (content) {
    const dir = path.join(toolsDir, tool);
    if (!fs.existsSync(dir)) {
      console.log('Skipped ' + tool + ' (directory not found)');
      continue;
    }
    fs.writeFileSync(path.join(dir, 'example-block.tsx'), content);
    console.log('Created: ' + tool + '/example-block.tsx');
  }
}

// Now update all index.tsx files
console.log('\n--- Updating index.tsx files ---\n');

for (const tool of Object.keys(examples)) {
  const indexPath = path.join(toolsDir, tool, 'index.tsx');
  if (!fs.existsSync(indexPath)) {
    console.log('Skipped ' + tool + ' (index.tsx not found)');
    continue;
  }

  let content = fs.readFileSync(indexPath, 'utf-8');

  // Add import
  if (!content.includes('import { ExampleBlock }')) {
    content = content.replace(
      "import { OutputBlock } from './output-block';",
      "import { OutputBlock } from './output-block';\nimport { ExampleBlock } from './example-block';"
    );
  }

  // Check if ExampleBlock is already rendered
  if (content.includes('<ExampleBlock')) {
    console.log('Skipped ' + tool + ' (already has ExampleBlock)');
    continue;
  }

  // Add handleExample function after the last setXxx state or before the return
  // Find the return statement and add the handler before it
  const returnMatch = content.match(/\n  return \(/);
  if (!returnMatch) {
    console.log('Skipped ' + tool + ' (no return found)');
    continue;
  }

  const returnIndex = returnMatch.index;
  const beforeReturn = content.slice(0, returnIndex);
  const afterReturn = content.slice(returnIndex);

  // Generate handleExample function
  const stateKeys = getStateKeys(tool);

  // Build the handler
  let handler =
    '\n  /**\n   * Loads an example with predefined input values and options.\n   *\n   * @param {Record<string, unknown>} values - The example values.\n   *\n   * @returns {void}\n   */\n  const handleExample = (values: Record<string, any>): void => {\n';

  for (const key of stateKeys) {
    // Map keys to setter function calls
    if (tool === 'password-strength-checker' && key === 'password') {
      handler += `    if ('${key}' in values) {\n`;
      handler += `      handleSubmit(values.${key} as string);\n`;
      handler += '    }\n';
    } else {
      handler += `    if ('${key}' in values) {\n`;
      handler += `      set${key.charAt(0).toUpperCase() + key.slice(1)}(values.${key});\n`;
      handler += '    }\n';
    }
  }

  handler += '  };\n';

  // Insert handler before return
  content = beforeReturn + handler + afterReturn;

  // Insert ExampleBlock between InputBlock and OutputBlock
  // Find the InputBlock closing tag and OutputBlock opening pattern
  // The pattern varies between tools

  // Replace: `<InputBlock ... />\n\n        <OutputBlock`
  // Or: `<InputBlock ... />\n\n        {output && <OutputBlock`
  // Or wait - the ExampleBlock should come AFTER InputBlock and BEFORE OutputBlock

  let modified = false;

  // Pattern 1: self-closing InputBlock /> then newlines then OutputBlock
  let result = content.replace(
    /(\/>\s*\n(?:\s*\n)*)(\s*<OutputBlock)/,
    '$1        <ExampleBlock onExample={handleExample} />\n\n$2'
  );
  if (result !== content) {
    content = result;
    modified = true;
  }

  // Pattern 2: self-closing InputBlock /> then {output && <OutputBlock
  if (!modified) {
    result = content.replace(
      /(\/>\s*\n(?:\s*\n)*)(\s*\{output && <OutputBlock)/,
      '$1        <ExampleBlock onExample={handleExample} />\n\n$2'
    );
    if (result !== content) {
      content = result;
      modified = true;
    }
  }

  // Pattern 3: self-closing InputBlock /> then {password && <OutputBlock
  if (!modified) {
    result = content.replace(
      /(\/>\s*\n(?:\s*\n)*)(\s*\{password && <OutputBlock)/,
      '$1        <ExampleBlock onExample={handleExample} />\n\n$2'
    );
    if (result !== content) {
      content = result;
      modified = true;
    }
  }

  // Pattern 4: self-closing InputBlock /> then {results.length > 0 && <OutputBlock
  if (!modified) {
    result = content.replace(
      /(\/>\s*\n(?:\s*\n)*)(\s*\{results\.length > 0 && <OutputBlock)/,
      '$1        <ExampleBlock onExample={handleExample} />\n\n$2'
    );
    if (result !== content) {
      content = result;
      modified = true;
    }
  }

  // Pattern 5: password-strength-checker - InputBlock /> then {password
  if (!modified) {
    result = content.replace(
      /(\/>\s*\n(?:\s*\n)*)(\s*\{password\b)/,
      '$1        <ExampleBlock onExample={handleExample} />\n\n$2'
    );
    if (result !== content) {
      content = result;
      modified = true;
    }
  }

  // Pattern 6: character-count - InputBlock /> then <OutputBlock with stats
  if (!modified) {
    result = content.replace(
      /(\/>\s*\n(?:\s*\n)*)(\s*<OutputBlock stats)/,
      '$1        <ExampleBlock onExample={handleExample} />\n\n$2'
    );
    if (result !== content) {
      content = result;
      modified = true;
    }
  }

  // Pattern 7: px-to-rem-converter - InputBlock /> then <OutputBlock remValue
  if (!modified) {
    result = content.replace(
      /(\/>\s*\n(?:\s*\n)*)(\s*<OutputBlock remValue)/,
      '$1        <ExampleBlock onExample={handleExample} />\n\n$2'
    );
    if (result !== content) {
      content = result;
      modified = true;
    }
  }

  if (!modified) {
    console.log('FAILED: ' + tool + ' - could not find InputBlock/OutputBlock pattern');
    continue;
  }

  fs.writeFileSync(indexPath, content);
  console.log('Updated: ' + tool + '/index.tsx');
}

console.log('\nDone!');
