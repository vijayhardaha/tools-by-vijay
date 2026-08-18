import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { CategoryAbout } from '@/app/tools/_components/category-about';

describe('CategoryAbout', () => {
  it('renders about content for a known category slug', () => {
    render(<CategoryAbout slug="writing-editing" />);
    expect(screen.getByText(/writing and editing tools are essential/i)).toBeInTheDocument();
  });

  it('renders the developer suite about text', () => {
    render(<CategoryAbout slug="developer-suite" />);
    expect(screen.getByText(/developer suite provides a comprehensive set of tools/i)).toBeInTheDocument();
  });

  it('returns null for an unknown category slug', () => {
    const { container } = render(<CategoryAbout slug="unknown-category" />);
    expect(container.firstChild).toBeNull();
  });
});
