/**
 * Interface representing a page entry.
 *
 * Mirrors the structure of Tool and Category for consistency.
 *
 * @type {PageEntry}
 * @property {string} label - The display label for the page
 * @property {string} slug - The URL slug for the page (e.g. 'about', 'tools', '' for home)
 * @property {string} description - The display description for the page
 * @property {string} seoTitle - The SEO-optimized title for the page
 * @property {string} seoDescription - The SEO-optimized description for the page
 */
export interface PageEntry {
  slug: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

/**
 * Single source of truth for all info page data.
 *
 * Tools and categories have their own data in their respective
 * constants files, which are combined with these in the seo utility.
 *
 * The `slug` field is the clean URL slug (e.g. 'about', 'tools').
 * The full path is derived from it during merge.
 *
 * Changing a value here updates it everywhere — metadata, OG images, etc.
 *
 * @type {PageEntry[]}
 */
export const pages: PageEntry[] = [
  {
    slug: '',
    title: 'Home',
    description:
      'Explore a curated collection of powerful and easy-to-use web tools designed for developers and tech enthusiasts. From code formatting and data conversion to productivity boosters, our tools help you work smarter and faster - all in your browser.',
    seoTitle: 'Developer Tools to Boost Productivity by Vijay Hardaha',
    seoDescription:
      'Online tools to help developers and workers work faster and smarter. Boost your productivity with free, browser-based utilities.',
  },
  {
    slug: 'tools',
    title: 'All Free Online Tools',
    description:
      'Browse our complete collection of free online tools. Find the right utility for your next project — all categorized for easy discovery.',
    seoTitle: 'All Free Online Tools',
    seoDescription:
      'Browse our complete collection of free online developer tools, text utilities, security tools, and creative generators. Find the right tool for your next project.',
  },
  {
    slug: 'about',
    title: 'About',
    description:
      'Meet Vijay, a web developer and vegan creating fast, privacy-first online tools for developers and content creators.',
    seoTitle: 'About',
    seoDescription:
      'Discover Vijay, a passionate web developer and vegan, who built this fast, privacy-focused tool platform. Learn about the motivation, technology stack, and commitment to user experience.',
  },
  {
    slug: 'contact',
    title: 'Contact',
    description: 'Reach out to Vijay for freelance web development, open source collaboration, or general inquiries.',
    seoTitle: 'Contact',
    seoDescription:
      'Get in touch with Vijay, a skilled freelance web developer specializing in WordPress, WooCommerce, and Next.js. Explore his open-source projects on GitHub and hire him for your next web development project. Based in India, working globally.',
  },
  {
    slug: 'faq',
    title: 'FAQs',
    description: 'Find quick answers to common questions about Tools by Vijay — our free online developer utilities.',
    seoTitle: 'Frequently Asked Questions',
    seoDescription:
      'Find answers to common questions about Tools by Vijay — free online utilities for developers and content creators. Learn about privacy, offline usage, accuracy, and more.',
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your information when you use our free online tools.',
    seoTitle: 'Privacy Policy',
    seoDescription:
      'Learn how Tools by Vijay collects, uses, and protects your data. We prioritize your privacy with minimal tracking and no storage of tool inputs.',
  },
  {
    slug: 'terms-conditions',
    title: 'Terms & Conditions',
    description: 'Please read these terms carefully before using our free online tools and services.',
    seoTitle: 'Terms and Conditions',
    seoDescription:
      'Review the terms and conditions for using Tools by Vijay. Understand your rights, responsibilities, and the guidelines for using our free online developer tools.',
  },
];
