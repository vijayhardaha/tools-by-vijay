import type { JSX } from 'react';

import { FooterAbout } from '@/components/footer/FooterAbout';
import { FooterWidget } from '@/components/footer/FooterWidget';
import footerLinks from '@/constants/footer-links';

/**
 * Top section of the footer containing about information and navigation widgets
 *
 * @returns {JSX.Element} The rendered footer top section.
 */
export function FooterTop(): JSX.Element {
  return (
    <div className="mb-6 flex flex-col gap-4 md:gap-6">
      {/* About section - takes 2 columns on large screens */}
      <FooterAbout />

      {/* Footer widgets - each takes 1 column */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
        <FooterWidget title="Dev Tools" links={footerLinks.devTools} />
        <FooterWidget title="Code Minifiers" links={footerLinks.minifiersTools} />
        <FooterWidget title="Text Tools" links={footerLinks.textTools} />
        <FooterWidget title="Security" links={footerLinks.securityTools} />
      </div>
    </div>
  );
}
