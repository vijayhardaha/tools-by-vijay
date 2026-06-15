import type { JSX } from 'react';

import Link from 'next/link';

import { cn } from '@/utils/classnames';

/**
 * Interface representing the props for the FooterWidget component.
 *
 * @type {FooterWidgetProps}
 * @property {string} title - The widget section heading
 * @property {{ name: string; href: string }[]} links - Array of navigation links
 */
type FooterWidgetProps = { title: string; links: { name: string; href: string }[] };

/**
 * Footer widget component that displays a list of links with a title
 *
 *  @param {FooterWidgetProps} props - Component props.
 *
 * @returns {JSX.Element} The rendered footer widget.
 */
export default function FooterWidget({ title, links }: FooterWidgetProps): JSX.Element {
  /**
   * Check if a URL is external (starts with http:// or https://)
   *
   * @param {string} url - The URL to check
   *
   * @returns {boolean} True if the URL is external
   */
  const isExternalLink = (url: string): boolean => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  return (
    <nav className={cn('footer-widget')} aria-label={title}>
      <h3 className={cn('mb-2 text-base font-bold')}>{title}</h3>
      <ul className={cn('flex flex-col gap-1')}>
        {links.map((link) => (
          <li key={link.name} className={cn('m-0 p-0')}>
            <Link
              href={link.href}
              className={cn(
                // Text & colors
                'text-muted-foreground hover:text-primary',

                // Typography
                'text-sm',

                // Transitions
                'transition-colors hover:underline',

                // External link
                isExternalLink(link.href) && 'underline'
              )}
              {...(isExternalLink(link.href) && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
