import type { JSX } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import EntryWithSidebar from '@/components/page/EntryWithSidebar';
import PageContent from '@/components/page/PageContent';
import PageHeader from '@/components/page/PageHeader';
import PageLayout from '@/components/page/PageLayout';
import CountryNameGeneratorTool from '@/components/tools/country-name-generator';
import type { Tool } from '@/types';
import { buildMetadata } from '@/utils/meta';
import { findToolBySlug, getIconForTool } from '@/utils/tools';

/**
 * Retrieves tool data for the Country Name Generator tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('country-name-generator');

/**
 * SEO metadata for the Country Name Generator tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  path: `/tools/${tool?.slug || ''}`,
});

/**
 * Country Name Generator tool page component.
 * Renders the page layout with header and the Country Name Generator tool.
 *
 * @returns {JSX.Element} The rendered Country Name Generator tool page component.
 */
export default function CountryNameGenerator(): JSX.Element {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader
        pageName={tool.name}
        title={tool.name}
        description={tool.description}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <CountryNameGeneratorTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
}
