import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import BulkSlugifyTool from "@/components/tools/bulk-slugify/BulkSlugifyTool";
import { getToolBySlug } from "@/lib/getToolBySlug";
import { getToolIcon } from "@/lib/getToolIcon";
import { generateMetadata as genMeta } from "@/lib/seo";

/**
 * Retrieves tool data for the Bulk Slugify tool.
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("bulk-slugify");

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
