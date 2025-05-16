import { Button } from "@/components/ui/button";
import { SheetFooter } from "@/components/ui/sheet";
import { socialMediaLinks } from "@/constants/socialLinks";

/**
 * Props for the SocialButton component
 */
interface ISocialButtonProps {
  icon: React.ElementType;
  href: string;
  label: string;
  color?: string;
}

/**
 * SocialButton component for social media links
 * @param {SocialButtonProps} props - Component props
 * @returns {React.JSX.Element} A button with social media icon
 */
const SocialButton = ({
  icon: Icon,
  href,
  label,
  color,
}: ISocialButtonProps): React.JSX.Element => (
  <Button
    variant="outline"
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
 * Footer component for the sidebar with social media links
 * @returns {React.JSX.Element} The sidebar footer component
 */
const SidebarFooter = (): React.JSX.Element => (
  <SheetFooter>
    <div className="flex justify-center space-x-2">
      {socialMediaLinks.map(({ key, icon, url, name, color }) => (
        <SocialButton key={key} icon={icon} href={url} label={name} color={color} />
      ))}
    </div>
  </SheetFooter>
);

export default SidebarFooter;
