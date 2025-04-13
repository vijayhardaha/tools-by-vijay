import PropTypes from "prop-types";

import { btnBaseStyles } from "@/components/text-story-maker/lib/ui";
import { cn } from "@/lib/utils";

/**
 * IconButton component for rendering a button with an icon.
 *
 * @param {Object} props - Component props.
 * @param {React.ElementType} props.icon - The icon component to render inside the button.
 * @param {string} [props.className] - Additional classes for the button element.
 * @param {string} [props.iconClassName] - Additional classes for the icon element.
 * @param {string} [props.screenReaderText] - Screen reader text for accessibility.
 * @param {React.ReactNode} [props.children] - Optional children for accessibility text.
 * @returns {JSX.Element} The rendered IconButton component.
 */
export const IconButton = ({
  icon: IconComponent,
  className,
  iconClassName,
  screenReaderText,
  children,
  ...props
}) => (
  <button
    type="button"
    className={cn(btnBaseStyles.join(" "), "size-13 p-1", className)}
    aria-label={screenReaderText}
    {...props}
  >
    <IconComponent className={cn("size-7", iconClassName)} />
    {screenReaderText && <span className="sr-only">{screenReaderText}</span>}
    {children}
  </button>
);

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  screenReaderText: PropTypes.string,
  children: PropTypes.node,
};
