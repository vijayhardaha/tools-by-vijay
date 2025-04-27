import { JSX } from "react";

import ToolCard from "@/components/home/ToolCard";
import PageLayout from "@/components/page/PageLayout";
import { Tool, Category } from "@/types";
import { getCategoryBySlug } from "@/utils/categoryUtils";
import { getToolsByCategories } from "@/utils/toolUtils";

/**
 * Home component that renders tool cards organized by categories.
 *
 * Each category section displays a title, description, and a grid of tools
 * that belong to that category.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component with categorized tools.
 */
const Home = (): JSX.Element => {
  // Get all tools and group them by category
  const toolsByCategory: Record<string, Tool[]> = getToolsByCategories();

  return (
    <PageLayout>
      {Object.entries(toolsByCategory).map(([categorySlug, categoryTools]: [string, Tool[]]) => {
        const category: Category | null = getCategoryBySlug(categorySlug);

        if (!category) return null;

        return (
          <section key={categorySlug} className="mb-10">
            <div className="mb-6">
              <h2 className="text-foreground mb-1 text-2xl font-bold">{category.label}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {categoryTools.map((tool: Tool) => (
                <ToolCard key={tool.slug} slug={tool.slug} />
              ))}
            </div>
          </section>
        );
      })}
    </PageLayout>
  );
};

export default Home;
