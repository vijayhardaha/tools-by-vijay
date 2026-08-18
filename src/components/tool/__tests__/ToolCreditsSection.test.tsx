import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ToolCreditsSection } from '@/components/tool/ToolCredits';

describe('ToolCreditsSection', () => {
  it('renders the default credits heading and attribution paragraph', () => {
    render(<ToolCreditsSection />);
    expect(screen.getByRole('heading', { name: 'Credits & Source' })).toBeInTheDocument();
    expect(screen.getByText(/Maintained by/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Vijay Hardaha' })).toHaveAttribute('href', 'https://x.com/vijayhardaha');
  });

  it('opens the maintainer link in a new tab', () => {
    render(<ToolCreditsSection />);
    const link = screen.getByRole('link', { name: 'Vijay Hardaha' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders custom children instead of the default paragraph', () => {
    render(<ToolCreditsSection>Custom credit text here</ToolCreditsSection>);
    expect(screen.getByText('Custom credit text here')).toBeInTheDocument();
    expect(screen.queryByText(/Maintained by/)).not.toBeInTheDocument();
  });

  it('supports a custom heading and heading id', () => {
    render(<ToolCreditsSection heading="Sources" headingId="sources-anchor" />);
    const heading = screen.getByRole('heading', { name: 'Sources' });
    expect(heading).toHaveAttribute('id', 'sources-anchor');
  });

  it('renders a dashed hr separator', () => {
    const { container } = render(<ToolCreditsSection />);
    expect(container.querySelector('hr')).toBeInTheDocument();
  });

  it('forwards className and extra attributes', () => {
    const { container } = render(<ToolCreditsSection className="extra" data-testid="credits" />);
    expect(container.firstChild).toHaveClass('extra');
    expect(screen.getByTestId('credits')).toBeInTheDocument();
  });
});
