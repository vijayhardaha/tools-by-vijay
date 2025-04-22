import ToolCard from "@/components/home/ToolCard";
import PageLayout from "@/components/page/PageLayout";
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
const Home = () => {
  // Get all tools and group them by category
  const toolsByCategory = getToolsByCategories();

  return (
    <PageLayout>
      {Object.entries(toolsByCategory).map(([categorySlug, categoryTools]) => {
        const category = getCategoryBySlug(categorySlug);

        if (!category) return null;

        return (
          <section key={categorySlug} className="mb-10">
            <div className="mb-6">
              <h2 className="text-foreground mb-1 text-2xl font-bold">{category.label}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {categoryTools.map((tool) => (
                <ToolCard
                  key={tool.slug}
                  slug={tool.slug}
                  btnText={`Go to ${tool.name} Tool`}
                  iconButton={true}
                  btnRounded={tool.category === "security" || tool.category === "data-conversion"}
                />
              ))}
            </div>
          </section>
        );
      })}
    </PageLayout>
  );
};

export default Home;
