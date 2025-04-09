import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import UrlShortenerTool from "@/components/tools/url-shortener/UrlShortenerTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

// Get tool data
const tool = getToolBySlug("url-shortener");

// Export metadata for SEO
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

const UrlShortener = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getToolIcon(tool.slug)}
      />
      <PageContent>
        <UrlShortenerTool />
      </PageContent>
    </PageLayout>
  );
};

export default UrlShortener;
