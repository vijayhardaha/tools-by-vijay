import PropTypes from "prop-types";
import { PiPaintBrushBroadFill as BgToolIcon } from "react-icons/pi";

import Button from "@/components/text-story-maker/parts/header/HeaderIconBtn";
import { cn } from "@/utils/classNameUtils";

/**
 * A button component for toggling the "Background Fill Options" tool in the text story maker.
 *
 * @param {Object} props - Component props.
 * @param {string} props.activeTool - The currently active tool.
 * @param {Function} props.setActiveTool - Function to set the active tool.
 * @returns {JSX.Element} The rendered button component.
 */
const BackgroundFillOptions = ({ activeTool, setActiveTool }) => {
  const isActive = activeTool === "background";
  /**
   * Handles the button click to toggle the "background" tool.
   */
  return (
    <Button
      /**
       * Icon to display on the button.
       */
      icon={BgToolIcon}
      /**
       * Screen reader text for accessibility.
       */
      screenReaderText={`${isActive ? "Hide" : "Show"} Background Fill Options`}
      /**
       * Dynamic className based on the active tool.
       */
      className={cn({
        "bg-accent-foreground text-neutral-900": isActive,
      })}
      /**
       * Click handler to toggle the active tool.
       */
      onClick={() => setActiveTool((prev) => (prev !== "background" ? "background" : ""))}
      /**
       * Aria-pressed attribute to indicate button state
       */
      aria-pressed={isActive}
    />
  );
};

BackgroundFillOptions.propTypes = {
  activeTool: PropTypes.string.isRequired, // The currently active tool.
  setActiveTool: PropTypes.func.isRequired, // Function to set the active tool.
};

export default BackgroundFillOptions;
