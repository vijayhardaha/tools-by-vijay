import type { JSX } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import EntryWithSidebar from '@/components/page/EntryWithSidebar';
import PageContent from '@/components/page/PageContent';
import PageHeader from '@/components/page/PageHeader';
import PageLayout from '@/components/page/PageLayout';
import DuplicateLineRemovalTool from '@/components/tools/duplicate-line-removal';
import type { Tool } from '@/types';
import { buildMetadata } from '@/utils/meta';
import { findToolBySlug, getIconForTool } from '@/utils/tools';

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
  path: `/tools/${tool?.slug || ''}`,
});

/**
 * Duplicate Line Removal tool page component.
 * Renders the page layout with header and the Duplicate Line Removal tool.
 *
 * @returns {JSX.Element} The rendered Duplicate Line Removal tool page component.
 */
export default function DuplicateLineRemoval(): JSX.Element {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader title={tool.name} description={tool.description} icon={getIconForTool(tool.slug)} />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <DuplicateLineRemovalTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
}
