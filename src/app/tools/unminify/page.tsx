import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import UnminifyTool from "@/components/tools/unminify/UnminifyTool";
import { Tool } from "@/types";
import { generateMeta, Metadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Unminify tool.
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug("unminify");

/**
 * SEO metadata for the Unminify tool page.
 * @type {Metadata}
 */
export const metadata: Metadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Unminify tool page component.
 * Renders the page layout with header and the Unminify tool.
 *
 * @component
 * @returns {JSX.Element} The rendered Unminify tool page component.
 */
const Unminify: React.FC = (): React.JSX.Element => {
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
          <UnminifyTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default Unminify;
