import { describe, expect, it } from 'vitest';

import tools from '@/constants/tools';
import {
  findToolBySlug,
  getToolIcon,
  getToolsByCategory,
  getToolsByCategories,
  getToolsBySubCategory,
} from '@/utils/tools';

describe('tools utils', () => {
  describe('findToolBySlug()', () => {
    it('returns the tool object for an existing slug', () => {
      const tool = findToolBySlug('slugify');
      expect(tool).not.toBeNull();
      expect(tool?.title).toBe('Slugify');
    });

    it('returns null for an unknown slug', () => {
      expect(findToolBySlug('not-a-tool')).toBeNull();
    });
  });

  describe('getToolsByCategory()', () => {
    it('returns only the tools that belong to the given category', () => {
      const result = getToolsByCategory('web-url');
      expect(result.length).toBeGreaterThan(0);
      expect(result.every((tool) => tool.category === 'web-url')).toBe(true);
    });

    it('returns an empty array for an unknown category', () => {
      expect(getToolsByCategory('unknown-category')).toEqual([]);
    });

    it('preserves the constant file ordering within a category', () => {
      const result = getToolsByCategory('developer-suite');
      const expected = tools.filter((tool) => tool.category === 'developer-suite');
      expect(result.map((tool) => tool.slug)).toEqual(expected.map((tool) => tool.slug));
    });
  });

  describe('getToolsByCategories()', () => {
    it('groups all tools by their category slug', () => {
      const grouped = getToolsByCategories();
      const slugs = Object.keys(grouped);
      expect(slugs).toContain('web-url');
      expect(slugs).toContain('creative-generators');
      expect(grouped['web-url'].every((tool) => tool.category === 'web-url')).toBe(true);
    });

    it('covers every tool exactly once across all groups', () => {
      const grouped = getToolsByCategories();
      const total = Object.values(grouped).reduce((sum, group) => sum + group.length, 0);
      expect(total).toBe(tools.length);
    });
  });

  describe('getToolsBySubCategory()', () => {
    it('groups tools by their sub-category label', () => {
      const grouped = getToolsBySubCategory(tools);
      expect(grouped['Minify & Beautify']).toBeDefined();
      expect(grouped['Minify & Beautify'].map((tool) => tool.slug)).toEqual([
        'unminify',
        'css-minifier',
        'html-minifier',
        'js-minifier',
      ]);
    });

    it('preserves array order within each sub-category group', () => {
      const grouped = getToolsBySubCategory(tools);
      const groupedSlugs = Object.values(grouped)
        .flat()
        .map((tool) => tool.slug);
      expect(groupedSlugs).toEqual(tools.map((tool) => tool.slug));
    });

    it('returns an empty object for an empty input array', () => {
      expect(getToolsBySubCategory([])).toEqual({});
    });
  });

  describe('getToolIcon()', () => {
    it('returns a React element for a tool that has an icon', () => {
      const icon = getToolIcon('slugify');
      expect(icon).not.toBeNull();
    });

    it('returns null for a tool slug without an icon mapping', () => {
      expect(getToolIcon('no-icon-for-this')).toBeNull();
    });
  });
});
