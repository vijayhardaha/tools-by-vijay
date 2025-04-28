import React, { JSX } from "react";

import FooterAbout from "@/components/footer/FooterAbout";
import FooterWidget from "@/components/footer/FooterWidget";
import footerLinks from "@/constants/footerLinks";

/**
 * Top section of the footer containing about information and navigation widgets
 *
 * @returns {JSX.Element} The rendered footer top section.
 */
const FooterTop: React.FC = (): JSX.Element => {
  return (
    <div className="mb-6 flex flex-col gap-6">
      {/* About section - takes 2 columns on large screens */}
      <FooterAbout />

      {/* Footer widgets - each takes 1 column */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        <FooterWidget title="Quick Links" links={footerLinks.quickLinks} />
        <FooterWidget title="Code Tools" links={footerLinks.codeTools} />
        <FooterWidget title="Text Tools" links={footerLinks.textTools} />
        <FooterWidget title="Web Tools" links={footerLinks.webTools} />
      </div>
    </div>
  );
};

export default FooterTop;
