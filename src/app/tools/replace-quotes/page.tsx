import type { JSX } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import EntryWithSidebar from '@/components/page/EntryWithSidebar';
import PageContent from '@/components/page/PageContent';
import PageHeader from '@/components/page/PageHeader';
import PageLayout from '@/components/page/PageLayout';
import ReplaceQuotesTool from '@/components/tools/replace-quotes';
import type { Tool } from '@/types';
import { generateMeta } from '@/utils/seoUtils';
import { findToolBySlug, getIconForTool } from '@/utils/toolUtils';

/**
 * Retrieves tool data for the Replace Quotes tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('replace-quotes');

/**
 * SEO metadata for the Replace Quotes tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = generateMeta({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  slug: tool?.slug || '',
});

/**
 * Replace Quotes tool page component.
 * Renders the page layout with header and the Replace Quotes tool.
 *
 * @returns {JSX.Element} The rendered Replace Quotes tool page component.
 */
export default function ReplaceQuotes(): JSX.Element {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader title={tool.name} description={tool.description} icon={getIconForTool(tool.slug)} />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <ReplaceQuotesTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
}
