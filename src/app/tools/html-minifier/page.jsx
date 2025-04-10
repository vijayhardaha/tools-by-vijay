import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import HtmlMinifierTool from "@/components/tools/html-minifier/HtmlMinifierTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

/**
 * Retrieves tool data for the HTML Minifier tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("html-minifier");

/**
 * SEO metadata for the HTML Minifier page
 * @type {Object}
 * @property {string} title - The SEO title of the page.
 * @property {string} description - The SEO description of the page.
 */
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

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
