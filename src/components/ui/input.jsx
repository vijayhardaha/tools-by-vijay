import * as React from "react";
import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

/**
 * Input component for text entry, file uploads, and other input types.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.type="text"] - Type of input (text, password, email, etc.)
 * @returns {React.ReactElement} Input component
 */
function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Core layout and sizing
        "flex h-10 w-full min-w-0 rounded-lg px-3 py-1",

        // Typography
        "placeholder:text-muted-foreground file:text-foreground text-base file:text-sm file:font-medium md:text-sm",

        // Colors and borders
        "border-input text-foreground border bg-transparent",
        "selection:bg-primary selection:text-primary-foreground",

        // File input styling
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent",

        // Focus and validation states
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",

        // Disabled states
        "disabled:cursor-not-allowed disabled:opacity-50",

        // Transitions and outline
        "transition-[color,box-shadow] outline-none",

        // Data output
        "data-[output]:outline-none data-[output]:focus-visible:ring-0 data-[output]:focus-visible:outline-none",
        "data-[output]:focus-visible:border-input",
        className
      )}
      {...props}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};

export { Input };
