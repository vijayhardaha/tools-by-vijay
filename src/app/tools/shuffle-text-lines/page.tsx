import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import ShuffleTextLinesTool from "@/components/tools/shuffle-text-lines/ShuffleTextLinesTool";
import { ITool } from "@/types";
import { generateMeta, IMetadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Shuffle Text Lines tool.
 * @constant {ITool|null} tool - The tool object containing metadata and configuration.
 */
const tool: ITool | null = findToolBySlug("shuffle-text-lines");

/**
 * SEO metadata for the Shuffle Text Lines page.
 * @type {IMetadata}
 */
export const metadata: IMetadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Shuffle Text Lines tool page component.
 * Renders the page layout with header and the Shuffle Text Lines tool.
 *
 * @component
 * @returns {React.JSX.Element} The rendered Shuffle Text Lines tool page component.
 */
const ShuffleTextLines: React.FC = (): React.JSX.Element => {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.description}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <ShuffleTextLinesTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default ShuffleTextLines;
