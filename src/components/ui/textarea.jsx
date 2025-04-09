import * as React from "react";
import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

/**
 * Textarea component for multi-line text input.
 *
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS classes to apply to the textarea
 * @param {React.TextareaHTMLAttributes<HTMLTextAreaElement>} props.props - All other props are passed to the textarea element
 * @returns {JSX.Element} A styled textarea element
 */
function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex h-auto min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

Textarea.propTypes = {
  /**
   * Additional CSS classes to apply to the textarea
   */
  className: PropTypes.string,
};

export { Textarea };
