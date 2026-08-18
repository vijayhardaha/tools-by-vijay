import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { DuplicateLineRemoval } from '@/components/tools/duplicate-line-removal';
import { EXAMPLES } from '@/components/tools/duplicate-line-removal/examples';

describe('DuplicateLineRemoval tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<DuplicateLineRemoval />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example and removes duplicate lines', async () => {
    const user = userEvent.setup();
    render(<DuplicateLineRemoval />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toBeTruthy();
  });

  it('removes duplicate lines from typed input', async () => {
    const user = userEvent.setup();
    render(<DuplicateLineRemoval />);

    const input = screen.getAllByRole('textbox')[0];
    await user.type(input, 'apple\nbanana\napple');

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    const lines = output?.value.split('\n') ?? [];
    expect(lines.filter((line) => line === 'apple').length).toBe(1);
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<DuplicateLineRemoval />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
