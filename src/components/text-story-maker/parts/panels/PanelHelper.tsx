import { ReactNode, ElementType, FunctionComponent } from "react";

import { IconButton, TextButton } from "@/components/text-story-maker/ui";
import { RangeSlider } from "@/components/text-story-maker/ui";
import { cn } from "@/utils/classNameUtils";

interface ControlPanelProps {
  children: ReactNode;
}

const ControlPanel: FunctionComponent<ControlPanelProps> = ({ children }) => {
  return (
    <div className="user-select-none absolute bottom-0 left-0 z-40 w-full space-y-4 p-4 py-6 text-center">
      {children}
    </div>
  );
};

interface ControlBoxProps {
  children: ReactNode;
  className?: string;
}

const ControlBox: FunctionComponent<ControlBoxProps> = ({ children, className }) => {
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

interface ControlBtnProps {
  type?: "icon" | "text";
  icon?: ElementType;
  className?: string;
  children?: ReactNode;
  active?: boolean;
  screenReaderText?: string;
  [key: string]: any;
}

const ControlBtn: FunctionComponent<ControlBtnProps> = ({
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

interface ControlSliderProps {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChangeKey: string;
  valueLabel?: string;
  onChangeHandler: (key: string, value: number[]) => void;
}

const ControlSlider: FunctionComponent<ControlSliderProps> = ({
  label = "",
  min = 0,
  max = 20,
  step = 0.125,
  value,
  onChangeKey,
  valueLabel = "",
  onChangeHandler,
}) => {
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

interface ToggleOptionsProps {
  label: string;
  options?: Record<string, string>;
  selected: string;
  onChangeKey: string;
  onChangeHandler: (key: any, value: any) => void;
  buttonClass?: string;
}

const ToggleOptions: FunctionComponent<ToggleOptionsProps> = ({
  label,
  options = {},
  selected,
  onChangeKey,
  onChangeHandler,
  buttonClass,
}) => {
  const handleClick = (value: string) => {
    onChangeHandler(onChangeKey, value);
  };

  if (!options) return null;

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

interface ToggleColorsProps {
  label: string;
  selected: string;
  onChangeKey: string;
  onChangeHandler: (key: any, value: any) => void;
  buttonClass?: string;
}

const ToggleColors: FunctionComponent<ToggleColorsProps> = ({
  label,
  selected,
  onChangeKey,
  onChangeHandler,
  buttonClass,
}) => {
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
