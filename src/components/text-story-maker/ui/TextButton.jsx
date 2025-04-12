import PropTypes from "prop-types";

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
const TextButton = ({ className, children, ...props }) => (
  <button
    type="button"
    className={cn(
      "inline-flex shrink-0 items-center justify-center",
      "text-sm whitespace-nowrap text-white",
      "rounded-lg outline-none focus-visible:outline-none",
      "cursor-pointer active:scale-94 disabled:pointer-events-none disabled:opacity-50",
      "transition-all duration-100 ease-in-out",
      "h-8 min-w-8 p-2 px-3",
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
  // Spread props are not explicitly defined but can include any valid button attributes.
};

export default TextButton;
