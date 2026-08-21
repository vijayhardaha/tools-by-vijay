import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { getToolPageMetadata, WithToolPage } from '@/components/page/WithToolPage';
import { getCategoryBySlug } from '@/utils/categories';
import { findToolBySlug } from '@/utils/tools';

describe('WithToolPage', () => {
  it('renders the tool title, description, and child component', () => {
    const tool = findToolBySlug('slugify');

    render(
      <WithToolPage slug="slugify">
        <p>Slugify body</p>
      </WithToolPage>
    );

    expect(screen.getByRole('heading', { level: 1, name: tool?.title })).toBeInTheDocument();
    expect(screen.getByText(tool?.description || '')).toBeInTheDocument();
    expect(screen.getByText('Slugify body')).toBeInTheDocument();
  });

  it('renders the Home / Category / Tool breadcrumb trail', () => {
    const tool = findToolBySlug('slugify');

    render(
      <WithToolPage slug="slugify">
        <p>Body</p>
      </WithToolPage>
    );

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    // The header nav also links to the category, so assert on the breadcrumb's href.
    const categoryTitle = getCategoryBySlug(tool?.category || '')?.title || '';
    const categoryLinks = screen.getAllByRole('link', { name: categoryTitle });
    expect(categoryLinks.some((link) => link.getAttribute('href') === `/tools/${tool?.category}`)).toBe(true);
  });

  it('injects JSON-LD schema with the real OG image (no preview.png)', () => {
    const { container } = render(
      <WithToolPage slug="css-minifier">
        <p>Body</p>
      </WithToolPage>
    );

    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
    expect(script?.textContent).toContain('WebPage');
    expect(script?.textContent).toContain('BreadcrumbList');
    expect(script?.textContent).toContain('/api/og/css-minifier.png');
    expect(script?.textContent).not.toContain('preview.png');
  });

  it('derives metadata from the tool seoTitle/seoDescription', () => {
    const tool = findToolBySlug('css-minifier');
    const metadata = getToolPageMetadata('css-minifier');

    expect(metadata.title).toContain(tool?.seoTitle || '');
    expect(metadata.alternates?.canonical).toBe('http://localhost:3000/css-minifier');
  });
});
