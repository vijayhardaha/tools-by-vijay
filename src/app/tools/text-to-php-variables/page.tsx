import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import TextToPhpVariablesTool from "@/components/tools/text-to-php-variables/TextToPhpVariablesTool";
import { ITool } from "@/types";
import { generateMeta, IMetadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Text to PHP Variables tool.
 * @constant {ITool|null} tool - The tool object containing metadata and configuration.
 */
const tool: ITool | null = findToolBySlug("text-to-php-variables");

/**
 * SEO metadata for the Text to PHP Variables tool page.
 * @type {IMetadata}
 */
export const metadata: IMetadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Text to PHP Variables tool page component.
 * Renders the page layout with header and the Text to PHP Variables tool.
 *
 * @component
 * @returns {React.JSX.Element} The rendered Text to PHP Variables tool page component.
 */
const TextToPhpVariables: React.FC = (): React.JSX.Element => {
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
          <TextToPhpVariablesTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default TextToPhpVariables;
