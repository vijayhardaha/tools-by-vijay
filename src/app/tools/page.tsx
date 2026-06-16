import type { JSX } from 'react';
import { Fragment } from 'react';

import type { Metadata } from 'next';

import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { ToolCard } from '@/components/tool/tool-card';
import categories from '@/constants/categories';
import type { Category } from '@/constants/categories';
import { categoryIcons } from '@/constants/category-icons';
import tools from '@/constants/tools';
import { buildMetadata } from '@/utils/meta';
import { getToolsByCategory } from '@/utils/tools';

/**
 * SEO metadata for the Tools page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({
  title: 'All Free Online Tools',
  description:
    'Browse our complete collection of free online developer tools, text utilities, security tools, and creative generators. Find the right tool for your next project.',
  path: '/tools',
});

/**
 * Tools page component.
 * Displays all tools grouped by category with category icons and tool counts.
 *
 * @returns {JSX.Element} The rendered Tools page.
 */
export default function Tools(): JSX.Element {
  const totalTools = tools.length;

  return (
    <PageLayout>
      <PageHeader
        pageName="Tools"
        title={`${totalTools} Free Tools`}
        description="Browse our complete collection of free online tools. Find the right utility for your next project — all categorized for easy discovery."
      />
      <PageContent>
        <div className="space-y-12">
          {categories.map((category: Category, index) => {
            const categoryTools = getToolsByCategory(category.slug);
            const icon = categoryIcons[category.slug];
            const toolCount = categoryTools.length;

            if (toolCount === 0) return null;

            return (
              <Fragment key={category.slug}>
                {index > 0 && <hr className="border-secondary border-t border-dashed" />}
                <section>
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center gap-3">
                      {icon && (
                        <span className="bg-accent text-accent-foreground border-accent-foreground/50 flex size-11 shrink-0 items-center justify-center rounded-xl border text-lg">
                          {icon}
                        </span>
                      )}
                      <div className="flex flex-col">
                        <h2 className="text-xl font-bold">{category.label}</h2>
                        <span className="text-muted-foreground text-sm">
                          {toolCount} {toolCount === 1 ? 'tool' : 'tools'}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {categoryTools.map((tool) => (
                      <ToolCard key={tool.slug} slug={tool.slug} />
                    ))}
                  </div>
                </section>
              </Fragment>
            );
          })}
        </div>
      </PageContent>
    </PageLayout>
  );
}
