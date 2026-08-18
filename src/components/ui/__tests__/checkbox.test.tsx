import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Checkbox } from '@/components/ui/checkbox';

describe('Checkbox', () => {
  it('renders a checkbox input with label content', () => {
    render(<Checkbox>Accept terms</Checkbox>);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('starts unchecked and toggles internal state on click', async () => {
    const user = userEvent.setup();
    render(<Checkbox>Option</Checkbox>);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('is checked when the checked prop is provided (controlled)', () => {
    render(<Checkbox checked>Option</Checkbox>);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('calls onCheckedChange with the new value', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Checkbox onCheckedChange={onCheckedChange}>Option</Checkbox>);

    await user.click(screen.getByRole('checkbox'));
    expect(onCheckedChange).toHaveBeenCalledWith(true);

    await user.click(screen.getByRole('checkbox'));
    expect(onCheckedChange).toHaveBeenCalledWith(false);
  });

  it('is disabled when the disabled prop is set', () => {
    render(<Checkbox disabled>Option</Checkbox>);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('sets the id attribute on the input', () => {
    render(<Checkbox id="terms-checkbox">Option</Checkbox>);
    expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'terms-checkbox');
  });

  it('sets required on the input', () => {
    render(<Checkbox required>Option</Checkbox>);
    expect(screen.getByRole('checkbox')).toBeRequired();
  });
});
