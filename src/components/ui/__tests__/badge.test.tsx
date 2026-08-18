import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from '@/components/ui/badge';

describe('Badge', () => {
  it('renders the badge content', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies the default variant class', () => {
    const { container } = render(<Badge>Default</Badge>);
    expect(container.firstChild).toHaveClass('bg-gray-50');
  });

  it('applies variant-specific classes', () => {
    const { container, rerender } = render(<Badge variant="success">OK</Badge>);
    expect(container.firstChild).toHaveClass('bg-green-50');

    rerender(<Badge variant="danger">Bad</Badge>);
    expect(container.firstChild).toHaveClass('bg-red-50');

    rerender(<Badge variant="info">Info</Badge>);
    expect(container.firstChild).toHaveClass('bg-blue-50');

    rerender(<Badge variant="warning">Warn</Badge>);
    expect(container.firstChild).toHaveClass('bg-yellow-50');

    rerender(<Badge variant="secondary">Alt</Badge>);
    expect(container.firstChild).toHaveClass('bg-blue-50');
  });

  it('merges a custom className', () => {
    const { container } = render(<Badge className="my-badge">X</Badge>);
    expect(container.firstChild).toHaveClass('my-badge');
  });

  it('forwards extra props like id', () => {
    render(<Badge id="badge-id">X</Badge>);
    expect(screen.getByText('X')).toHaveAttribute('id', 'badge-id');
  });
});
