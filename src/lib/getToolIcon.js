import { toolIcons } from "@/constants/toolIcons";

/**
 * Retrieves the icon associated with a given tool slug.
 *
 * @param {string} slug - The unique identifier for the tool.
 * @returns {string|null} The icon corresponding to the provided slug, or `null` if the slug does not exist in the icon map.
 */
export const getToolIcon = (slug) => {
  return toolIcons[slug] || null; // Returns null if the slug doesn't exist in the icon map
};
