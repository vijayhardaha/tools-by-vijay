import type { JSX } from 'react';

import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';

import { FaqContent } from '@/app/faq/_components/faq-content';
import { FAQS } from '@/app/faq/faqs';
import { getInfoPageMetadata, WithInfoPage } from '@/components/page/WithInfoPage';
import { buildFaqPageSchema } from '@/utils/faq';

/**
 * SEO metadata for the FAQ page.
 */
export const metadata: Metadata = getInfoPageMetadata('faq');

/**
 * Schema.org structured data for the FAQ page.
 *
 * @type {ReturnType<typeof buildFaqPageSchema>[]}
 */
const faqSchemaData = [buildFaqPageSchema('faq', FAQS)];

/**
 * FAQ page component.
 * Server component that renders the client-side FAQ accordion content.
 *
 * @returns {JSX.Element} The rendered FAQ page.
 */
export default function FaqPage(): JSX.Element {
  return (
    <>
      <JsonLd data={faqSchemaData} />

      <WithInfoPage slug="faq">
        <FaqContent />
      </WithInfoPage>
    </>
  );
}
