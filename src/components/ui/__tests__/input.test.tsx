import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Input } from '@/components/ui/input';

describe('Input', () => {
  it('renders a text input with data-slot and sensible defaults', () => {
    const { container } = render(<Input />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('data-slot', 'input');
    expect(input).toHaveAttribute('autoComplete', 'off');
    expect(input).toHaveAttribute('spellCheck', 'false');
  });

  it('renders a custom type', () => {
    render(<Input type="number" />);
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });

  it('allows overriding autoComplete and spellCheck', () => {
    render(<Input autoComplete="on" spellCheck="true" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('autoComplete', 'on');
    expect(input).toHaveAttribute('spellCheck', 'true');
  });

  it('fires onChange when the user types', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Input onChange={onChange} />);
    await user.type(screen.getByRole('textbox'), 'abc');
    expect(onChange).toHaveBeenCalled();
    expect(screen.getByRole('textbox')).toHaveValue('abc');
  });

  it('is disabled when the disabled prop is set', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('merges a custom className', () => {
    const { container } = render(<Input className="custom-input" />);
    expect(container.querySelector('input')).toHaveClass('custom-input');
  });

  it('forwards a placeholder', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Enter text');
  });
});
