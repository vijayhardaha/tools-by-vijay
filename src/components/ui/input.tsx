import { cn } from "@/utils/classNameUtils";

// Define TypeScript types for the component props
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
}

/**
 * Input component for text entry, file uploads, and other input types.
 *
 * @param {InputProps} props - Component props
 * @returns {React.JSX.Element} Input component
 */
function Input({ className, type = "text", ...props }: IInputProps): React.JSX.Element {
  return (
    <input
      type={type}
      autoComplete="off"
      spellCheck="false"
      data-slot="input"
      className={cn(
        // Core layout and sizing
        "flex h-10 w-full min-w-0 rounded-lg px-3 py-1",

        // Font and text
        "font-mono text-sm file:text-sm file:font-medium",

        // Typography
        "placeholder:text-muted-foreground/50 file:text-foreground",

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

export { Input };
