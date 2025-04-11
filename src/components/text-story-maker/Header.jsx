"use client";

import PropTypes from "prop-types";
import { PiHouseLine as HomeIcon } from "react-icons/pi";
import { PiTextAa as AaIcon } from "react-icons/pi";
import { PiResize as SizeIcon } from "react-icons/pi";
import { PiPaintBucket as BgFillIcon } from "react-icons/pi";
import { PiDotsThreeVertical as OptionsIcon } from "react-icons/pi";
import { PiCheckCircleFill as CheckFillIcon } from "react-icons/pi";

import { cardRatios } from "@/components/text-story-maker/constants/cardRatios";
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from "@/components/text-story-maker/ui/Dropdown";
import IconButton from "@/components/text-story-maker/ui/IconButton";
import { cn } from "@/lib/utils";

/**
 * Button component that wraps the IconButton with predefined styles.
 *
 * @param {Object} props - Component props.
 * @param {React.ElementType} props.icon - The icon to be displayed inside the button.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button = ({ icon, ...props }) => (
  <IconButton icon={icon} className="bg-white text-black" {...props} />
);

Button.propTypes = {
  icon: PropTypes.elementType.isRequired,
};

/**
 * DropDownAction component for rendering individual dropdown options.
 *
 * @param {Object} props - Component props.
 * @param {string} props.label - The label for the button.
 * @param {boolean} props.active - Whether the option is active.
 * @returns {JSX.Element} The rendered DropDownAction component.
 */
const DropDownAction = ({ label, active, ...props }) => (
  <button
    type="button"
    className={cn(
      "inline-flex shrink-0 items-center justify-start whitespace-nowrap",
      "text-xs font-medium",
      "w-full rounded-lg",
      "cursor-pointer disabled:pointer-events-none disabled:opacity-50",
      "outline-none focus-visible:outline-none",
      "transition-all",
      "p-2",
      "text-black hover:bg-gray-100"
    )}
    {...props}
  >
    {label}
    {active && <CheckFillIcon className="ml-1 text-green-500" />}
  </button>
);

DropDownAction.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

/**
 * Header component for the text story maker.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Options for the text story maker.
 * @param {Function} props.updateOption - Function to update options.
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = ({ options, updateOption, setToolbarVisible }) => {
  const handleSizeSelect = (size) => {
    updateOption("cardRatio", size);
  };

  return (
    <header className="absolute top-0 left-0 z-20 h-auto w-full bg-white/20 p-2.5 text-white backdrop-blur-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center">
          <div className="relative">
            <Button icon={HomeIcon} srText="Go to Home" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <div className="relative">
            <Button
              icon={AaIcon}
              srText="Text Options"
              onClick={() =>
                setToolbarVisible((prev) => (prev !== "text" ? "text" : ""))
              }
            />
          </div>
          <div className="relative">
            <Button
              icon={BgFillIcon}
              srText="Background Fill Options"
              onClick={() =>
                setToolbarVisible((prev) =>
                  prev !== "background" ? "background" : ""
                )
              }
            />
          </div>
          <div className="relative">
            <Dropdown>
              {({ isOpen, toggleDropdown }) => (
                <>
                  <DropdownTrigger onClick={toggleDropdown}>
                    <IconButton
                      icon={SizeIcon}
                      className="bg-white text-black"
                      srText="Size Options"
                    />
                  </DropdownTrigger>
                  <DropdownContent isOpen={isOpen}>
                    {cardRatios.map(({ value, label }) => (
                      <DropDownAction
                        key={value}
                        label={label}
                        active={options.cardRatio === value}
                        onClick={() => handleSizeSelect(value)}
                      />
                    ))}
                  </DropdownContent>
                </>
              )}
            </Dropdown>
          </div>
          <Dropdown>
            {({ isOpen, toggleDropdown }) => (
              <>
                <DropdownTrigger onClick={toggleDropdown}>
                  <IconButton
                    icon={OptionsIcon}
                    className="bg-white text-black"
                    srText="More Options"
                  />
                </DropdownTrigger>
                <DropdownContent isOpen={isOpen}>
                  <DropDownAction label="Option 1" />
                  <DropDownAction label="Option 2" />
                  <DropDownAction label="Option 3" />
                </DropdownContent>
              </>
            )}
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
  toolbarVisible: PropTypes.string.isRequired,
  setToolbarVisible: PropTypes.func.isRequired,
};

export default Header;
