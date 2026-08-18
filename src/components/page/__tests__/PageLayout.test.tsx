import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PageLayout } from '@/components/page/PageLayout';

describe('PageLayout', () => {
  it('renders a skip link pointing to main content', () => {
    render(
      <PageLayout>
        <p>Body</p>
      </PageLayout>
    );
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renders the main content area with children', () => {
    render(
      <PageLayout>
        <p>Body content</p>
      </PageLayout>
    );
    expect(screen.getByText('Body content')).toBeInTheDocument();
    const main = screen.getByRole('main');
    expect(main).toHaveAttribute('id', 'main-content');
  });

  it('includes the header and footer landmarks', () => {
    render(<PageLayout>Body</PageLayout>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
