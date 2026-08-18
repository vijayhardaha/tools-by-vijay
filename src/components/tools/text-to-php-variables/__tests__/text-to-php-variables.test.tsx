import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { TextToPhpVariables } from '@/components/tools/text-to-php-variables';
import { EXAMPLES } from '@/components/tools/text-to-php-variables/examples';

describe('TextToPhpVariables tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<TextToPhpVariables />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example and generates PHP variables in snake_case', async () => {
    const user = userEvent.setup();
    render(<TextToPhpVariables />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    const lines = (output?.value ?? '').split('\n');
    expect(lines.length).toBeGreaterThan(0);
    expect(lines[0]).toMatch(/^\$[a-z_]+ = '';$/);
  });

  it('shows an error for whitespace-only input', async () => {
    const user = userEvent.setup();
    render(<TextToPhpVariables />);

    const input = screen.getAllByRole('textbox')[0];
    await user.type(input, '   ');

    expect(screen.getByText('Please enter valid text content.')).toBeInTheDocument();
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<TextToPhpVariables />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
