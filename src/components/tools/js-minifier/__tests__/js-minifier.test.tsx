import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { JsMinifier } from '@/components/tools/js-minifier';
import { EXAMPLES } from '@/components/tools/js-minifier/examples';

describe('JsMinifier tool', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders example buttons and the info/FAQ sections', () => {
    render(<JsMinifier />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example into the input', async () => {
    const user = userEvent.setup();
    render(<JsMinifier />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);
  });

  it('minifies JS via the API and shows the result', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ minifiedJs: 'const a=1;' }) });
    vi.stubGlobal('fetch', fetchMock);

    const user = userEvent.setup();
    render(<JsMinifier />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    await user.click(screen.getByRole('button', { name: /minify/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith('/api/minify-js', expect.objectContaining({ method: 'POST' }));
    });

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    await waitFor(() => expect(output?.value).toBe('const a=1;'));
  });

  it('shows an error when the API returns an error response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: false, json: async () => ({ error: 'JS minification failed' }) })
    );

    const user = userEvent.setup();
    render(<JsMinifier />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    await user.click(screen.getByRole('button', { name: /minify/i }));

    await waitFor(() => expect(screen.getByText('JS minification failed')).toBeInTheDocument());
  });

  it('toggles minification options via checkboxes', async () => {
    const user = userEvent.setup();
    render(<JsMinifier />);

    const removeConsole = screen.getByRole('checkbox', { name: /remove console statements/i });
    await user.click(removeConsole);
    expect(removeConsole).toBeChecked();

    const removeDebugger = screen.getByRole('checkbox', { name: /remove debugger statements/i });
    await user.click(removeDebugger);
    expect(removeDebugger).not.toBeChecked();
  });

  it('clears the input and output when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<JsMinifier />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
