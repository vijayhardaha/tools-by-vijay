'use client';

import type { JSX, ChangeEvent, ReactNode, LabelHTMLAttributes } from 'react';
import { useState } from 'react';

import { LuCheck as CheckIcon } from 'react-icons/lu';

import { cn } from '@/utils/classnames';

export { RadioBox };

/**
 * Props for the RadioBox component.
 *
 * @type {RadioBoxProps}
 * @property {string} [className] - Additional CSS classes
 * @property {boolean} [checked] - Whether the radio is selected
 * @property {(checked: boolean) => void} [onCheckedChange] - Callback when selection changes
 * @property {boolean} [disabled] - Whether the radio is disabled
 * @property {boolean} [required] - Whether the radio is required
 * @property {string} [id] - The unique ID for the radio input
 * @property {string} [name] - The name attribute for the radio group
 * @property {ReactNode} [children] - Label content displayed next to the radio
 */
interface RadioBoxProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  name?: string;
  children?: ReactNode;
}

/**
 * RadioBox component for selecting a single option from a group.
 *
 * @param {RadioBoxProps} props - The component props
 *
 * @returns {JSX.Element} The rendered radio box component
 */
export default function RadioBox({
  className,
  children,
  checked: controlledChecked,
  onCheckedChange,
  disabled,
  required,
  id,
  name,
  ...props
}: RadioBoxProps): JSX.Element {
  const [internalChecked, setInternalChecked] = useState(controlledChecked || false);

  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;

  /**
   * Handles the radio box state change event
   *
   * @param {ChangeEvent<HTMLInputElement>} event - The change event
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(event.target.checked);
    }
    if (onCheckedChange) {
      onCheckedChange(event.target.checked);
    }
  };

  return (
    <label
      data-slot="radiobox"
      className={cn(
        // Layout & base appearance
        'inline-flex items-center',

        // Colors
        'text-foreground',

        // Disabled
        'disabled:cursor-not-allowed disabled:opacity-50',

        // Transitions
        'transition-shadow outline-none',

        className
      )}
      data-checked={isChecked}
      {...props}
    >
      <input
        type="radio"
        id={id}
        name={name}
        className="hidden cursor-pointer"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        required={required}
      />
      <span
        data-slot="radiobox-indicator"
        className={cn(
          'flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border',
          isChecked ? 'bg-primary border-primary text-primary-foreground' : 'border-input'
        )}
      >
        {isChecked && <CheckIcon className="h-3 w-3" />}
      </span>
      {children && (
        <span className="ml-2 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {children}
        </span>
      )}
    </label>
  );
}
