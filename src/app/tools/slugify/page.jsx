import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import SlugifyTool from "@/components/tools/slugify/SlugifyTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

/**
 * Fetches tool data from the tools database
 * @constant {Object} tool - Tool configuration with properties like name, description, and SEO metadata
 */
const tool = getToolBySlug("slugify");

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
 * Slugify page component that renders the layout, header, and content for the Slugify tool.
 *
 * @returns {JSX.Element} The rendered Slugify page.
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
