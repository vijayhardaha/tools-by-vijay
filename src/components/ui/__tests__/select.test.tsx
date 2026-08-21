import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Select } from '@/components/ui/select';

const options = [
  { value: 'code128', label: 'CODE128' },
  { value: 'ean13', label: 'EAN13' },
  { value: 'disabled-opt', label: 'Disabled Option', disabled: true },
];

describe('Select', () => {
  it('shows the placeholder when nothing is selected', () => {
    render(<Select options={options} placeholder="Pick a format" />);
    expect(screen.getByRole('button', { name: 'Pick a format' })).toBeInTheDocument();
  });

  it('shows the label of the default value', () => {
    render(<Select options={options} defaultValue="ean13" />);
    expect(screen.getByRole('button', { name: 'EAN13' })).toBeInTheDocument();
  });

  it('shows the label of a controlled value', () => {
    render(<Select options={options} value="code128" />);
    expect(screen.getByRole('button', { name: 'CODE128' })).toBeInTheDocument();
  });

  it('opens the listbox on click and lists all options', async () => {
    const user = userEvent.setup();
    render(<Select options={options} />);

    await user.click(screen.getByRole('button'));
    const listbox = screen.getByRole('listbox');
    expect(listbox).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(3);
  });

  it('selects an option by click and calls onValueChange', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Select options={options} onValueChange={onValueChange} />);

    await user.click(screen.getByRole('button'));
    await user.click(screen.getByRole('option', { name: 'CODE128' }));

    expect(onValueChange).toHaveBeenCalledWith('code128');
    expect(screen.getByRole('button', { name: 'CODE128' })).toBeInTheDocument();
    // Dropdown closes after selection.
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('does not select a disabled option', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Select options={options} onValueChange={onValueChange} />);

    await user.click(screen.getByRole('button'));
    const disabledOption = screen.getByRole('option', { name: 'Disabled Option' });
    expect(disabledOption).toHaveAttribute('aria-disabled', 'true');

    await user.click(disabledOption);
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('closes the dropdown when clicking outside', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Select options={options} />
        <button type="button">Outside</button>
      </div>
    );

    await user.click(screen.getByRole('button', { name: 'Select an option' }));
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Outside' }));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('supports keyboard navigation with arrow keys and Enter', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Select options={options} onValueChange={onValueChange} />);

    await user.click(screen.getByRole('button', { name: 'Select an option' }));

    // ArrowDown moves the highlight from the first to the second option.
    await user.keyboard('{ArrowDown}{Enter}');
    expect(onValueChange).toHaveBeenCalledWith('ean13');
  });

  it('closes the dropdown on Escape', async () => {
    const user = userEvent.setup();
    render(<Select options={options} />);

    await user.click(screen.getByRole('button'));
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('is disabled when the disabled prop is set', () => {
    render(<Select options={options} disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('shows a no-options message when the option list is empty', async () => {
    const user = userEvent.setup();
    render(<Select options={[]} />);

    await user.click(screen.getByRole('button'));
    expect(screen.getByText('No options available')).toBeInTheDocument();
  });

  it('applies the id prop to the trigger button so Label htmlFor associates', () => {
    render(<Select id="format-select" options={options} />);

    const trigger = screen.getByRole('button');
    expect(trigger).toHaveAttribute('id', 'format-select');
    expect(trigger.parentElement).not.toHaveAttribute('id');
  });

  it('generates unique listbox ids so multiple Selects can coexist', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Select options={options} />
        <Select options={options} />
      </>
    );

    const triggers = screen.getAllByRole('button');
    const controls = triggers.map((trigger) => trigger.getAttribute('aria-controls'));

    expect(controls[0]).toBeTruthy();
    expect(controls[0]).not.toBe(controls[1]);

    await user.click(triggers[0]);
    const listbox = screen.getByRole('listbox');
    expect(listbox.id).toBe(controls[0]);
    expect(listbox.getAttribute('aria-activedescendant')).toContain(`${controls[0]}-option-`);
  });
});
