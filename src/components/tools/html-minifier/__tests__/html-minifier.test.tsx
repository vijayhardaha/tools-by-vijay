import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { HtmlMinifier } from '@/components/tools/html-minifier';
import { EXAMPLES } from '@/components/tools/html-minifier/examples';

describe('HtmlMinifier tool', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders example buttons and the info/FAQ sections', () => {
    render(<HtmlMinifier />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example into the input', async () => {
    const user = userEvent.setup();
    render(<HtmlMinifier />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);
  });

  it('minifies HTML via the API and shows the result', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ minifiedHtml: '<p>Hello</p>' }) });
    vi.stubGlobal('fetch', fetchMock);

    const user = userEvent.setup();
    render(<HtmlMinifier />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    await user.click(screen.getByRole('button', { name: /minify/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith('/api/minify-html', expect.objectContaining({ method: 'POST' }));
    });

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    await waitFor(() => expect(output?.value).toBe('<p>Hello</p>'));
  });

  it('shows an error when the API returns an error response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: false, json: async () => ({ error: 'HTML minification failed' }) })
    );

    const user = userEvent.setup();
    render(<HtmlMinifier />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    await user.click(screen.getByRole('button', { name: /minify/i }));

    await waitFor(() => expect(screen.getByText('HTML minification failed')).toBeInTheDocument());
  });

  it('clears the input and output when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<HtmlMinifier />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
