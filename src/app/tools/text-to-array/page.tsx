import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import TextToArrayTool from "@/components/tools/text-to-array/TextToArrayTool";
import { ITool } from "@/types";
import { generateMeta, IMetadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Text to Array tool.
 * @constant {ITool|null} tool - The tool object containing metadata and configuration.
 */
const tool: ITool | null = findToolBySlug("text-to-array");

/**
 * SEO metadata for the Text to Array tool page.
 * @type {IMetadata}
 */
export const metadata: IMetadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Text to Array tool page component.
 * Renders the page layout with header and the Text to Array tool.
 *
 * @component
 * @returns {React.JSX.Element} The rendered Text to Array tool page component.
 */
const TextToArray: React.FC = (): React.JSX.Element => {
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
          <TextToArrayTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default TextToArray;
