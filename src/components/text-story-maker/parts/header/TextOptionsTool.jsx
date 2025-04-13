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
  return (
    <Button
      icon={TextToolIcon}
      screenReaderText="Text Options"
      className={cn({
        "bg-accent-foreground text-neutral-900": activeTool === "text",
      })}
      onClick={() => setActiveTool((prev) => (prev !== "text" ? "text" : ""))}
    />
  );
};

TextOptionsTool.propTypes = {
  activeTool: PropTypes.string.isRequired,
  setActiveTool: PropTypes.func.isRequired,
};

export default TextOptionsTool;
