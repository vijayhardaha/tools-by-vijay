import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import JsonSorterTool from "@/components/tools/json-sorter/JsonSorterTool";
import { generateMetadata as genMeta } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the JSON Sorter tool.
 * @constant {Object} tool - The tool object containing metadata and configuration.
 */
const tool = findToolBySlug("json-sorter");

/**
 * SEO metadata for the JSON Sorter page.
 * @type {Object}
 */
export const metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * JSON Sorter tool page component.
 * Renders the page layout with header and the JSON Sorter tool.
 *
 * @component
 * @returns {JSX.Element} The rendered JSON Sorter tool page component.
 */
const JsonSorter = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <JsonSorterTool />
      </PageContent>
    </PageLayout>
  );
};

export default JsonSorter;
