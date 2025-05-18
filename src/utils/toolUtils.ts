import { toolIcons } from "@/constants/toolIcons";
import tools from "@/constants/tools";
import { ITool } from "@/types";

/**
 * Get all available tools
 * @returns {ITool[]} Array of all tool objects
 */
export const getAllTools = (): ITool[] => tools;

/**
 * Find a tool by its slug
 * @param {string} slug - The slug to search for
 * @returns {ITool | null} The tool object if found, null otherwise
 */
export const findToolBySlug = (slug: string): ITool | null => {
  return tools.find((tool) => tool.slug === slug) || null;
};

/**
 * Get all tools that belong to a specific category
 * @param {string} category - The category slug to filter by
 * @returns {ITool[]} Array of tool objects in the category
 */
export const getToolsByCategory = (category: string): ITool[] => {
  return tools.filter((tool) => tool.category === category);
};

/**
 * Get a list of all unique categories from the tools
 * @returns {string[]} Array of unique category slugs
 */
export const getUniqueCategories = (): string[] => {
  const categories = new Set(tools.map((tool) => tool.category));
  return Array.from(categories);
};

/**
 * Get related tools based on the same category
 * @param {string} toolSlug - The slug of the current tool
 * @param {number} limit - Maximum number of related tools to return
 * @returns {ITool[]} Array of related tool objects
 */
export const getRelatedTools = (toolSlug: string, limit = 3): ITool[] => {
  const currentTool = findToolBySlug(toolSlug);
  if (!currentTool) return [];

  return tools
    .filter((tool) => tool.category === currentTool.category && tool.slug !== toolSlug)
    .slice(0, limit);
};

/**
 * Search tools by name or description
 * @param {string} query - The search query
 * @returns {ITool[]} Array of matching tool objects
 */
export const searchTools = (query: string): ITool[] => {
  if (!query || query.trim() === "") return [];

  const searchTerm = query.toLowerCase().trim();
  return tools.filter((tool) => {
    return (
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.shortDescription.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm)
    );
  });
};

/**
 * Group tools by their categories
 * @returns {Record<string, ITool[]>} An object with category slugs as keys and arrays of tools as values
 */
export const getToolsByCategories = (): Record<string, ITool[]> => {
  return tools.reduce(
    (grouped, tool) => {
      if (!grouped[tool.category]) {
        grouped[tool.category] = [];
      }
      grouped[tool.category].push(tool);
      return grouped;
    },
    {} as Record<string, ITool[]>
  );
};

/**
 * Get the icon for a specific tool
 * @param {string} slug - The tool slug to get the icon for
 * @returns {React.ReactElement | null} The icon for the tool, or null if not found
 */
export const getIconForTool = (slug: string): React.ReactElement | null => {
  return toolIcons[slug] || null;
};
