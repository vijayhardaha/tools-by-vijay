import { cn } from "@/utils/classNameUtils";

/**
 * Props for the Textarea component
 */
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

/**
 * Textarea component for multi-line text input.
 */
function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      className={cn(
        // Layout & spacing
        "flex h-auto min-h-16 w-full rounded-lg px-3 py-2",

        // Font and text
        "font-mono text-sm",

        // Typography
        "placeholder:text-muted-foreground/50",

        // Background & border
        "border-input border bg-transparent",

        // Focus styles
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",

        // Validation states
        "aria-invalid:border-destructive",
        "aria-invalid:ring-destructive/20",

        // Disabled states
        "disabled:cursor-not-allowed disabled:opacity-50",

        // Visual extras
        "transition-[color,box-shadow] outline-none",

        // Data output
        "data-[output]:outline-none data-[output]:focus-visible:ring-0 data-[output]:focus-visible:outline-none",
        "data-[output]:focus-visible:border-input",
        "data-[output]:resize-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
