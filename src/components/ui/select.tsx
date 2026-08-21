'use client';

import type { JSX, KeyboardEvent, HTMLAttributes } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { LuCheck as CheckIcon, LuChevronDown as ChevronDownIcon } from 'react-icons/lu';

import { cn } from '@/utils/classnames';

/**
 * Option type for the Select component.
 *
 * @type {SelectOption}
 * @property {string} value - The value of the option
 * @property {string} label - The display label for the option
 * @property {boolean} [disabled] - Whether the option is disabled
 */
interface SelectOption extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * Props for the Select component.
 *
 * @type {SelectProps}
 * @property {string} [value] - Controlled selected value
 * @property {string} [defaultValue] - Default selected value
 * @property {(value: string) => void} [onValueChange] - Callback when selection changes
 * @property {boolean} [disabled] - Whether the select is disabled
 * @property {SelectOption[]} options - Available options to choose from
 * @property {string} [placeholder] - Placeholder text when no option is selected
 * @property {string} [className] - Additional CSS classes
 * @property {'default' | 'sm'} [size] - The size variant of the select
 * @property {string} [id] - Applied to the trigger button so `<Label htmlFor>` associates correctly
 */
interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  size?: 'default' | 'sm';
  id?: string;
}

/**
 * Simplified Select component that handles all dropdown functionality internally
 *
 * @param {SelectProps} props - The component props
 *
 * @returns {JSX.Element} The rendered select component
 */
