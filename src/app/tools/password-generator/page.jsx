import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import PasswordGeneratorTool from "@/components/tools/password-generator/PasswordGeneratorTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

/**
 * Fetches password generator tool data from the tools database
 * @constant {Object} tool - Tool configuration with properties like name, description, and SEO metadata
 */
const tool = getToolBySlug("password-generator");

/**
 * SEO metadata for the password generator page
 * @type {Object}
 * @property {string} title - The page title for SEO
 * @property {string} description - The page description for SEO
 */
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

/**
 * Password Generator page component
 * Renders the password generator tool with appropriate layout and header
 *
 * @returns {React.ReactElement} The password generator page component
 */
const PasswordGenerator = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getToolIcon(tool.slug)}
      />
      <PageContent>
        <PasswordGeneratorTool />
      </PageContent>
    </PageLayout>
  );
};

export default PasswordGenerator;
