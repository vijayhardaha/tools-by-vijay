import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { TextToArray } from '@/components/tools/text-to-array';
import { EXAMPLES } from '@/components/tools/text-to-array/examples';

describe('TextToArray tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<TextToArray />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example and converts text into an associative JSON array', async () => {
    const user = userEvent.setup();
    render(<TextToArray />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);

    await user.click(screen.getByRole('button', { name: /convert/i }));

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toContain('"key": "united_states"');
    expect(output?.value).toContain('"value": "United States"');
  });

  it('switches the output format to PHP via the select', async () => {
    const user = userEvent.setup();
    render(<TextToArray />);

    // Load an example first (its data has no outputFormat override).
    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    await user.click(screen.getByRole('button', { name: /json/i }));
    await user.click(screen.getByRole('option', { name: 'PHP Array' }));
    await user.click(screen.getByRole('button', { name: /convert/i }));

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toContain('<?php');
  });

  it('disables the convert button when the input is empty', async () => {
    render(<TextToArray />);

    expect(screen.getByRole('button', { name: /convert/i })).toBeDisabled();
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<TextToArray />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
