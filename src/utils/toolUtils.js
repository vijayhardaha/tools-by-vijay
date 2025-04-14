import { toolIcons } from "@/constants/toolIcons";
import tools from "@/constants/tools";

/**
 * Get all available tools
 * @returns {Array} Array of all tool objects
 */
export const getAllTools = () => tools;

/**
 * Find a tool by its slug
 * @param {string} slug - The slug to search for
 * @returns {Object|null} The tool object if found, null otherwise
 */
export const findToolBySlug = (slug) => {
  return tools.find((tool) => tool.slug === slug) || null;
};

/**
 * Get all tools that belong to a specific category
 * @param {string} category - The category slug to filter by
 * @returns {Array} Array of tool objects in the category
 */
export const getToolsByCategory = (category) => {
  return tools.filter((tool) => tool.category === category);
};

/**
 * Get a list of all unique categories from the tools
 * @returns {Array} Array of unique category slugs
 */
export const getUniqueCategories = () => {
  const categories = new Set(tools.map((tool) => tool.category));
  return [...categories];
};

/**
 * Get related tools based on the same category
 * @param {string} toolSlug - The slug of the current tool
 * @param {number} limit - Maximum number of related tools to return
 * @returns {Array} Array of related tool objects
 */
export const getRelatedTools = (toolSlug, limit = 3) => {
  const currentTool = findToolBySlug(toolSlug);
  if (!currentTool) return [];

  return tools
    .filter(
      (tool) => tool.category === currentTool.category && tool.slug !== toolSlug
    )
    .slice(0, limit);
};

/**
 * Search tools by name or description
 * @param {string} query - The search query
 * @returns {Array} Array of matching tool objects
 */
export const searchTools = (query) => {
  if (!query || query.trim() === "") return [];

  const searchTerm = query.toLowerCase().trim();
  return tools.filter((tool) => {
    return (
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.shortDescription.toLowerCase().includes(searchTerm) ||
      tool.pageDescription.toLowerCase().includes(searchTerm)
    );
  });
};

/**
 * Group tools by their categories
 * @returns {Object} An object with category slugs as keys and arrays of tools as values
 */
export const getToolsByCategories = () => {
  return tools.reduce((grouped, tool) => {
    if (!grouped[tool.category]) {
      grouped[tool.category] = [];
    }
    grouped[tool.category].push(tool);
    return grouped;
  }, {});
};

/**
 * Get the icon for a specific tool
 * @param {string} slug - The tool slug to get the icon for
 * @returns {string|null} The icon for the tool, or null if not found
 */
export const getIconForTool = (slug) => {
  return toolIcons[slug] || null;
};
