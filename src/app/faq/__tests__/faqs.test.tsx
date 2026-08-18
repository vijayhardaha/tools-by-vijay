import { describe, expect, it } from 'vitest';

import { FAQS } from '@/app/faq/faqs';
import { reactNodeToText } from '@/utils/faq';

describe('FAQS constant', () => {
  it('contains at least one FAQ item', () => {
    expect(FAQS.length).toBeGreaterThan(0);
  });

  it('has unique heading ids', () => {
    const ids = FAQS.map((item) => item.headingId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has non-empty heading and answer on every item', () => {
    for (const item of FAQS) {
      expect(item.heading.trim().length).toBeGreaterThan(0);
      expect(reactNodeToText(item.answer).trim().length).toBeGreaterThan(0);
      expect(item.headingId.trim().length).toBeGreaterThan(0);
    }
  });

  it('uses slugified heading ids', () => {
    for (const item of FAQS) {
      expect(item.headingId).toMatch(/^[a-z0-9-]+$/);
    }
  });
});
