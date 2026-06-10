import type { JSX } from 'react';

import { notFound } from 'next/navigation';

import EntryWithSidebar from '@/components/page/EntryWithSidebar';
import PageContent from '@/components/page/PageContent';
import PageHeader from '@/components/page/PageHeader';
import PageLayout from '@/components/page/PageLayout';
import HtmlMinifierTool from '@/components/tools/html-minifier/HtmlMinifierTool';
import type { Tool } from '@/types';
import { generateMeta } from '@/utils/seoUtils';
import type { PageMeta } from '@/utils/seoUtils';
import { findToolBySlug, getIconForTool } from '@/utils/toolUtils';

/**
 * Retrieves tool data for the HTML Minifier tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('html-minifier');

/**
 * SEO metadata for the HTML Minifier tool page.
 *
 * @type {PageMeta}
 */
export const metadata: PageMeta = generateMeta({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  slug: tool?.slug || '',
});

/**
 * HTML Minifier tool page component.
 * Renders the page layout with header and the HTML Minifier tool.
 *
 * @returns {JSX.Element} The rendered HTML Minifier tool page component.
 */
const HtmlMinifier = (): JSX.Element => {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader title={tool.name} description={tool.description} icon={getIconForTool(tool.slug)} />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <HtmlMinifierTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default HtmlMinifier;
