import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

describe('Card', () => {
  it('renders children in a div with data-slot card', () => {
    const { container } = render(<Card>Body</Card>);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent('Body');
  });

  it('renders a custom root element via the component prop', () => {
    const { container } = render(<Card component="article">Article</Card>);
    expect(container.querySelector('article')).toBeInTheDocument();
  });

  it('merges a custom className', () => {
    const { container } = render(<Card className="custom-card">X</Card>);
    expect(container.querySelector('[data-slot="card"]')).toHaveClass('custom-card');
  });

  it('forwards extra div props', () => {
    render(<Card data-testid="my-card">X</Card>);
    expect(screen.getByTestId('my-card')).toBeInTheDocument();
  });
});

describe('CardHeader', () => {
  it('renders its children', () => {
    render(<CardHeader>Header content</CardHeader>);
    expect(screen.getByText('Header content')).toBeInTheDocument();
  });
});

describe('CardTitle', () => {
  it('renders an h2 heading by default with the title text', () => {
    render(<CardTitle>My Title</CardTitle>);
    const heading = screen.getByRole('heading', { level: 2, name: 'My Title' });
    expect(heading).toHaveAttribute('data-slot', 'card-title');
  });

  it('renders a custom heading level via the component prop', () => {
    render(<CardTitle component="h3">Sub Title</CardTitle>);
    expect(screen.getByRole('heading', { level: 3, name: 'Sub Title' })).toBeInTheDocument();
  });
});

describe('CardDescription', () => {
  it('renders a paragraph with the description text', () => {
    const { container } = render(<CardDescription>Some description</CardDescription>);
    const desc = container.querySelector('[data-slot="card-description"]');
    expect(desc).toHaveTextContent('Some description');
    expect(desc?.tagName).toBe('P');
  });
});

describe('CardContent', () => {
  it('renders children inside the content wrapper', () => {
    const { container } = render(<CardContent>Content body</CardContent>);
    expect(container.querySelector('[data-slot="card-content"]')).toHaveTextContent('Content body');
  });
});
