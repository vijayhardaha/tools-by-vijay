import Link from "next/link";

/**
 * Interface representing the props for the FooterWidget component.
 */
type IFooterWidgetProps = {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
};

/**
 * Footer widget component that displays a list of links with a title
 *
 * @param {IFooterWidgetProps} props - Component props.
 * @returns {React.JSX.Element} The rendered footer widget.
 */
const FooterWidget: React.FC<IFooterWidgetProps> = ({
  title,
  links,
}: IFooterWidgetProps): React.JSX.Element => {
  /**
   * Check if a URL is external (starts with http:// or https://)
   * @param {string} url - The URL to check
   * @returns {boolean} True if the URL is external
   */
  const isExternalLink = (url: string): boolean => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  return (
    <div className="footer-widget">
      <h3 className="mb-2 text-base font-bold">{title}</h3>
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.name} className="m-0 p-0">
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-primary text-sm transition-colors hover:underline"
              {...(isExternalLink(link.href) && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterWidget;
