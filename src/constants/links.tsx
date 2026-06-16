import type { ReactNode } from 'react';

import { FaFacebookF, FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';
import { TbWorldWww } from 'react-icons/tb';

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
 * Interface representing a social media link with metadata and icon.
 *
 * @type {SocialMediaLink}
 * @property {string} name - The display name of the social media profile
 * @property {string} key - The unique key identifier for the link
 * @property {string} url - The URL to the social media profile
 * @property {string} color - The hover color class for the social media button
 * @property {ReactNode} icon - The icon element for the social media platform
 */
export interface SocialMediaLink {
  name: string;
  key: string;
  url: string;
  color: string;
  icon: ReactNode;
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

/**
 * A list of social media links with metadata and icons.
 *
 * @type {SocialMediaLink[]}
 */
export const socialMediaLinks: SocialMediaLink[] = [
  {
    key: 'github',
    name: 'Vijay Hardaha on GitHub',
    url: 'https://github.com/vijayhardaha',
    color: 'hover:bg-[#24292e]',
    icon: <FaGithub />,
  },
  {
    key: 'twitter',
    name: 'Vijay Hardaha on X (Twitter)',
    url: 'https://x.com/vijayhardaha',
    color: 'hover:bg-[#0f1419]',
    icon: <FaXTwitter />,
  },
  {
    key: 'facebook',
    name: 'Vegan Vijay on Facebook',
    url: 'https://facebook.com/vegan.vijay',
    color: 'hover:bg-[#145dbf]',
    icon: <FaFacebookF />,
  },
  {
    key: 'instagram',
    name: 'Vegan Vijay on Instagram',
    url: 'https://instagram.com/vegan.vijay',
    color: 'hover:bg-[#ff0069]',
    icon: <FaInstagram />,
  },
  {
    key: 'pph',
    name: 'Vijay Hardaha on PeoplePerHour',
    url: 'https://pph.me/vijayhardaha',
    color: 'hover:bg-[#ff7300]',
    icon: <TbWorldWww />,
  },
];
