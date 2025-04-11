/**
 * Metadata for the application.
 */
export const metadata = {
  title: "Tools by Vijay",
  description: "A collection of useful tools.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "tools",
    "utilities",
    "web tools",
    "online tools",
    "developer tools",
  ],
  author: "Vijay",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Tools by Vijay - Useful Web Utilities",
    description:
      "A collection of free online tools and utilities to help with everyday tasks.",
    images: ["/images/thumbnail.png"],
    type: "website",
    siteName: "Tools by Vijay",
    locale: "en_US",
    url: "https://toolsbyvijay.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools by Vijay - Web Utilities",
    description:
      "Free online tools and utilities for developers and everyday users.",
    images: ["/images/thumbnail.png"],
    creator: "@vijayhardaha",
  },
};

import { Work_Sans, Geist_Mono } from "next/font/google";

import PropTypes from "prop-types";

/**
 * Configuration for the League Spartan font.
 * @type {import("next/font/google").GoogleFont}
 */
const leagueSpartan = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-app-sans",
});

/**
 * Configuration for the Geist Mono font.
 * @type {import("next/font/google").GoogleFont}
 */
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-app-mono",
});

import "../styles/globals.css";

/**
 * Root layout component for the application.
 * @param {{ children: ReactNode }} props - The props for the RootLayout component.
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
