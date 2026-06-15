import categories from '@/constants/toolsCategories';
import type { Category } from '@/types';

/**
 * Get all categories
 *
 * @returns {Category[]} Array of all categories
 */
export const getAllCategories = (): Category[] => {
  return categories;
};

/**
 * Get a category by its slug
 *
 * @param {string} slug - The slug of the category to find
 *
 * @returns {Category|null} The category object or null if not found
 */
export const getCategoryBySlug = (slug: string): Category | null => {
  return categories.find((category) => category.slug === slug) || null;
};

/**
 * Get all category slugs
 *
 * @returns {string[]} Array of all category slugs
 */
export const getAllCategorySlugs = (): string[] => {
  return categories.map((category) => category.slug);
};
