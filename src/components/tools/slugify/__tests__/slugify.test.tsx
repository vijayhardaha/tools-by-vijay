import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Slugify } from '@/components/tools/slugify';
import { EXAMPLES } from '@/components/tools/slugify/examples';

describe('Slugify tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<Slugify />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example into the input and generates a slug in the output', async () => {
    const user = userEvent.setup();
    render(<Slugify />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toBe('10-best-javascript-frameworks-in-2025');
  });

  it('clears the input when the clear button is clicked', async () => {
    const user = userEvent.setup();
    render(<Slugify />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    // The header icon buttons have no accessible name; the first non-example
    // button is the clear action (Random, Clear, Reset ordering).
    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
