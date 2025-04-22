import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import DuplicateLineRemovalTool from "@/components/tools/duplicate-line-removal/DuplicateLineRemovalTool";
import { generateMetadata as genMeta } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Duplicate Line Removal tool.
 * @constant {Object} tool - The tool object containing metadata and configuration.
 */
const tool = findToolBySlug("duplicate-line-removal");

/**
 * SEO metadata for the Duplicate Line Removal tool page.
 * @type {Object}
 */
export const metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Duplicate Line Removal tool page component.
 * Renders the page layout with header and the Duplicate Line Removal tool.
 *
 * @component
 * @returns {JSX.Element} The rendered Duplicate Line Removal tool page component.
 */
const DuplicateLineRemoval = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <DuplicateLineRemovalTool />
      </PageContent>
    </PageLayout>
  );
};

export default DuplicateLineRemoval;
