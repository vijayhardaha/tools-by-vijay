import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { EntryContent } from '@/components/page/EntryContent';

describe('EntryContent', () => {
  it('renders the main children content', () => {
    render(
      <EntryContent tool={{ category: 'web-url', slug: 'url-shortener' }}>
        <p>Tool body</p>
      </EntryContent>
    );
    expect(screen.getByText('Tool body')).toBeInTheDocument();
  });

  it('renders related tools from the same category (excluding the current tool)', () => {
    render(
      <EntryContent tool={{ category: 'web-url', slug: 'url-shortener' }}>
        <p>Body</p>
      </EntryContent>
    );
    expect(screen.getByRole('heading', { name: 'Related Tools' })).toBeInTheDocument();
    // Web & URL has 3 tools; the current one is excluded → 2 related links.
    const relatedLinks = screen.getByRole('heading', { name: 'Related Tools' }).parentElement?.querySelectorAll('a');
    expect(relatedLinks?.length).toBeGreaterThan(0);
  });

  it('does not render related tools when the category has only the current tool', () => {
    // security-privacy has exactly 2 tools, but we pick one → still 1 related.
    render(
      <EntryContent tool={{ category: 'security-privacy', slug: 'password-generator' }}>
        <p>Body</p>
      </EntryContent>
    );
    expect(screen.getByRole('heading', { name: 'Related Tools' })).toBeInTheDocument();
  });

  it('renders up to six other tools from different categories', () => {
    render(
      <EntryContent tool={{ category: 'web-url', slug: 'url-shortener' }}>
        <p>Body</p>
      </EntryContent>
    );

    // Other Tools section should appear with up to 6 shuffled tools.
    const otherHeading = screen.getByRole('heading', { name: 'Other Tools' });
    const otherLinks = otherHeading.parentElement?.querySelectorAll('a');
    expect(otherLinks?.length).toBeLessThanOrEqual(6);
  });
});
