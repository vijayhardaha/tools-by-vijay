"use client";

import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import { SheetFooter } from "@/components/ui/sheet";
import { socialMediaLinks } from "@/constants/socialLinks";

/**
 * SocialButton component for social media links
 * @param {Object} props - Component props
 * @param {ElementType} props.icon - Icon component to display
 * @param {string} props.href - URL to navigate to
 * @param {string} props.label - Accessible label for the button
 * @param {string} props.color - Color for the button
 * @returns {JSX.Element} A button with social media icon
 */
const SocialButton = ({ icon: Icon, href, label, color }) => (
  <Button
    variant="outline"
    size="icon"
    asChild
    className={`rounded-lg hover:border-transparent hover:text-white ${color}`}
  >
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
  color: PropTypes.string,
};

/**
 * Footer component for the sidebar with social media links
 * @returns {JSX.Element} The sidebar footer component
 */
const SidebarFooter = () => (
  <SheetFooter>
    <div className="flex justify-center space-x-2">
      {socialMediaLinks.map(({ key, icon, url, name, color }) => (
        <SocialButton
          key={key}
          icon={icon}
          href={url}
          label={name}
          color={color}
        />
      ))}
    </div>
  </SheetFooter>
);

export default SidebarFooter;
