import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Slider } from '@/components/ui/slider';

describe('Slider', () => {
  it('renders a range input with default min/max/step', () => {
    render(<Slider value={50} onValueChange={vi.fn()} />);
    const input = screen.getByRole('slider');
    expect(input).toHaveAttribute('type', 'range');
    expect(input).toHaveAttribute('min', '0');
    expect(input).toHaveAttribute('max', '100');
    expect(input).toHaveAttribute('step', '1');
    expect(input).toHaveValue('50');
  });

  it('applies custom min, max, step, and value', () => {
    render(<Slider min={1} max={4} step={1} value={3} onValueChange={vi.fn()} />);
    const input = screen.getByRole('slider');
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('max', '4');
    expect(input).toHaveValue('3');
  });

  it('works as an uncontrolled slider when no value prop is given', () => {
    const onValueChange = vi.fn();
    render(<Slider min={1} max={4} step={1} onValueChange={onValueChange} />);
    const input = screen.getByRole('slider');

    // Without a value prop the component falls back to its internal state,
    // initialized from the min prop.
    expect(input).toHaveValue('1');

    fireEvent.change(input, { target: { value: '2' } });
    expect(onValueChange).toHaveBeenCalledWith(2);
  });

  it('is disabled when the disabled prop is set', () => {
    render(<Slider value={10} onValueChange={vi.fn()} disabled />);
    expect(screen.getByRole('slider')).toBeDisabled();
  });

  it('merges a custom className', () => {
    const { container } = render(<Slider value={10} onValueChange={vi.fn()} className="custom-slider" />);
    expect(container.querySelector('div')).toHaveClass('custom-slider');
  });

  it('keeps a keyboard focus ring on the thumb (WCAG 2.4.7)', () => {
    render(<Slider value={50} onValueChange={vi.fn()} />);
    const input = screen.getByRole('slider');

    expect(input.className).toContain('focus-visible:[&::-webkit-slider-thumb]:ring-ring/50');
    expect(input.className).toContain('focus-visible:[&::-moz-range-thumb]:ring-ring/50');
    expect(input.className).not.toContain('focus:outline-none');
  });
});
