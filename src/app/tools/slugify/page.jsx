import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import SlugifyTool from "@/components/tools/slugify/SlugifyTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

/**
 * Retrieves tool data for the Slugify tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("slugify");

/**
 * SEO metadata for the Slugify page
 * @type {Object}
 * @property {string} title - The SEO title of the page.
 * @property {string} description - The SEO description of the page.
 */
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

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
