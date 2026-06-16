import type { JSX, ReactNode } from 'react';

import { Logo } from '@/components/header/parts/Logo';
import { Button } from '@/components/ui/button';
import { socialMediaLinks } from '@/constants/links';

/**
 * Props for the SocialButton component.
 *
 * @type {SocialButtonProps}
 * @property {ReactNode} icon - The icon component for the social platform
 * @property {string} href - The URL to the social media profile
 * @property {string} label - The accessible label for the button
 * @property {string} [color] - The hover color class for the button
 */
interface SocialButtonProps {
  icon: ReactNode;
  href: string;
  label: string;
  color?: string;
}

/**
 * Represents a social media link with metadata.
 *
 * @type {SocialMediaLinkItem}
 * @property {string} key - The unique key identifier for the link
 * @property {ReactNode} icon - The icon component for the platform
 * @property {string} url - The URL to the social media profile
 * @property {string} name - The display name of the social profile
 * @property {string} [color] - The hover color class for the button
 */
interface SocialMediaLinkItem {
  key: string;
  icon: ReactNode;
  url: string;
  name: string;
  color?: string;
}

/**
 * Button component for social media links.
 *
 * @param {SocialButtonProps} props - Props for the SocialButton component.
 *
 * @returns {JSX.Element} The rendered social button.
 */
const SocialButton = ({ icon, href, label, color }: SocialButtonProps): JSX.Element => (
  <Button
    variant="primary"
    size="icon"
    asChild
    className={`rounded-xl hover:border-transparent hover:text-white ${color}`}
  >
    <a href={href} aria-label={label} title={label} rel="noopener noreferrer" target="_blank">
      <span className="h-4 w-4">{icon}</span>
      <span className="sr-only">{label}</span>
    </a>
  </Button>
);

/**
 * Footer about section component that displays the website logo and description.
 *
 * @returns {JSX.Element} The rendered footer about section.
 */
export function FooterAbout(): JSX.Element {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="space-y-2">
        <div>
          <Logo className="mb-3 h-12" />
        </div>

        <p className="text-foreground text-base">
          Discover a powerful suite of free online developer tools designed to boost your productivity and streamline
          your workflow. Whether you need advanced code optimization, text transformation, or quick utility tools, our
          platform offers fast, reliable, and easy-to-use solutions tailored for developers and creators of all skill
          levels.
        </p>
      </div>

      <div className="flex space-x-2">
        {socialMediaLinks.map(({ key, icon, url, name, color }: SocialMediaLinkItem) => (
          <SocialButton key={key} icon={icon} href={url} label={name} color={color} />
        ))}
      </div>
    </div>
  );
}
