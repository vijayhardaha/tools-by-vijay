/**
 * Base styles for buttons used across the application.
 *
 * These styles include layout, typography, interaction states, and transitions.
 * They can be extended or combined with additional styles as needed.
 */
export const btnBaseStyles: string[] = [
  "inline-flex shrink-0 items-center justify-center",
  "relative rounded-xl shadow p-2",
  "text-base font-semibold whitespace-nowrap",
  "cursor-pointer outline-none focus-visible:outline-none",
  "active:scale-95 disabled:pointer-events-none disabled:opacity-50",
  "transition-all duration-200 ease-in-out",
];
