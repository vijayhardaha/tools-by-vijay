import { cn } from "@/lib/utils";

import { getFontClass } from "../lib/utils";

/**
 * ToolInfo Component
 *
 * This component displays information about the "Text Story Maker" tool.
 * It includes the tool's name and a brief description, styled with specific fonts.
 *
 * @returns {JSX.Element} A styled div containing the tool's name and description.
 */
const ToolInfo = () => {
  return (
    <div
      id="tool-info"
      className="absolute right-6 bottom-6 z-50 bg-neutral-900/65 p-2 px-6 text-white"
    >
      <div className="flex flex-col items-start">
        <h1
          className={cn(
            "mb-0 text-lg leading-normal font-semibold tracking-wide",
            getFontClass("bebas_neue")
          )}
        >
          Text Story Maker
        </h1>
        <p
          className={cn(
            "text-accent-foreground -mt-2 text-sm leading-normal",
            getFontClass("caveat")
          )}
        >
          A tool by Vijay Hardaha
        </p>
      </div>
    </div>
  );
};

export default ToolInfo;
