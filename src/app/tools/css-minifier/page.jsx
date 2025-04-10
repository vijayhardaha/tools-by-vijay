import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import CssMinifierTool from "@/components/tools/css-minifier/CssMinifierTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

/**
 * Retrieves tool data for the CSS Minifier tool.
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("css-minifier");

/**
 * SEO metadata for the CSS Minifier page.
 * @type {Object}
 * @property {string} title - The SEO title of the page
 * @property {string} description - The SEO description of the page
 */
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

/**
 * CSS Minifier page component
 * Renders the page layout with header and the CSS Minifier tool
 * @returns {JSX.Element} The rendered CSS Minifier page component.
 */
const CssMinifier = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getToolIcon(tool.slug)}
      />
      <PageContent>
        <CssMinifierTool />
      </PageContent>
    </PageLayout>
  );
};

export default CssMinifier;
