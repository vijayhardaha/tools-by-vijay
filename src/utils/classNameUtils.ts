import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes
 * to avoid conflicts and redundancies.
 * @param {...(string | string[] | boolean | undefined | { [key: string]: boolean })[]} inputs - The class names to combine.
 * @returns {string} - A single string of combined and merged class names.
 */
export function cn(
  ...inputs: (string | string[] | boolean | undefined | { [key: string]: boolean })[]
): string {
  return twMerge(clsx(inputs));
}
