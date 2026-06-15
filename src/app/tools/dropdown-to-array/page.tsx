import type { JSX } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import EntryWithSidebar from '@/components/page/EntryWithSidebar';
import PageContent from '@/components/page/PageContent';
import PageHeader from '@/components/page/PageHeader';
import PageLayout from '@/components/page/PageLayout';
import DropdownToArrayTool from '@/components/tools/dropdown-to-array';
import type { Tool } from '@/types';
import { buildMetadata } from '@/utils/meta';
import { findToolBySlug, getIconForTool } from '@/utils/tools';

/**
 * Retrieves tool data for the Dropdown to Array tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('dropdown-to-array');

/**
 * SEO metadata for the Dropdown to Array tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  path: `/tools/${tool?.slug || ''}`,
});

/**
 * Dropdown to Array tool page component.
 * Renders the page layout with header and the Dropdown to Array tool.
 *
 * @returns {JSX.Element} The rendered Dropdown to Array tool page component.
 */
export default function DropdownToArray(): JSX.Element {
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
          <DropdownToArrayTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
}
