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
    { name: 'Slugify', href: '/slugify' },
    { name: 'Bulk Slugify', href: '/bulk-slugify' },
    { name: 'URL Shortener', href: '/url-shortener' },
    { name: 'Dropdown to Array', href: '/dropdown-to-array' },
    { name: 'Text to Array', href: '/text-to-array' },
    { name: 'Duplicate Line Removal', href: '/duplicate-line-removal' },
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
