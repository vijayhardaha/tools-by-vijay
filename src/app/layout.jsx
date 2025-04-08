/**
 * Metadata for the application.
 * @type {{title: string, description: string}}
 */
export const metadata = {
  title: "Tools by Vijay",
  description: "A collection of useful tools.",
};

import { League_Spartan, Geist_Mono } from "next/font/google";
import PropTypes from "prop-types";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-league-spartan",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-mono",
});

import "../styles/globals.css";

/**
 * Root layout component for the application.
 * @param {{ children: React.ReactNode }} props - The props for the RootLayout component.
 * @returns {JSX.Element} The root layout structure.
 */
const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
