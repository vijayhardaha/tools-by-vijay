import { notFound } from 'next/navigation';

import EntryWithSidebar from '@/components/page/EntryWithSidebar';
import PageContent from '@/components/page/PageContent';
import PageHeader from '@/components/page/PageHeader';
import PageLayout from '@/components/page/PageLayout';
import BarcodeGeneratorTool from '@/components/tools/barcode-generator/BarcodeGeneratorTool';
import type { Tool } from '@/types';
import { generateMeta } from '@/utils/seoUtils';
import type { PageMeta } from '@/utils/seoUtils';
import { findToolBySlug, getIconForTool } from '@/utils/toolUtils';

/**
 * Retrieves tool data for the Barcode Generator tool.
 *
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug('barcode-generator');

/**
 * SEO metadata for the Barcode Generator page.
 *
 * @type {PageMeta}
 */
export const metadata: PageMeta = generateMeta({
  title: tool?.seoTitle || '',
  description: tool?.seoDescription || '',
  slug: tool?.slug || '',
});

/**
 * Barcode Generator tool page component.
 * Renders the page layout with header and the Barcode Generator tool.
 *
 * @returns {React.JSX.Element} The rendered Barcode Generator tool page component.
 */
const BarcodeGenerator = (): React.JSX.Element => {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader title={tool.name} description={tool.description} icon={getIconForTool(tool.slug)} />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <BarcodeGeneratorTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default BarcodeGenerator;
