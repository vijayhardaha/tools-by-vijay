import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import UrlDecoderEncoderTool from "@/components/tools/url-decoder-encoder/UrlDecoderEncoderTool";
import { ITool } from "@/types";
import { generateMeta, IMetadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the URL Decoder/Encoder tool.
 * @constant {ITool|null} tool - The tool object containing metadata and configuration.
 */
const tool: ITool | null = findToolBySlug("url-decoder-encoder");

/**
 * SEO metadata for the URL Decoder/Encoder tool page.
 * @type {IMetadata}
 */
export const metadata: IMetadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * URL Decoder/Encoder tool page component.
 * Renders the page layout with header and the URL Decoder/Encoder tool.
 *
 * @component
 * @returns {React.JSX.Element} The rendered URL Decoder/Encoder tool page component.
 */
const UrlDecoderEncoder: React.FC = (): React.JSX.Element => {
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
          <UrlDecoderEncoderTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default UrlDecoderEncoder;
