import cn from "classnames";
import PropTypes from "prop-types";

import IconButton from "@/components/text-story-maker/ui/IconButton";
import TextButton from "@/components/text-story-maker/ui/TextButton";

/**
 * A wrapper component for toolbars that provides consistent styling.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to render inside the toolbar wrapper.
 * @returns {JSX.Element} The styled toolbar wrapper component.
 */
const ToolBarWrapper = ({ children }) => {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-[#222222] p-1 text-white">
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
 * @param {React.ElementType} [props.className] - Additional CSS classes to apply to the button.
 * @param {React.ReactNode} [props.children] - The child elements to render inside the button.
 * @param {boolean} [props.active] - Whether the button is in an active state.
 * @param {string} [props.srText] - Screen reader text for accessibility.
 * @param {Object} [props.props] - Additional props to pass to the button component.
 * @returns {JSX.Element} The styled toolbar button component.
 */
const ToolBarButton = ({
  type = "icon",
  icon,
  className,
  children,
  active,
  srText,
  ...props
}) => {
  const Component = type === "icon" ? IconButton : TextButton;

  return (
    <Component
      className={cn("bg-transparent text-white", className, {
        "bg-white/10": active,
      })}
      icon={icon}
      aria-label={srText}
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
  srText: PropTypes.string,
  props: PropTypes.object,
};

export { ToolBarWrapper, ToolBarButton };
