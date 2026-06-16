import type { JSX } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EntryContent } from '@/components/page/EntryContent';
import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { TextToPhpVariables } from '@/components/tools/text-to-php-variables';
import type { Tool } from '@/constants/tools';
import { buildMetadata } from '@/utils/meta';
import { findToolBySlug, getToolIcon } from '@/utils/tools';

/**
 * Retrieves tool data for the Text to PHP Variables tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('text-to-php-variables');

/**
 * SEO metadata for the Text to PHP Variables tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  path: `/${tool?.slug || ''}`,
});

/**
 * Text to PHP Variables tool page component.
 * Renders the page layout with header and the Text to PHP Variables tool.
 *
 * @returns {JSX.Element} The rendered Text to PHP Variables tool page component.
 */
export default function TextToPhpVariablesToolTool(): JSX.Element {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader pageName={tool.name} title={tool.name} description={tool.description} icon={getToolIcon(tool.slug)} />
      <PageContent>
        <EntryContent tool={tool}>
          <TextToPhpVariables />
        </EntryContent>
      </PageContent>
    </PageLayout>
  );
}
