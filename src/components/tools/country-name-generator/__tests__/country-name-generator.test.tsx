import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { CountryNameGenerator } from '@/components/tools/country-name-generator';
import { EXAMPLES } from '@/components/tools/country-name-generator/examples';

describe('CountryNameGenerator tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<CountryNameGenerator />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('generates names after loading an example', async () => {
    const user = userEvent.setup();
    render(<CountryNameGenerator />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const output = document.querySelector('[data-output]') as HTMLTextAreaElement;
    const count = (EXAMPLES[0].data.count as number) ?? 1;
    expect(output?.value.split('\n').filter(Boolean)).toHaveLength(count);
  });

  it('regenerates names when the random button is clicked', async () => {
    const user = userEvent.setup();
    render(<CountryNameGenerator />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    const before = (document.querySelector('[data-output]') as HTMLTextAreaElement).value;

    // The random/clear/reset icon buttons have no accessible name (tooltips
    // only); the first non-example button is the random action.
    const buttons = screen.getAllByRole('button');
    const randomButton = buttons.find((button) => !/Load Example/.test(button.textContent || ''))!;
    await user.click(randomButton);
    const after = (document.querySelector('[data-output]') as HTMLTextAreaElement).value;

    expect(after.split('\n').filter(Boolean)).toHaveLength(5);
    expect(after).not.toBe(before);
  });
});
