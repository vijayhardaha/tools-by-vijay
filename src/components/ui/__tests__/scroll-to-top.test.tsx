import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { ScrollToTop } from '@/components/ui/scroll-to-top';

describe('ScrollToTop', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('is hidden when the page is at the top', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
    render(<ScrollToTop />);
    const button = screen.getByRole('button', { name: 'Scroll to top' });
    expect(button).toHaveClass('opacity-0');
  });

  it('becomes visible after scrolling past 250px', () => {
    Object.defineProperty(window, 'scrollY', { value: 300, configurable: true });
    render(<ScrollToTop />);
    const button = screen.getByRole('button', { name: 'Scroll to top' });
    expect(button).toHaveClass('opacity-100');
  });

  it('updates visibility on scroll events', () => {
    const scrollHandlers: Array<() => void> = [];
    window.addEventListener = vi.fn((event: string, handler: EventListenerOrEventListenerObject) => {
      if (event === 'scroll') scrollHandlers.push(handler as () => void);
    }) as unknown as typeof window.addEventListener;
    window.removeEventListener = vi.fn() as unknown as typeof window.removeEventListener;

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
    render(<ScrollToTop />);

    const button = screen.getByRole('button', { name: 'Scroll to top' });
    expect(button).toHaveClass('opacity-0');

    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true });
    act(() => {
      scrollHandlers.forEach((handler) => handler());
    });
    expect(button).toHaveClass('opacity-100');

    Object.defineProperty(window, 'scrollY', { value: 10, configurable: true });
    act(() => {
      scrollHandlers.forEach((handler) => handler());
    });
    expect(button).toHaveClass('opacity-0');
  });

  it('scrolls to the top when clicked', async () => {
    const user = userEvent.setup();
    const scrollTo = vi.fn();
    window.scrollTo = scrollTo as unknown as typeof window.scrollTo;

    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true });
    render(<ScrollToTop />);

    await user.click(screen.getByRole('button', { name: 'Scroll to top' }));
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
