import { JSX } from "react";

import { notFound } from "next/navigation"; // Import the notFound function

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import JsMinifierTool from "@/components/tools/js-minifier/JsMinifierTool";
import { Tool } from "@/types";
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the JavaScript Minifier tool.
 * @constant {Tool} tool - The tool object containing metadata and configuration.
 */
const tool: Tool = findToolBySlug("js-minifier");

/**
 * SEO metadata for the JavaScript Minifier tool page.
 * @type {Object}
 */
export const metadata: Metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * JavaScript Minifier tool page component.
 * Renders the page layout with header and the JS Minifier tool.
 *
 * @component
 * @returns {JSX.Element} The rendered JavaScript Minifier tool page component.
 */
const JsMinifier: React.FC = (): JSX.Element => {
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
          <JsMinifierTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default JsMinifier;
