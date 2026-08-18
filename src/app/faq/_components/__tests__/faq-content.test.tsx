import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { FaqContent } from '@/app/faq/_components/faq-content';

describe('FaqContent', () => {
  it('renders the accordion question buttons', () => {
    render(<FaqContent />);
    // At least one question button exists, and none are open by default.
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
  });

  it('expands an item when its question button is clicked', async () => {
    const user = userEvent.setup();
    render(<FaqContent />);

    const buttons = screen.getAllByRole('button');
    const firstQuestion = buttons[0];
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');

    await user.click(firstQuestion);
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');
  });

  it('collapses an open item when clicked again', async () => {
    const user = userEvent.setup();
    render(<FaqContent />);

    const firstQuestion = screen.getAllByRole('button')[0];
    await user.click(firstQuestion);
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');

    await user.click(firstQuestion);
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
  });
});
