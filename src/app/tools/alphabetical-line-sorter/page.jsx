import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import AlphabeticalLineSorterTool from "@/components/tools/alphabetical-line-sorter/AlphabeticalLineSorterTool";
import { generateMetadata as genMeta } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Alphabetical Line Sorter tool.
 * @constant {Object} tool - The tool object containing metadata and configuration.
 */
const tool = findToolBySlug("alphabetical-line-sorter");

/**
 * SEO metadata for the Alphabetical Line Sorter tool page.
 * @type {Object}
 */
export const metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * URL Shortener tool page component.
 * Renders the page layout with header and the URL Shortener tool.
 *
 * @component
 * @returns {JSX.Element} The rendered URL Shortener page component.
 */
const AlphabeticalLineSorter = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <AlphabeticalLineSorterTool />
      </PageContent>
    </PageLayout>
  );
};

export default AlphabeticalLineSorter;
