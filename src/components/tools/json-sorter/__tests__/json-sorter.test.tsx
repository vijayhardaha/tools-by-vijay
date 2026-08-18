import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { JsonSorter } from '@/components/tools/json-sorter';
import { EXAMPLES } from '@/components/tools/json-sorter/examples';

describe('JsonSorter tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<JsonSorter />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example and sorts the JSON', async () => {
    const user = userEvent.setup();
    render(<JsonSorter />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);

    await user.click(screen.getByRole('button', { name: /sort/i }));

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    // jsonabc sorts object keys alphabetically: apple should come first.
    expect(output?.value).toContain('"apple"');
    expect(output?.value.indexOf('"apple"')).toBeLessThan(output.value.indexOf('"zebra"'));
  });

  it('shows an error for invalid JSON', async () => {
    const user = userEvent.setup();
    render(<JsonSorter />);

    const input = screen.getAllByRole('textbox')[0];
    // fireEvent avoids user-event keyboard parsing of the brace characters.
    fireEvent.change(input, { target: { value: '{ not valid json' } });

    await user.click(screen.getByRole('button', { name: /sort/i }));

    expect(screen.getAllByText(/Invalid JSON/i).length).toBeGreaterThan(0);
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<JsonSorter />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
