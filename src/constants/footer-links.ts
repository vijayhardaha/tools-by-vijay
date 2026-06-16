/**
 * Interface representing a footer navigation link.
 *
 * @type {FooterLink}
 * @property {string} name - The display text for the link
 * @property {string} href - The URL the link points to
 */
interface FooterLink {
  name: string;
  href: string;
}

/**
 * Footer navigation links organized by section
 */
const footerLinks: Record<string, FooterLink[]> = {
  tools: [
    { name: 'Slugify', href: '/tools/slugify' },
    { name: 'Bulk Slugify', href: '/tools/bulk-slugify' },
    { name: 'URL Shortener', href: '/tools/url-shortener' },
    { name: 'Dropdown to Array', href: '/tools/dropdown-to-array' },
    { name: 'Text to Array', href: '/tools/text-to-array' },
    { name: 'Duplicate Line Removal', href: '/tools/duplicate-line-removal' },
  ],
  pages: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
  ],
};

export default footerLinks;
