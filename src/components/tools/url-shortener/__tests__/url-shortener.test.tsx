import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { UrlShortener } from '@/components/tools/url-shortener';
import { EXAMPLES } from '@/components/tools/url-shortener/examples';

describe('UrlShortener tool', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders example buttons and the info/FAQ sections', () => {
    render(<UrlShortener />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example into the input', async () => {
    const user = userEvent.setup();
    render(<UrlShortener />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);
  });

  it('shortens a URL via the URLfy API and shows the result row', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => ({ shortUrl: 'https://urlfy.org/abc123' }) });
    vi.stubGlobal('fetch', fetchMock);

    const user = userEvent.setup();
    render(<UrlShortener />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    await user.click(screen.getByRole('button', { name: /shorten/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        'https://www.urlfy.org/api/v1/shorten',
        expect.objectContaining({ method: 'POST' })
      );
    });

    await waitFor(() => {
      expect(screen.getByRole('link', { name: 'https://urlfy.org/abc123' })).toBeInTheDocument();
    });
  });

  it('disables the shorten button when the input is empty', () => {
    render(<UrlShortener />);

    expect(screen.getByRole('button', { name: /shorten/i })).toBeDisabled();
  });

  it('marks invalid URLs as invalid in the results', async () => {
    vi.stubGlobal('fetch', vi.fn());

    const user = userEvent.setup();
    render(<UrlShortener />);

    const input = screen.getAllByRole('textbox')[0];
    await user.type(input, 'not a url');

    await user.click(screen.getByRole('button', { name: /shorten/i }));

    await waitFor(() => {
      expect(screen.getByText('Invalid URL')).toBeInTheDocument();
    });
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<UrlShortener />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
