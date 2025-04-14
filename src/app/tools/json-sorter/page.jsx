import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import JsonSorterTool from "@/components/tools/json-sorter/JsonSorterTool";
import { getToolBySlug } from "@/lib/getToolBySlug";
import { getToolIcon } from "@/lib/getToolIcon";
import { generateMetadata as genMeta } from "@/lib/seo";

/**
 * Retrieves tool data for the JSON Sorter tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("json-sorter");

/**
 * SEO metadata for the JSON Sorter page
 * @type {Object}
 */
export const metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * JSON Sorter tool page component
 * Renders the page layout with header and the JSON Sorter tool
 * @returns {JSX.Element} The rendered JSON Sorter page component.
 */
const JsonSorter = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getToolIcon(tool.slug)}
      />
      <PageContent>
        <JsonSorterTool />
      </PageContent>
    </PageLayout>
  );
};

export default JsonSorter;
