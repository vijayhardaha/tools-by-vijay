import type { JSX } from 'react';

import { webPageSchema, breadcrumbSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EntryContent } from '@/components/page/EntryContent';
import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { Unminify } from '@/components/tools/unminify';
import type { Tool } from '@/constants/tools';
import { buildBreadcrumbs } from '@/utils/breadcrumb';
import { getCategoryBySlug } from '@/utils/categories';
import { buildMetadata } from '@/utils/meta';
import { globalSchema } from '@/utils/schema';
import { siteUrl } from '@/utils/seo';
import { findToolBySlug, getToolIcon } from '@/utils/tools';

/**
 * Retrieves tool data for the Unminify tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('unminify');

/**
 * SEO metadata for the Unminify tool page.
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
 * Unminify tool page component.
 * Renders the page layout with header and the Unminify tool.
 *
 * @returns {JSX.Element} The rendered Unminify tool page component.
 */
export default function UnminifyToolTool(): JSX.Element {
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
            <Unminify />
          </EntryContent>
        </PageContent>
      </PageLayout>
    </>
  );
}
