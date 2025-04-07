import RootLayout from './layout';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

const tools = [
  { name: 'Slugify', link: '/tools/slugify' },
  { name: 'Bulk Slugify', link: '/tools/bulk-slugify' },
  { name: 'Password Generator', link: '/tools/password-generator' },
  { name: 'Password Strength', link: '/tools/password-strength' },
  { name: 'HTML Minifier', link: '/tools/html-minifier' },
  { name: 'CSS Minifier', link: '/tools/css-minifier' },
  { name: 'JS Minifier', link: '/tools/js-minifier' },
];

const Home = () => {
  return (
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
  );
};

export default Home;
