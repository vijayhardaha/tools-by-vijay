import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import TextCaseChangerTool from "@/components/tools/text-case-changer/TextCaseChangerTool";
import { Tool } from "@/types";
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

const tool: Tool | null = findToolBySlug("text-case-changer");

export const metadata: Metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

const TextCaseChanger: React.FC = (): React.JSX.Element => {
  if (!tool) {
    notFound();
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
          <TextCaseChangerTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default TextCaseChanger;
