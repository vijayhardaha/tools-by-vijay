import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PageBreadcrumb } from '@/components/page/PageBreadcrumb';

describe('PageBreadcrumb', () => {
  it('renders a multi-level breadcrumb from items with links and separators', () => {
    render(
      <PageBreadcrumb
        items={[
          { name: 'Home', path: '/' },
          { name: 'Writing & Editing', path: '/tools/writing-editing' },
          { name: 'Slugify', path: '/slugify' },
        ]}
      />
    );

    const nav = screen.getByRole('navigation', { name: 'breadcrumb' });
    expect(nav).toBeInTheDocument();

    // Non-last items render as links.
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Writing & Editing' })).toHaveAttribute('href', '/tools/writing-editing');

    // The last item is a plain span marked as the current page.
    const current = screen.getByText('Slugify');
    expect(current.tagName).toBe('SPAN');
    expect(current).toHaveAttribute('aria-current', 'page');
  });

  it('renders the simple pageName mode as Home / {pageName}', () => {
    render(<PageBreadcrumb pageName="About" />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByText('About')).toHaveAttribute('aria-current', 'page');
  });

  it('renders separators between non-last items only', () => {
    const { container } = render(
      <PageBreadcrumb
        items={[
          { name: 'Home', path: '/' },
          { name: 'Tools', path: '/tools' },
          { name: 'Web & URL', path: '/tools/web-url' },
        ]}
      />
    );
    // Two separators for three items.
    expect(container.querySelectorAll('li span.text-gray-500')).toHaveLength(2);
  });
});
