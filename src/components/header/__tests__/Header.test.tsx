import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Header } from '@/components/header/Header';

/**
 * Sets the window scrollY value in jsdom (scrollY is a read-only getter).
 *
 * @param {number} value - The scroll position to set.
 */
function setScrollY(value: number): void {
  Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value });
}

describe('Header', () => {
  it('renders the logo, search button, and menu button', () => {
    render(<Header />);

    expect(screen.getByRole('link', { name: /tools by vijay/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search tools/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Menu' })).toBeInTheDocument();
  });

  it('opens and closes the mobile sidebar when the menu button is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole('button', { name: 'Menu' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument());

    await user.click(screen.getByRole('button', { name: 'Close' }));
    // The sheet portal stays mounted; the overlay flips to the closed state.
    await waitFor(() => {
      const overlay = document.querySelector('[data-slot="sheet-overlay"]');
      expect(overlay).toHaveAttribute('data-state', 'closed');
    });
  });

  it('hides the header on scroll down and shows it again on scroll up', async () => {
    render(<Header />);

    const header = document.querySelector('header')!;

    // Scroll down past the 80px threshold.
    setScrollY(200);
    window.dispatchEvent(new Event('scroll'));
    await waitFor(() => expect(header.className).toContain('-translate-y-full'));

    // Scroll up — the header becomes visible again.
    setScrollY(50);
    window.dispatchEvent(new Event('scroll'));
    await waitFor(() => expect(header.className).toContain('translate-y-0'));
  });

  it('adds a shadow once the page is scrolled past 100px', async () => {
    render(<Header />);

    const header = document.querySelector('header')!;

    setScrollY(150);
    window.dispatchEvent(new Event('scroll'));
    await waitFor(() => expect(header.className).toContain('shadow-xs'));
  });
});
