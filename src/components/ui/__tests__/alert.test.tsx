import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Alert } from '@/components/ui/alert';

describe('Alert', () => {
  it('renders the title and description text', () => {
    render(<Alert title="Warning" text="Careful there" />);
    expect(screen.getByText('Warning')).toBeInTheDocument();
    expect(screen.getByText('Careful there')).toBeInTheDocument();
  });

  it('renders the default variant with a status role (polite live region)', () => {
    render(<Alert title="Info" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders warning and danger variants with the alert role (assertive live region)', () => {
    const { rerender } = render(<Alert variant="warning" title="W" />);
    expect(screen.getByRole('alert')).toBeInTheDocument();

    rerender(<Alert variant="danger" title="D" />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders info and success variants with the status role', () => {
    const { rerender } = render(<Alert variant="info" title="I" />);
    expect(screen.getByRole('status')).toBeInTheDocument();

    rerender(<Alert variant="success" title="S" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders a default icon for the variant', () => {
    const { container } = render(<Alert title="T" />);
    expect(container.querySelector('[data-slot="alert"] > svg')).toBeInTheDocument();
  });

  it('renders a custom icon when provided', () => {
    render(<Alert title="T" icon={<span data-testid="custom-icon" />} />);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('hides the icon when icon is null', () => {
    const { container } = render(<Alert title="T" icon={null} />);
    expect(container.querySelector('[data-slot="alert"] svg')).not.toBeInTheDocument();
  });

  it('renders children as additional content', () => {
    render(
      <Alert>
        <p>Child content</p>
      </Alert>
    );
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('merges a custom className', () => {
    const { container } = render(<Alert title="T" className="my-alert" />);
    expect(container.querySelector('[data-slot="alert"]')).toHaveClass('my-alert');
  });
});
