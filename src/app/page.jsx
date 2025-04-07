import PageLayout from "@/components/layout/Layout";

/**
 * Array of tool objects, each containing a name and a link.
 * @type {{ name: string, link: string }[]}
 */
const tools = [
  { name: "Slugify", link: "/tools/slugify" },
  { name: "Bulk Slugify", link: "/tools/bulk-slugify" },
  { name: "Password Generator", link: "/tools/password-generator" },
  { name: "Password Strength", link: "/tools/password-strength" },
  { name: "HTML Minifier", link: "/tools/html-minifier" },
  { name: "CSS Minifier", link: "/tools/css-minifier" },
  { name: "JS Minifier", link: "/tools/js-minifier" },
];

/**
 * Home component that renders a grid of tools.
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-dark3 hover:bg-dark2 rounded p-4 shadow"
          >
            <h2 className="text-lg font-bold">{tool.name}</h2>
            <a
              href={tool.link}
              className="text-primary mt-2 inline-block underline"
            >
              Go to Tool →
            </a>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Home;
