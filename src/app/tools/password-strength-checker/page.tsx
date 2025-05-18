import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import PasswordStrengthCheckerTool from "@/components/tools/password-strength-checker/PasswordStrengthCheckerTool";
import { ITool } from "@/types";
import { generateMeta, IMetadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Password Strength Checker tool.
 * @constant {ITool|null} tool - The tool object containing metadata and configuration.
 */
const tool: ITool | null = findToolBySlug("password-strength-checker");

/**
 * SEO metadata for the Password Strength Checker tool page.
 * @type {IMetadata}
 */
export const metadata: IMetadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Password Strength Checker tool page component.
 * Renders the page layout with header and the Password Strength Checker tool.
 *
 * @component
 * @returns {React.JSX.Element} The rendered Password Strength Checker tool page component.
 */
const PasswordStrengthChecker: React.FC = (): React.JSX.Element => {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.description}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <PasswordStrengthCheckerTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default PasswordStrengthChecker;
