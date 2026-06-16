import type { JSX } from 'react';

import { webPageSchema, breadcrumbSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EntryContent } from '@/components/page/EntryContent';
import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { DuplicateLineRemoval } from '@/components/tools/duplicate-line-removal';
import type { Tool } from '@/constants/tools';
import { buildBreadcrumbs } from '@/utils/breadcrumb';
import { getCategoryBySlug } from '@/utils/categories';
import { buildMetadata } from '@/utils/meta';
import { globalSchema } from '@/utils/schema';
import { siteUrl } from '@/utils/seo';
import { findToolBySlug, getToolIcon } from '@/utils/tools';

/**
 * Retrieves tool data for the Duplicate Line Removal tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('duplicate-line-removal');

/**
 * SEO metadata for the Duplicate Line Removal tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  path: `/${tool?.slug || ''}`,
});

const rootUrl = siteUrl();

const categoryLabel = getCategoryBySlug(tool?.category || '')?.title || 'Tools';
const categoryPath = `/tools/${tool?.category || ''}`;

const schemaData = [
  ...globalSchema(),
  webPageSchema(
    { rootUrl, path: `/${tool?.slug || ''}`, breadcrumb: true },
    { name: tool?.seoTitle, description: tool?.seoDescription }
  ),
  breadcrumbSchema({
    rootUrl,
    items: buildBreadcrumbs(`/${tool?.slug || ''}`, `${tool?.title || ''} Tool`, [
      { name: categoryLabel, path: categoryPath },
    ]),
  }),
];
/**
 * Duplicate Line Removal tool page component.
 * Renders the page layout with header and the Duplicate Line Removal tool.
 *
 * @returns {JSX.Element} The rendered Duplicate Line Removal tool page component.
 */
export default function DuplicateLineRemovalToolTool(): JSX.Element {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <>
      <JsonLd data={schemaData} />
      <PageLayout>
        <PageHeader
          pageName={tool.title}
          title={tool.title}
          description={tool.description}
          icon={getToolIcon(tool.slug)}
          breadcrumbItems={[
            { name: 'Home', path: '/' },
            { name: getCategoryBySlug(tool.category)?.title || 'Tools', path: `/tools/${tool.category}` },
            { name: tool.title, path: '' },
          ]}
        />
        <PageContent>
          <EntryContent tool={tool}>
            <DuplicateLineRemoval />
          </EntryContent>
        </PageContent>
      </PageLayout>
    </>
  );
}
