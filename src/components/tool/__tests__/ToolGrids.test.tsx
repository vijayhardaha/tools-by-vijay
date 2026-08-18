import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ToolGridSection } from '@/components/tool/ToolGrids';
import { getToolsByCategory } from '@/utils/tools';

describe('ToolGridSection', () => {
  it('renders the heading and one card per tool', () => {
    const tools = getToolsByCategory('web-url');
    render(<ToolGridSection heading="Web & URL" tools={tools} />);

    expect(screen.getByRole('heading', { name: 'Web & URL' })).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(tools.length);
  });

  it('links each card to its tool page', () => {
    const tools = getToolsByCategory('web-url');
    render(<ToolGridSection heading="Web & URL" tools={tools} />);
    expect(screen.getByRole('link', { name: /Base64 Encode/ })).toHaveAttribute('href', '/base64-encode-decode');
  });

  it('renders an hr separator', () => {
    const { container } = render(<ToolGridSection heading="H" tools={getToolsByCategory('web-url')} />);
    expect(container.querySelector('hr')).toBeInTheDocument();
  });

  it('renders nothing when the tools array is empty', () => {
    const { container } = render(<ToolGridSection heading="Empty" tools={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
