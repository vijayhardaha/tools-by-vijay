import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Footer } from '@/components/footer/Footer';
import { FooterAbout } from '@/components/footer/FooterAbout';
import { FooterBottom } from '@/components/footer/FooterBottom';
import { FooterWidget } from '@/components/footer/FooterWidget';

describe('Footer', () => {
  it('renders the footer element with about, widgets, and bottom sections', () => {
    render(<Footer />);
    expect(document.querySelector('footer')).toBeInTheDocument();
    expect(screen.getAllByText(/tools by vijay/i).length).toBeGreaterThan(0);
  });
});

describe('FooterAbout', () => {
  it('renders the logo link and description', () => {
    render(<FooterAbout />);
    expect(screen.getByRole('link', { name: /site logo for tools by vijay/i })).toBeInTheDocument();
    expect(screen.getByText(/developer tools/i)).toBeInTheDocument();
  });
});

describe('FooterWidget', () => {
  it('renders a title and links', () => {
    render(<FooterWidget title="Tools" links={[{ name: 'Slugify', href: '/slugify' }]} />);
    expect(screen.getByRole('heading', { level: 3, name: 'Tools' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Slugify' })).toHaveAttribute('href', '/slugify');
  });
});

describe('FooterBottom', () => {
  it('renders the copyright notice', () => {
    render(<FooterBottom />);
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });
});
