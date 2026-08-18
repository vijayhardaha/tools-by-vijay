import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { CssInliner } from '@/components/tools/css-inliner';
import { EXAMPLES } from '@/components/tools/css-inliner/examples';

describe('CssInliner tool', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders example buttons and the info/FAQ sections', () => {
    render(<CssInliner />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example into the html and css inputs', async () => {
    const user = userEvent.setup();
    render(<CssInliner />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const textboxes = screen.getAllByRole('textbox');
    expect(textboxes[0]).toHaveValue(EXAMPLES[0].data.htmlInput as string);
    expect(textboxes[1]).toHaveValue(EXAMPLES[0].data.cssInput as string);
  });

  it('inlines CSS via the API and shows the result', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => ({ formattedHtml: '<p style="color:red">Hello</p>' }) });
    vi.stubGlobal('fetch', fetchMock);

    const user = userEvent.setup();
    render(<CssInliner />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    await user.click(screen.getByRole('button', { name: /inline/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith('/api/inline-css', expect.objectContaining({ method: 'POST' }));
    });

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    await waitFor(() => expect(output?.value).toBe('<p style="color:red">Hello</p>'));
  });

  it('shows an error when the API call fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, json: async () => ({}) }));

    const user = userEvent.setup();
    render(<CssInliner />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    await user.click(screen.getByRole('button', { name: /inline/i }));

    await waitFor(() => expect(screen.getByText(/Error inlining CSS/i)).toBeInTheDocument());
  });

  it('clears both inputs when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<CssInliner />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('');
  });
});
