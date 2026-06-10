import type { JSX, ElementType } from 'react';

import Logo from '@/components/header/parts/Logo';
import { Button } from '@/components/ui/button';
import { socialMediaLinks } from '@/constants/socialLinks';

/**
 * Props for the SocialButton component.
 */
type SocialButtonProps = { icon: ElementType; href: string; label: string; color?: string };

/**
 * Represents a social media link.
 */
type SocialMediaLinkItem = { key: string; icon: ElementType; url: string; name: string; color?: string };

/**
 * Button component for social media links.
 *
 * @param {SocialButtonProps} props - Props for the SocialButton component.
 *
 * @returns {JSX.Element} The rendered social button.
 */
const SocialButton = ({ icon: Icon, href, label, color }: SocialButtonProps): JSX.Element => (
  <Button
    variant="primary"
    size="icon"
    asChild
    className={`rounded-lg hover:border-transparent hover:text-white ${color}`}
  >
    <a href={href} aria-label={label} title={label} rel="noopener noreferrer" target="_blank">
      <Icon className="h-4 w-4" />
      <span className="sr-only">{label}</span>
    </a>
  </Button>
);

/**
 * Footer about section component that displays the website logo and description.
 *
 * @returns {JSX.Element} The rendered footer about section.
 */
const FooterAbout = (): JSX.Element => {
  return (
    <div className="mb-6 flex flex-col gap-4">
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
};

export default FooterAbout;
