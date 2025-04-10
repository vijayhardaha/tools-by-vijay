import ToolCard from "@/components/home/ToolCard";
import PageLayout from "@/components/page/PageLayout";

/**
 * Home component that renders a grid layout of tool cards.
 *
 * Each `ToolCard` represents a specific tool with its unique configuration,
 * such as slug, size, and additional styling options.
 *
 * @returns {JSX.Element} The rendered Home component with a grid of tools.
 */
const Home = () => {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <ToolCard slug="slugify" iconButton={true} size="default" />

        <ToolCard
          slug="bulk-slugify"
          iconButton={true}
          size="default"
          btnRounded={true}
        />

        <ToolCard slug="password-generator" />

        <ToolCard slug="password-strength-checker" />

        <ToolCard slug="html-minifier" />

        <ToolCard
          slug="css-minifier"
          iconButton={true}
          size="default"
          btnRounded={true}
        />

        <ToolCard slug="js-minifier" />

        <ToolCard slug="url-shortener" iconButton={true} size="default" />

        <ToolCard slug="dropdown-to-array" />

        <ToolCard slug="text-to-array" />
      </div>
    </PageLayout>
  );
};

export default Home;
