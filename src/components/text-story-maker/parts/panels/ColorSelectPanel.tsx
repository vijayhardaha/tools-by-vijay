import { useRef } from "react";

import { Scrollbars } from "react-custom-scrollbars-4";

import { OptionsType } from "@/components/text-story-maker/constants";
import { btnBaseStyles } from "@/components/text-story-maker/constants/btnBaseStyles";
import { ControlBox } from "@/components/text-story-maker/parts/panels/PanelHelper";
import { UpdateOptionsSetsType } from "@/components/text-story-maker/TextStoryMakerTool";
import { cn } from "@/utils/classNameUtils";

/**
 * Props for ColorSelectPanel component.
 * @property {OptionsType} options - Current options object.
 * @property {(key: keyof OptionsType, value: number) => void} updateOption - Function to update an option.
 * @property {string[]} colors - Array of color class names.
 * @property {keyof OptionsType} optionKey - The key in options to update.
 * @property {string} [className] - Additional class names.
 * @property {(idx: number) => void} [onSelect] - Optional callback after selection.
 */
interface ColorSelectPanelProps extends UpdateOptionsSetsType {
  colors: string[];
  optionKey: keyof OptionsType;
  className?: string;
  onSelect?: (idx: number) => void;
}

/**
 * ColorSelectPanel component for selecting a color option.
 *
 * @param {ColorSelectPanelProps} props - Component props.
 * @returns {React.JSX.Element} The rendered ColorSelectPanel component.
 */
const ColorSelectPanel: React.FC<ColorSelectPanelProps> = ({
  options,
  colors,
  updateOption,
  optionKey,
  className,
  onSelect,
}: ColorSelectPanelProps): React.JSX.Element => {
  const scrollbars = useRef<Scrollbars | null>(null);

  return (
    <ControlBox
      className={cn("flex h-52 w-full rounded-xl bg-neutral-900/85 p-2 text-left", className)}
      aria-label={optionKey ? `${optionKey} Options` : "Color Options"}
    >
      <Scrollbars universal className="scrollbar" style={{ width: "100%" }} ref={scrollbars}>
        <div className="grid grid-cols-8" role="radiogroup">
          {colors.map((color: string, idx: number) => (
            <div key={idx} className="flex items-center justify-center p-2">
              <button
                type="button"
                className={cn(btnBaseStyles.join(" "), "size-12 shadow ring-1 ring-white", color, {
                  "ring-4": options[optionKey] === idx,
                })}
                onClick={() => {
                  updateOption(optionKey, idx);
                  onSelect?.(idx);
                }}
                role="radio"
              ></button>
            </div>
          ))}
        </div>
      </Scrollbars>
    </ControlBox>
  );
};

export default ColorSelectPanel;
