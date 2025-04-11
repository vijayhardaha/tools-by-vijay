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
        <ToolCard slug="slugify" iconButton={true} btnText="Generate Slug" />

        <ToolCard
          slug="bulk-slugify"
          btnText="Bulk Convert"
          iconButton={true}
          btnRounded={true}
        />

        <ToolCard slug="password-generator" btnText="Create Password" />

        <ToolCard
          slug="password-strength-checker"
          btnText="Check Strength"
          iconButton={true}
          btnRounded={true}
        />

        <ToolCard slug="html-minifier" btnText="Minify HTML" />

        <ToolCard
          slug="css-minifier"
          btnText="Compress CSS"
          iconButton={true}
        />

        <ToolCard slug="js-minifier" btnText="Optimize JS" />

        <ToolCard
          slug="url-shortener"
          btnText="Shorten URL"
          iconButton={true}
        />

        <ToolCard
          slug="dropdown-to-array"
          btnText="Convert Dropdown"
          iconButton={true}
          btnRounded={true}
        />

        <ToolCard
          slug="text-to-array"
          btnText="Transform Text"
          iconButton={true}
          btnRounded={true}
        />
      </div>
    </PageLayout>
  );
};

export default Home;
