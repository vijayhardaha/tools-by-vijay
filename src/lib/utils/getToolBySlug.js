// utils/getToolBySlug.js
import tools from "@/constants/tools";

export const getToolBySlug = (slug) => {
  return tools.find((tool) => tool.slug === slug) || null; // Returns null if the slug doesn't match any tool
};
