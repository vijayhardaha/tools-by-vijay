import React from "react";

import { btnBaseStyles } from "@/components/text-story-maker/constants/btnBaseStyles";
import { cn } from "@/utils/classNameUtils";

interface IconButtonProps {
  icon: React.ElementType;
  className?: string;
  iconClassName?: string;
  screenReaderText?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * IconButton component for rendering a button with an icon.
 *
 * @param {IconButtonProps} props - Component props.
 * @returns {React.JSX.Element} The rendered IconButton component.
 */
export const IconButton: React.FC<IconButtonProps> = ({
  icon: IconComponent,
  className,
  iconClassName,
  screenReaderText,
  ariaLabel,
  children,
  ...props
}: IconButtonProps): React.JSX.Element => (
  <button
    type="button"
    className={cn(btnBaseStyles.join(" "), "size-12 p-1", className)}
    aria-label={ariaLabel || screenReaderText}
    aria-hidden={!screenReaderText && !ariaLabel && !children}
    {...props}
  >
    {IconComponent && <IconComponent className={cn("size-6", iconClassName)} aria-hidden="true" />}
    {screenReaderText && <span className="sr-only">{screenReaderText}</span>}
    {children}
  </button>
);
