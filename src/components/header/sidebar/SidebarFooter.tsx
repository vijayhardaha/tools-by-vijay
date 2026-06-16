import type { JSX, ReactNode } from 'react';

import { SheetFooter } from '@/components/ui/sheet';
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
 * Social media link styled as a button.
 *
 * @param {SocialButtonProps} props - Component props
 *
 * @returns {JSX.Element} The rendered social link.
 */
const SocialButton = ({ icon, href, label, color }: SocialButtonProps): JSX.Element => (
  <a
    href={href}
    aria-label={label}
    rel="noopener noreferrer"
    target="_blank"
    className={`bg-background border-primary text-primary inline-flex size-10 items-center justify-center rounded-xl border text-sm font-semibold transition-all hover:border-transparent hover:text-white active:scale-[0.98] ${color}`}
  >
    <span className="h-4 w-4">{icon}</span>
    <span className="sr-only">{label}</span>
  </a>
);

/**
 * Footer component for the sidebar with social media links
 *
 * @returns {JSX.Element} The sidebar footer component
 */
export function SidebarFooter(): JSX.Element {
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
