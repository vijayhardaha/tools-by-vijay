import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import HtmlMinifierTool from "@/components/tools/html-minifier/HtmlMinifierTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

// Get tool data
const tool = getToolBySlug("html-minifier");

// Export metadata for SEO
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

const HtmlMinifier = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getToolIcon(tool.slug)}
      />
      <PageContent>
        <HtmlMinifierTool />
      </PageContent>
    </PageLayout>
  );
};

export default HtmlMinifier;
