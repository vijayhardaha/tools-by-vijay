import { useState } from "react";

import cn from "classnames";
import PropTypes from "prop-types";
import { PiTextAa as AaIcon } from "react-icons/pi";
import { PiTextAlignCenter as AlignCenterIcon } from "react-icons/pi";
import { PiTextAlignLeft as AlignLeftIcon } from "react-icons/pi";
import { PiTextAlignRight as AlignRightIcon } from "react-icons/pi";
import { PiMagicWand as TextBgIcon } from "react-icons/pi";

import ToolBarWrapper from "@/components/text-story-maker/toolbars/ToolBarWrapper";
import IconButton from "@/components/text-story-maker/ui/IconButton";
import TextButton from "@/components/text-story-maker/ui/TextButton";

const Button = ({
  type = "icon",
  icon,
  children,
  active,
  srText,
  ...props
}) => {
  const Component = type === "icon" ? IconButton : TextButton;
  return (
    <Component
      className={cn("bg-transparent text-white", { "bg-white/10": active })}
      icon={icon}
      aria-label={srText}
      {...props}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["icon", "text"]),
  icon: PropTypes.elementType,
  children: PropTypes.node,
  active: PropTypes.bool,
  srText: PropTypes.string,
};

/**
 * TextToolBars component renders a toolbar with various text editing options.
 *
 * @component
 * @returns {JSX.Element} The rendered toolbar component.
 */
const TextToolBars = ({ options, updateOption }) => {
  const [activeTool, setActiveTool] = useState("font-family");

  const handleAlignmentChange = () => {
    const newAlignment =
      options.textAlign === "center"
        ? "left"
        : options.textAlign === "left"
          ? "right"
          : "center";
    updateOption({ textAlign: newAlignment });
  };

  const getAlignmentIcon = () => {
    switch (options.textAlign) {
      case "left":
        return AlignLeftIcon;
      case "right":
        return AlignRightIcon;
      default:
        return AlignCenterIcon;
    }
  };

  return (
    <>
      <ToolBarWrapper>
        <Button
          icon={AaIcon}
          active={activeTool === "font-family"}
          onClick={() => setActiveTool("font-family")}
          srText="Font Family Tool"
        />
        <Button
          type="text"
          active={activeTool === "text-color"}
          onClick={() => setActiveTool("text-color")}
          srText="Text Color Tool"
        >
          <div className="h-5 w-5 rounded-full bg-[conic-gradient(from_0deg,_red,_yellow,_lime,_cyan,_blue,_magenta,_red)] shadow-lg"></div>
        </Button>
        <Button
          icon={getAlignmentIcon()}
          onClick={() => {
            handleAlignmentChange();
          }}
          srText="Text Alignment Tool"
        />
        <Button
          icon={TextBgIcon}
          active={activeTool === "text-background"}
          onClick={() => setActiveTool("text-background")}
          srText="Text Background Tool"
        />
      </ToolBarWrapper>
    </>
  );
};

TextToolBars.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default TextToolBars;
