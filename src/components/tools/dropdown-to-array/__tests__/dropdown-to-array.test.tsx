import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { DropdownToArray } from '@/components/tools/dropdown-to-array';
import { EXAMPLES } from '@/components/tools/dropdown-to-array/examples';

describe('DropdownToArray tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<DropdownToArray />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example and converts a select into a JSON array', async () => {
    const user = userEvent.setup();
    render(<DropdownToArray />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);

    await user.click(screen.getByRole('button', { name: /convert|submit|generate/i }));

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toContain('"key"');
    expect(output?.value).toContain('"value"');
  });

  it('disables the convert button when the input is empty', async () => {
    render(<DropdownToArray />);

    expect(screen.getByRole('button', { name: /convert/i })).toBeDisabled();
  });

  it('shows an error when no select or option elements exist', async () => {
    const user = userEvent.setup();
    render(<DropdownToArray />);

    const input = screen.getAllByRole('textbox')[0];
    await user.type(input, '<div>no options here</div>');

    await user.click(screen.getByRole('button', { name: /convert|submit|generate/i }));

    expect(screen.getByText(/No select or option elements found/i)).toBeInTheDocument();
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<DropdownToArray />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
