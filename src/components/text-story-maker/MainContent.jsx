import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

import { getFontClass } from "./lib/fonts";
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
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-pink-500 to-rose-500">
        <div
          className={cn(
            "flex flex-col items-start justify-center gap-3",
            "h-full w-full",
            "overflow-hidden",
            "p-10",
            getAlignmentClass(options.textAlign),
            getFontClass(options.textFont)
          )}
          style={{
            fontSize: `${options.textSize}rem`,
            lineHeight: `${options.textLineHeight}`,
            color: options.textColor,
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
