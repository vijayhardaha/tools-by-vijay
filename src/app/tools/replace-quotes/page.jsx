import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import ReplaceQuotesTool from "@/components/tools/replace-quotes/ReplaceQuotesTool";
import { generateMetadata as genMeta } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**u
 * Retrieves tool data for the Replace Quotes tool.
 * @constant {Object} tool - The tool object containing metadata and configuration.
 */
const tool = findToolBySlug("replace-quotes");

/**
 * SEO metadata for the Replace Quotes tool page.
 * @type {Object}
 */
export const metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * URL Shortener tool page component.
 * Renders the page layout with header and the URL Shortener tool.
 *
 * @component
 * @returns {JSX.Element} The rendered URL Shortener page component.
 */
const ReplaceQuotes = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <ReplaceQuotesTool />
      </PageContent>
    </PageLayout>
  );
};

export default ReplaceQuotes;
