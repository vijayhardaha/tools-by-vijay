import { faqPageSchema } from '@vijayhardaha/schema-builder';

import { siteUrl } from '@/utils/seo';

/**
 * A single FAQ entry for a tool.
 *
 * @type {ToolFaqItem}
 * @property {string} heading - The question text
 * @property {string} headingId - Unique slugified id for the question (used as the HTML anchor)
 * @property {string} answer - The plain-text answer
 */
export interface ToolFaqItem {
  heading: string;
  headingId: string;
  answer: string;
}

/**
 * Build a Schema.org FAQPage entity for a tool using the
 * `faqPageSchema` builder from `@vijayhardaha/schema-builder`.
 *
 * Maps the tool FAQ items onto the package item shape and resolves the page
 * URL from the tool slug.
 *
 * @param {string} slug - The tool slug used to resolve the page path.
 * @param {ToolFaqItem[]} items - The FAQ entries to include.
 *
 * @returns {ReturnType<typeof faqPageSchema>} The FAQPage schema entity.
 */
export function buildFaqPageSchema(slug: string, items: ToolFaqItem[]): ReturnType<typeof faqPageSchema> {
  return faqPageSchema({
    rootUrl: siteUrl(),
    path: `/${slug}`,
    items: items.map((item) => ({ question: item.heading, answer: item.answer })),
  });
}
