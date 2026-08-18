import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { BarcodeGenerator } from '@/components/tools/barcode-generator';
import { EXAMPLES } from '@/components/tools/barcode-generator/examples';

describe('BarcodeGenerator tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<BarcodeGenerator />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example and renders a barcode canvas', async () => {
    const user = userEvent.setup();
    render(<BarcodeGenerator />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);

    // react-barcode renders the barcode as an SVG.
    await vi.waitFor(() => {
      expect(document.querySelector('svg')).toBeInTheDocument();
    });
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<BarcodeGenerator />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
