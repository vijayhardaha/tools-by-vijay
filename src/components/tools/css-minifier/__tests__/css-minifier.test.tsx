import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { CssMinifier } from '@/components/tools/css-minifier';
import { EXAMPLES } from '@/components/tools/css-minifier/examples';

describe('CssMinifier tool', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders example buttons and the info/FAQ sections', () => {
    render(<CssMinifier />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example into the input', async () => {
    const user = userEvent.setup();
    render(<CssMinifier />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);
  });

  it('minifies CSS via the API and shows the result', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue({
        ok: true,
        json: async () => ({ minifiedCss: '.btn{background-color:#007bff;color:#fff}' }),
      });
    vi.stubGlobal('fetch', fetchMock);

    const user = userEvent.setup();
    render(<CssMinifier />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    await user.click(screen.getByRole('button', { name: /minify/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith('/api/minify-css', expect.objectContaining({ method: 'POST' }));
    });

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    await waitFor(() => expect(output?.value).toBe('.btn{background-color:#007bff;color:#fff}'));
  });

  it('shows an error when the API returns an error response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: false, json: async () => ({ error: 'Minification failed' }) })
    );

    const user = userEvent.setup();
    render(<CssMinifier />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    await user.click(screen.getByRole('button', { name: /minify/i }));

    await waitFor(() => expect(screen.getByText('Minification failed')).toBeInTheDocument());
  });

  it('toggles the compress option via checkbox', async () => {
    const user = userEvent.setup();
    render(<CssMinifier />);

    const compress = screen.getByRole('checkbox', { name: /compress/i });
    await user.click(compress);
    expect(compress).not.toBeChecked();
  });

  it('clears the input and output when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<CssMinifier />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
