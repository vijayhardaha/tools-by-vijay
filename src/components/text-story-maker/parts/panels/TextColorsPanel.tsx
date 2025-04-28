import { useRef } from "react";

import { Scrollbars } from "react-custom-scrollbars-4";

import { textColors } from "@/components/text-story-maker/constants";
import { btnBaseStyles } from "@/components/text-story-maker/constants/btnBaseStyles";
import { ControlBox } from "@/components/text-story-maker/parts/panels/PanelHelper";
import { UpdateOptionsSetsType } from "@/components/text-story-maker/TextStoryMakerTool";
import { cn } from "@/utils/classNameUtils";

/**
 * TextColorsPanel component for selecting text color.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Current text options.
 * @param {Function} props.updateOption - Function to update the text color option.
 * @returns {JSX.Element} The rendered TextColorsPanel component.
 */

/**
 * Props for the TextColorsPanel component.
 */
interface TextColorsPanelProps extends UpdateOptionsSetsType {}

const TextColorsPanel: React.FC<TextColorsPanelProps> = ({
  options,
  updateOption,
}: TextColorsPanelProps): React.JSX.Element => {
  const scrollbars = useRef<Scrollbars | null>(null);

  return (
    <ControlBox
      className="flex h-52 w-full rounded-xl bg-neutral-900/85 p-2 text-left"
      aria-label="Text Color Options"
    >
      <Scrollbars universal className="scrollbar" style={{ width: "100%" }} ref={scrollbars}>
        <div className="grid grid-cols-8" role="radiogroup" aria-label="Select text color">
          {textColors.map(({ bg }, colorKey) => (
            <div key={colorKey} className="flex items-center justify-center p-2">
              <button
                type="button"
                className={cn(btnBaseStyles.join(" "), "size-12 shadow ring-1 ring-white", bg, {
                  "ring-4": options.textColor === colorKey,
                })}
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

export default TextColorsPanel;
