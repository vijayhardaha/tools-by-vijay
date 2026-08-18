import { describe, expect, it } from 'vitest';

import categories from '@/constants/categories';
import { getAllCategories, getCategoryBySlug } from '@/utils/categories';

describe('categories utils', () => {
  describe('getAllCategories()', () => {
    it('returns every category from the constants file', () => {
      expect(getAllCategories()).toEqual(categories);
    });

    it('returns the full set of five categories', () => {
      const slugs = getAllCategories().map((category) => category.slug);
      expect(slugs).toEqual([
        'creative-generators',
        'developer-suite',
        'security-privacy',
        'web-url',
        'writing-editing',
      ]);
    });
  });

  describe('getCategoryBySlug()', () => {
    it('finds an existing category by its slug', () => {
      const category = getCategoryBySlug('web-url');
      expect(category).not.toBeNull();
      expect(category?.title).toBe('Web & URL');
    });

    it('returns null for an unknown slug', () => {
      expect(getCategoryBySlug('does-not-exist')).toBeNull();
    });

    it('returns null for an empty slug', () => {
      expect(getCategoryBySlug('')).toBeNull();
    });
  });
});
