import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Logo } from '@/components/header/parts/Logo';
import { MenuButton } from '@/components/header/parts/MenuButton';

describe('Logo', () => {
  it('renders a link to the homepage with the site logo', () => {
    render(<Logo />);
    const link = screen.getByRole('link', { name: /Tools by Vijay Hardaha/ });
    expect(link).toHaveAttribute('href', '/');
    expect(link.querySelector('img')).toHaveAttribute('src', '/images/site-logo.svg');
  });

  it('applies a custom className to the image', () => {
    const { container } = render(<Logo className="custom-logo" />);
    expect(container.querySelector('img')).toHaveClass('custom-logo');
  });
});

describe('MenuButton', () => {
  it('renders a menu button with an accessible label', () => {
    render(<MenuButton onClick={() => {}} />);
    expect(screen.getByRole('button', { name: 'Menu' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<MenuButton onClick={onClick} />);
    await user.click(screen.getByRole('button', { name: 'Menu' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
