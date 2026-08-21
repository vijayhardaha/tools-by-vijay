import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { SidebarBody } from '@/components/header/sidebar/SidebarBody';
import { getAllCategories } from '@/utils/categories';

describe('SidebarBody', () => {
  it('renders each category with a toggle button', () => {
    render(<SidebarBody />);

    for (const category of getAllCategories()) {
      expect(screen.getByRole('link', { name: category.title })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: `Toggle ${category.title} tools` })).toHaveAttribute(
        'aria-expanded',
        'false'
      );
    }
  });

  it('expands a category accordion to reveal its tools and sub-categories', async () => {
    const user = userEvent.setup();
    render(<SidebarBody />);

    const category = getAllCategories()[0];
    const toggleButton = screen.getByRole('button', { name: `Toggle ${category.title} tools` });
    await user.click(toggleButton);

    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    // Sub-category headings render once open (e.g. "Code Generators" in Creative Generators).
    const toolLink = screen.getByRole('link', { name: category.title });
    expect(toolLink).toBeInTheDocument();
  });

  it('toggles the accordion closed when the caret is clicked again', async () => {
    const user = userEvent.setup();
    render(<SidebarBody />);

    const category = getAllCategories()[0];
    const toggleButton = screen.getByRole('button', { name: `Toggle ${category.title} tools` });

    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders the About and Contact links', () => {
    render(<SidebarBody />);

    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('removes collapsed submenu links from the tab order via visibility', async () => {
    const user = userEvent.setup();
    render(<SidebarBody />);

    const category = getAllCategories()[0];
    const toggleButton = screen.getByRole('button', { name: `Toggle ${category.title} tools` });
    // The animated grid wrapper lives in the same accordion block as the toggle.
    const gridWrapper = toggleButton.closest('.mb-4')?.querySelector('div.grid');

    // Collapsed: invisible (visibility:hidden) keeps links out of the tab order.
    expect(gridWrapper?.className).toContain('invisible');

    await user.click(toggleButton);

    // Expanded: visible again, links are tabbable.
    expect(gridWrapper?.className).toContain('visible');
    expect(gridWrapper?.className).not.toContain('invisible');
  });
});
