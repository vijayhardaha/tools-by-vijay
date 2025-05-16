import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import Base64EncodeDecodeTool from "@/components/tools/base64-encode-decode/Base64EncodeDecodeTool";
import { Tool } from "@/types";
import { generateMeta, Metadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Base64 Encode/Decode tool.
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug("base64-encode-decode");

/**
 * SEO metadata for the Base64 Encode/Decode page.
 * @type {Metadata}
 */
export const metadata: Metadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Base64 Encode/Decode tool page component.
 * Renders the page layout with header and the Base64 Encode/Decode tool.
 *
 * @component
 * @returns {JSX.Element} The rendered Base64 Encode/Decode tool page component.
 */
const Base64EncodeDecode: React.FC = (): React.JSX.Element => {
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
          <Base64EncodeDecodeTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default Base64EncodeDecode;
