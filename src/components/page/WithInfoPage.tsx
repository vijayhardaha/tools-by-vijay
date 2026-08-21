import type { JSX, ReactNode } from 'react';

import { breadcrumbSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';

import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { buildBreadcrumbs } from '@/utils/breadcrumb';
import { buildFaqPageSchema, type ToolFaqItem } from '@/utils/faq';
import { buildMetadata } from '@/utils/meta';
import { aboutPageSchema, contactPageSchema, globalSchema, webPageSchema } from '@/utils/schema';
import { getSeoByPath, siteUrl } from '@/utils/seo';

/**
 * The kind of schema.org page type to render for an info page.
 *
 * @type {InfoPageSchemaType}
 */
type InfoPageSchemaType = 'webPage' | 'about' | 'contact' | 'faq';

/**
 * Configuration for a generated info page.
 *
 * @type {InfoPageConfig}
 * @property {string} slug - The page slug used to look up SEO data (e.g. 'about').
 * @property {InfoPageSchemaType} [schemaType] - Which schema.org type to render (default 'webPage').
 * @property {ToolFaqItem[]} [faqItems] - FAQ entries used when schemaType is 'faq'.
 * @property {ReactNode} children - The page-specific content rendered inside {@link PageContent}.
 */
interface InfoPageConfig {
  slug: string;
  schemaType?: InfoPageSchemaType;
  faqItems?: ToolFaqItem[];
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
export function WithInfoPage({ slug, schemaType = 'webPage', faqItems = [], children }: InfoPageConfig): JSX.Element {
  const { title, description, seoTitle, seoDescription, path } = getSeoByPath(slug)!;
  const rootUrl = siteUrl();

  // Select the schema.org type(s) that best describe the page. About and
  // Contact replace the generic WebPage schema with a more specific type,
  // while FAQ supplements it (a FAQ page is still a WebPage).
  const pageSchemas = (() => {
    switch (schemaType) {
      case 'about':
        return [aboutPageSchema({ rootUrl, path, breadcrumb: true }, { name: seoTitle, description: seoDescription })];
      case 'contact':
        return [
          contactPageSchema({ rootUrl, path, breadcrumb: true }, { name: seoTitle, description: seoDescription }),
        ];
      case 'faq':
        return [
          webPageSchema({ rootUrl, path, breadcrumb: true }, { name: seoTitle, description: seoDescription }),
          buildFaqPageSchema(slug, faqItems),
        ];
      default:
        return [webPageSchema({ rootUrl, path, breadcrumb: true }, { name: seoTitle, description: seoDescription })];
    }
  })();

  const schemaData = [
    ...globalSchema(),
    ...pageSchemas,
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
