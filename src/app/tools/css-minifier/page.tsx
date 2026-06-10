import type { JSX } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import EntryWithSidebar from '@/components/page/EntryWithSidebar';
import PageContent from '@/components/page/PageContent';
import PageHeader from '@/components/page/PageHeader';
import PageLayout from '@/components/page/PageLayout';
import CssMinifierTool from '@/components/tools/css-minifier';
import type { Tool } from '@/types';
import { generateMeta } from '@/utils/seoUtils';
import { findToolBySlug, getIconForTool } from '@/utils/toolUtils';

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
export const metadata: Metadata = generateMeta({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  slug: tool?.slug || '',
});

/**
 * CSS Minifier tool page component.
 * Renders the page layout with header and the CSS Minifier tool.
 *
 * @returns {JSX.Element} The rendered CSS Minifier tool page component.
 */
export default function CssMinifier(): JSX.Element {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader title={tool.name} description={tool.description} icon={getIconForTool(tool.slug)} />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <CssMinifierTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
}
