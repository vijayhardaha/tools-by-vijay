import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import BulkSlugifyTool from "@/components/tools/bulk-slugify/BulkSlugifyTool";
import { Tool } from "@/types";
import { generateMeta, Metadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Bulk Slugify tool.
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug("bulk-slugify");

/**
 * SEO metadata for the Bulk Slugify tool page.
 * @type {Metadata}
 */
export const metadata: Metadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Bulk Slugify tool page component.
 * Renders the page layout with header and the Bulk Slugify tool.
 *
 * @component
 * @returns {JSX.Element} The rendered Bulk Slugify tool page component.
 */
const BulkSlugify: React.FC = (): React.JSX.Element => {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <BulkSlugifyTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default BulkSlugify;
