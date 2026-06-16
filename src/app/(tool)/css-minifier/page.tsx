import type { JSX } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EntryContent } from '@/components/page/EntryContent';
import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { CssMinifier } from '@/components/tools/css-minifier';
import type { Tool } from '@/constants/tools';
import { buildMetadata } from '@/utils/meta';
import { findToolBySlug, getToolIcon } from '@/utils/tools';

/**
 * Retrieves tool data for the CSS Minifier tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('css-minifier');

/**
 * SEO metadata for the CSS Minifier tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  path: `/${tool?.slug || ''}`,
});

/**
 * CSS Minifier tool page component.
 * Renders the page layout with header and the CSS Minifier tool.
 *
 * @returns {JSX.Element} The rendered CSS Minifier tool page component.
 */
export default function CssMinifierToolTool(): JSX.Element {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader pageName={tool.name} title={tool.name} description={tool.description} icon={getToolIcon(tool.slug)} />
      <PageContent>
        <EntryContent tool={tool}>
          <CssMinifier />
        </EntryContent>
      </PageContent>
    </PageLayout>
  );
}
