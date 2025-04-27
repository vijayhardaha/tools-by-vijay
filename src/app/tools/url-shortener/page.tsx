import { JSX } from "react";

import { notFound } from "next/navigation";

import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import UrlShortenerTool from "@/components/tools/url-shortener/UrlShortenerTool";
import { Tool } from "@/types";
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the URL Shortener tool.
 * @constant {Tool|null} tool - The tool object containing metadata and configuration.
 */
const tool: Tool | null = findToolBySlug("url-shortener");

/**
 * SEO metadata for the URL Shortener tool page.
 * @type {Object}
 */
export const metadata: Metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * URL Shortener tool page component.
 * Renders the page layout with header and the URL Shortener tool.
 *
 * @component
 * @returns {JSX.Element} The rendered URL Shortener tool page component.
 */
const UrlShortener: React.FC = (): JSX.Element => {
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
          <UrlShortenerTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default UrlShortener;
