import categories from '@/constants/categories';
import type { Category } from '@/constants/categories';

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
