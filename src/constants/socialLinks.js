import {
  FaFacebookF,
  FaXTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

/**
 * @typedef {Object} SocialMediaLink
 * @property {string} name - The display name of the social media platform.
 * @property {string} key - A unique key identifier for the platform.
 * @property {string} url - The URL to the user's profile on the platform.
 * @property {string} color - The brand color of the platform in hexadecimal format.
 * @property {React.ComponentType} icon - The React component for the platform's icon.
 */

/**
 * A list of social media links with metadata and icons.
 * @type {SocialMediaLink[]}
 */
export const socialMediaLinks = [
  {
    key: "github",
    name: "GitHub",
    url: "https://github.com/vijayhardaha",
    color: "hover:bg-[#24292e]",
    icon: FaGithub,
  },
  {
    key: "twitter",
    name: "Twitter",
    url: "https://x.com/vijayhardaha",
    color: "hover:bg-[#1a91da]",
    icon: FaXTwitter,
  },
  {
    key: "facebook",
    name: "Facebook",
    url: "https://facebook.com/vegan.vijay",
    color: "hover:bg-[#145dbf]",
    icon: FaFacebookF,
  },
  {
    key: "instagram",
    name: "Instagram",
    url: "https://instagram.com/vegan.vijay",
    color: "hover:bg-[#d62445]",
    icon: FaInstagram,
  },
  {
    key: "pph",
    name: "PeoplePerHour",
    url: "https://pph.me/vijayhardaha",
    color: "hover:bg-[#e65c00]",
    icon: TbWorldWww,
  },
];
