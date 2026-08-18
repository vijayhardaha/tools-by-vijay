import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { PasswordGenerator } from '@/components/tools/password-generator';
import { EXAMPLES } from '@/components/tools/password-generator/examples';

describe('PasswordGenerator tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<PasswordGenerator />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('generates a password after loading an example', async () => {
    const user = userEvent.setup();
    render(<PasswordGenerator />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value.length).toBe(EXAMPLES[0].data.length as number);
  });

  it('shows a warning when no character type is selected', async () => {
    const user = userEvent.setup();
    render(<PasswordGenerator />);

    // Uncheck every character-type checkbox (all four start checked).
    const checked = screen.getAllByRole('checkbox').filter((checkbox) => (checkbox as HTMLInputElement).checked);
    for (const checkbox of checked) {
      await user.click(checkbox);
    }

    // The warning is rendered as the output input value.
    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toBe('Select at least one character type');
  });
});
