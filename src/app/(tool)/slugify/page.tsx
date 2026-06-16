import type { JSX } from 'react';

import { webPageSchema, breadcrumbSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EntryContent } from '@/components/page/EntryContent';
import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { Slugify } from '@/components/tools/slugify';
import type { Tool } from '@/constants/tools';
import type { BreadcrumbItem } from '@/utils/breadcrumb';
import { buildBreadcrumbs } from '@/utils/breadcrumb';
import { getCategoryBySlug } from '@/utils/categories';
import { buildMetadata } from '@/utils/meta';
import { globalSchema } from '@/utils/schema';
import { siteUrl, getSeoByPath } from '@/utils/seo';
import { findToolBySlug, getToolIcon } from '@/utils/tools';

/**
 * Retrieves tool data for the Slugify tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('slugify');

const { seoTitle = '', seoDescription = '', path: seoPath = '' } = getSeoByPath(`/${tool?.slug || ''}`) || {};
const rootUrl = siteUrl();

const categoryLabel = getCategoryBySlug(tool?.category || '')?.title || 'Tools';
const categoryPath = `/tools/${tool?.category || ''}`;

/**
 * Breadcrumb items for the tool page: Home / Category / Tool Name.
 *
 * @type {BreadcrumbItem[]}
 */
const breadcrumbItems: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: categoryLabel, path: categoryPath },
  { name: tool?.title || '', path: '' },
];

/**
 * Schema.org structured data for the Slugify page.
 */
const schemaData = [
  ...globalSchema(),
  webPageSchema({ rootUrl, path: seoPath, breadcrumb: true }, { name: seoTitle, description: seoDescription }),
  breadcrumbSchema({
    rootUrl,
    items: buildBreadcrumbs(seoPath, `${tool?.title || ''} Tool`, [{ name: categoryLabel, path: categoryPath }]),
  }),
];

/**
 * SEO metadata for the Slugify page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({ title: seoTitle, description: seoDescription, path: seoPath });

/**
 * Slugify tool page component.
 * Renders the page layout with header and the Slugify tool.
 *
 * @returns {JSX.Element} The rendered Slugify tool page component.
 */
export default function SlugifyToolTool(): JSX.Element {
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
          breadcrumbItems={breadcrumbItems}
        />
        <PageContent>
          <EntryContent tool={tool}>
            <Slugify />
          </EntryContent>
        </PageContent>
      </PageLayout>
    </>
  );
}
