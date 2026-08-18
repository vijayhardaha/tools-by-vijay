import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { CopyButton } from '@/components/ui/copyButton';

/**
 * Installs a fake clipboard implementation on the global navigator.
 *
 * @param {unknown} clipboard - The clipboard object to install (or undefined to clear).
 */
function mockClipboard(clipboard: unknown): void {
  Object.defineProperty(navigator, 'clipboard', { value: clipboard, configurable: true });
}

describe('CopyButton', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders with the default copy label', () => {
    render(<CopyButton text="hello" />);
    expect(screen.getByRole('button', { name: 'Copy' })).toBeInTheDocument();
  });

  it('renders custom copy and copied labels', () => {
    render(<CopyButton text="x" copyText="Copy URL" copiedText="Copied URL" />);
    expect(screen.getByRole('button', { name: 'Copy URL' })).toBeInTheDocument();
  });

  it('is disabled when text is empty', () => {
    render(<CopyButton text="" />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('is disabled when the disabled prop is set', () => {
    render(<CopyButton text="x" disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('copies the text via the Clipboard API and shows the copied state', async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    mockClipboard({ writeText });

    render(<CopyButton text="secret-value" />);
    await user.click(screen.getByRole('button', { name: 'Copy' }));

    expect(writeText).toHaveBeenCalledWith('secret-value');
    expect(await screen.findByRole('button', { name: 'Copied!' })).toBeInTheDocument();
  });

  it('resets back to the copy label after the copied timeout', async () => {
    const user = userEvent.setup();
    mockClipboard({ writeText: vi.fn().mockResolvedValue(undefined) });

    render(<CopyButton text="secret-value" />);
    await user.click(screen.getByRole('button', { name: 'Copy' }));
    expect(await screen.findByRole('button', { name: 'Copied!' })).toBeInTheDocument();

    // The 1s feedback timeout must restore the idle label.
    await new Promise((resolve) => setTimeout(resolve, 1100));
    expect(screen.getByRole('button', { name: 'Copy' })).toBeInTheDocument();
  });

  it('falls back to execCommand when the Clipboard API is unavailable', async () => {
    const user = userEvent.setup();
    mockClipboard(undefined);

    const execCommand = vi.fn().mockReturnValue(true);
    document.execCommand = execCommand as unknown as typeof document.execCommand;

    render(<CopyButton text="legacy-copy" />);
    await user.click(screen.getByRole('button', { name: 'Copy' }));

    expect(execCommand).toHaveBeenCalledWith('copy');
    expect(await screen.findByRole('button', { name: 'Copied!' })).toBeInTheDocument();
  });

  it('logs an error when both copy methods fail', async () => {
    const user = userEvent.setup();
    mockClipboard(undefined);
    document.execCommand = (() => false) as unknown as typeof document.execCommand;

    render(<CopyButton text="will-fail" />);
    await user.click(screen.getByRole('button', { name: 'Copy' }));

    expect(vi.mocked(console.error)).toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Copy' })).toBeInTheDocument();
  });

  it('does not copy when text is empty', () => {
    const writeText = vi.fn();
    mockClipboard({ writeText });

    render(<CopyButton text="" />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    // fireEvent bypasses the disabled attribute so the handler's empty-text
    // guard (line 56) executes; userEvent would silently ignore the click.
    fireEvent.click(button);
    expect(writeText).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Copy' })).toBeInTheDocument();
  });

  it('merges a custom className', () => {
    const { container } = render(<CopyButton text="x" className="custom-copy" />);
    expect(container.querySelector('button')).toHaveClass('custom-copy');
  });
});
