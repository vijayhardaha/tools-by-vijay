import type { JSX } from 'react';

import { breadcrumbSchema, webPageSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { CategoryAbout } from '@/app/tools/_components/category-about';
import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { ToolCard } from '@/components/tool/tool-card';
import { categoryIcons } from '@/constants/icons';
import { getCategoryBySlug } from '@/utils/categories';
import { buildMetadata } from '@/utils/meta';
import { globalSchema, buildBreadcrumbs } from '@/utils/schema';
import { siteUrl, getSeoByPath } from '@/utils/seo';
import { getToolsByCategory } from '@/utils/tools';

/**
 * Props for the category page, including the slug parameter.
 *
 * @type {CategoryPageProps}
 * @property {Promise<{ slug: string }>} params - Route parameters containing the category slug
 */
interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate metadata for the category page.
 *
 * @param {CategoryPageProps} props - The page props.
 *
 * @returns {Promise<Metadata>} The generated metadata.
 */
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const seo = getSeoByPath(`/tools/${slug}`);

  if (!seo) return {};

  return buildMetadata({ title: seo.seoTitle, description: seo.seoDescription, path: seo.path });
}

/**
 * Category page component.
 * Displays tools in a specific category, with an about section and popular tools list.
 *
 * @param {CategoryPageProps} props - The page props.
 *
 * @returns {JSX.Element} The rendered category page.
 */
export default async function CategoryPage({ params }: CategoryPageProps): Promise<JSX.Element> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryTools = getToolsByCategory(slug);
  const icon = categoryIcons[slug];
  const toolCount = categoryTools.length;
  const rootUrl = siteUrl();
  const path = `/tools/${slug}`;
  const seo = getSeoByPath(`/tools/${slug}`);
  const title = seo?.seoTitle || category.seoTitle;
  const description = seo?.seoDescription || category.seoDescription;

  const schemaData = [
    ...globalSchema(),
    webPageSchema({ rootUrl, path, breadcrumb: true }, { name: title, description }),
    breadcrumbSchema({ rootUrl, items: buildBreadcrumbs(path, category.title, [{ name: 'Tools', path: '/tools' }]) }),
  ];

  return (
    <>
      <JsonLd data={schemaData} />
      <PageLayout>
        <PageHeader
          pageName={category.title}
          title={category.title}
          description={category.description}
          icon={icon}
          breadcrumbItems={[
            { label: 'Home', href: '/' },
            { label: 'Tools', href: '/tools' },
            { label: category.title },
          ]}
        />
        <PageContent>
          <div className="space-y-12">
            {/* Tool grid section */}
            <section>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.slug} slug={tool.slug} />
                ))}
              </div>
            </section>

            {/* About section */}
            <section>
              <h2 className="text-primary mb-4 text-2xl font-bold">About {category.title} Tools</h2>
              <div className="text-muted-foreground text-base leading-relaxed">
                <CategoryAbout slug={slug} />
              </div>
            </section>

            {/* Popular tools section */}
            {toolCount > 0 && (
              <section>
                <h2 className="text-primary mb-4 text-2xl font-bold">Popular Tools</h2>
                <ul className="text-muted-foreground list-disc space-y-1.5 pl-6">
                  {categoryTools.map((tool) => (
                    <li key={tool.slug}>
                      <Link href={`/${tool.slug}`} className="font-medium text-pink-500 underline hover:no-underline">
                        {tool.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </PageContent>
      </PageLayout>
    </>
  );
}
