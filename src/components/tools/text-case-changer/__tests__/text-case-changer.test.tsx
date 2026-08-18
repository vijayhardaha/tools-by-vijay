import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { TextCaseChanger } from '@/components/tools/text-case-changer';
import { EXAMPLES } from '@/components/tools/text-case-changer/examples';

describe('TextCaseChanger tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<TextCaseChanger />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example and converts the text case', async () => {
    const user = userEvent.setup();
    render(<TextCaseChanger />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toHaveValue(EXAMPLES[0].data.input as string);

    const output = document.querySelector('[data-output]') as HTMLInputElement;
    expect(output?.value).toBeTruthy();
  });

  it('clears the input when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<TextCaseChanger />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getAllByRole('textbox')[0]).not.toHaveValue('');

    const buttons = screen.getAllByRole('button');
    const clearButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(clearButton);

    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
  });
});
