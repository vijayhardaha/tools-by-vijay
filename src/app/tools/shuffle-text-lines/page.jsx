import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import { generateMetadata as genMeta } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

import ShuffleTextLinesTool from "@/components/tools/shuffle-text-lines/ShuffleTextLinesTool";

/**
 * Retrieves tool data for the Shuffle Text Lines tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = findToolBySlug("shuffle-text-lines");

/**
 * SEO metadata for the Shuffle Text Lines page
 * @type {Object}
 */
export const metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * ShuffleTextLines page component
 * Renders the page layout with header and the ShuffleTextLines tool.
 * @returns {JSX.Element} The rendered ShuffleTextLines page component.
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
