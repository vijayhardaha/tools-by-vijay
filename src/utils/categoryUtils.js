import categories from "@/constants/toolsCategories";

/**
 * Get a category by its slug
 * @param {string} slug - The slug of the category to find
 * @returns {Object|null} The category object or null if not found
 */
export const getCategoryBySlug = (slug) => {
  return categories.find((category) => category.slug === slug) || null;
};

/**
 * Get all category slugs
 * @returns {string[]} Array of all category slugs
 */
export const getAllCategorySlugs = () => {
  return categories.map((category) => category.slug);
};

/**
 * Check if a category exists by slug
 * @param {string} slug - The slug to check
 * @returns {boolean} Whether the category exists
 */
export const categoryExists = (slug) => {
  return categories.some((category) => category.slug === slug);
};

/**
 * Filter categories by a search term (matches against label or description)
 * @param {string} searchTerm - The term to search for
 * @returns {Object[]} Filtered array of categories
 */
export const filterCategories = (searchTerm) => {
  if (!searchTerm) return categories;

  const term = searchTerm.toLowerCase();
  return categories.filter(
    (category) =>
      category.label.toLowerCase().includes(term) ||
      category.description.toLowerCase().includes(term)
  );
};

/**
 * Sort categories alphabetically by label
 * @param {Object[]} categoriesToSort - Array of categories to sort (defaults to all categories)
 * @returns {Object[]} Sorted array of categories
 */
export const sortCategoriesAlphabetically = (categoriesToSort = categories) => {
  return [...categoriesToSort].sort((a, b) => a.label.localeCompare(b.label));
};

/**
 * Group tools by their categories
 * @param {Object[]} tools - Array of tool objects that have a category property
 * @returns {Object} Object with category slugs as keys and arrays of tools as values
 */
export const groupToolsByCategory = (tools) => {
  return tools.reduce((grouped, tool) => {
    const categorySlug = tool.category;
    if (!grouped[categorySlug]) {
      grouped[categorySlug] = [];
    }
    grouped[categorySlug].push(tool);
    return grouped;
  }, {});
};
