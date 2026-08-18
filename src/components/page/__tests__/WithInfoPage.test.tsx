import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { WithInfoPage } from '@/components/page/WithInfoPage';

describe('WithInfoPage', () => {
  it('renders the page title and description from SEO data', () => {
    render(
      <WithInfoPage slug="about">
        <p>About content</p>
      </WithInfoPage>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText('About content')).toBeInTheDocument();
  });

  it('renders the home breadcrumb link', () => {
    render(
      <WithInfoPage slug="faq">
        <p>Content</p>
      </WithInfoPage>
    );
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  });

  it('injects JSON-LD schema for the page', () => {
    const { container } = render(
      <WithInfoPage slug="about" schemaType="about">
        <p>Content</p>
      </WithInfoPage>
    );
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
    expect(script?.textContent).toContain('AboutPage');
  });

  it('renders the main content landmark with the content shell', () => {
    render(
      <WithInfoPage slug="contact" schemaType="contact">
        <p>Contact body</p>
      </WithInfoPage>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText('Contact body')).toBeInTheDocument();
  });

  it('injects FAQPage JSON-LD schema when schemaType is faq', () => {
    const { container } = render(
      <WithInfoPage
        slug="faq"
        schemaType="faq"
        faqItems={[{ heading: 'Is it free?', headingId: 'is-it-free', answer: 'Yes, completely free.' }]}
      >
        <p>FAQ body</p>
      </WithInfoPage>
    );

    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
    expect(script?.textContent).toContain('FAQPage');
    expect(script?.textContent).toContain('Is it free?');
  });
});
