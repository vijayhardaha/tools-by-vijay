import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ToolCard } from '@/components/tool/ToolCard';
import { findToolBySlug } from '@/utils/tools';

describe('ToolCard', () => {
  it('renders the tool title, description, and a link to the tool page', () => {
    render(<ToolCard slug="slugify" />);
    const tool = findToolBySlug('slugify')!;

    expect(screen.getByRole('heading', { name: tool.title })).toBeInTheDocument();
    expect(screen.getByText(tool.description)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/slugify');
  });

  it('renders the tool icon for tools that have one', () => {
    render(<ToolCard slug="slugify" />);
    expect(screen.getByRole('link').querySelector('svg')).toBeInTheDocument();
  });

  it('returns null for an unknown tool slug', () => {
    const { container } = render(<ToolCard slug="not-a-real-tool" />);
    expect(container.firstChild).toBeNull();
  });

  it('applies a custom className to the card', () => {
    const { container } = render(<ToolCard slug="slugify" className="my-custom-card" />);
    expect(container.querySelector('.my-custom-card')).toBeInTheDocument();
  });
});
