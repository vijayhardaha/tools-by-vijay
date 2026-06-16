import type { JSX } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EntryContent } from '@/components/page/EntryContent';
import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { AlphabeticalLineSorter } from '@/components/tools/alphabetical-line-sorter';
import type { Tool } from '@/constants/tools';
import { buildMetadata } from '@/utils/meta';
import { findToolBySlug, getToolIcon } from '@/utils/tools';

/**
 * Retrieves tool data for the Alphabetical Line Sorter tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('alphabetical-line-sorter');

/**
 * SEO metadata for the Alphabetical Line Sorter tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  path: `/tools/${tool?.slug || ''}`,
});

/**
 * Alphabetical Line Sorter tool page component.
 * Renders the page layout with header and the Alphabetical Line Sorter tool.
 *
 * @returns {JSX.Element} The rendered Alphabetical Line Sorter tool page component.
 */
export default function AlphabeticalLineSorterToolTool(): JSX.Element {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader pageName={tool.name} title={tool.name} description={tool.description} icon={getToolIcon(tool.slug)} />
      <PageContent>
        <EntryContent tool={tool}>
          <AlphabeticalLineSorter />
        </EntryContent>
      </PageContent>
    </PageLayout>
  );
}
