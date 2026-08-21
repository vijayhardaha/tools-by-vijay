import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import NotFound from '@/app/not-found';

describe('not-found page', () => {
  it('renders a branded 404 heading and message', () => {
    render(<NotFound />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'Page Not Found' })).toBeInTheDocument();
  });

  it('offers navigation back home and to the tools listing', () => {
    render(<NotFound />);

    const homeLink = screen.getByRole('link', { name: /back to home/i });
    expect(homeLink).toHaveAttribute('href', '/');

    const toolsLink = screen.getByRole('link', { name: /browse all tools/i });
    expect(toolsLink).toHaveAttribute('href', '/tools');
  });
});
