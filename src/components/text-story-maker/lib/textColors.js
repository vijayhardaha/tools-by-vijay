import { textColors } from "@/components/text-story-maker/constants/textColors";

/**
 * Retrieves the CSS class for a given text color value and key.
 *
 * @param {string} value - The key representing the text color in the `textColors` object.
 * @param {string} [key="text"] - The specific property to retrieve from the text color object (default is "text").
 * @returns {string} - The CSS class for the specified text color and key, or an empty string if not found.
 */
export function getTextColorClass(value, key = "text") {
  if (textColors[value] && textColors[value][key]) {
    return textColors[value][key];
  }

  return "";
}
