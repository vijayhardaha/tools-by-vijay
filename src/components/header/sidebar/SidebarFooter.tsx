import type { JSX, ElementType } from 'react';

import { Button } from '@/components/ui/button';
import { SheetFooter } from '@/components/ui/sheet';
import { socialMediaLinks } from '@/constants/social-links';

/**
 * Props for the SocialButton component.
 *
 * @type {SocialButtonProps}
 * @property {ElementType} icon - The icon component for the social platform
 * @property {string} href - The URL to the social media profile
 * @property {string} label - The accessible label for the button
 * @property {string} [color] - The hover color class for the button
 */
interface SocialButtonProps {
  icon: ElementType;
  href: string;
  label: string;
  color?: string;
}

/**
 * SocialButton component for social media links
 *
 * @param {SocialButtonProps} props - Component props
 *
 * @returns {JSX.Element} A button with social media icon
 */
const SocialButton = ({ icon: Icon, href, label, color }: SocialButtonProps): JSX.Element => (
  <Button
    variant="outline"
    size="icon"
    asChild
    className={`rounded-xl hover:border-transparent hover:text-white ${color}`}
  >
    <a href={href} aria-label={label} rel="noopener noreferrer" target="_blank">
      <Icon className="h-4 w-4" />
      <span className="sr-only">{label}</span>
    </a>
  </Button>
);

/**
 * Footer component for the sidebar with social media links
 *
 * @returns {JSX.Element} The sidebar footer component
 */
export default function SidebarFooter(): JSX.Element {
  return (
    <SheetFooter>
      <div className="flex justify-start space-x-2">
        {socialMediaLinks.map(({ key, icon, url, name, color }) => (
          <SocialButton key={key} icon={icon} href={url} label={name} color={color} />
        ))}
      </div>
    </SheetFooter>
  );
}
