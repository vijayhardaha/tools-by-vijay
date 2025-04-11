import { fonts } from "@/components/text-story-maker/constants/fonts";

/**
 * Retrieves the font class name by its key.
 * @param {string} key - The key of the font.
 * @returns {string|null} The class name of the font, or null if not found.
 */
export const getFontClass = (key) => {
  return fonts[key]?.class || null;
};
