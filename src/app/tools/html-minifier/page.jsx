import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import HtmlMinifierTool from "@/components/tools/html-minifier/HtmlMinifierTool";
import { getToolBySlug } from "@/lib/getToolBySlug";
import { getToolIcon } from "@/lib/getToolIcon";
import { generateMetadata as genMeta } from "@/lib/seo";

/**
 * Retrieves tool data for the HTML Minifier tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("html-minifier");

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
 * HTML Minifier page component
 * Renders the page layout with header and the HTML Minifier tool
 * @returns {JSX.Element} The rendered HTML Minifier page component.
 */
const HtmlMinifier = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getToolIcon(tool.slug)}
      />
      <PageContent>
        <HtmlMinifierTool />
      </PageContent>
    </PageLayout>
  );
};

export default HtmlMinifier;
