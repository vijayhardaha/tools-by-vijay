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
      className="absolute right-4 bottom-4 z-50 bg-neutral-900/75 p-3 px-7 text-white"
      style={{
        borderRadius: "2% 6% 5% 4% / 1% 1% 2% 4%",
      }}
    >
      <div className="flex flex-col items-start">
        <h1
          className={cn(
            "mb-0 text-2xl leading-normal font-semibold tracking-wide",
            getFontClass("bebas_neue")
          )}
        >
          Text Story Maker
        </h1>
        <p
          className={cn(
            "text-accent-foreground -mt-2 text-lg leading-normal",
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
