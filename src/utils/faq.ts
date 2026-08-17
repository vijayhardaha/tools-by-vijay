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
 * Build a Schema.org FAQPage entity from tool FAQ items.
 *
 * @param {ToolFaqItem[]} items - The FAQ entries to include.
 *
 * @returns {Record<string, unknown>} The FAQPage schema entity.
 */
export function faqPageSchema(items: ToolFaqItem[]): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.heading,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
