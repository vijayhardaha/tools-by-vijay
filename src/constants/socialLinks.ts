import type { ComponentType } from 'react';

import { FaFacebookF, FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';
import { TbWorldWww } from 'react-icons/tb';

/**
 * Interface representing a social media link with metadata and icon.
 *
 * @type {SocialMediaLink}
 * @property {string} name - The display name of the social media profile
 * @property {string} key - The unique key identifier for the link
 * @property {string} url - The URL to the social media profile
 * @property {string} color - The hover color class for the social media button
 * @property {ComponentType} icon - The icon component for the social media platform
 */
export interface SocialMediaLink {
  name: string;
  key: string;
  url: string;
  color: string;
  icon: ComponentType;
}

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
    icon: FaGithub,
  },
  {
    key: 'twitter',
    name: 'Vijay Hardaha on X (Twitter)',
    url: 'https://x.com/vijayhardaha',
    color: 'hover:bg-[#0f1419]',
    icon: FaXTwitter,
  },
  {
    key: 'facebook',
    name: 'Vegan Vijay on Facebook',
    url: 'https://facebook.com/vegan.vijay',
    color: 'hover:bg-[#145dbf]',
    icon: FaFacebookF,
  },
  {
    key: 'instagram',
    name: 'Vegan Vijay on Instagram',
    url: 'https://instagram.com/vegan.vijay',
    color: 'hover:bg-[#ff0069]',
    icon: FaInstagram,
  },
  {
    key: 'pph',
    name: 'Vijay Hardaha on PeoplePerHour',
    url: 'https://pph.me/vijayhardaha',
    color: 'hover:bg-[#ff7300]',
    icon: TbWorldWww,
  },
];
