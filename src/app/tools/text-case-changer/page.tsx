import type { JSX } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import EntryWithSidebar from '@/components/page/EntryWithSidebar';
import PageContent from '@/components/page/PageContent';
import PageHeader from '@/components/page/PageHeader';
import PageLayout from '@/components/page/PageLayout';
import TextCaseChangerTool from '@/components/tools/text-case-changer';
import type { Tool } from '@/constants/tools';
import { buildMetadata } from '@/utils/meta';
import { findToolBySlug, getToolIcon } from '@/utils/tools';

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
  path: `/tools/${tool?.slug || ''}`,
});

/**
 * Text Case Changer tool page component.
 * Renders the page layout with header and the Text Case Changer tool.
 *
 * @returns {JSX.Element} The rendered Text Case Changer tool page component.
 */
export default function TextCaseChanger(): JSX.Element {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader pageName={tool.name} title={tool.name} description={tool.description} icon={getToolIcon(tool.slug)} />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <TextCaseChangerTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
}
