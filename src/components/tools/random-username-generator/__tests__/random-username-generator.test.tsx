import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { RandomUsernameGenerator } from '@/components/tools/random-username-generator';
import { EXAMPLES } from '@/components/tools/random-username-generator/examples';

describe('RandomUsernameGenerator tool', () => {
  it('renders example buttons and the info/FAQ sections', () => {
    render(<RandomUsernameGenerator />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('generates usernames after loading an example', async () => {
    const user = userEvent.setup();
    render(<RandomUsernameGenerator />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    const output = document.querySelector('[data-output]') as HTMLTextAreaElement;
    expect(output?.value.split('\n').filter(Boolean)).toHaveLength(EXAMPLES[0].data.count as number);
  });

  it('loads a different example with a different count', async () => {
    const user = userEvent.setup();
    render(<RandomUsernameGenerator />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[1].label }));
    const output = document.querySelector('[data-output]') as HTMLTextAreaElement;
    expect(output?.value.split('\n').filter(Boolean)).toHaveLength(EXAMPLES[1].data.count as number);
  });
});
