import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { CharacterCount } from '@/components/tools/character-count';
import { EXAMPLES } from '@/components/tools/character-count/examples';

describe('CharacterCount tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<CharacterCount />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example into the text area', async () => {
    const user = userEvent.setup();
    render(<CharacterCount />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getByRole('textbox')).toHaveValue(EXAMPLES[0].data.text as string);
  });

  it('updates the statistics as the user types', async () => {
    const user = userEvent.setup();
    render(<CharacterCount />);

    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'hello world');

    // 11 characters + 2 words are reported somewhere in the stats output.
    expect(screen.getAllByText('11').length).toBeGreaterThan(0);
    expect(screen.getAllByText('2').length).toBeGreaterThan(0);
  });
});
