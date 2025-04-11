import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import SlugifyTool from "@/components/tools/slugify/SlugifyTool";
import { getToolBySlug } from "@/lib/getToolBySlug";
import { getToolIcon } from "@/lib/getToolIcon";
import { generateMetadata as genMeta } from "@/lib/seo";

/**
 * Retrieves tool data for the Slugify tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("slugify");

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
 * Slugify page component
 * Renders the page layout with header and the Slugify tool.
 * @returns {JSX.Element} The rendered Slugify page component.
 */
const Slugify = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getToolIcon(tool.slug)}
      />
      <PageContent>
        <SlugifyTool />
      </PageContent>
    </PageLayout>
  );
};

export default Slugify;
