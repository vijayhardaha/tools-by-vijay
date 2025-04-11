import tools from "@/constants/tools";

/**
 * Retrieves a tool object from the tools list based on the provided slug.
 *
 * @param {string} slug - The unique identifier (slug) of the tool to find.
 * @returns {Object|null} The tool object if a match is found, otherwise null.
 */
export const getToolBySlug = (slug) => {
  return tools.find((tool) => tool.slug === slug) || null; // Returns null if the slug doesn't match any tool
};
