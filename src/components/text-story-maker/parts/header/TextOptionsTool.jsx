import PropTypes from "prop-types";
import { TbAbc as TextToolIcon } from "react-icons/tb";

import Button from "@/components/text-story-maker/parts/header/HeaderIconBtn";
import { cn } from "@/lib/utils";

/**
 * A button component for toggling the "Text Options" tool in the text story maker.
 *
 * @param {Object} props - Component props.
 * @param {string} props.activeTool - The currently active tool.
 * @param {Function} props.setActiveTool - Function to set the active tool.
 * @returns {JSX.Element} The rendered button component.
 */
const TextOptionsTool = ({ activeTool, setActiveTool }) => {
  const isActive = activeTool === "text";
  /**
   * Handles the button click to toggle the "text" tool.
   */
  return (
    <Button
      /**
       * Icon to display on the button.
       */
      icon={TextToolIcon}
      /**
       * Screen reader text for accessibility.
       */
      screenReaderText={`${isActive ? "Hide" : "Show"} Text Formatting Options`}
      /**
       * Dynamic className based on the active tool.
       */
      className={cn({
        "bg-accent-foreground text-neutral-900": isActive,
      })}
      /**
       * Click handler to toggle the active tool.
       */
      onClick={() => setActiveTool((prev) => (prev !== "text" ? "text" : ""))}
      /**
       * Aria-pressed attribute to indicate button state
       */
      aria-pressed={isActive}
    />
  );
};

TextOptionsTool.propTypes = {
  activeTool: PropTypes.string.isRequired, // The currently active tool.
  setActiveTool: PropTypes.func.isRequired, // Function to set the active tool.
};

export default TextOptionsTool;
