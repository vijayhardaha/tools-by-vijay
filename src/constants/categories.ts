/**
 * Interface representing a tool category.
 *
 * @type {Category}
 * @property {string} slug - The unique URL slug for the category
 * @property {string} title - The display title for the category
 * @property {string} description - A brief description of the category
 * @property {string} seoTitle - The SEO-optimized title for the category page
 * @property {string} seoDescription - The SEO-optimized description for the category page
 */
export interface Category {
  slug: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

/**
 * Array of category objects, each containing information about a tool category.
 *
 * @type {Category[]}
 */
const categories: Category[] = [
  {
    slug: 'creative-generators',
    title: 'Creative Generators',
    description:
      'Spark your imagination or automate your business with random name generators, barcodes, and custom QR code creators.',
    seoTitle: 'Creative Generators – QR Codes, Barcodes & Random Names',
    seoDescription:
      'Generate unique assets for your brand or project. Create professional QR codes, barcodes, and creative names instantly.',
  },
  {
    slug: 'developer-suite',
    title: 'Developer Suite',
    description:
      'Accelerate your workflow with powerful code minifiers, converters, and optimization tools designed for modern web developers.',
    seoTitle: 'Developer Tool Suite – Code Optimization & Formatting',
    seoDescription:
      'Boost your productivity with professional tools for JS, CSS, and HTML. Minify code, convert units, and format data instantly.',
  },
  {
    slug: 'security-privacy',
    title: 'Security & Privacy',
    description:
      'Strengthen your digital footprint with high-entropy password generators and security analyzers to prevent unauthorized access.',
    seoTitle: 'Online Security Tools – Secure Password Generation',
    seoDescription:
      'Protect your accounts with our free security tools. Generate unhackable passwords and test your current password strength.',
  },
  {
    slug: 'web-url',
    title: 'Web & URL',
    description:
      'Manage and manipulate web links and data encoding to ensure seamless connectivity and clean URLs across all platforms.',
    seoTitle: 'Web Utility Tools – URL Shorteners & Encoders',
    seoDescription:
      'Simplify web management with our URL shorteners, encoders, and Base64 converters. Essential utilities for every web creator.',
  },
  {
    slug: 'writing-editing',
    title: 'Writing & Editing',
    description:
      'Clean, format, and optimize your text for blogs, social media, and documents with a suite of professional writing tools.',
    seoTitle: 'Free Online Writing & Text Editing Tools',
    seoDescription:
      'Effortlessly clean, format, and optimize your content. From character counting to SEO slug generation, get your text perfect in seconds.',
  },
];

export default categories;
