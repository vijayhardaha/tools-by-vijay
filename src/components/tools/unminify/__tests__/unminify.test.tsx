import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Unminify } from '@/components/tools/unminify';
import { EXAMPLES } from '@/components/tools/unminify/examples';

describe('Unminify tool', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders example buttons and the info/FAQ sections', () => {
    render(<Unminify />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example into the input', async () => {
    const user = userEvent.setup();
    render(<Unminify />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);
  });

  it('unminifies code via the API and shows the result', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => ({ unminifiedCode: 'const value = 1;' }) });
    vi.stubGlobal('fetch', fetchMock);

    const user = userEvent.setup();
    render(<Unminify />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    await user.click(screen.getByRole('button', { name: /unminify/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith('/api/unminify-code', expect.objectContaining({ method: 'POST' }));
    });

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    await waitFor(() => expect(output?.value).toBe('const value = 1;'));
  });

  it('shows an error when the API call fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: false, status: 500, statusText: 'Internal Server Error', json: async () => ({}) })
    );

    const user = userEvent.setup();
    render(<Unminify />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    await user.click(screen.getByRole('button', { name: /unminify/i }));

    await waitFor(() => expect(screen.getByText(/Failed to unminify/i)).toBeInTheDocument());
  });

  it('clears the input and output when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<Unminify />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
