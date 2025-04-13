import PropTypes from "prop-types";

import { IconButton, TextButton } from "@/components/text-story-maker/ui";
import { cn } from "@/lib/utils";

/**
 * A container component for positioning tools at the bottom of the screen.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to render inside the container.
 * @returns {JSX.Element} The styled container component for tools.
 */
const PanelContainer = ({ children }) => {
  return (
    <div className="absolute bottom-0 left-0 z-40 w-full space-y-4 p-4 py-6 text-center">
      {children}
    </div>
  );
};

PanelContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * A wrapper component for grouping toolbar elements with consistent styling.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to render inside the wrapper.
 * @param {React.ReactNode} props.className - Additional CSS classes to apply to the wrapper.
 * @returns {JSX.Element} The styled wrapper component for toolbars.
 */
const BoxContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto inline-flex items-center gap-3 rounded-xl bg-neutral-800 p-1 text-white shadow",
        className
      )}
    >
      {children}
    </div>
  );
};

BoxContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * A versatile button component for toolbars, supporting both icon and text types.
 *
 * @param {Object} props - The component props.
 * @param {"icon"|"text"} [props.type="icon"] - Specifies the button type, either "icon" or "text".
 * @param {React.ElementType} [props.icon] - The icon component to render (used when type is "icon").
 * @param {string} [props.className] - Additional CSS classes to apply to the button.
 * @param {React.ReactNode} [props.children] - The child elements to render inside the button.
 * @param {boolean} [props.active] - Indicates whether the button is in an active state.
 * @param {string} [props.screenReaderText] - Text for screen readers to improve accessibility.
 * @param {Object} [props] - Additional props to pass to the button component.
 * @returns {JSX.Element} The styled button component for toolbars.
 */
const BoxButton = ({
  type = "icon",
  icon,
  className,
  children,
  active,
  screenReaderText,
  ...props
}) => {
  const Component = type === "icon" ? IconButton : TextButton;

  return (
    <Component
      className={cn("bg-transparent text-white", className, {
        "bg-white text-neutral-900": active,
      })}
      icon={icon}
      aria-label={screenReaderText}
      {...props}
    >
      {children}
    </Component>
  );
};

BoxButton.propTypes = {
  type: PropTypes.oneOf(["icon", "text"]),
  icon: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
  screenReaderText: PropTypes.string,
  props: PropTypes.object,
};

export { PanelContainer, BoxContainer, BoxButton };
