import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import AlphabeticalLineSorterTool from "@/components/tools/alphabetical-line-sorter/AlphabeticalLineSorterTool";
import { ITool } from "@/types";
import { generateMeta, IMetadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Alphabetical Line Sorter tool.
 * @constant {ITool|null} tool - The tool object containing metadata and configuration.
 */
const tool: ITool | null = findToolBySlug("alphabetical-line-sorter");

/**
 * SEO metadata for the Alphabetical Line Sorter tool page.
 * @type {IMetadata}
 */
export const metadata: IMetadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Alphabetical Line Sorter tool page component.
 * Renders the page layout with header and the Alphabetical Line Sorter tool.
 *
 * @component
 * @returns {React.JSX.Element} The rendered Alphabetical Line Sorter tool page component.
 */
const AlphabeticalLineSorter: React.FC = (): React.JSX.Element => {
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
          <AlphabeticalLineSorterTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default AlphabeticalLineSorter;
