import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import PasswordGeneratorTool from "@/components/tools/password-generator/PasswordGeneratorTool";
import { generateMetadata as genMeta } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Password Generator tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = findToolBySlug("password-generator");

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
 * Password Generator page component
 * Renders the page layout with header and the Password Generator tool
 * @returns {ReactElement} The rendered Password Generator page component.
 */
const PasswordGenerator = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <PasswordGeneratorTool />
      </PageContent>
    </PageLayout>
  );
};

export default PasswordGenerator;
