import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import DropdownToArrayTool from "@/components/tools/dropdown-to-array/DropdownToArrayTool";
import { generateMetadata as genMeta } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Dropdown to Array tool.
 * @constant {Object} tool - The tool object containing metadata and configuration.
 */
const tool = findToolBySlug("dropdown-to-array");

/**
 * SEO metadata for the Dropdown to Array tool page.
 * @type {Object}
 */
export const metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Dropdown to Array tool page component.
 * Renders the page layout with header and the Dropdown to Array tool.
 *
 * @component
 * @returns {JSX.Element} The rendered Dropdown to Array tool page component.
 */
const DropdownToArray = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <DropdownToArrayTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default DropdownToArray;
