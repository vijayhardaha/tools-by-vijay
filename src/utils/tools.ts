import type { ReactElement } from 'react';

import { toolIcons } from '@/constants/tool-icons';
import tools from '@/constants/tools';
import type { Tool } from '@/constants/tools';

/**
 * Find a tool by its slug
 *
 * @param {string} slug - The slug to search for
 *
 * @returns {Tool | null} The tool object if found, null otherwise
 */
export const findToolBySlug = (slug: string): Tool | null => {
  return tools.find((tool) => tool.slug === slug) || null;
};

/**
 * Get all tools that belong to a specific category
 *
 * @param {string} category - The category slug to filter by
 *
 * @returns {Tool[]} Array of tool objects in the category
 */
export const getToolsByCategory = (category: string): Tool[] => {
  return tools.filter((tool) => tool.category === category);
};

/**
 * Group tools by their categories
 *
 * @returns {Record<string, Tool[]>} An object with category slugs as keys and arrays of tools as values
 */
export const getToolsByCategories = (): Record<string, Tool[]> => {
  return tools.reduce(
    (grouped, tool) => {
      if (!grouped[tool.category]) {
        grouped[tool.category] = [];
      }
      grouped[tool.category].push(tool);
      return grouped;
    },
    {} as Record<string, Tool[]>
  );
};

/**
 * Get the icon for a specific tool
 *
 * @param {string} slug - The tool slug to get the icon for
 *
 * @returns {ReactElement | null} The icon for the tool, or null if not found
 */
export const getToolIcon = (slug: string): ReactElement | null => {
  return toolIcons[slug] || null;
};
