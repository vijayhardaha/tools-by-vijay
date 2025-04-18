import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import UrlShortenerTool from "@/components/tools/url-shortener/UrlShortenerTool";
import { generateMetadata as genMeta } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the URL Shortener tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = findToolBySlug("url-shortener");

/**
 * SEO metadata for the URL Shortener tool page
 * @type {Object}
 */
export const metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * URL Shortener tool page component
 * Renders the page layout with header and the URL Shortener tool
 * @returns {JSX.Element} The rendered URL Shortener page component.
 */
const UrlShortener = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <UrlShortenerTool />
      </PageContent>
    </PageLayout>
  );
};

export default UrlShortener;
