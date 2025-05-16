import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import JsonSorterTool from "@/components/tools/json-sorter/JsonSorterTool";
import { ITool } from "@/types";
import { generateMeta, IMetadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the JSON Sorter tool.
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: ITool | null = findToolBySlug("json-sorter");

/**
 * SEO metadata for the JSON Sorter page.
 * @type {IMetadata}
 */
export const metadata: IMetadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * JSON Sorter tool page component.
 * Renders the page layout with header and the JSON Sorter tool.
 *
 * @component
 * @returns {React.JSX.Element} The rendered JSON Sorter tool page component.
 */
const JsonSorter: React.FC = (): React.JSX.Element => {
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
          <JsonSorterTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default JsonSorter;
