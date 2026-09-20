import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { HtmlCleaner } from '@/components/tools/html-cleaner';
import { EXAMPLES } from '@/components/tools/html-cleaner/examples';

/**
 * Returns the main HTML input textarea (the first textbox in the form).
 *
 * @returns {HTMLTextAreaElement} The HTML input textarea.
 */
const getHtmlInput = (): HTMLTextAreaElement => screen.getAllByRole('textbox')[0] as HTMLTextAreaElement;

/**
 * Returns the cleaned output textarea.
 *
 * @returns {HTMLTextAreaElement | null} The output textarea, if rendered.
 */
const getOutput = (): HTMLTextAreaElement | null => document.querySelector('[data-output]');

describe('HtmlCleaner tool', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders example buttons and the info/FAQ sections', () => {
    render(<HtmlCleaner />);
    expect(screen.getByRole('button', { name: EXAMPLES[0].label })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('loads an example into the input', async () => {
    const user = userEvent.setup();
    render(<HtmlCleaner />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    expect(getHtmlInput()).toHaveValue(EXAMPLES[0].data.input as string);
  });

  it('applies the example preset to the option controls', async () => {
    const user = userEvent.setup();
    render(<HtmlCleaner />);

    expect(screen.getByLabelText(/Remove style attributes/i)).not.toBeChecked();

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));

    expect(screen.getByLabelText(/Remove style attributes/i)).toBeChecked();
    expect(screen.getByLabelText(/Remove class attributes/i)).toBeChecked();
    expect(screen.getByLabelText(/Remove id attributes/i)).toBeChecked();
  });

  it('switches the preset selector to custom after a manual option edit', async () => {
    const user = userEvent.setup();
    render(<HtmlCleaner />);

    expect(screen.queryByText(/Your own combination of options/i)).not.toBeInTheDocument();

    await user.click(screen.getByLabelText(/Remove style attributes/i));

    expect(screen.getByText(/Your own combination of options/i)).toBeInTheDocument();
  });

  it('cleans HTML in the browser and shows the output', async () => {
    const user = userEvent.setup();
    render(<HtmlCleaner />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    await user.click(screen.getByRole('button', { name: /clean html/i }));

    await waitFor(() => {
      const output = getOutput();
      expect(output?.value).toContain('<strong>Quarterly Report</strong>');
    });

    const output = getOutput();
    expect(output?.value).not.toContain('style=');
    expect(output?.value).not.toContain('class=');
    // The change report is rendered alongside the output.
    expect(screen.getByText(/styles removed/i)).toBeInTheDocument();
  });

  it('reports an error for oversized input instead of processing it', async () => {
    render(<HtmlCleaner />);

    fireEvent.change(getHtmlInput(), { target: { value: 'a'.repeat(1_000_001) } });
    fireEvent.click(screen.getByRole('button', { name: /clean html/i }));

    await waitFor(() => expect(screen.getByText(/too large/i)).toBeInTheDocument());
    expect(getOutput()).toBeNull();
  });

  it('renders the output card even when the result is legitimately empty', async () => {
    render(<HtmlCleaner />);

    fireEvent.change(getHtmlInput(), { target: { value: '<p></p>' } });
    fireEvent.click(screen.getByRole('button', { name: /clean html/i }));

    await waitFor(() => expect(screen.getByText('Cleaned Output')).toBeInTheDocument());
    expect(getOutput()).toHaveValue('');
    expect(screen.getByText(/Output is empty/i)).toBeInTheDocument();
  });

  it('clears the input and output when clear is clicked', async () => {
    const user = userEvent.setup();
    render(<HtmlCleaner />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(getHtmlInput()).not.toHaveValue('');

    await user.click(screen.getByRole('button', { name: 'Clear' }));

    expect(getHtmlInput()).toHaveValue('');
    expect(getOutput()).toBeNull();
  });

  it('resets options and the preset when reset is clicked', async () => {
    const user = userEvent.setup();
    render(<HtmlCleaner />);

    await user.click(screen.getByRole('button', { name: EXAMPLES[0].label }));
    expect(screen.getByLabelText(/Remove style attributes/i)).toBeChecked();

    await user.click(screen.getByRole('button', { name: 'Reset' }));

    expect(screen.getByLabelText(/Remove style attributes/i)).not.toBeChecked();
    expect(getHtmlInput()).toHaveValue('');
  });
});
