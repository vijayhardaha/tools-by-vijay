import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ToolFAQItem, ToolFAQSection } from '@/components/tool/ToolFAQ';

describe('ToolFAQSection', () => {
  it('renders the default FAQ heading with anchor id', () => {
    render(
      <ToolFAQSection>
        <></>
      </ToolFAQSection>
    );
    const heading = screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' });
    expect(heading).toHaveAttribute('id', 'frequently-asked-questions');
  });

  it('renders child FAQ items inside the section', () => {
    render(
      <ToolFAQSection>
        <ToolFAQItem heading="Q1" headingId="q1">
          <p>A1</p>
        </ToolFAQItem>
      </ToolFAQSection>
    );
    expect(screen.getByText('Q1')).toBeInTheDocument();
    expect(screen.getByText('A1')).toBeInTheDocument();
  });

  it('renders an hr separator', () => {
    const { container } = render(
      <ToolFAQSection>
        <></>
      </ToolFAQSection>
    );
    expect(container.querySelector('hr')).toBeInTheDocument();
  });

  it('merges a custom className', () => {
    const { container } = render(
      <ToolFAQSection className="faq-extra">
        <></>
      </ToolFAQSection>
    );
    expect(container.querySelector('section')).toHaveClass('faq-extra');
  });
});

describe('ToolFAQItem', () => {
  it('renders the question as an h3 with the heading id', () => {
    render(
      <ToolFAQItem heading="How does it work?" headingId="how-it-works">
        <p>It works.</p>
      </ToolFAQItem>
    );
    const question = screen.getByRole('heading', { level: 3, name: 'How does it work?' });
    expect(question).toHaveAttribute('id', 'how-it-works');
  });

  it('renders the answer content', () => {
    render(
      <ToolFAQItem heading="Q" headingId="q">
        <p>Detailed answer text</p>
      </ToolFAQItem>
    );
    expect(screen.getByText('Detailed answer text')).toBeInTheDocument();
  });

  it('supports custom heading and wrapper class names', () => {
    render(
      <ToolFAQItem heading="Q" headingId="q" headingClassName="custom-heading" className="custom-item">
        <p>answer</p>
      </ToolFAQItem>
    );
    expect(screen.getByRole('heading', { level: 3 })).toHaveClass('custom-heading');
    expect(screen.getByText('answer').parentElement).toHaveClass('custom-item');
  });
});
