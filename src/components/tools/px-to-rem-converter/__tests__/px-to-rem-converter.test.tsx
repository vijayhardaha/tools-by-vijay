import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { PxToRemConverter } from '@/components/tools/px-to-rem-converter';
import { EXAMPLES } from '@/components/tools/px-to-rem-converter/examples';

describe('PxToRemConverter tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<PxToRemConverter />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('converts 16px to 1rem with the default base font size', async () => {
    const user = userEvent.setup();
    render(<PxToRemConverter />);

    await user.click(screen.getByRole('button', { name: 'Load Example 1' }));

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toBe('1.00rem');
  });

  it('converts 28px with a 14px base font size to 2rem', async () => {
    const user = userEvent.setup();
    render(<PxToRemConverter />);

    await user.click(screen.getByRole('button', { name: 'Load Example 4' }));

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toBe('2.00rem');
  });

  it('shows an empty output for an empty or invalid px value', async () => {
    const user = userEvent.setup();
    render(<PxToRemConverter />);

    const input = screen.getByRole('spinbutton', { name: 'Pixel value input' });
    await user.type(input, 'not-a-number');

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toBe('');
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<PxToRemConverter />);

    await user.click(screen.getByRole('button', { name: 'Load Example 1' }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
