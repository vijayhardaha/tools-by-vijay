import PropTypes from "prop-types";

import { IconButton, TextButton } from "@/components/text-story-maker/ui";
import { RangeSlider } from "@/components/text-story-maker/ui";
import { cn } from "@/lib/utils";

/**
 * A container component for positioning tools at the bottom of the screen.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to render inside the container.
 * @returns {JSX.Element} The styled container component for tools.
 */
const ControlPanel = ({ children }) => {
  return (
    <div className="user-select-none absolute bottom-0 left-0 z-40 w-full space-y-4 p-4 py-6 text-center">
      {children}
    </div>
  );
};

ControlPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * A wrapper component for grouping toolbar elements with consistent styling.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to render inside the wrapper.
 * @param {React.ReactNode} props.className - Additional CSS classes to apply to the wrapper.
 * @returns {JSX.Element} The styled wrapper component for toolbars.
 */
const ControlBox = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto inline-flex items-center gap-3 rounded-xl bg-neutral-800 p-1 text-white shadow",
        className
      )}
    >
      {children}
    </div>
  );
};

ControlBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * A versatile button component for toolbars, supporting both icon and text types.
 *
 * @param {Object} props - The component props.
 * @param {"icon"|"text"} [props.type="icon"] - Specifies the button type, either "icon" or "text".
 * @param {React.ElementType} [props.icon] - The icon component to render (used when type is "icon").
 * @param {string} [props.className] - Additional CSS classes to apply to the button.
 * @param {React.ReactNode} [props.children] - The child elements to render inside the button.
 * @param {boolean} [props.active] - Indicates whether the button is in an active state.
 * @param {string} [props.screenReaderText] - Text for screen readers to improve accessibility.
 * @param {Object} [props] - Additional props to pass to the button component.
 * @returns {JSX.Element} The styled button component for toolbars.
 */
const ControlBtn = ({
  type = "icon",
  icon,
  className,
  children,
  active,
  screenReaderText,
  ...props
}) => {
  const Component = type === "icon" ? IconButton : TextButton;

  return (
    <Component
      className={cn("bg-transparent text-white", className, {
        "bg-white text-neutral-900": active,
      })}
      icon={icon}
      aria-label={screenReaderText}
      {...props}
    >
      {children}
    </Component>
  );
};

ControlBtn.propTypes = {
  type: PropTypes.oneOf(["icon", "text"]),
  icon: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
  screenReaderText: PropTypes.string,
  props: PropTypes.object,
};

/**
 * A slider component for adjusting numeric values within a specified range.
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label displayed above the slider.
 * @param {number} [props.min=0] - The minimum value of the slider.
 * @param {number} [props.max=20] - The maximum value of the slider.
 * @param {number} [props.step=0.125] - The step size for the slider.
 * @param {number} props.value - The current value of the slider.
 * @param {string} props.onChangeKey - A key to identify the slider in the change handler.
 * @param {Function} props.onChangeHandler - The function to call when the slider value changes.
 * @returns {JSX.Element} The styled slider component.
 */
const ControlSlider = ({
  label = "",
  min = 0,
  max = 20,
  step = 0.125,
  value,
  onChangeKey,
  onChangeHandler,
}) => {
  const handleChange = (values) => {
    onChangeHandler(onChangeKey, values);
  };

  const sliderId = `slider-${onChangeKey}`;

  return (
    <div className="space-y-1.25">
      {label.length > 0 && (
        <p id={sliderId} className="text-sm font-medium">
          {label}
        </p>
      )}
      <div className="px-0.5">
        <RangeSlider
          step={step}
          min={min}
          max={max}
          values={[value]}
          onChange={handleChange}
          aria-labelledby={sliderId}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={`${label}: ${value}`}
        />
      </div>
    </div>
  );
};

ControlSlider.propTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChangeKey: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

/**
 * A toggle group component for selecting one option from a set of predefined options.
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label displayed above the toggle group.
 * @param {Object} [props.options={}] - The options to display as toggle buttons, where keys are labels and values are identifiers.
 * @param {string} props.selected - The currently selected option's identifier.
 * @param {string} props.onChangeKey - A key to identify the toggle group in the change handler.
 * @param {Function} props.onChangeHandler - The function to call when the selected option changes.
 * @param {string} [props.buttonClass] - Additional CSS classes to apply to the toggle buttons.
 * @returns {JSX.Element} The styled toggle group component.
 */
const ToggleOptions = ({
  label,
  options = {},
  selected,
  onChangeKey,
  onChangeHandler,
  buttonClass,
}) => {
  const handleClick = (value) => {
    onChangeHandler(onChangeKey, value);
  };

  if (!options) return;

  const groupId = `toggle-${onChangeKey}`;

  return (
    <div className="flex items-center justify-between gap-2">
      <p className="text-sm font-medium" id={groupId}>
        {label}
      </p>
      <div className="flex gap-1.5" role="radiogroup" aria-labelledby={groupId}>
        {Object.entries(options).map(([text, value]) => (
          <ControlBtn
            type="text"
            key={value}
            active={selected === value}
            onClick={() => handleClick(value)}
            className={cn(
              "rounded-lg bg-neutral-800 py-2 text-xs font-semibold shadow",
              buttonClass
            )}
            role="radio"
            aria-checked={selected === value}
            aria-label={`${text} option for ${label}`}
          >
            {text}
          </ControlBtn>
        ))}
      </div>
    </div>
  );
};

ToggleOptions.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.object,
  selected: PropTypes.string.isRequired,
  onChangeKey: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  buttonClass: PropTypes.string,
};

/**
 * A toggle group component for selecting one option from a set of predefined options.
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label displayed above the toggle group.
 * @param {string} props.selected - The currently selected option's identifier.
 * @param {string} props.onChangeKey - A key to identify the toggle group in the change handler.
 * @param {Function} props.onChangeHandler - The function to call when the selected option changes.
 * @param {string} [props.buttonClass] - Additional CSS classes to apply to the toggle buttons.
 * @returns {JSX.Element} The styled toggle group component.
 */
const ToggleColors = ({
  label,
  selected,
  onChangeKey,
  onChangeHandler,
  buttonClass,
}) => {
  const handleClick = (value) => {
    onChangeHandler(onChangeKey, value);
  };

  const options = {
    Transparent: "",
    White: "white",
    Black: "black",
  };

  const groupId = `toggle-colors-${onChangeKey}`;

  return (
    <div className="flex items-center justify-between gap-2">
      <p className="text-sm font-medium" id={groupId}>
        {label}
      </p>
      <div className="flex gap-1" role="radiogroup" aria-labelledby={groupId}>
        {Object.entries(options).map(([text, value]) => (
          <ControlBtn
            type="text"
            key={value}
            onClick={() => handleClick(value)}
            className={cn(
              "size-7 rounded-lg p-0 shadow",
              buttonClass,
              value === "white" && "bg-white text-neutral-900",
              value === "black" && "bg-black text-white",
              value === "" && "bg-transparent-checker text-white",
              selected === value && "relative z-10 ring-2 ring-amber-400"
            )}
            role="radio"
            aria-checked={selected === value}
            aria-label={`${text} ${label}`}
          >
            <span className="sr-only">{text}</span>
          </ControlBtn>
        ))}
      </div>
    </div>
  );
};

ToggleColors.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.object,
  selected: PropTypes.string.isRequired,
  onChangeKey: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  buttonClass: PropTypes.string,
};

export {
  ControlPanel,
  ControlBox,
  ControlBtn,
  ControlSlider,
  ToggleOptions,
  ToggleColors,
};
