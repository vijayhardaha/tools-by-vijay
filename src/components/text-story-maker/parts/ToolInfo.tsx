import { getFontClassByName } from "@/components/text-story-maker/utils/styleUtils";
import { cn } from "@/utils/classNameUtils";

/**
 * ToolInfo Component
 *
 * This component displays information about the "Text Story Maker" tool.
 * It includes the tool's name and a brief description, styled with specific fonts.
 *
 * @returns {JSX.Element} A styled div containing the tool's name and description.
 */
const ToolInfo: React.FC = (): React.JSX.Element => {
  return (
    <div
      id="tool-info"
      className="absolute right-4 bottom-4 z-50 bg-neutral-900/75 p-6 py-2 text-white"
      aria-label="About this tool"
      role="complementary"
    >
      <div className="flex flex-col items-start">
        <h1
          className={cn(
            "mb-0 text-2xl leading-normal font-semibold tracking-wide",
            getFontClassByName("nerko_one") as string
          )}
        >
          Text Story Maker
        </h1>
        <p
          className={cn(
            "text-accent-foreground -mt-2 text-lg leading-normal",
            getFontClassByName("caveat") as string
          )}
        >
          A tool by Vijay Hardaha
        </p>
      </div>
    </div>
  );
};

export default ToolInfo;
