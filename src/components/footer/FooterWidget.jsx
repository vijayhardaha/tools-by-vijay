import Link from "next/link";

import PropTypes from "prop-types";

/**
 * Footer widget component that displays a list of links with a title
 *
 * @param {Object} props - Component props.
 * @param {string} props.title - Title of the widget.
 * @param {Array} props.links - Array of link objects with name and href properties.
 * @returns {JSX.Element} The rendered footer widget.
 */
const FooterWidget = ({ title, links }) => {
  /**
   * Check if a URL is external (starts with http:// or https://)
   * @param {string} url - The URL to check
   * @returns {boolean} True if the URL is external
   */
  const isExternalLink = (url) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  return (
    <div className="footer-widget mb-8">
      <h3 className="mb-2 text-base font-bold">{title}</h3>
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.name} className="m-0 p-0">
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
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

FooterWidget.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FooterWidget;
