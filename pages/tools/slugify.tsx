import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Slugify = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Slugify Tool</h1>
        <p>Convert your text into URL-friendly slugs.</p>
        {/* Add tool functionality here */}
      </main>
      <Footer />
    </div>
  );
};

export default Slugify;
