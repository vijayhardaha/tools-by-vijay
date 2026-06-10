import { notFound } from 'next/navigation';

import EntryWithSidebar from '@/components/page/EntryWithSidebar';
import PageContent from '@/components/page/PageContent';
import PageHeader from '@/components/page/PageHeader';
import PageLayout from '@/components/page/PageLayout';
import CountryNameGeneratorTool from '@/components/tools/country-name-generator/CountryNameGeneratorTool';
import type { Tool } from '@/types';
import { generateMeta } from '@/utils/seoUtils';
import type { PageMeta } from '@/utils/seoUtils';
import { findToolBySlug, getIconForTool } from '@/utils/toolUtils';

/**
 * Retrieves tool data for the Country Name Generator tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('country-name-generator');

/**
 * SEO metadata for the Country Name Generator tool page.
 *
 * @type {PageMeta}
 */
export const metadata: PageMeta = generateMeta({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  slug: tool?.slug || '',
});

/**
 * Country Name Generator tool page component.
 * Renders the page layout with header and the Country Name Generator tool.
 *
 * @returns {React.JSX.Element} The rendered Country Name Generator tool page component.
 */
const CountryNameGenerator = (): React.JSX.Element => {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader title={tool.name} description={tool.description} icon={getIconForTool(tool.slug)} />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <CountryNameGeneratorTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default CountryNameGenerator;
