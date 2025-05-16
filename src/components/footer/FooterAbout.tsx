import Logo from "@/components/header/parts/Logo";
import { Button } from "@/components/ui/button";
import { socialMediaLinks } from "@/constants/socialLinks";

/**
 * Props for the SocialButton component.
 */
type ISocialButtonProps = {
  icon: React.ElementType;
  href: string;
  label: string;
  color?: string;
};

/**
 * Represents a social media link.
 */
type ISocialMediaLink = {
  key: string;
  icon: React.ElementType;
  url: string;
  name: string;
  color?: string;
};

/**
 * Button component for social media links.
 *
 * @param {ISocialButtonProps} props - Props for the SocialButton component.
 * @returns {JSX.Element} The rendered social button.
 */
const SocialButton: React.FC<ISocialButtonProps> = ({ icon: Icon, href, label, color }) => (
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

/**
 * Footer about section component that displays the website logo and description.
 *
 * @returns {JSX.Element} The rendered footer about section.
 */
const FooterAbout: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
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
        {socialMediaLinks.map(({ key, icon, url, name, color }: ISocialMediaLink) => (
          <SocialButton key={key} icon={icon} href={url} label={name} color={color} />
        ))}
      </div>
    </div>
  );
};

export default FooterAbout;
