import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import ShuffleTextLinesTool from "@/components/tools/shuffle-text-lines/ShuffleTextLinesTool";
import { generateMetadata as genMeta } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Shuffle Text Lines tool.
 * @constant {Object} tool - The tool object containing metadata and configuration.
 */
const tool = findToolBySlug("shuffle-text-lines");

/**
 * SEO metadata for the Shuffle Text Lines page.
 * @type {Object}
 */
export const metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Shuffle Text Lines tool page component.
 * Renders the page layout with header and the Shuffle Text Lines tool.
 *
 * @component
 * @returns {JSX.Element} The rendered Shuffle Text Lines tool page component.
 */
const ShuffleTextLines = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <ShuffleTextLinesTool />
      </PageContent>
    </PageLayout>
  );
};

export default ShuffleTextLines;
