import FooterAbout from "@/components/footer/FooterAbout";
import FooterWidget from "@/components/footer/FooterWidget";
import Box from "../ui/box";
import footerLinks from "@/constants/footerLinks";

/**
 * Top section of the footer containing about information and navigation widgets
 *
 * @returns {JSX.Element} The rendered footer top section.
 */
const FooterTop = () => {
  return (
    <Box flex={true} col={true}>
      {/* About section - takes 2 columns on large screens */}
      <div className="mb-8">
        <FooterAbout />
      </div>

      {/* Footer widgets - each takes 1 column */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <FooterWidget title="Quick Links" links={footerLinks.quickLinks} />
        <FooterWidget title="Code Tools" links={footerLinks.codeTools} />
        <FooterWidget title="Text Tools" links={footerLinks.textTools} />
      </div>
    </Box>
  );
};

export default FooterTop;
