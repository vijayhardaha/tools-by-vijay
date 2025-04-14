import { useRef } from "react";

import PropTypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars-4";

import { textColors } from "@/components/text-story-maker/constants";
import { btnBaseStyles } from "@/components/text-story-maker/lib/ui";
import { cn } from "@/utils/classNameUtils";

import { ControlBox } from "./OptionsPanelHelper";

/**
 * TextColorsPanel component for selecting text color.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Current text options.
 * @param {Function} props.updateOption - Function to update the text color option.
 * @returns {JSX.Element} The rendered TextColorsPanel component.
 */
const TextColorsPanel = ({ options, updateOption }) => {
  const scrollbars = useRef();

  return (
    <ControlBox
      className="flex h-52 w-full rounded-xl bg-neutral-800/85 p-2 text-left"
      aria-label="Text Color Options"
    >
      <Scrollbars
        universal
        className="scrollbar"
        style={{ width: "100%" }}
        ref={scrollbars}
      >
        <div
          className="grid grid-cols-8"
          role="radiogroup"
          aria-label="Select text color"
        >
          {textColors.map(({ bg }, colorKey) => (
            <div
              key={colorKey}
              className="flex items-center justify-center p-2"
            >
              <button
                type="button"
                className={cn(
                  btnBaseStyles.join(" "),
                  "size-12 shadow ring-1 ring-white",
                  bg,
                  {
                    "ring-4": options.textColor === colorKey,
                  }
                )}
                onClick={() => {
                  updateOption("textColor", colorKey);
                }}
                aria-label={`Color option ${colorKey + 1}`}
                role="radio"
                aria-checked={options.textColor === colorKey}
              ></button>
            </div>
          ))}
        </div>
      </Scrollbars>
    </ControlBox>
  );
};

TextColorsPanel.propTypes = {
  options: PropTypes.shape({
    textColor: PropTypes.number.isRequired,
  }).isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default TextColorsPanel;
