import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { ToolInputHeader } from '@/components/tool/ToolInputHeader';

/**
 * Returns the rendered buttons in DOM order (Random, Clear, Reset).
 *
 * @param {HTMLElement} container - The element to search for buttons.
 *
 * @returns {HTMLButtonElement[]} The action buttons in DOM order.
 */
function getActionButtons(container: HTMLElement): HTMLButtonElement[] {
  return Array.from(container.querySelectorAll('button'));
}

describe('ToolInputHeader', () => {
  it('renders the title and description', () => {
    render(<ToolInputHeader title="Input" desc="Paste your text below" />);
    expect(screen.getByText('Input')).toBeInTheDocument();
    expect(screen.getByText('Paste your text below')).toBeInTheDocument();
  });

  it('renders nothing when no props are provided', () => {
    const { container } = render(<ToolInputHeader />);
    expect(container.firstChild).toBeNull();
  });

  it('calls onRandom when the first icon button is clicked', async () => {
    const user = userEvent.setup();
    const onRandom = vi.fn();
    const { container } = render(<ToolInputHeader onRandom={onRandom} />);

    const [randomButton] = getActionButtons(container);
    await user.click(randomButton);
    expect(onRandom).toHaveBeenCalledTimes(1);
  });

  it('calls onClear when the clear button is clicked', async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    const { container } = render(<ToolInputHeader onClear={onClear} />);

    const buttons = getActionButtons(container);
    await user.click(buttons[0]);
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('calls onReset when the reset button is clicked', async () => {
    const user = userEvent.setup();
    const onReset = vi.fn();
    const { container } = render(<ToolInputHeader onReset={onReset} />);

    const buttons = getActionButtons(container);
    await user.click(buttons[0]);
    expect(onReset).toHaveBeenCalledTimes(1);
  });

  it('renders one icon button per provided action in order', () => {
    const { container } = render(<ToolInputHeader onRandom={() => {}} onClear={() => {}} onReset={() => {}} />);
    const buttons = getActionButtons(container);
    expect(buttons).toHaveLength(3);
    expect(buttons[0].querySelector('svg')).toBeInTheDocument();
    expect(buttons[1].querySelector('svg')).toBeInTheDocument();
    expect(buttons[2].querySelector('svg')).toBeInTheDocument();
  });

  it('renders no buttons when no actions are provided', () => {
    const { container } = render(<ToolInputHeader title="Only Title" />);
    expect(getActionButtons(container)).toHaveLength(0);
  });

  it('applies additional className to the wrapper', () => {
    const { container } = render(<ToolInputHeader title="T" className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('forwards rest div props to the wrapper', () => {
    render(<ToolInputHeader title="T" data-testid="header-wrapper" />);
    expect(screen.getByTestId('header-wrapper')).toBeInTheDocument();
  });
});
