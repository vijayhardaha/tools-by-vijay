import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  ToolInfoSection,
  ToolInfoSectionContent,
  ToolInfoSectionHeading,
  ToolInfoSectionList,
} from '@/components/tool/ToolInfoSection';

describe('ToolInfoSection', () => {
  it('wraps children in a semantic section element', () => {
    const { container } = render(
      <ToolInfoSection>
        <p>content</p>
      </ToolInfoSection>
    );
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveTextContent('content');
  });
});

describe('ToolInfoSectionHeading', () => {
  it('renders an h2 with the given id and text', () => {
    render(<ToolInfoSectionHeading id="key-features">Key Features</ToolInfoSectionHeading>);
    const heading = screen.getByRole('heading', { level: 2, name: 'Key Features' });
    expect(heading).toHaveAttribute('id', 'key-features');
  });
});

describe('ToolInfoSectionContent', () => {
  it('renders children inside the spacing container', () => {
    render(
      <ToolInfoSectionContent>
        <p>First paragraph</p>
        <p>Second paragraph</p>
      </ToolInfoSectionContent>
    );
    expect(screen.getByText('First paragraph')).toBeInTheDocument();
    expect(screen.getByText('Second paragraph')).toBeInTheDocument();
  });
});

describe('ToolInfoSectionList', () => {
  it('renders the title as a heading with the given id', () => {
    render(<ToolInfoSectionList id="use-cases" title="Common Use Cases" items={['One', 'Two']} />);
    const heading = screen.getByRole('heading', { level: 2, name: 'Common Use Cases' });
    expect(heading).toHaveAttribute('id', 'use-cases');
  });

  it('renders every item as a list item', () => {
    render(<ToolInfoSectionList id="features" title="Features" items={['Alpha', 'Beta', 'Gamma']} />);
    const list = screen.getByRole('list');
    expect(list.children).toHaveLength(3);
    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(screen.getByText('Beta')).toBeInTheDocument();
    expect(screen.getByText('Gamma')).toBeInTheDocument();
  });

  it('renders an empty list when items is empty', () => {
    render(<ToolInfoSectionList id="features" title="Features" items={[]} />);
    expect(screen.getByRole('list').children).toHaveLength(0);
  });
});
