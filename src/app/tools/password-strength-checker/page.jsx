import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import PasswordStrengthCheckerTool from "@/components/tools/password-strength-checker/PasswordStrengthCheckerTool";
import { generateMetadata as genMeta } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Password Strength Checker tool
 * @constant {Object} tool - The tool object containing metadata and configuration
 */
const tool = findToolBySlug("password-strength-checker");

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
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <PasswordStrengthCheckerTool />
      </PageContent>
    </PageLayout>
  );
};

export default PasswordStrengthChecker;
