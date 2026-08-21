import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Container } from '@/components/ui/container';
import { HelpTip } from '@/components/ui/helptip';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { RadioBox } from '@/components/ui/radiobox';
import { Slider } from '@/components/ui/slider';
import { TooltipProvider } from '@/components/ui/tooltip';

describe('Label', () => {
  it('renders label text associated with a control via htmlFor', () => {
    render(
      <>
        <Label htmlFor="name">Name</Label>
        <input id="name" />
      </>
    );
    const label = screen.getByText('Name');
    expect(label).toHaveAttribute('for', 'name');
    expect(label.tagName).toBe('LABEL');
  });

  it('merges a custom className', () => {
    const { container } = render(
      <Label htmlFor="x" className="custom-label">
        X
      </Label>
    );
    expect(container.querySelector('label')).toHaveClass('custom-label');
  });
});

describe('Container', () => {
  it('renders children in a centered max-width wrapper', () => {
    const { container } = render(<Container>Content</Container>);
    expect(container.firstChild).toHaveTextContent('Content');
    expect(container.firstChild).toHaveClass('mx-auto', 'max-w-7xl');
  });

  it('merges a custom className and forwards props', () => {
    render(
      <Container className="extra" data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId('container')).toHaveClass('extra');
  });
});

describe('Slider', () => {
  it('renders a range input with min, max, and step', () => {
    const { container } = render(<Slider min={1} max={150} step={1} />);
    const input = container.querySelector('input[type="range"]');
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('max', '150');
    expect(input).toHaveAttribute('step', '1');
  });

  it('uses the provided value and calls onValueChange on change', () => {
    const onValueChange = vi.fn();
    const { container } = render(<Slider value={10} onValueChange={onValueChange} />);

    const input = container.querySelector('input[type="range"]')!;
    expect(input).toHaveValue('10');

    fireEvent.change(input, { target: { value: '25' } });
    expect(onValueChange).toHaveBeenCalledWith(25);
  });

  it('defaults min, max, and step when not provided', () => {
    const { container } = render(<Slider />);
    const input = container.querySelector('input[type="range"]');
    expect(input).toHaveAttribute('min', '0');
    expect(input).toHaveAttribute('max', '100');
  });

  it('is disabled when the disabled prop is set', () => {
    const { container } = render(<Slider disabled />);
    expect(container.querySelector('input[type="range"]')).toBeDisabled();
  });
});

describe('RadioBox', () => {
  it('renders a radio input with label content', () => {
    render(<RadioBox name="group">Choice A</RadioBox>);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('name', 'group');
    expect(screen.getByText('Choice A')).toBeInTheDocument();
  });

  it('toggles internal state on click', async () => {
    const user = userEvent.setup();
    render(<RadioBox>Choice</RadioBox>);

    const radio = screen.getByRole('radio');
    await user.click(radio);
    expect(radio).toBeChecked();
  });

  it('calls onCheckedChange when toggled', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<RadioBox onCheckedChange={onCheckedChange}>Choice</RadioBox>);

    await user.click(screen.getByRole('radio'));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('respects a controlled checked value', () => {
    render(<RadioBox checked>Choice</RadioBox>);
    expect(screen.getByRole('radio')).toBeChecked();
  });
});

describe('Progress', () => {
  it('renders a progressbar with the value in aria-valuenow', () => {
    render(<Progress value={60} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
    expect(bar).toHaveAttribute('aria-valuenow', '60');
  });

  it('defaults to zero and applies indicator classes', () => {
    const { container } = render(<Progress />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    expect(container.querySelector('.bg-primary')).toBeInTheDocument();
  });

  it('accepts custom indicator classes', () => {
    const { container } = render(<Progress value={50} indicatorClassName="custom-indicator" />);
    expect(container.querySelector('.custom-indicator')).toBeInTheDocument();
  });
});

describe('HelpTip', () => {
  it('renders a focusable trigger whose accessible name is the help text', () => {
    // The app wraps everything in a TooltipProvider at the layout level.
    render(
      <TooltipProvider>
        <HelpTip text="Explains the option" />
      </TooltipProvider>
    );

    expect(screen.getByRole('button', { name: 'Explains the option' })).toBeInTheDocument();
    expect(screen.getByTestId('helptip-icon')).toHaveAttribute('aria-hidden', 'true');
  });
});
