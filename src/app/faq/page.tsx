import type { JSX } from 'react';

import { breadcrumbSchema, webPageSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';

import { FaqContent } from '@/app/faq/_components/faq-content';
import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { buildMetadata } from '@/utils/meta';
import { globalSchema, buildBreadcrumbs } from '@/utils/schema';
import { siteUrl, getSeoByPath } from '@/utils/seo';

const rootUrl = siteUrl();
const { seoTitle, seoDescription, path: seoPath } = getSeoByPath('/faq')!;

const schemaData = [
  ...globalSchema(),
  webPageSchema({ rootUrl, path: seoPath, breadcrumb: true }, { name: seoTitle, description: seoDescription }),
  breadcrumbSchema({ rootUrl, items: buildBreadcrumbs(seoPath, 'FAQ') }),
];

/**
 * SEO metadata for the FAQ page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({ seoTitle, seoDescription, path: seoPath });

/**
 * FAQ page component.
 * Server component that renders the client-side FAQ accordion content.
 *
 * @returns {JSX.Element} The rendered FAQ page.
 */
export default function Faq(): JSX.Element {
  return (
    <>
      <JsonLd data={schemaData} />
      <PageLayout>
        <PageHeader
          pageName="FAQ"
          title="Frequently Asked Questions"
          description="Find quick answers to common questions about Tools by Vijay — our free online developer utilities."
        />
        <PageContent>
          <FaqContent />
        </PageContent>
      </PageLayout>
    </>
  );
}
