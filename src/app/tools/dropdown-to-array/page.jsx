import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import DropdownToArrayTool from "@/components/tools/dropdown-to-array/DropdownToArrayTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

/**
 * Fetches tool data from the tools database
 * @constant {Object} tool - Tool configuration with properties like name, description, and SEO metadata
 */
const tool = getToolBySlug("dropdown-to-array");

/**
 * Metadata for the Slugify page, used for SEO purposes.
 * @type {Object}
 * @property {string} title - The SEO title of the page.
 * @property {string} description - The SEO description of the page.
 */
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

/**
 * DropdownToArray component renders the dropdown-to-array tool page.
 * Displays a page header with tool information and the tool's main functionality.
 *
 * @returns {JSX.Element} The rendered dropdown-to-array tool page
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
