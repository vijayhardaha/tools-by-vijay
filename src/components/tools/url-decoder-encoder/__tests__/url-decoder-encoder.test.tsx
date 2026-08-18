import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { UrlDecoderEncoder } from '@/components/tools/url-decoder-encoder';
import { EXAMPLES } from '@/components/tools/url-decoder-encoder/examples';

describe('UrlDecoderEncoder tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<UrlDecoderEncoder />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('encodes a URL', async () => {
    const user = userEvent.setup();
    render(<UrlDecoderEncoder />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toBe(encodeURIComponent(EXAMPLES[0].data.input as string));
  });

  it('decodes an encoded URL', async () => {
    const user = userEvent.setup();
    render(<UrlDecoderEncoder />);

    await user.click(screen.getByRole('radio', { name: /decode/i }));

    const textbox = screen.getAllByRole('textbox')[0];
    await user.clear(textbox);
    await user.type(textbox, 'https%3A%2F%2Fexample.com%2Fpath%3Fa%3D1');

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toBe('https://example.com/path?a=1');
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<UrlDecoderEncoder />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
