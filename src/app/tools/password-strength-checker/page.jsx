import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import PasswordStrengthCheckerTool from "@/components/tools/password-strength-checker/PasswordStrengthCheckerTool";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

// Get tool data
const tool = getToolBySlug("password-strength-checker");

// Export metadata for SEO
export const metadata = {
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
};

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
