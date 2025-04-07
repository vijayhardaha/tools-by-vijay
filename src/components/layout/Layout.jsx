import Footer from "@/components/Footer";
import Header from "@/components/header/Header";

/**
 * PageLayout component that provides a consistent layout structure
 * with a header, main content area, and footer.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The content to be displayed within the layout.
 * @returns {JSX.Element} The rendered layout component.
 */
const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="py-8">
        <div className="mx-auto max-w-5xl px-4">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
