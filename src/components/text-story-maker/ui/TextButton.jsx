import PropTypes from "prop-types";

import { btnBaseStyles } from "@/components/text-story-maker/lib/ui";
import { cn } from "@/lib/utils";

/**
 * A reusable button component for text-based actions.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Additional CSS classes to apply to the button.
 * @param {React.ReactNode} props.children - The content to render inside the button.
 * @param {Object} [props.props] - Additional props to spread onto the button element.
 * @returns {JSX.Element} The rendered button component.
 */
export const TextButton = ({ className, children, ...props }) => (
  <button
    type="button"
    className={cn(
      btnBaseStyles.join(" "),
      "bg-neutral-700 text-white",
      "p-3 px-5",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

TextButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
