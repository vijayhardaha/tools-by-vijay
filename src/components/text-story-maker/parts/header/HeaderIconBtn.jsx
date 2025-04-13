import PropTypes from "prop-types";

import { IconButton } from "@/components/text-story-maker/ui";
import { cn } from "@/lib/utils";

/**
 * HeaderIconBtn is a wrapper around the IconButton component, styled specifically for the header.
 *
 * @param {Object} props - The props for the component.
 * @param {React.ElementType} props.icon - The icon to be displayed inside the button.
 * @param {string} [props.className] - Additional class names for the button.
 * @param {Object} [props.props] - Additional props to be passed to the IconButton component.
 * @returns {JSX.Element} The rendered HeaderIconBtn component.
 */
const HeaderIconBtn = ({ icon, className, ...props }) => (
  <IconButton
    /**
     * The icon to render inside the button.
     */
    icon={icon}
    /**
     * Combines default and additional class names for styling.
     */
    className={cn(
      "xs:size-13 size-12 rounded-full bg-neutral-900 text-white",
      className
    )}
    /**
     * Class name for the icon inside the button.
     */
    iconClassName="size-7"
    {...props}
  />
);

HeaderIconBtn.propTypes = {
  icon: PropTypes.elementType.isRequired, // The icon component to render.
  className: PropTypes.string, // Additional class names for the button.
};

export default HeaderIconBtn;
