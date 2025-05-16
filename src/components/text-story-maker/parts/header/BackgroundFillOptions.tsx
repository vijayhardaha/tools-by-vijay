import React from "react";

import { PiPaintBrushBroadFill as BgToolIcon } from "react-icons/pi";

import Button from "@/components/text-story-maker/parts/header/HeaderIconBtn";
import { cn } from "@/utils/classNameUtils";

interface BackgroundFillOptionsProps {
  activeTool: string;
  setActiveTool: (tool: string) => void;
}

/**
 * A button component for toggling the "Background Fill Options" tool in the text story maker.
 *
 * @param {BackgroundFillOptionsProps} props - Component props.
 * @returns {React.JSX.Element} The rendered button component.
 */
const BackgroundFillOptions: React.FC<BackgroundFillOptionsProps> = ({
  activeTool,
  setActiveTool,
}: BackgroundFillOptionsProps): React.JSX.Element => {
  const isActive = activeTool === "background";

  /**
   * Handles the button click to toggle the "background" tool.
   */
  return (
    <Button
      icon={BgToolIcon}
      screenReaderText={`${isActive ? "Hide" : "Show"} Background Fill Options`}
      className={cn({
        "bg-accent-foreground text-neutral-900": isActive,
      })}
      onClick={() => setActiveTool(isActive ? "" : "background")}
      aria-pressed={isActive}
    />
  );
};

export default BackgroundFillOptions;
