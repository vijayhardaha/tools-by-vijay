import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import JsMinifierTool from "@/components/tools/js-minifier/JsMinifierTool";
import { getToolBySlug } from "@/lib/getToolBySlug";
import { getToolIcon } from "@/lib/getToolIcon";
import { generateMetadata as genMeta } from "@/lib/seo";

/**
 * Retrieves tool data for the JavaScript Minifier tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("js-minifier");

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
 * JavaScript Minifier Page Component
 * Renders the page layout with header and the JavaScript Minifier tool
 * @returns {JSX.Element} The rendered JS Minifier page component.
 */
const JsMinifier = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getToolIcon(tool.slug)}
      />
      <PageContent>
        <JsMinifierTool />
      </PageContent>
    </PageLayout>
  );
};

export default JsMinifier;
