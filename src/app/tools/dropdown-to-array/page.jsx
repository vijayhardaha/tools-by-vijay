import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import DropdownToArrayTool from "@/components/tools/dropdown-to-array/DropdownToArrayTool";
import { getToolBySlug } from "@/lib/getToolBySlug";
import { getToolIcon } from "@/lib/getToolIcon";
import { generateMetadata as genMeta } from "@/lib/seo";

/**
 * Retrieves tool data for the Dropdown to Array tool.
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("dropdown-to-array");

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
 * Dropdown to Array tool page component
 * Renders the page layout with header and the Dropdown to Array tool.
 * @returns {JSX.Element} The rendered Dropdown to Array tool page component.
 */
const DropdownToArray = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getToolIcon(tool.slug)}
      />
      <PageContent>
        <DropdownToArrayTool />
      </PageContent>
    </PageLayout>
  );
};

export default DropdownToArray;
