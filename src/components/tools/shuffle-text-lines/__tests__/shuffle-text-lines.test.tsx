import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { ShuffleTextLines } from '@/components/tools/shuffle-text-lines';
import { EXAMPLES } from '@/components/tools/shuffle-text-lines/examples';

describe('ShuffleTextLines tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<ShuffleTextLines />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example and shuffles the lines', async () => {
    const user = userEvent.setup();
    render(<ShuffleTextLines />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    const inputLines = (EXAMPLES[0].data.input as string).split('\n').sort();
    const outputLines = (output?.value ?? '').split('\n').sort();
    expect(outputLines).toEqual(inputLines);
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<ShuffleTextLines />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
