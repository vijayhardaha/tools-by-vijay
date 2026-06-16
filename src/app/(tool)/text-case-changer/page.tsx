import type { JSX } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EntryContent } from '@/components/page/EntryContent';
import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { TextCaseChanger } from '@/components/tools/text-case-changer';
import type { Tool } from '@/constants/tools';
import { getCategoryBySlug } from '@/utils/categories';
import { buildMetadata } from '@/utils/meta';
import { findToolBySlug, getToolIcon } from '@/utils/tools';
import { webPageSchema, breadcrumbSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import { globalSchema, buildBreadcrumbs } from '@/utils/schema';
import { siteUrl } from '@/utils/seo';

/**
 * Retrieves tool data for the Text Case Changer tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('text-case-changer');

/**
 * SEO metadata for the Text Case Changer tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  path: `/${tool?.slug || ''}`,
});

const rootUrl = siteUrl();

const categoryLabel = getCategoryBySlug(tool?.category || '')?.label || 'Tools';
const categoryPath = `/tools/${tool?.category || ''}`;

const schemaData = [
  ...globalSchema(),
  webPageSchema(
    { rootUrl, path: `/${tool?.slug || ''}`, breadcrumb: true },
    { name: tool?.seoTitle, description: tool?.seoDescription }
  ),
  breadcrumbSchema({
    rootUrl,
    items: buildBreadcrumbs(`/${tool?.slug || ''}`, `${tool?.name || ''} Tool`, [
      { name: categoryLabel, path: categoryPath },
    ]),
  }),
];
/**
 * Text Case Changer tool page component.
 * Renders the page layout with header and the Text Case Changer tool.
 *
 * @returns {JSX.Element} The rendered Text Case Changer tool page component.
 */
export default function TextCaseChangerToolTool(): JSX.Element {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <>
      <JsonLd data={schemaData} />
      <PageLayout>
        <PageHeader
          pageName={tool.name}
          title={tool.name}
          description={tool.description}
          icon={getToolIcon(tool.slug)}
          breadcrumbItems={[
            { label: 'Home', href: '/' },
            { label: getCategoryBySlug(tool.category)?.label || 'Tools', href: `/tools/${tool.category}` },
            { label: tool.name },
          ]}
        />
        <PageContent>
          <EntryContent tool={tool}>
            <TextCaseChanger />
          </EntryContent>
        </PageContent>
      </PageLayout>
    </>
  );
}
