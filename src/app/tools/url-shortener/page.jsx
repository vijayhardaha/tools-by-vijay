import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import UrlShortenerTool from "@/components/tools/url-shortener/UrlShortenerTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

/**
 * Retrieves tool data for the URL Shortener tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("url-shortener");

/**
 * SEO metadata for the URL Shortener page
 * @type {Object}
 * @property {string} title - The SEO title of the page
 * @property {string} description - The SEO description of the page
 */
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

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
