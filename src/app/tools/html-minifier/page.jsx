import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import HtmlMinifierTool from "@/components/tools/html-minifier/HtmlMinifierTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

/**
 * Get tool data for HTML Minifier
 * @type {Object} Tool configuration object
 */
const tool = getToolBySlug("html-minifier");

/**
 * Export metadata for SEO
 * @type {Object}
 */
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

/**
 * HTML Minifier page component
 * Renders the HTML Minifier tool with appropriate layout and header
 *
 * @returns {JSX.Element} The rendered HTML Minifier page
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
