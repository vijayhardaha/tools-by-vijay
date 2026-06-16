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
import { buildMetadata } from '@/utils/meta';
import { globalSchema, buildBreadcrumbs } from '@/utils/schema';
import { siteUrl } from '@/utils/seo';
import { findToolBySlug, getToolIcon } from '@/utils/tools';

/**
 * Retrieves tool data for the Slugify tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('slugify');

const title = tool?.seoTitle || '';
const description = tool?.seoDescription || '';
const path = `/${tool?.slug || ''}`;
const rootUrl = siteUrl();

/**
 * SEO metadata for the Slugify page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({ title, description, path });

/**
 * Schema.org structured data for the Slugify page.
 */
const schemaData = [
  ...globalSchema(),
  webPageSchema({ rootUrl, path, breadcrumb: true }, { name: title, description }),
  breadcrumbSchema({ rootUrl, items: buildBreadcrumbs(path, 'Slugify Tool') }),
];

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
          pageName={tool.name}
          title={tool.name}
          description={tool.description}
          icon={getToolIcon(tool.slug)}
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
