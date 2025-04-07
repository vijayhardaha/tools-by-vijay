import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import BulkSlugifyTool from "@/components/tools/bulk-slugify/BulkSlugifyTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

// Get tool data
const tool = getToolBySlug("bulk-slugify");

// Export metadata for SEO
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

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
