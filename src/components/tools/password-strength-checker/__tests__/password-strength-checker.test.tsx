import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { PasswordStrengthChecker } from '@/components/tools/password-strength-checker';
import { EXAMPLES } from '@/components/tools/password-strength-checker/examples';

describe('PasswordStrengthChecker tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<PasswordStrengthChecker />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads a weak password example and reports a strength result', async () => {
    const user = userEvent.setup();
    render(<PasswordStrengthChecker />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getByRole('textbox')).toHaveValue(EXAMPLES[0].data.password as string);

    // A strength verdict is rendered after analysis.
    expect(screen.getByText(/Weak|Medium|Strong|Very Strong/)).toBeInTheDocument();
  });

  it('analyzes a strong password as it is typed', async () => {
    const user = userEvent.setup();
    render(<PasswordStrengthChecker />);

    await user.type(screen.getByRole('textbox'), 'Str0ng!P@ssw0rd');
    expect(screen.getByText(/Strong|Very Strong/)).toBeInTheDocument();
  });
});