export function Select({
  id,
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  options = [],
  placeholder = 'Select an option',
  className = '',
  size = 'default',
  ...props
}: SelectProps): JSX.Element {
  const [localValue, setLocalValue] = useState<string>(defaultValue || value || '');
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Derive the effective value during render (fixes set-state-in-effect)
  const selectedValue = value !== undefined ? value : localValue;

  // Get the label of the selected option
  const selectedLabel = options.find((opt) => opt.value === selectedValue)?.label || '';

  const handleValueChange = useCallback(
    (newValue: string) => {
      // Always update internal state regardless of controlled/uncontrolled mode
      setLocalValue(newValue);

      // Call the callback if provided
      onValueChange?.(newValue);
      setOpen(false);
    },
    [onValueChange]
  );

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  // Indexes of selectable (non-disabled) options
  const enabledIndexes = options.map((opt, index) => (opt.disabled ? -1 : index)).filter((index) => index !== -1);

  /**
   * Opens the dropdown and positions the keyboard highlight on the current selection.
   */
  const openDropdown = useCallback((): void => {
    if (disabled) return;
    setOpen(true);
    const selectedIndex = options.findIndex((opt) => opt.value === selectedValue);
    setActiveIndex(selectedIndex !== -1 ? selectedIndex : (enabledIndexes[0] ?? -1));
  }, [disabled, options, selectedValue, enabledIndexes]);

  /**
   * Handles keyboard navigation on the select trigger.
   *
   * Supports ArrowUp/Down, Home/End, Enter, Space, and Escape (WCAG listbox).
   *
   * @param {KeyboardEvent} event - The keyboard event.
   */
  const handleTriggerKeyDown = (event: KeyboardEvent): void => {
    if (disabled) return;

    const stepActive = (direction: 1 | -1): void => {
      const current = enabledIndexes.indexOf(activeIndex);
      const next = enabledIndexes[current + direction];
      setActiveIndex(
        next ?? (direction === 1 ? (enabledIndexes[0] ?? -1) : (enabledIndexes[enabledIndexes.length - 1] ?? -1))
      );
    };

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!open) {
          openDropdown();
        } else {
          stepActive(1);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!open) {
          openDropdown();
        } else {
          stepActive(-1);
        }
        break;
      case 'Home':
        event.preventDefault();
        if (open) setActiveIndex(enabledIndexes[0] ?? -1);
        break;
      case 'End':
        event.preventDefault();
        if (open) setActiveIndex(enabledIndexes[enabledIndexes.length - 1] ?? -1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (open) {
          if (activeIndex !== -1 && !options[activeIndex]?.disabled) {
            handleValueChange(options[activeIndex].value);
          }
        } else {
          openDropdown();
        }
        break;
      case 'Escape':
        event.preventDefault();
        setOpen(false);
        break;
      default:
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  return (
    <div className="relative" data-slot="select" ref={selectRef} {...props}>
      {/* Select Trigger */}
      <button
        type="button"
        id={id}
        onClick={open ? () => setOpen(false) : openDropdown}
        onKeyDown={handleTriggerKeyDown}
        data-slot="select-trigger"
        data-size={size}
        disabled={disabled}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls="select-listbox"
        className={cn(
          // Layout & flex
          'flex w-fit items-center justify-between gap-2',

          // Spacing
          'rounded-xs border bg-transparent px-3 py-2 text-sm whitespace-nowrap',

          // Colors & shadows
          'border-input text-foreground shadow-xs',

          // Focus & validation
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:border-destructive aria-invalid:ring-destructive/20',

          // Transitions
          'transition-[color,box-shadow] outline-none',

          // States
          'disabled:cursor-not-allowed disabled:opacity-50',

          // Data attributes
          'data-slot=select-trigger',
          'data-placeholder:text-muted-foreground',
          'data-[size=default]:h-10 data-[size=sm]:h-8',

          // Slot-based styles
          '*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2',

          // SVG
          '[&_svg:not([class*="text-"])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
          className
        )}
      >
        <span data-slot="select-value">{selectedValue ? selectedLabel : placeholder}</span>
        <span className="pointer-events-none">
          <ChevronDownIcon className="size-4 opacity-50" />
        </span>
      </button>

      {/* Dropdown Content */}
      {open && (
        <div
          id="select-listbox"
          role="listbox"
          aria-activedescendant={activeIndex >= 0 ? `select-option-${activeIndex}` : undefined}
          data-slot="select-content"
          className={cn(
            // Position
            'absolute left-0 z-50 mt-1',

            // Sizing
            'max-h-60 w-auto min-w-32',

            // Appearance
            'bg-popover text-popover-foreground border-input rounded-xs border shadow-md',

            // Overflow
            'overflow-x-hidden overflow-y-auto'
          )}
        >
          <div className="flex flex-col gap-0.5 p-1">
            {options.map((option, index) => {
              const isSelected = selectedValue === option.value;
              const isDisabled = option.disabled || false;

              return (
                <div
                  key={option.value}
                  id={`select-option-${index}`}
                  role="option"
                  tabIndex={-1}
                  aria-selected={isSelected}
                  aria-disabled={isDisabled}
                  data-slot="select-item"
                  data-selected={isSelected}
                  className={cn(
                    // Layout & flex
                    'relative flex w-full items-center gap-2',

                    // Spacing
                    'rounded-xs py-2 pr-8 pl-2 text-sm',

                    // Outline
                    'outline-hidden select-none',

                    // Hover & focus
                    'hover:bg-muted focus:bg-muted',

                    // Disabled
                    'aria-disabled:opacity-50',

                    // SVG
                    '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
                    '[&_svg:not([class*="text-"])]:text-muted-foreground',

                    // Selected
                    isSelected && 'bg-muted',

                    // Keyboard highlight
                    activeIndex === index && !isSelected && 'bg-muted ring-ring ring-1 ring-inset',

                    // Cursor
                    isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                  )}
                  onMouseEnter={() => {
                    if (!isDisabled) {
                      setActiveIndex(index);
                    }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!isDisabled) {
                      handleValueChange(option.value);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (!isDisabled && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      handleValueChange(option.value);
                    }
                  }}
                >
                  <span className="absolute right-2 flex size-3.5 items-center justify-center">
                    {isSelected && <CheckIcon className="size-4" />}
                  </span>
                  <span className="whitespace-nowrap">{option.label}</span>
                </div>
              );
            })}

            {options.length === 0 && (
              <div className="text-muted-foreground px-2 py-1.5 text-xs">No options available</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
