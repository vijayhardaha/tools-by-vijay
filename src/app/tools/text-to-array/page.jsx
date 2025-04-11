import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import TextToArrayTool from "@/components/tools/text-to-array/TextToArrayTool";
import { getToolBySlug } from "@/lib/getToolBySlug";
import { getToolIcon } from "@/lib/getToolIcon";
import { generateMetadata as genMeta } from "@/lib/seo";

/**
 * Retrieves tool data for the Text to Array tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("text-to-array");

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
 * Text to Array tool page component
 * Renders the page layout with header and the Text to Array tool
 * @returns {JSX.Element} The rendered Text to Array page component.
 */
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
