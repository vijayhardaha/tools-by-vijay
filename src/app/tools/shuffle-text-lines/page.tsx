import type { JSX } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import EntryWithSidebar from '@/components/page/EntryWithSidebar';
import PageContent from '@/components/page/PageContent';
import PageHeader from '@/components/page/PageHeader';
import PageLayout from '@/components/page/PageLayout';
import ShuffleTextLinesTool from '@/components/tools/shuffle-text-lines';
import type { Tool } from '@/types';
import { buildMetadata } from '@/utils/meta';
import { findToolBySlug, getIconForTool } from '@/utils/tools';

/**
 * Retrieves tool data for the Shuffle Text Lines tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('shuffle-text-lines');

/**
 * SEO metadata for the Shuffle Text Lines page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  path: `/tools/${tool?.slug || ''}`,
});

/**
 * Shuffle Text Lines tool page component.
 * Renders the page layout with header and the Shuffle Text Lines tool.
 *
 * @returns {JSX.Element} The rendered Shuffle Text Lines tool page component.
 */
export default function ShuffleTextLines(): JSX.Element {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader title={tool.name} description={tool.description} icon={getIconForTool(tool.slug)} />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <ShuffleTextLinesTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
}
