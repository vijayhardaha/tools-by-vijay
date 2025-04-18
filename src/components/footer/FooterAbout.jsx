import PropTypes from "prop-types";

import Logo from "@/components/header/parts/Logo";
import { Button } from "@/components/ui/button";
import { socialMediaLinks } from "@/constants/socialLinks";

const SocialButton = ({ icon: Icon, href, label, color }) => (
  <Button
    variant="primary"
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
 * Footer about section component that displays the website logo and description
 *
 * @returns {JSX.Element} The rendered footer about section.
 */
const FooterAbout = () => {
  return (
    <div className="flex flex-col gap-2 md:mb-12 md:flex-row md:items-end md:gap-4">
      <div className="space-y-2">
        <div>
          <Logo className="mb-3 h-12" />
        </div>

        <p className="text-foreground text-sm">
          A collection of free online tools built to make developer’s lives easier. From code
          optimization to text transformation, find the tools you need for your projects.
        </p>
      </div>

      <div className="flex space-x-2">
        {socialMediaLinks.map(({ key, icon, url, name, color }) => (
          <SocialButton key={key} icon={icon} href={url} label={name} color={color} />
        ))}
      </div>
    </div>
  );
};

export default FooterAbout;
