import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

import { getBgColorClass } from "./lib/bgColors";
import { getFontClass } from "./lib/fonts";
import { getTextColorClass } from "./lib/textColors";
import { getAlignmentClass, getRatioClass } from "./lib/utils";

// eslint-disable-next-line no-unused-vars
const MainContent = ({ options, updateOption }) => {
  return (
    <main
      className={cn(
        "absolute top-1/2 left-0 z-10",
        "h-auto w-full",
        "-translate-y-1/2 transform",
        "aspect-9/16",
        getRatioClass(options.cardRatio)
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 h-full w-full",
          getBgColorClass(options.bgType, options.bgColor)
        )}
      >
        <div
          className={cn(
            "flex flex-col items-start justify-center gap-3",
            "h-full w-full",
            "overflow-hidden",
            "p-10",
            getAlignmentClass(options.textAlign),
            getFontClass(options.textFont),
            getTextColorClass(options.textColor)
          )}
          style={{
            fontSize: `${options.textSize}rem`,
            lineHeight: `${options.textLineHeight}`,
            gap: `calc(var(--spacing) * ${options.textLineHeight * 3.5})`,
          }}
        >
          <p>
            “Until one has loved an animal, a part of one’s soul remains
            unawakened.”
          </p>
          <p>— Anatole France</p>
        </div>
      </div>
    </main>
  );
};

MainContent.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default MainContent;
