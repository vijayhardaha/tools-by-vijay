import type { JSX, ReactNode } from 'react';

import { aboutPageSchema, breadcrumbSchema, contactPageSchema, webPageSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';

import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { buildBreadcrumbs } from '@/utils/breadcrumb';
import { buildMetadata } from '@/utils/meta';
import { globalSchema } from '@/utils/schema';
import { getSeoByPath, siteUrl } from '@/utils/seo';

/**
 * The kind of schema.org page type to render for an info page.
 *
 * @type {InfoPageSchemaType}
 */
type InfoPageSchemaType = 'webPage' | 'about' | 'contact';

/**
 * Configuration for a generated info page.
 *
 * @type {InfoPageConfig}
 * @property {string} slug - The page slug used to look up SEO data (e.g. 'about').
 * @property {InfoPageSchemaType} [schemaType] - Which schema.org type to render (default 'webPage').
 * @property {ReactNode} children - The page-specific content rendered inside {@link PageContent}.
 */
interface InfoPageConfig {
  slug: string;
  schemaType?: InfoPageSchemaType;
  children: ReactNode;
}

/**
 * Build the standalone SEO `Metadata` for an info page.
 *
 * @param {string} slug - The page slug (must exist in the unified SEO data).
 *
 * @returns {Metadata} The page metadata.
 */
export function getInfoPageMetadata(slug: string): Metadata {
  const { seoTitle, seoDescription, path } = getSeoByPath(slug)!;
  return buildMetadata({ title: seoTitle, description: seoDescription, path });
}

/**
 * Render an info page wrapped in the standard layout (JSON-LD schema, header,
 * and content shell), removing the boilerplate shared by all info pages.
 *
 * @param {InfoPageConfig} props - The page configuration.
 *
 * @returns {JSX.Element} The rendered info page layout.
 */
export function WithInfoPage({ slug, schemaType = 'webPage', children }: InfoPageConfig): JSX.Element {
  const { title, description, seoTitle, seoDescription, path } = getSeoByPath(slug)!;
  const rootUrl = siteUrl();

  // Select the schema.org type that best describes the page.
  const pageSchema = (() => {
    switch (schemaType) {
      case 'about':
        return aboutPageSchema({ rootUrl, path, breadcrumb: true }, { name: seoTitle, description: seoDescription });
      case 'contact':
        return contactPageSchema({ rootUrl, path, breadcrumb: true }, { name: seoTitle, description: seoDescription });
      default:
        return webPageSchema({ rootUrl, path, breadcrumb: true }, { name: seoTitle, description: seoDescription });
    }
  })();

  const schemaData = [
    ...globalSchema(),
    pageSchema,
    breadcrumbSchema({ rootUrl, items: buildBreadcrumbs(path, title) }),
  ];

  return (
    <>
      <JsonLd data={schemaData} />

      <PageLayout>
        <PageHeader pageName={title} title={title} description={description} />
        <PageContent>{children}</PageContent>
      </PageLayout>
    </>
  );
}
