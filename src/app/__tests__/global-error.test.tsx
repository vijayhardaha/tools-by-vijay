import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import GlobalError from '@/app/global-error';

describe('global error boundary', () => {
  it('renders its own html and body shell', () => {
    render(<GlobalError error={new Error('fatal')} reset={() => {}} />);

    // React hoists <html>/<body> to the live document rather than the
    // render container, so assert on document state.
    expect(document.documentElement.getAttribute('lang')).toBe('en');
    expect(document.body.style.display).toBe('flex');
    expect(screen.getByRole('heading', { level: 1, name: 'Something went wrong' })).toBeInTheDocument();
  });

  it('calls reset when the retry button is clicked', async () => {
    const user = userEvent.setup();
    const reset = vi.fn();
    render(<GlobalError error={new Error('fatal')} reset={reset} />);

    await user.click(screen.getByRole('button', { name: /try again/i }));

    expect(reset).toHaveBeenCalledTimes(1);
  });
});
