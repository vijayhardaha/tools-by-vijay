import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ErrorPage from '@/app/error';

describe('error boundary page', () => {
  it('renders a friendly message instead of raw error text', () => {
    render(<ErrorPage error={new Error('boom')} reset={() => {}} />);

    expect(screen.getByRole('heading', { level: 1, name: 'Something went wrong' })).toBeInTheDocument();
    expect(screen.queryByText('boom')).not.toBeInTheDocument();
  });

  it('calls reset when the retry button is clicked', async () => {
    const user = userEvent.setup();
    const reset = vi.fn();
    render(<ErrorPage error={new Error('boom')} reset={reset} />);

    await user.click(screen.getByRole('button', { name: /try again/i }));

    expect(reset).toHaveBeenCalledTimes(1);
  });

  it('shows the error digest for support lookups when provided', () => {
    const error = Object.assign(new Error('boom'), { digest: 'abc123' });
    render(<ErrorPage error={error} reset={() => {}} />);

    expect(screen.getByText(/abc123/)).toBeInTheDocument();
  });

  it('links back to the tools listing', () => {
    render(<ErrorPage error={new Error('boom')} reset={() => {}} />);

    expect(screen.getByRole('link', { name: /browse all tools/i })).toHaveAttribute('href', '/tools');
  });
});
