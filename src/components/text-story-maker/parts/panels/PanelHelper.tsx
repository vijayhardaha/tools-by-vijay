import { IconButton, TextButton } from "@/components/text-story-maker/ui";
import { RangeSlider } from "@/components/text-story-maker/ui";
import { cn } from "@/utils/classNameUtils";

/**
 * Interface for the ControlPanel component props.
 */
interface IControlPanelProps {
  children: React.ReactNode;
}

/**
 * ControlPanel component wraps the panel controls at the bottom of the UI.
 *
 * @param {IControlPanelProps} props - Component props.
 * @returns {React.JSX.Element} The rendered ControlPanel component.
 */
const ControlPanel: React.FC<IControlPanelProps> = ({
  children,
}: IControlPanelProps): React.JSX.Element => {
  return (
    <div className="user-select-none absolute bottom-0 left-0 z-40 w-full space-y-4 p-4 py-6 text-center">
      {children}
    </div>
  );
};

/**
 * Interface for the ControlBox component props.
 */
interface IControlBoxProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * ControlBox component wraps a group of controls in a styled box.
 *
 * @param {IControlBoxProps} props - Component props.
 * @returns {React.JSX.Element} The rendered ControlPanel component.
 */
const ControlBox: React.FC<IControlBoxProps> = ({
  children,
  className,
}: IControlBoxProps): React.JSX.Element => {
  return (
    <div
      className={cn(
        "mx-auto inline-flex items-center gap-3 rounded-xl bg-neutral-900 p-1 text-white shadow",
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Interface for the ControlBtn component props.
 */
interface IControlBtnProps {
  type?: "icon" | "text";
  icon?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
  screenReaderText?: string;
  [key: string]: any;
}

/**
 * ControlBtn component renders a button for panel controls, either icon or text.
 *
 * @param {IControlBtnProps} props - Component props.
 * @returns {React.JSX.Element} The rendered ControlPanel component.
 */
const ControlBtn: React.FC<IControlBtnProps> = ({
  type = "icon",
  icon,
  className,
  children,
  active,
  screenReaderText,
  ...props
}: IControlBtnProps): React.JSX.Element => {
  const Component = type === "icon" ? IconButton : TextButton;

  return (
    <Component
      className={cn("bg-transparent text-white", className, {
        "bg-white text-neutral-900": active as boolean,
      })}
      icon={icon || (() => null)}
      aria-label={screenReaderText}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * Interface for the ControlSlider component props.
 */
interface IControlSliderProps {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChangeKey: string;
  valueLabel?: string;
  onChangeHandler: (key: string, value: number[]) => void;
}

/**
 * ControlSlider component renders a slider for numeric options.
 *
 * @param {IControlSliderProps} props - Component props.
 * @returns {React.JSX.Element} The rendered ControlPanel component.
 */
const ControlSlider: React.FC<IControlSliderProps> = ({
  label = "",
  min = 0,
  max = 20,
  step = 0.125,
  value,
  onChangeKey,
  valueLabel = "",
  onChangeHandler,
}: IControlSliderProps): React.JSX.Element => {
  const handleChange = (values: number[]) => {
    onChangeHandler(onChangeKey, values);
  };

  return (
    <RangeSlider
      step={step}
      min={min}
      max={max}
      values={[value]}
      onChange={handleChange}
      label={label}
      valueLabel={valueLabel}
    />
  );
};

/**
 * Interface for the ToggleOptions component props.
 */
interface IToggleOptionsProps {
  label: string;
  options?: Record<string, string>;
  selected: string;
  onChangeKey: string;
  onChangeHandler: (key: any, value: any) => void;
  buttonClass?: string;
}

/**
 * ToggleOptions component renders a group of toggle buttons for selecting options.
 *
 * @param {IToggleOptionsProps} props - Component props.
 * @returns {React.JSX.Element} The rendered ControlPanel component.
 */
const ToggleOptions: React.FC<IToggleOptionsProps> = ({
  label,
  options = {},
  selected,
  onChangeKey,
  onChangeHandler,
  buttonClass,
}: IToggleOptionsProps): React.JSX.Element => {
  const handleClick = (value: string) => {
    onChangeHandler(onChangeKey, value);
  };

  if (!options) return <></>;

  const groupId = `toggle-${onChangeKey}`;

  return (
    <div className="flex items-center justify-between gap-2">
      <p className="text-sm font-medium" id={groupId}>
        {label}
      </p>
      <div className="flex gap-2" role="radiogroup" aria-labelledby={groupId}>
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

/**
 * Interface for the ToggleColors component props.
 */
interface IToggleColorsProps {
  label: string;
  selected: string;
  onChangeKey: string;
  onChangeHandler: (key: any, value: any) => void;
  buttonClass?: string;
}

/**
 * ToggleColors component renders a group of color toggle buttons.
 *
 * @param {IToggleColorsProps} props - Component props.
 * @returns {React.JSX.Element} The rendered ControlPanel component.
 */
const ToggleColors: React.FC<IToggleColorsProps> = ({
  label,
  selected,
  onChangeKey,
  onChangeHandler,
  buttonClass,
}: IToggleColorsProps): React.JSX.Element => {
  const handleClick = (value: string) => {
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
      <div className="flex gap-2" role="radiogroup" aria-labelledby={groupId}>
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

export { ControlPanel, ControlBox, ControlBtn, ControlSlider, ToggleOptions, ToggleColors };
