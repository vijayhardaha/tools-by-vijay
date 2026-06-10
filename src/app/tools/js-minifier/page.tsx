import type { JSX } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import EntryWithSidebar from '@/components/page/EntryWithSidebar';
import PageContent from '@/components/page/PageContent';
import PageHeader from '@/components/page/PageHeader';
import PageLayout from '@/components/page/PageLayout';
import JsMinifierTool from '@/components/tools/js-minifier';
import type { Tool } from '@/types';
import { generateMeta } from '@/utils/seoUtils';
import { findToolBySlug, getIconForTool } from '@/utils/toolUtils';

/**
 * Retrieves tool data for the JavaScript Minifier tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('js-minifier');

/**
 * SEO metadata for the JavaScript Minifier tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = generateMeta({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  slug: tool?.slug || '',
});

/**
 * JavaScript Minifier tool page component.
 * Renders the page layout with header and the JS Minifier tool.
 *
 * @returns {JSX.Element} The rendered JavaScript Minifier tool page component.
 */
export default function JsMinifier(): JSX.Element {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader title={tool.name} description={tool.description} icon={getIconForTool(tool.slug)} />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <JsMinifierTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
}
