import cn from "classnames";
import PropTypes from "prop-types";

import IconButton from "@/components/text-story-maker/ui/IconButton";
import TextButton from "@/components/text-story-maker/ui/TextButton";

/**
 * A container component for tools, positioned at the bottom of the screen.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to render inside the tools box.
 * @returns {JSX.Element} The styled tools box component.
 */
const ToolsBox = ({ children }) => {
  return (
    <div className="absolute bottom-0 left-0 z-20 flex h-auto w-full flex-col items-center justify-center gap-4 p-4 py-6">
      {children}
    </div>
  );
};

ToolsBox.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * A wrapper component for toolbars that provides consistent styling.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to render inside the toolbar wrapper.
 * @returns {JSX.Element} The styled toolbar wrapper component.
 */
const ToolBarWrapper = ({ children }) => {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-neutral-900 p-1 text-neutral-100 shadow-sm">
      {children}
    </div>
  );
};

ToolBarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * A button component for toolbars that supports both icon and text types.
 *
 * @param {Object} props - The component props.
 * @param {"icon"|"text"} [props.type="icon"] - The type of the button, either "icon" or "text".
 * @param {React.ElementType} [props.icon] - The icon component to render (used when type is "icon").
 * @param {string} [props.className] - Additional CSS classes to apply to the button.
 * @param {React.ReactNode} [props.children] - The child elements to render inside the button.
 * @param {boolean} [props.active] - Whether the button is in an active state.
 * @param {string} [props.screenReaderText] - Screen reader text for accessibility.
 * @param {Object} [props] - Additional props to pass to the button component.
 * @returns {JSX.Element} The styled toolbar button component.
 */
const ToolBarButton = ({
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
      className={cn("bg-transparent text-neutral-100", className, {
        "bg-neutral-700": active,
      })}
      icon={icon}
      aria-label={screenReaderText}
      {...props}
    >
      {children}
    </Component>
  );
};

ToolBarButton.propTypes = {
  type: PropTypes.oneOf(["icon", "text"]),
  icon: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
  screenReaderText: PropTypes.string,
  props: PropTypes.object,
};

export { ToolsBox, ToolBarWrapper, ToolBarButton };
