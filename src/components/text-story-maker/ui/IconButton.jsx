import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

/**
 * IconButton component for rendering a button with an icon.
 *
 * @param {Object} props - Component props.
 * @param {React.ElementType} props.icon - The icon component to render inside the button.
 * @param {string} [props.className] - Additional classes for the button element.
 * @param {string} [props.iconClassName] - Additional classes for the icon element.
 * @param {string} [props.srText] - Screen reader text for accessibility.
 * @param {React.ReactNode} [props.children] - Optional children for accessibility text.
 * @returns {JSX.Element} The rendered IconButton component.
 */
const IconButton = ({
  icon: Icon,
  className,
  iconClassName,
  srText,
  children,
  ...props
}) => (
  <button
    type="button"
    className={cn(
      "inline-flex shrink-0 items-center justify-center whitespace-nowrap",
      "text-sm font-semibold",
      "rounded-xl outline-none",
      "cursor-pointer disabled:pointer-events-none disabled:opacity-50",
      "outline-none focus-visible:outline-none",
      "transition-all",
      "h-10 w-10 p-1",
      className
    )}
    aria-label={srText}
    {...props}
  >
    <Icon className={cn("h-5 w-5", iconClassName)} />
    {srText && <span className="sr-only">{srText}</span>}
    {children}
  </button>
);

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  srText: PropTypes.string, // New prop for screen reader text
  children: PropTypes.node, // Allow children for accessibility text
};

export default IconButton;
