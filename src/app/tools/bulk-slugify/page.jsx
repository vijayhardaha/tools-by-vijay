import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import BulkSlugifyTool from "@/components/tools/bulk-slugify/BulkSlugifyTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

// Get tool data
const tool = getToolBySlug("bulk-slugify");

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
 * BulkSlugify page component that renders the Bulk Slugify tool.
 * This page allows users to convert multiple text entries into slugs at once.
 *
 * Uses data from the tools configuration to display page title, description,
 * and relevant metadata for SEO.
 *
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
