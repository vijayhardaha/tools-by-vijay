"use client";

import PropTypes from "prop-types";
import {
  FaFacebookF,
  FaXTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import { SheetFooter } from "@/components/ui/sheet";

/**
 * SocialButton component for social media links
 * @param {Object} props - Component props
 * @param {ElementType} props.icon - Icon component to display
 * @param {string} props.href - URL to navigate to
 * @param {string} props.label - Accessible label for the button
 * @returns {JSX.Element} A button with social media icon
 */
const SocialButton = ({ icon: Icon, href, label }) => (
  <Button variant="outline" size="icon" asChild className="rounded-lg">
    <a href={href} aria-label={label} rel="noopener noreferrer" target="_blank">
      <Icon className="h-4 w-4" />
      <span className="sr-only">{label}</span>
    </a>
  </Button>
);

SocialButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

/**
 * Footer component for the sidebar with social media links
 * @returns {JSX.Element} The sidebar footer component
 */
const SidebarFooter = () => (
  <SheetFooter className="border-border border-t p-4">
    <div className="flex justify-center space-x-2">
      <SocialButton
        icon={FaGithub}
        href="https://github.com/vijayhardaha"
        label="GitHub"
      />
      <SocialButton
        icon={FaXTwitter}
        href="https://x.com/vijayhardaha"
        label="Twitter"
      />
      <SocialButton
        icon={FaFacebookF}
        href="https://facebook.com/vegan.vijay"
        label="Facebook"
      />
      <SocialButton
        icon={FaInstagram}
        href="https://instagram.com/vegan.vijay"
        label="Instagram"
      />
      <SocialButton
        icon={TbWorldWww}
        href="https://pph.me/vijayhardaha"
        label="PeoplePerHour"
      />
    </div>
  </SheetFooter>
);

export default SidebarFooter;
