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

import { SEO } from "@/constants/seo";
import "../styles/globals.css";
import { getBaseUrl } from "@/lib/seo";

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

/**
 * Metadata for the application.
 */
export const metadata = {
  title: SEO.title,
  description: SEO.description,
  metadataBase: new URL(getBaseUrl()),
  manifest: "/site.webmanifest",
  appleTouchIcon: "/apple-touch-icon.png",
  alternates: {
    canonical: getBaseUrl(),
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
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: "/images/thumbnail.png",
        width: 512,
        height: 512,
      },
    ],
    type: "website",
    siteName: "Tools by Vijay Hardaha",
    locale: "en_US",
    url: "https://toolsbyvijay.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["/images/thumbnail.png"],
    creator: "@vijayhardaha",
  },
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
