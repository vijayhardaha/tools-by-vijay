import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import PasswordStrengthCheckerTool from "@/components/tools/password-strength-checker/PasswordStrengthCheckerTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

/**
 * Retrieves tool data for the Password Strength Checker tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = getToolBySlug("password-strength-checker");

/**
 * SEO metadata for the Password Strength Checker page
 * @type {Object}
 * @property {string} title - SEO title for the page
 * @property {string} description - SEO description for the page
 */
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

/**
 * Password Strength Checker Page Component
 * Renders the page layout with header and the Password Strength Checker tool
 * @returns {JSX.Element} The rendered Password Strength Checker page component.
 */
const PasswordStrengthChecker = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getToolIcon(tool.slug)}
      />
      <PageContent>
        <PasswordStrengthCheckerTool />
      </PageContent>
    </PageLayout>
  );
};

export default PasswordStrengthChecker;
