import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import DropdownToArrayTool from "@/components/tools/dropdown-to-array/DropdownToArrayTool";
import { ITool } from "@/types";
import { generateMeta, IMetadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Dropdown to Array tool.
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: ITool | null = findToolBySlug("dropdown-to-array");

/**
 * SEO metadata for the Dropdown to Array tool page.
 * @type {IMetadata}
 */
export const metadata: IMetadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Dropdown to Array tool page component.
 * Renders the page layout with header and the Dropdown to Array tool.
 *
 * @component
 * @returns {React.JSX.Element} The rendered Dropdown to Array tool page component.
 */
const DropdownToArray: React.FC = (): React.JSX.Element => {
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
          <DropdownToArrayTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default DropdownToArray;
