import type { JSX } from 'react';

import type { Metadata } from 'next';

import { FaqContent } from '@/app/faq/_components/faq-content';
import { FAQS } from '@/app/faq/faqs';
import { getInfoPageMetadata, WithInfoPage } from '@/components/page/WithInfoPage';
import { reactNodeToText, type ToolFaqItem } from '@/utils/faq';

/**
 * SEO metadata for the FAQ page.
 */
export const metadata: Metadata = getInfoPageMetadata('faq');

/**
 * FAQ items with answers converted to plain text for the FAQPage schema.
 * Rendered answers may contain JSX markup; schema requires plain text.
 *
 * @type {ToolFaqItem[]}
 */
const schemaFaqItems: ToolFaqItem[] = FAQS.map((item) => ({
  heading: item.heading,
  headingId: item.headingId,
  answer: reactNodeToText(item.answer),
}));

/**
 * FAQ page component.
 * Server component that renders the client-side FAQ accordion content.
 *
 * @returns {JSX.Element} The rendered FAQ page.
 */
export default function FaqPage(): JSX.Element {
  return (
    <WithInfoPage slug="faq" schemaType="faq" faqItems={schemaFaqItems}>
      <FaqContent />
    </WithInfoPage>
  );
}
