import { Work_Sans, Geist_Mono } from "next/font/google";
import PropTypes from "prop-types";

/**
 * Configuration for the League Spartan font.
 * @type {import("next/font/google").GoogleFont}
 */
const sansFont = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-app-sans",
});

/**
 * Configuration for the Geist Mono font.
 * @type {import("next/font/google").GoogleFont}
 */
const monoFont = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-app-mono",
});

import { baseMetadata } from "@/constants/seo";

import "../styles/globals.css";

/**
 * Metadata for the application.
 */
export const metadata = baseMetadata;

/**
 * Root layout component for the application.
 *
 * @component
 * @param {{ children: ReactNode }} props - The props for the RootLayout component.
 * @returns {JSX.Element} The root layout structure.
 */
const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable}`}>
      <body>{children}</body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
