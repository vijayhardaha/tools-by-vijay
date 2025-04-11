import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import UrlShortenerTool from "@/components/tools/url-shortener/UrlShortenerTool";
import { getToolBySlug } from "@/lib/getToolBySlug";
import { getToolIcon } from "@/lib/getToolIcon";
import { generateMetadata as genMeta } from "@/lib/seo";

/**
 * Retrieves tool data for the URL Shortener tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("url-shortener");

/**
 * SEO metadata for the Slugify page
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
        icon={getToolIcon(tool.slug)}
      />
      <PageContent>
        <UrlShortenerTool />
      </PageContent>
    </PageLayout>
  );
};

export default UrlShortener;
