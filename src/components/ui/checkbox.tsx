'use client';

import type { JSX, ChangeEvent, ReactNode, LabelHTMLAttributes } from 'react';
import { useState } from 'react';

import { LuCheck as CheckIcon } from 'react-icons/lu';

import { cn } from '@/utils/classnames';

/**
 * Props for the Checkbox component.
 *
 * @type {CheckboxProps}
 * @property {string} [className] - Additional CSS classes
 * @property {boolean} [checked] - Whether the checkbox is checked
 * @property {(checked: boolean) => void} [onCheckedChange] - Callback when checked state changes
 * @property {boolean} [disabled] - Whether the checkbox is disabled
 * @property {boolean} [required] - Whether the checkbox is required
 * @property {string} [id] - The unique ID for the checkbox input
 * @property {ReactNode} [children] - Label content displayed next to the checkbox
 */
interface CheckboxProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  children?: ReactNode;
}

/**
 * Checkbox component for selecting options.
 *
 * @param {CheckboxProps} props - The component props
 *
 * @returns {JSX.Element} The rendered checkbox component
 */
export default function Checkbox({
  className = '',
  children,
  checked: controlledChecked,
  onCheckedChange,
  disabled,
  required,
  id,
  ...props
}: CheckboxProps): JSX.Element {
  const [internalChecked, setInternalChecked] = useState(controlledChecked || false);

  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;

  /**
   * Handles the checkbox state change event.
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
      data-slot="checkbox"
      className={cn(
        // Layout & base appearance
        'inline-flex items-center',

        // Colors & background
        'text-foreground',

        // Disabled state
        'disabled:cursor-not-allowed disabled:opacity-50',

        // Transition & outline
        'transition-shadow outline-none',

        className
      )}
      data-checked={isChecked}
      {...props}
    >
      <input
        type="checkbox"
        id={id}
        className="hidden cursor-pointer"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        required={required}
      />
      <span
        data-slot="checkbox-indicator"
        className={cn(
          'flex h-4 w-4 cursor-pointer items-center justify-center rounded border',
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
