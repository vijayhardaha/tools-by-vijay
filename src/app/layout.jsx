/**
 * Metadata for the application.
 * @type {{title: string, description: string}}
 */
export const metadata = {
  title: "Tools by Vijay",
  description: "A collection of useful tools.",
};

import PropTypes from "prop-types";

import "../styles/fonts.css";
import "../styles/globals.css";

/**
 * Root layout component for the application.
 * @param {{ children: React.ReactNode }} props - The props for the RootLayout component.
 * @returns {JSX.Element} The root layout structure.
 */
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
