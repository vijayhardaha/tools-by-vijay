import { JSX } from "react";

import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import TextToArrayTool from "@/components/tools/text-to-array/TextToArrayTool";
import { Tool } from "@/types";
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Text to Array tool.
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug("text-to-array");

/**
 * SEO metadata for the Text to Array tool page.
 * @type {Object}
 */
export const metadata: Metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Text to Array tool page component.
 * Renders the page layout with header and the Text to Array tool.
 *
 * @component
 * @returns {JSX.Element} The rendered Text to Array tool page component.
 */
const TextToArray: React.FC = (): JSX.Element => {
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
          <TextToArrayTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default TextToArray;
