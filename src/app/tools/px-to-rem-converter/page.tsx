import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import PxToRemConverterTool from "@/components/tools/px-to-rem-converter/PxToRemConverterTool";
import { Tool } from "@/types";
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

const tool: Tool | null = findToolBySlug("px-to-rem-converter");

export const metadata: Metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

const PxToRemConverter: React.FC = (): React.JSX.Element => {
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
          <PxToRemConverterTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default PxToRemConverter;
