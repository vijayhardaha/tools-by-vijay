import EntryWithSidebar from "@/components/page/EntryWithSidebar";
import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import HtmlMinifierTool from "@/components/tools/html-minifier/HtmlMinifierTool";
import { generateMetadata as genMeta } from "@/utils/seoUtils";
import { findToolBySlug } from "@/utils/toolUtils";
import { getIconForTool } from "@/utils/toolUtils";

/**
 * Retrieves tool data for the HTML Minifier tool.
 * @constant {Object} tool - The tool object containing metadata and configuration.
 */
const tool = findToolBySlug("html-minifier");

/**
 * SEO metadata for the HTML Minifier tool page.
 * @type {Object}
 */
export const metadata = genMeta({
  title: tool?.seoTitle || "",
  description: tool?.seoDescription || "",
  slug: tool?.slug || "",
});

/**
 * HTML Minifier tool page component.
 * Renders the page layout with header and the HTML Minifier tool.
 *
 * @component
 * @returns {JSX.Element} The rendered HTML Minifier tool page component.
 */
const HtmlMinifier = () => {
  return (
    <PageLayout>
      <PageHeader
        title={tool.name}
        description={tool.pageDescription}
        icon={getIconForTool(tool.slug)}
      />
      <PageContent>
        <EntryWithSidebar tool={tool}>
          <HtmlMinifierTool />
        </EntryWithSidebar>
      </PageContent>
    </PageLayout>
  );
};

export default HtmlMinifier;
