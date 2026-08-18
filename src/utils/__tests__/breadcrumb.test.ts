import { describe, expect, it, vi, afterEach } from 'vitest';

import { buildBreadcrumbs } from '@/utils/breadcrumb';

describe('buildBreadcrumbs()', () => {
  afterEach(() => {
    vi.mocked(console.warn).mockClear();
  });

  it('always starts with the Home breadcrumb pointing to "/"', () => {
    const crumbs = buildBreadcrumbs('/about', 'About');
    expect(crumbs[0]).toEqual({ name: 'Home', path: '/' });
  });

  it('appends the current page with the normalized path', () => {
    const crumbs = buildBreadcrumbs('/about', 'About');
    expect(crumbs.at(-1)).toEqual({ name: 'About', path: '/about' });
  });

  it('normalizes a path without a leading slash', () => {
    const crumbs = buildBreadcrumbs('slugify', 'Slugify');
    expect(crumbs.at(-1)?.path).toBe('/slugify');
  });

  it('prepends parent items between Home and the current page', () => {
    const crumbs = buildBreadcrumbs('/slugify', 'Slugify', [
      { name: 'Writing & Editing', path: '/tools/writing-editing' },
    ]);
    expect(crumbs).toEqual([
      { name: 'Home', path: '/' },
      { name: 'Writing & Editing', path: '/tools/writing-editing' },
      { name: 'Slugify', path: '/slugify' },
    ]);
  });

  it('works with multiple parent levels', () => {
    const crumbs = buildBreadcrumbs('/tools/web-url', 'Web & URL', [{ name: 'Tools', path: '/tools' }]);
    expect(crumbs.map((crumb) => crumb.name)).toEqual(['Home', 'Tools', 'Web & URL']);
  });

  it('warns and still builds for an invalid path shape', () => {
    const crumbs = buildBreadcrumbs('/bad path!', 'Bad');
    expect(vi.mocked(console.warn)).toHaveBeenCalledWith('Invalid breadcrumb path: /bad path!');
    expect(crumbs.at(-1)?.path).toBe('/bad path!');
  });

  it('does not warn for valid paths', () => {
    buildBreadcrumbs('/tools/writing-editing', 'Writing');
    expect(vi.mocked(console.warn)).not.toHaveBeenCalled();
  });
});
