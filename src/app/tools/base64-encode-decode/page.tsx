import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import Base64EncodeDecodeTool from "@/components/tools/base64-encode-decode/Base64EncodeDecodeTool";
import { ITool } from "@/types";
import { generateMeta, IMetadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Base64 Encode/Decode tool.
 * @constant {ITool|null} tool - The tool object containing metadata and configuration.
 */
const tool: ITool | null = findToolBySlug("base64-encode-decode");

/**
 * SEO metadata for the Base64 Encode/Decode page.
 * @type {IMetadata}
 */
export const metadata: IMetadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Base64 Encode/Decode tool page component.
 * Renders the page layout with header and the Base64 Encode/Decode tool.
 *
 * @component
 * @returns {React.JSX.Element} The rendered Base64 Encode/Decode tool page component.
 */
const Base64EncodeDecode: React.FC = (): React.JSX.Element => {
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
          <Base64EncodeDecodeTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default Base64EncodeDecode;
