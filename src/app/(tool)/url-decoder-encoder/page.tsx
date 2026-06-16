import type { JSX } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EntryContent } from '@/components/page/EntryContent';
import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { UrlDecoderEncoder } from '@/components/tools/url-decoder-encoder';
import type { Tool } from '@/constants/tools';
import { getCategoryBySlug } from '@/utils/categories';
import { buildMetadata } from '@/utils/meta';
import { findToolBySlug, getToolIcon } from '@/utils/tools';

/**
 * Retrieves tool data for the URL Decoder/Encoder tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('url-decoder-encoder');

/**
 * SEO metadata for the URL Decoder/Encoder tool page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  path: `/${tool?.slug || ''}`,
});

/**
 * URL Decoder/Encoder tool page component.
 * Renders the page layout with header and the URL Decoder/Encoder tool.
 *
 * @returns {JSX.Element} The rendered URL Decoder/Encoder tool page component.
 */
export default function UrlDecoderEncoderToolTool(): JSX.Element {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader
        pageName={tool.name}
        title={tool.name}
        description={tool.description}
        icon={getToolIcon(tool.slug)}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: getCategoryBySlug(tool.category)?.label || 'Tools', href: `/tools/${tool.category}` },
          { label: tool.name },
        ]}
      />
      <PageContent>
        <EntryContent tool={tool}>
          <UrlDecoderEncoder />
        </EntryContent>
      </PageContent>
    </PageLayout>
  );
}
