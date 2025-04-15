import PropTypes from "prop-types";

import { btnBaseStyles } from "@/components/text-story-maker/constants/btnBaseStyles";
import { cn } from "@/utils/classNameUtils";

/**
 * IconButton component for rendering a button with an icon.
 *
 * @param {Object} props - Component props.
 * @param {React.ElementType} props.icon - The icon component to render inside the button.
 * @param {string} [props.className] - Additional classes for the button element.
 * @param {string} [props.iconClassName] - Additional classes for the icon element.
 * @param {string} [props.screenReaderText] - Screen reader text for accessibility.
 * @param {string} [props.ariaLabel] - Explicit aria-label text, falls back to screenReaderText if not provided.
 * @param {React.ReactNode} [props.children] - Optional children for accessibility text.
 * @returns {JSX.Element} The rendered IconButton component.
 */
export const IconButton = ({
  icon: IconComponent,
  className,
  iconClassName,
  screenReaderText,
  ariaLabel,
  children,
  ...props
}) => (
  <button
    type="button"
    className={cn(btnBaseStyles.join(" "), "size-12 p-1", className)}
    aria-label={ariaLabel || screenReaderText}
    aria-hidden={!screenReaderText && !ariaLabel && !children}
    {...props}
  >
    {IconComponent && (
      <IconComponent
        className={cn("size-6", iconClassName)}
        aria-hidden="true"
      />
    )}
    {screenReaderText && <span className="sr-only">{screenReaderText}</span>}
    {children}
  </button>
);

IconButton.propTypes = {
  /**
   * The icon component to render inside the button.
   */
  icon: PropTypes.elementType.isRequired,
  /**
   * Additional classes for the button element.
   */
  className: PropTypes.string,
  /**
   * Additional classes for the icon element.
   */
  iconClassName: PropTypes.string,
  /**
   * Screen reader text for accessibility.
   */
  screenReaderText: PropTypes.string,
  /**
   * Explicit aria-label text, falls back to screenReaderText if not provided.
   */
  ariaLabel: PropTypes.string,
  /**
   * Optional children for accessibility text or additional content.
   */
  children: PropTypes.node,
};
