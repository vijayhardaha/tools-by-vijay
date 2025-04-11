import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import CssMinifierTool from "@/components/tools/css-minifier/CssMinifierTool";
import { getToolBySlug } from "@/lib/getToolBySlug";
import { getToolIcon } from "@/lib/getToolIcon";
import { generateMetadata as genMeta } from "@/lib/seo";

/**
 * Retrieves tool data for the CSS Minifier tool.
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("css-minifier");

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
