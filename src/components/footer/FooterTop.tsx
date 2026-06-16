import type { JSX } from 'react';

import { FooterAbout } from '@/components/footer/FooterAbout';
import { FooterWidget } from '@/components/footer/FooterWidget';
import footerLinks from '@/constants/links';

/**
 * Top section of the footer containing about information and navigation widgets.
 *
 * @returns {JSX.Element} The rendered footer top section.
 */
export function FooterTop(): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[7fr_5fr] md:gap-8">
      {/* About section - 40% on md+, full width below */}
      <FooterAbout />

      {/* Navigation widgets - 60% on md+, full width below */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
        <FooterWidget title="Tools" links={footerLinks.tools} />
        <FooterWidget title="Pages" links={footerLinks.pages} />
      </div>
    </div>
  );
}
