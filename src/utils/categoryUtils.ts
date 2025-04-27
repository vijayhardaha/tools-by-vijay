import categories from "@/constants/toolsCategories";
import { Category } from "@/types";

/**
 * Get all categores
 * @returns {Category[]} Array of all categories
 */
export const getAllCategories = (): Category[] => {
  return categories;
};

/**
 * Get a category by its slug
 * @param {string} slug - The slug of the category to find
 * @returns {Object|null} The category object or null if not found
 */
export const getCategoryBySlug = (slug: string): Category | null => {
  return categories.find((category) => category.slug === slug) || null;
};

/**
 * Get all category slugs
 * @returns {string[]} Array of all category slugs
 */
export const getAllCategorySlugs = (): string[] => {
  return categories.map((category) => category.slug);
};

/**
 * Check if a category exists by slug
 * @param {string} slug - The slug to check
 * @returns {boolean} Whether the category exists
 */
export const categoryExists = (slug: string): boolean => {
  return categories.some((category) => category.slug === slug);
};

/**
 * Filter categories by a search term (matches against label or description)
 * @param {string} searchTerm - The term to search for
 * @returns {Category[]} Filtered array of categories
 */
export const filterCategories = (searchTerm: string): Category[] => {
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
 * @param {Category[]} categoriesToSort - Array of categories to sort
 * @returns {Category[]} Sorted array of categories
 */
export const sortCategoriesAlphabetically = (categoriesToSort: Category[]): Category[] => {
  return [...categoriesToSort].sort((a, b) => a.label.localeCompare(b.label));
};
