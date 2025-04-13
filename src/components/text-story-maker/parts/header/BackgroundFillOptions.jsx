import PropTypes from "prop-types";
import { PiPaintBrushBroadFill as BgToolIcon } from "react-icons/pi";

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
const BackgroundFillOptions = ({ activeTool, setActiveTool }) => {
  return (
    <Button
      icon={BgToolIcon}
      screenReaderText="Background Fill Options"
      className={cn({
        "bg-accent-foreground text-neutral-900": activeTool === "background",
      })}
      onClick={() =>
        setActiveTool((prev) => (prev !== "background" ? "background" : ""))
      }
    />
  );
};

BackgroundFillOptions.propTypes = {
  activeTool: PropTypes.string.isRequired,
  setActiveTool: PropTypes.func.isRequired,
};

export default BackgroundFillOptions;
