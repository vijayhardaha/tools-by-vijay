import ToolCard from "@/components/home/ToolCard";
import PageLayout from "@/components/page/PageLayout";

/**
 * Home component that renders a grid of tools.
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
  return (
    <PageLayout>
      <div className="grid grid-cols-6 grid-rows-7 gap-8">
        {/* Position 1 */}
        <ToolCard
          slug="slugify"
          className="col-span-2 row-span-2"
          iconButton={true}
          size="default"
        />

        {/* Position 2 */}
        <ToolCard
          slug="bulk-slugify"
          className="col-span-2 col-start-3 row-span-2"
          iconButton={true}
          size="default"
          btnRounded={true}
        />

        {/* Position 3 */}
        <ToolCard
          slug="password-generator"
          className="col-span-2 col-start-5 row-span-3"
        />

        {/* Position 6 */}
        <ToolCard
          slug="password-strength-checker"
          className="col-span-2 row-span-3 row-start-3"
        />

        {/* Position 7 */}
        <ToolCard
          slug="html-minifier"
          className="col-span-2 col-start-3 row-span-2 row-start-3"
        />

        {/* Position 8 */}
        <ToolCard
          slug="css-minifier"
          className="col-span-2 col-start-5 row-span-2 row-start-4"
          iconButton={true}
          size="default"
          btnRounded={true}
        />

        {/* Position 9 */}
        <ToolCard
          slug="js-minifier"
          className="col-span-2 col-start-3 row-span-3 row-start-5"
        />

        {/* Position 10 */}
        <ToolCard
          slug="url-shortener"
          className="col-span-2 row-span-2 row-start-6"
          iconButton={true}
          size="default"
        />

        {/* Position 11 */}
        <ToolCard
          slug="dropdown-to-array"
          className="col-span-2 col-start-5 row-span-2 row-start-6"
        />
      </div>
    </PageLayout>
  );
};

export default Home;
