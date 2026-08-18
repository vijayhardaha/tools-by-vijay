import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { DesktopNav } from '@/components/header/DesktopNav';

describe('DesktopNav', () => {
  it('renders a link for every category', () => {
    render(<DesktopNav />);
    for (const label of [
      'Creative Generators',
      'Developer Suite',
      'Security & Privacy',
      'Web & URL',
      'Writing & Editing',
    ]) {
      expect(screen.getByRole('link', { name: new RegExp(label) })).toBeInTheDocument();
    }
  });

  it('links each category to its tools page', () => {
    render(<DesktopNav />);
    expect(screen.getByRole('link', { name: /Web & URL/ })).toHaveAttribute('href', '/tools/web-url');
  });

  it('opens the dropdown on hover and shows sub-category groups with tool links', async () => {
    const user = userEvent.setup();
    render(<DesktopNav />);

    await user.hover(screen.getByRole('link', { name: /Web & URL/ }));

    // Sub-category heading + a tool link from the dropdown.
    expect(screen.getByText('Encoding & Decoding')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Base64 Encode/ })).toBeInTheDocument();
  });

  it('closes the dropdown after the mouse leaves', async () => {
    const user = userEvent.setup();
    render(<DesktopNav />);

    await user.hover(screen.getByRole('link', { name: /Web & URL/ }));
    expect(screen.getByText('Encoding & Decoding')).toBeInTheDocument();

    await user.unhover(screen.getByRole('link', { name: /Web & URL/ }));
    // The close is debounced by 150ms; wait for it with real timers.
    await new Promise((resolve) => setTimeout(resolve, 250));
    expect(screen.queryByText('Encoding & Decoding')).not.toBeInTheDocument();
  });

  it('closes the dropdown when pressing Escape', async () => {
    const user = userEvent.setup();
    render(<DesktopNav />);

    await user.hover(screen.getByRole('link', { name: /Developer Suite/ }));
    expect(screen.getByText('Minify & Beautify')).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByText('Minify & Beautify')).not.toBeInTheDocument();
  });

  it('closes the dropdown when clicking outside the nav', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <DesktopNav />
        <button type="button">Outside</button>
      </div>
    );

    await user.hover(screen.getByRole('link', { name: /Web & URL/ }));
    expect(screen.getByText('Encoding & Decoding')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Outside' }));
    expect(screen.queryByText('Encoding & Decoding')).not.toBeInTheDocument();
  });
});
