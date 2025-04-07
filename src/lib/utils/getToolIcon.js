// utils/getToolIcon.js

import { toolIcons } from "@/constants/toolIcons";

export const getToolIcon = (slug) => {
  return toolIcons[slug] || null; // Returns null if the slug doesn't exist in the icon map
};
