import PropTypes from "prop-types";

import { btnBaseStyles } from "@/components/text-story-maker/constants/btnBaseStyles";
import { cn } from "@/utils/classNameUtils";

/**
 * A reusable button component for text-based actions.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Additional CSS classes to apply to the button.
 * @param {React.ReactNode} props.children - The content to render inside the button.
 * @param {string} [props.aria-label] - Accessible label for screen readers.
 * @param {Object} [props.props] - Additional props to spread onto the button element.
 * @returns {JSX.Element} The rendered button component.
 */
export const TextButton = ({ className, children, "aria-label": ariaLabel, ...props }) => (
  <button
    type="button"
    className={cn(btnBaseStyles.join(" "), "bg-neutral-800 p-3 px-5 text-white", className)}
    aria-label={ariaLabel || undefined}
    {...props}
  >
    {children}
  </button>
);

TextButton.propTypes = {
  /**
   * Additional CSS classes to apply to the button.
   */
  className: PropTypes.string,
  /**
   * The content to render inside the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * Accessible label for screen readers. Use this when button text alone
   * is not sufficient to describe the action to screen reader users.
   */
  "aria-label": PropTypes.string,
  /**
   * Additional props to spread onto the button element.
   */
  props: PropTypes.object,
};
