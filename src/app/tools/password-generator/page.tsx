import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import PasswordGeneratorTool from "@/components/tools/password-generator/PasswordGeneratorTool";
import { Tool } from "@/types";
import { generateMeta, Metadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the Password Generator tool.
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug("password-generator");

/**
 * SEO metadata for the Password Generator tool page.
 * @type {Metadata}
 */
export const metadata: Metadata = generateMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * Password Generator tool page component.
 * Renders the page layout with header and the Password Generator tool.
 *
 * @component
 * @returns {ReactElement} The rendered Password Generator tool page component.
 */
const PasswordGenerator: React.FC = (): React.JSX.Element => {
  if (!tool) {
    notFound(); // Render a 404 page if the tool is null
  }

  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <PasswordGeneratorTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default PasswordGenerator;
