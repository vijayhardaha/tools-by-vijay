import type { JSX, ReactNode } from 'react';

import { breadcrumbSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EntryContent } from '@/components/page/EntryContent';
import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import type { BreadcrumbItem } from '@/utils/breadcrumb';
import { buildBreadcrumbs } from '@/utils/breadcrumb';
import { getCategoryBySlug } from '@/utils/categories';
import { buildMetadata } from '@/utils/meta';
import { globalSchema, webPageSchema } from '@/utils/schema';
import { siteUrl } from '@/utils/seo';
import { findToolBySlug, getToolIcon } from '@/utils/tools';

/**
 * Props for {@link WithToolPage}.
 *
 * @type {ToolPageProps}
 * @property {string} slug - The tool slug (must exist in the tools constant).
 * @property {ReactNode} children - The interactive tool component rendered inside {@link EntryContent}.
 */
interface ToolPageProps {
  slug: string;
  children: ReactNode;
}

/**
 * Build the standalone SEO `Metadata` for a tool page.
 *
 * @param {string} slug - The tool slug (must exist in the tools constant).
 *
 * @returns {Metadata} The page metadata derived from the tool's SEO fields.
 */
export function getToolPageMetadata(slug: string): Metadata {
  const tool = findToolBySlug(slug);

  return buildMetadata({ title: tool?.seoTitle || '', description: tool?.seoDescription || '', path: `/${slug}` });
}

/**
 * Render a tool page wrapped in the standard layout (JSON-LD schema, header
 * with breadcrumb and category icon, and the entry content shell with related
 * tools), removing the boilerplate shared by all tool pages.
 *
 * @param {ToolPageProps} props - The page configuration.
 *
 * @returns {JSX.Element} The rendered tool page layout.
 */
export function WithToolPage({ slug, children }: ToolPageProps): JSX.Element {
  const tool = findToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const path = `/${tool.slug}`;
  const rootUrl = siteUrl();
  const categoryLabel = getCategoryBySlug(tool.category)?.title || 'Tools';
  const categoryPath = `/tools/${tool.category}`;

  /**
   * Breadcrumb items for the tool page: Home / Category / Tool Name.
   *
   * @type {BreadcrumbItem[]}
   */
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Home', path: '/' },
    { name: categoryLabel, path: categoryPath },
    { name: tool.title, path: '' },
  ];

  const schemaData = [
    ...globalSchema(),
    webPageSchema({ rootUrl, path, breadcrumb: true }, { name: tool.seoTitle, description: tool.seoDescription }),
    breadcrumbSchema({
      rootUrl,
      items: buildBreadcrumbs(path, `${tool.title} Tool`, [{ name: categoryLabel, path: categoryPath }]),
    }),
  ];

  return (
    <>
      <JsonLd data={schemaData} />

      <PageLayout>
        <PageHeader
          pageName={tool.title}
          title={tool.title}
          description={tool.description}
          icon={getToolIcon(tool.slug)}
          breadcrumbItems={breadcrumbItems}
        />
        <PageContent>
          <EntryContent tool={tool}>{children}</EntryContent>
        </PageContent>
      </PageLayout>
    </>
  );
}
