import type { ReactElement, ReactNode } from 'react';

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
 * Extract the plain text content from a ReactNode tree.
 *
 * Recursively walks strings, numbers, arrays, fragments, and elements,
 * dropping markup (links, styling) and collapsing whitespace. Useful for
 * deriving Schema.org FAQ answers from JSX sources without duplicating
 * content.
 *
 * @param {ReactNode} node - The ReactNode tree to convert.
 *
 * @returns {string} The extracted, trimmed plain text.
 *
 * @example
 * reactNodeToText(<>Visit the <a href="/about">About</a> page.</>) // 'Visit the About page.'
 */
export const reactNodeToText = (node: ReactNode): string => {
  const walk = (child: ReactNode): string => {
    if (child === null || child === undefined || typeof child === 'boolean') {
      return '';
    }

    if (typeof child === 'string' || typeof child === 'number') {
      return String(child);
    }

    if (Array.isArray(child)) {
      return child.map(walk).join(' ');
    }

    return walk((child as ReactElement<{ children?: ReactNode }>).props?.children);
  };

  return walk(node).replace(/\s+/g, ' ').trim();
};

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
