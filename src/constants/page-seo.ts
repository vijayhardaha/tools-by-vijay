/**
 * Interface representing a page SEO entry.
 *
 * @type {PageSeoEntry}
 * @property {string} slug - The URL slug for the page (e.g. 'about', 'tools', '' for home)
 * @property {string} title - The SEO title for the page
 * @property {string} description - The SEO description for the page
 */
export interface PageSeoEntry {
  slug: string;
  title: string;
  description: string;
}

/**
 * Single source of truth for SEO data of all info pages.
 *
 * Tools and categories have their own SEO data in their respective
 * constants files, which are combined with these in the seo utility.
 *
 * The `slug` field is the clean URL slug (e.g. 'about', 'tools').
 * The full path is derived from it during merge (e.g. '/about', '/tools').
 *
 * Changing a value here updates it everywhere — metadata, OG images, etc.
 *
 * @type {PageSeoEntry[]}
 */
const pageSeo: PageSeoEntry[] = [
  {
    slug: '',
    title: 'Developer Tools to Boost Productivity by Vijay Hardaha',
    description:
      'Online tools to help developers and workers work faster and smarter. Boost your productivity with free, browser-based utilities.',
  },
  {
    slug: 'about',
    title: 'About',
    description:
      'Discover Vijay, a passionate web developer and vegan, who built this fast, privacy-focused tool platform. Learn about the motivation, technology stack, and commitment to user experience.',
  },
  {
    slug: 'contact',
    title: 'Contact',
    description:
      'Get in touch with Vijay, a skilled freelance web developer specializing in WordPress, WooCommerce, and Next.js. Explore his open-source projects on GitHub and hire him for your next web development project. Based in India, working globally.',
  },
  {
    slug: 'faq',
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about Tools by Vijay — free online utilities for developers and content creators. Learn about privacy, offline usage, accuracy, and more.',
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description:
      'Learn how Tools by Vijay collects, uses, and protects your data. We prioritize your privacy with minimal tracking and no storage of tool inputs.',
  },
  {
    slug: 'terms-conditions',
    title: 'Terms and Conditions',
    description:
      'Review the terms and conditions for using Tools by Vijay. Understand your rights, responsibilities, and the guidelines for using our free online developer tools.',
  },
  {
    slug: 'tools',
    title: 'All Free Online Tools',
    description:
      'Browse our complete collection of free online developer tools, text utilities, security tools, and creative generators. Find the right tool for your next project.',
  },
];

export default pageSeo;
