import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import TextCaseChangerTool from "@/components/tools/text-case-changer/TextCaseChangerTool";
import { Tool } from "@/types";
import { generateMeta, Metadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Text Case Changer tool.
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug("text-case-changer");

/**
 * SEO metadata for the Text Case Changer tool page.
 * @type {Metadata}
 */
export const metadata: Metadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Text Case Changer tool page component.
 * Renders the page layout with header and the Text Case Changer tool.
 *
 * @component
 * @returns {JSX.Element} The rendered Text Case Changer tool page component.
 */
const TextCaseChanger: React.FC = (): React.JSX.Element => {
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
          <TextCaseChangerTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default TextCaseChanger;
