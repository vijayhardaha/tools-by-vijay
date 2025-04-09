import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import TextToArrayTool from "@/components/tools/text-to-array/TextToArrayTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

// Get tool data
const tool = getToolBySlug("text-to-array");

// Export metadata for SEO
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

const TextToArray = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getToolIcon(tool.slug)}
      />
      <PageContent>
        <TextToArrayTool />
      </PageContent>
    </PageLayout>
  );
};

export default TextToArray;
