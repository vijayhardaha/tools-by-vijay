import PropTypes from "prop-types";

import Footer from "@/components/footer/Footer";
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
      <main className="min-h-160 pt-8 pb-12">
        <div className="mx-auto max-w-5xl px-4">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
