import Header from "../components/Header";
import Footer from "../components/Footer";

const tools = [
  { name: "Slugify", link: "/tools/slugify" },
  { name: "Bulk Slugify", link: "/tools/bulk-slugify" },
  { name: "Password Generator", link: "/tools/password-generator" },
  { name: "Password Strength", link: "/tools/password-strength" },
  { name: "HTML Minifier", link: "/tools/html-minifier" },
  { name: "CSS Minifier", link: "/tools/css-minifier" },
  { name: "JS Minifier", link: "/tools/js-minifier" },
];

const Home = () => {
  return (
    <div>
      <Header />
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-dark3 p-4 rounded shadow hover:bg-dark2"
          >
            <h2 className="text-lg font-bold">{tool.name}</h2>
            <a
              href={tool.link}
              className="text-primary underline mt-2 inline-block"
            >
              Go to Tool →
            </a>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
