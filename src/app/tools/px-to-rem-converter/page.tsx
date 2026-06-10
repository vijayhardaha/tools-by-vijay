import { notFound } from 'next/navigation';

import EntryWithSidebar from '@/components/page/EntryWithSidebar';
import PageContent from '@/components/page/PageContent';
import PageHeader from '@/components/page/PageHeader';
import PageLayout from '@/components/page/PageLayout';
import PxToRemConverterTool from '@/components/tools/px-to-rem-converter/PxToRemConverterTool';
import type { Tool } from '@/types';
import { generateMeta } from '@/utils/seoUtils';
import type { PageMeta } from '@/utils/seoUtils';
import { findToolBySlug, getIconForTool } from '@/utils/toolUtils';

/**
 * Retrieves tool data for the PX to REM Converter tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('px-to-rem-converter');

/**
 * SEO metadata for the PX to REM Converter tool page.
 *
 * @type {PageMeta}
 */
export const metadata: PageMeta = generateMeta({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  slug: tool?.slug || '',
});

/**
 * PX to REM Converter tool page component.
 * Renders the page layout with header and the PX to REM Converter tool.
 *
 * @returns {React.JSX.Element} The rendered PX to REM Converter tool page component.
 */
const PxToRemConverter: React.FC = (): React.JSX.Element => {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader title={tool.name} description={tool.description} icon={getIconForTool(tool.slug)} />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <PxToRemConverterTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default PxToRemConverter;
