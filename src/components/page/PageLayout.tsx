import React, { JSX } from "react";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

/**
 * Props for the PageLayout component.
 * @property {React.ReactNode} children - The content to be displayed within the layout.
 */
type PageLayoutPropTypes = {
  children: React.ReactNode;
};

/**
 * PageLayout component that provides a consistent layout structure
 * with a header, main content area, and footer.
 *
 * @param {PageLayoutPropTypes} props - The props for the component.
 * @returns {JSX.Element} The rendered layout component.
 */
const PageLayout = ({ children }: PageLayoutPropTypes): JSX.Element => {
  return (
    <div>
      <Header />
      <main className="min-h-160 overflow-x-hidden pt-8 pb-12">
        <div className="mx-auto max-w-6xl px-4">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
