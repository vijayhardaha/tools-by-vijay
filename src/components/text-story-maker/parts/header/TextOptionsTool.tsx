import { TbAbc as TextToolIcon } from "react-icons/tb";

import Button from "@/components/text-story-maker/parts/header/HeaderIconBtn";
import { cn } from "@/utils/classNameUtils";

/**
 * Type definition for the component props.
 */
interface TextOptionsToolProps {
  activeTool: string;
  setActiveTool: (tool: string) => void;
}

/**
 * A button component for toggling the "Text Options" tool in the text story maker.
 */
const TextOptionsTool = ({ activeTool, setActiveTool }: TextOptionsToolProps) => {
  const isActive = activeTool === "text";

  /**
   * Handles the button click to toggle the "text" tool.
   */
  return (
    <Button
      icon={TextToolIcon}
      screenReaderText={`${isActive ? "Hide" : "Show"} Text Formatting Options`}
      className={cn({
        "bg-accent-foreground text-neutral-900": isActive,
      })}
      onClick={() => setActiveTool(isActive ? "" : "text")}
      aria-pressed={isActive}
    />
  );
};

export default TextOptionsTool;
