import { useRef } from "react";

import { Scrollbars } from "react-custom-scrollbars-4";

import { btnBaseStyles } from "@/components/text-story-maker/constants/btnBaseStyles";
import { IOptions } from "@/components/text-story-maker/constants/options";
import { ControlBox } from "@/components/text-story-maker/parts/panels/PanelHelper";
import { IUpdateOptionProps } from "@/components/text-story-maker/TextStoryMakerTool";
import { cn } from "@/utils/classNameUtils";

/**
 * Interface for the ColorSelectPanel component props.
 */
interface IColorSelectPanelProps extends IUpdateOptionProps {
  colors: string[];
  optionKey: keyof IOptions;
  className?: string;
  onSelect?: (idx: number) => void;
}

/**
 * ColorSelectPanel component for selecting a color option.
 *
 * @param {IColorSelectPanelProps} props - Component props.
 * @returns {React.JSX.Element} The rendered ColorSelectPanel component.
 */
const ColorSelectPanel: React.FC<IColorSelectPanelProps> = ({
  options,
  colors,
  updateOption,
  optionKey,
  className,
  onSelect,
}: IColorSelectPanelProps): React.JSX.Element => {
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
