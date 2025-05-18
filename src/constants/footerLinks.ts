/**
 * Interface representing a footer link.
 */
interface IFooterLink {
  name: string;
  href: string;
}

/**
 * Footer navigation links organized by section
 */
const footerLinks: Record<string, IFooterLink[]> = {
  devTools: [
    { name: "URL Shortener", href: "/tools/url-shortener" },
    { name: "Dropdown to Array", href: "/tools/dropdown-to-array" },
    { name: "Text to Array", href: "/tools/text-to-array" },
    { name: "Base64 Encode/Decode", href: "/tools/base64-encode-decode" },
    { name: "Country Name Generator", href: "/tools/country-name-generator" },
    { name: "Random Username Generator", href: "/tools/random-username-generator" },
    { name: "URL Decoder/Encoder", href: "/tools/url-decoder-encoder" },
  ],
  minifiersTools: [
    { name: "HTML Minifier", href: "/tools/html-minifier" },
    { name: "CSS Minifier", href: "/tools/css-minifier" },
    { name: "JS Minifier", href: "/tools/js-minifier" },
    { name: "Unminify", href: "/tools/unminify" },
    { name: "PX to REM Converter", href: "/tools/px-to-rem-converter" },
    { name: "CSS Inliner", href: "/tools/css-inliner" },
    { name: "JSON Sorter", href: "/tools/json-sorter" },
  ],
  textTools: [
    { name: "Slugify", href: "/tools/slugify" },
    { name: "Bulk Slugify", href: "/tools/bulk-slugify" },
    { name: "Text Case Changer", href: "/tools/text-case-changer" },
    { name: "Duplicate Line Removal", href: "/tools/duplicate-line-removal" },
    { name: "Alphabetical Line Sorter", href: "/tools/alphabetical-line-sorter" },
    { name: "Shuffle Text Lines", href: "/tools/shuffle-text-lines" },
    { name: "Replace Quotes", href: "/tools/replace-quotes" },
  ],
  securityTools: [
    { name: "Character Count", href: "/tools/character-count" },
    { name: "Text to PHP Variables", href: "/tools/text-to-php-variables" },
    { name: "Password Generator", href: "/tools/password-generator" },
    { name: "Password Strength Checker", href: "/tools/password-strength-checker" },
  ],
};

export default footerLinks;
