import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

import { getRatioClass } from "./lib/utils";

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
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-pink-500 to-rose-500"></div>
    </main>
  );
};

MainContent.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default MainContent;
