import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import BulkSlugifyTool from "@/components/tools/bulk-slugify/BulkSlugifyTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

/**
 * Retrieves tool data for the Bulk Slugify tool.
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("bulk-slugify");

/**
 * SEO metadata for the Bulk Slugify page.
 * @type {Object}
 * @property {string} title - The SEO title of the page
 * @property {string} description - The SEO description of the page
 */
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

/**
 * Bulk Slugify page component
 * Renders the page layout with header and the Bulk Slugify tool
 * @returns {JSX.Element} The rendered BulkSlugify page component.
 */
const BulkSlugify = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getToolIcon(tool.slug)}
      />
      <PageContent>
        <BulkSlugifyTool />
      </PageContent>
    </PageLayout>
  );
};

export default BulkSlugify;
