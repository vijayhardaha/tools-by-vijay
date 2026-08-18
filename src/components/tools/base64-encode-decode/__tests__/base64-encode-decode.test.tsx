import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Base64EncodeDecode } from '@/components/tools/base64-encode-decode';
import { EXAMPLES } from '@/components/tools/base64-encode-decode/examples';

describe('Base64EncodeDecode tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<Base64EncodeDecode />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('encodes text to base64', async () => {
    const user = userEvent.setup();
    render(<Base64EncodeDecode />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toBe(Buffer.from(EXAMPLES[0].data.input as string).toString('base64'));
  });

  it('decodes base64 back to the original text', async () => {
    const user = userEvent.setup();
    render(<Base64EncodeDecode />);

    await user.click(screen.getByRole('radio', { name: /decode/i }));

    const textbox = screen.getAllByRole('textbox')[0];
    await user.clear(textbox);
    await user.type(textbox, 'SGVsbG8gV29ybGQ=');

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toBe('Hello World');
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<Base64EncodeDecode />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
