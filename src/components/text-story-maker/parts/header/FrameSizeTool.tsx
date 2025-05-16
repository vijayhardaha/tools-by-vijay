import { PiCheckCircleFill as CheckFillIcon } from "react-icons/pi";
import { TbFrame as FrameToolIcon } from "react-icons/tb";

import { cardRatios } from "@/components/text-story-maker/constants/cardRatios";
import Button from "@/components/text-story-maker/parts/header/HeaderIconBtn";
import { IUpdateOptionProps } from "@/components/text-story-maker/TextStoryMakerTool";
import { Dropdown, DropdownTrigger, DropdownContent } from "@/components/text-story-maker/ui";
import { cn } from "@/utils/classNameUtils";

/**
 * Interface for the FrameSizeTool component props.
 */
interface IFrameSizeToolProps extends IUpdateOptionProps {}

/**
 * FrameSizeTool provides a dropdown menu to select frame size options.
 *
 * @param {IFrameSizeToolProps} props - Component props.
 * @returns {React.JSX.Element} The rendered FrameSizeTool component.
 */
const FrameSizeTool: React.FC<IFrameSizeToolProps> = ({
  options,
  updateOption,
}: IFrameSizeToolProps): React.JSX.Element => {
  /**
   * Handles the selection of a card ratio.
   *
   * @param {string} value - The selected card ratio value.
   */
  const handleCardRatioChange = (value: string) => {
    updateOption("cardRatio", value);
  };

  return (
    <Dropdown>
      {({ isOpen, toggleDropdown }) => (
        <>
          <DropdownTrigger onClick={toggleDropdown}>
            <Button
              icon={FrameToolIcon}
              screenReaderText="Frame Size Options"
              aria-expanded={isOpen}
              aria-haspopup="true"
            />
          </DropdownTrigger>
          <DropdownContent isOpen={isOpen}>
            {cardRatios.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => handleCardRatioChange(value)}
                className={cn(
                  "inline-flex shrink-0 items-center justify-start",
                  "w-full py-2 text-base whitespace-nowrap",
                  "cursor-pointer disabled:pointer-events-none disabled:opacity-50",
                  "outline-none focus-visible:outline-none"
                )}
                aria-label={`Select ${label} frame ratio`}
              >
                {label}
                {options.cardRatio === value && (
                  <CheckFillIcon
                    className="text-accent-foreground ml-2 size-6"
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </DropdownContent>
        </>
      )}
    </Dropdown>
  );
};

export default FrameSizeTool;
