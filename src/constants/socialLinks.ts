import { FaFacebookF, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

import { ISocialMediaLink } from "@/types";

/**
 * A list of social media links with metadata and icons.
 * @type {ISocialMediaLink[]}
 */
export const socialMediaLinks: ISocialMediaLink[] = [
  {
    key: "github",
    name: "Vijay Hardaha on GitHub",
    url: "https://github.com/vijayhardaha",
    color: "hover:bg-[#24292e]",
    icon: FaGithub,
  },
  {
    key: "twitter",
    name: "Vijay Hardaha on X (Twitter)",
    url: "https://x.com/vijayhardaha",
    color: "hover:bg-[#0f1419]",
    icon: FaXTwitter,
  },
  {
    key: "facebook",
    name: "Vegan Vijay on Facebook",
    url: "https://facebook.com/vegan.vijay",
    color: "hover:bg-[#145dbf]",
    icon: FaFacebookF,
  },
  {
    key: "instagram",
    name: "Vegan Vijay on Instagram",
    url: "https://instagram.com/vegan.vijay",
    color: "hover:bg-[#ff0069]",
    icon: FaInstagram,
  },
  {
    key: "pph",
    name: "Vijay Hardaha on PeoplePerHour",
    url: "https://pph.me/vijayhardaha",
    color: "hover:bg-[#ff7300]",
    icon: TbWorldWww,
  },
];
