import categories from "@/constants/toolsCategories";
import { ICategory } from "@/types";

/**
 * Get all categores
 * @returns {ICategory[]} Array of all categories
 */
export const getAllCategories = (): ICategory[] => {
  return categories;
};

/**
 * Get a category by its slug
 * @param {string} slug - The slug of the category to find
 * @returns {ICategory|null} The category object or null if not found
 */
export const getCategoryBySlug = (slug: string): ICategory | null => {
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
 * @returns {ICategory[]} Filtered array of categories
 */
export const filterCategories = (searchTerm: string): ICategory[] => {
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
 * @param {ICategory[]} categoriesToSort - Array of categories to sort
 * @returns {ICategory[]} Sorted array of categories
 */
export const sortCategoriesAlphabetically = (categoriesToSort: ICategory[]): ICategory[] => {
  return [...categoriesToSort].sort((a, b) => a.label.localeCompare(b.label));
};
