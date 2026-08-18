import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { BulkSlugify } from '@/components/tools/bulk-slugify';
import { EXAMPLES } from '@/components/tools/bulk-slugify/examples';

describe('BulkSlugify tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<BulkSlugify />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example and generates slugs for each line', async () => {
    const user = userEvent.setup();
    render(<BulkSlugify />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    const lines = EXAMPLES[0].data.input as string;
    expect(output?.value.split('\n').length).toBe(lines.split('\n').length);
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<BulkSlugify />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
