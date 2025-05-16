import { TbAbc as TextToolIcon } from "react-icons/tb";

import Button from "@/components/text-story-maker/parts/header/HeaderIconBtn";
import { cn } from "@/utils/classNameUtils";

/**
 * Interface for the TextOptionsTool component props.
 */
interface ITextOptionsToolProps {
  activeTool: string;
  setActiveTool: (tool: string) => void;
}

/**
 * A button component for toggling the "Text Options" tool in the text story maker.
 *
 * @param {ITextOptionsToolProps} props - Component props.
 * @returns {React.JSX.Element} The rendered button component.
 */
const TextOptionsTool = ({ activeTool, setActiveTool }: ITextOptionsToolProps) => {
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
