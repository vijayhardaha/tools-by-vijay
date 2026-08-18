import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders a button with its children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies the default variant and size classes', () => {
    const { container } = render(<Button>Default</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('bg-accent-foreground');
    expect(button).toHaveClass('h-10');
  });

  it('applies variant classes for primary, destructive, and outline', () => {
    const { container, rerender } = render(<Button variant="primary">Primary</Button>);
    expect(container.querySelector('button')).toHaveClass('bg-primary');

    rerender(<Button variant="destructive">Danger</Button>);
    expect(container.querySelector('button')).toHaveClass('bg-destructive');

    rerender(<Button variant="outline">Outline</Button>);
    expect(container.querySelector('button')).toHaveClass('border-primary');
  });

  it('applies size classes', () => {
    const { container, rerender } = render(<Button size="sm">Small</Button>);
    expect(container.querySelector('button')).toHaveClass('h-8');

    rerender(<Button size="icon">I</Button>);
    expect(container.querySelector('button')).toHaveClass('size-10');
  });

  it('merges a custom className', () => {
    const { container } = render(<Button className="custom-btn">X</Button>);
    expect(container.querySelector('button')).toHaveClass('custom-btn');
  });

  it('fires onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Go</Button>);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when the disabled prop is set', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('sets the type attribute', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('renders as a slot child when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link button</a>
      </Button>
    );
    const link = screen.getByRole('link', { name: 'Link button' });
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveAttribute('data-slot', 'button');
  });
});
