import { ButtonHTMLAttributes, ReactNode } from "react";

import { btnBaseStyles } from "@/components/text-story-maker/constants/btnBaseStyles";
import { cn } from "@/utils/classNameUtils";

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}

/**
 * A reusable button component for text-based actions.
 */
export const TextButton: React.FC<TextButtonProps> = ({
  className,
  children,
  "aria-label": ariaLabel,
  ...props
}: TextButtonProps): React.JSX.Element => {
  return (
    <button
      type="button"
      className={cn(btnBaseStyles.join(" "), "bg-neutral-800 p-3 px-5 text-white", className)}
      aria-label={ariaLabel || undefined}
      {...props}
    >
      {children}
    </button>
  );
};
