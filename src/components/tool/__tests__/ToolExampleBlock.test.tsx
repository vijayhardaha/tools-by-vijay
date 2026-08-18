import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { ToolExampleBlock } from '@/components/tool/ToolExampleBlock';

describe('ToolExampleBlock', () => {
  it('renders a button for each example with its label', () => {
    const examples = [
      { label: 'Load Example 1', data: { input: 'a' } },
      { label: 'Load Example 2', data: { input: 'b' } },
    ];
    render(<ToolExampleBlock examples={examples} onExample={() => {}} />);
    expect(screen.getByRole('button', { name: 'Load Example 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Load Example 2' })).toBeInTheDocument();
  });

  it('calls onExample with the example data when clicked', async () => {
    const user = userEvent.setup();
    const onExample = vi.fn();
    const examples = [{ label: 'Load Example 1', data: { input: 'hello', count: 5 } }];

    render(<ToolExampleBlock examples={examples} onExample={onExample} />);
    await user.click(screen.getByRole('button', { name: 'Load Example 1' }));

    expect(onExample).toHaveBeenCalledWith({ input: 'hello', count: 5 });
  });

  it('returns null when there are no examples', () => {
    const { container } = render(<ToolExampleBlock examples={[]} onExample={() => {}} />);
    expect(container.firstChild).toBeNull();
  });
});
