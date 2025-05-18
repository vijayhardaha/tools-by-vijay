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
  quickLinks: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    {
      name: "Source Code",
      href: "https://github.com/vijayhardaha/tools-by-vijay",
    },
  ],
  codeTools: [
    { name: "HTML Minifier", href: "/tools/html-minifier" },
    { name: "CSS Minifier", href: "/tools/css-minifier" },
    { name: "JS Minifier", href: "/tools/js-minifier" },
  ],
  textTools: [
    { name: "Slugify", href: "/tools/slugify" },
    { name: "Bulk Slugify", href: "/tools/bulk-slugify" },
    { name: "Text to Array", href: "/tools/text-to-array" },
  ],
  webTools: [
    { name: "URL Shortener", href: "/tools/url-shortener" },
    { name: "Password Generator", href: "/tools/password-generator" },
    {
      name: "Password Strength Checker",
      href: "/tools/password-strength-checker",
    },
    { name: "Dropdown to Array", href: "/tools/dropdown-to-array" },
  ],
};

export default footerLinks;
