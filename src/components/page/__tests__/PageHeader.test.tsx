import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PageHeader } from '@/components/page/PageHeader';

describe('PageHeader', () => {
  it('renders the title as an h1', () => {
    render(<PageHeader title="Slugify Tool" />);
    expect(screen.getByRole('heading', { level: 1, name: 'Slugify Tool' })).toBeInTheDocument();
  });

  it('renders the description when provided', () => {
    render(<PageHeader title="T" description="Turn text into slugs" />);
    expect(screen.getByText('Turn text into slugs')).toBeInTheDocument();
  });

  it('does not render a description when omitted', () => {
    render(<PageHeader title="T" />);
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
  });

  it('renders an icon next to the title when provided', () => {
    render(<PageHeader title="T" icon={<span data-testid="header-icon" />} />);
    expect(screen.getByTestId('header-icon')).toBeInTheDocument();
  });

  it('renders breadcrumb items when passed', () => {
    render(
      <PageHeader
        title="T"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Slugify', path: '/slugify' },
        ]}
      />
    );
    expect(screen.getByRole('navigation', { name: 'breadcrumb' })).toBeInTheDocument();
  });

  it('renders a simple pageName breadcrumb when items are not passed', () => {
    render(<PageHeader title="About" pageName="About" />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    const nav = screen.getByRole('navigation', { name: 'breadcrumb' });
    expect(nav.querySelector('[aria-current="page"]')).toHaveTextContent('About');
  });

  it('renders no breadcrumb when neither items nor pageName are provided', () => {
    render(<PageHeader title="T" />);
    expect(screen.queryByRole('navigation', { name: 'breadcrumb' })).not.toBeInTheDocument();
  });
});
