import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { QRCodeGenerator } from '@/components/tools/qrcode-generator';
import { EXAMPLES } from '@/components/tools/qrcode-generator/examples';

describe('QRCodeGenerator tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<QRCodeGenerator />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example and renders a QR code', async () => {
    const user = userEvent.setup();
    render(<QRCodeGenerator />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);

    // qrcode.react renders an SVG by default.
    await vi.waitFor(() => {
      expect(document.querySelector('svg')).toBeInTheDocument();
    });
  });

  it('changes the error level via the select', async () => {
    const user = userEvent.setup();
    render(<QRCodeGenerator />);

    // The trigger's accessible name is its current selection (M – Medium).
    await user.click(screen.getByRole('button', { name: /medium/i }));
    await user.click(screen.getByRole('option', { name: /high/i }));

    // The select trigger now reflects the chosen high error level.
    expect(screen.getByRole('button', { name: /high/i })).toBeInTheDocument();
  });

  it('changes the size via the slider', async () => {
    const user = userEvent.setup();
    render(<QRCodeGenerator />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    const slider = document.querySelector('input[type="range"]') as HTMLInputElement;
    expect(slider).toHaveValue(String(EXAMPLES[0].data.size));

    fireEvent.change(slider, { target: { value: '300' } });
    expect(screen.getByText(/300px/)).toBeInTheDocument();
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<QRCodeGenerator />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
