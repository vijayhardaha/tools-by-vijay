import { bgColors } from "../constants/bgColors";

/**
 * Utility function to get color class based on type and value.
 * @param {string} type - The type of color (e.g., 'solid', 'gradient', 'mesh').
 * @param {string} value - The specific color key (e.g., 'color1', 'color2').
 * @returns {string} - The corresponding color class or an empty string if not found.
 */
export function getBgColorClass(type, value) {
  if (bgColors[type] && bgColors[type][value]) {
    return bgColors[type][value];
  }
  return "";
}
