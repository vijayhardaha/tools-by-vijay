import { describe, expect, it } from 'vitest';

import { buildFaqPageSchema, reactNodeToText } from '@/utils/faq';

describe('reactNodeToText()', () => {
  it('returns plain text for a simple string', () => {
    expect(reactNodeToText('Hello world')).toBe('Hello world');
  });

  it('concatenates strings inside a fragment', () => {
    expect(reactNodeToText(<>Visit the About page.</>)).toBe('Visit the About page.');
  });

  it('drops markup but keeps link text', () => {
    expect(
      reactNodeToText(
        <>
          Read the <a href="/about">About</a> page.
        </>
      )
    ).toBe('Read the About page.');
  });

  it('collapses whitespace and trims the result', () => {
    expect(reactNodeToText('  line one\n    line two  ')).toBe('line one line two');
  });

  it('handles null, undefined, and booleans as empty strings', () => {
    expect(reactNodeToText(null)).toBe('');
    expect(reactNodeToText(undefined)).toBe('');
    expect(reactNodeToText(true)).toBe('');
  });
});

describe('buildFaqPageSchema()', () => {
  it('builds a FAQPage schema entity for a tool slug', () => {
    const schema = buildFaqPageSchema('slugify', [{ heading: 'Is it free?', headingId: 'is-it-free', answer: 'Yes.' }]);

    expect(schema).toBeDefined();
    expect(schema['@type']).toBe('FAQPage');
  });

  it('maps heading and answer into the schema question items', () => {
    const schema = buildFaqPageSchema('slugify', [
      { heading: 'Is it free?', headingId: 'is-it-free', answer: 'Yes.' },
      { heading: 'Is it fast?', headingId: 'is-it-fast', answer: 'Very.' },
    ]);

    const mainEntity = schema.mainEntity as unknown as Array<Record<string, unknown>>;
    expect(mainEntity).toHaveLength(2);
    expect(mainEntity[0]).toMatchObject({
      '@type': 'Question',
      name: 'Is it free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes.' },
    });
  });

  it('resolves the schema URL from the tool slug', () => {
    const schema = buildFaqPageSchema('barcode-generator', [{ heading: 'Q', headingId: 'q', answer: 'A' }]);
    const url = schema.url as string;
    expect(url).toContain('/barcode-generator');
  });

  it('handles an empty items array', () => {
    const schema = buildFaqPageSchema('slugify', []);
    expect(schema.mainEntity).toEqual([]);
  });
});
