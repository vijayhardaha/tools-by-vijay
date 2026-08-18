import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SidebarFooter } from '@/components/header/sidebar/SidebarFooter';
import { socialMediaLinks } from '@/constants/links';

describe('SidebarFooter', () => {
  it('renders a social link for every social media platform', () => {
    render(<SidebarFooter />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(socialMediaLinks.length);
  });

  it('renders each link with its name as the accessible label', () => {
    render(<SidebarFooter />);
    for (const social of socialMediaLinks) {
      expect(screen.getByRole('link', { name: social.name })).toHaveAttribute('href', social.url);
    }
  });

  it('opens social links in a new tab', () => {
    render(<SidebarFooter />);
    const first = screen.getAllByRole('link')[0];
    expect(first).toHaveAttribute('target', '_blank');
    expect(first).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
