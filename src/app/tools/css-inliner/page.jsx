import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import CssInlinerTool from "@/components/tools/css-inliner/CssInlinerTool";
import { generateMetadata as genMeta } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Css Inliner tool.
 * @constant {Object} tool - The tool object containing metadata and configuration.
 */
const tool = findToolBySlug("css-inliner");

/**
 * SEO metadata for the Css Inliner tool page.
 * @type {Object}
 */
export const metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Css Inliner tool page component.
 * Renders the page layout with header and the Css Inliner tool.
 *
 * @component
 * @returns {JSX.Element} The rendered Css Inliner tool page component.
 */
const CssInliner = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <CssInlinerTool />
      </PageContent>
    </PageLayout>
  );
};

export default CssInliner;
