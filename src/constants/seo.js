import { getBaseUrl } from "@/utils/seoUtils";

/**
 * An object containing SEO-related constants for the application.
 *
 * @constant
 * @type {Object}
 * @property {string} title - The full title of the application for SEO purposes.
 * @property {string} description - A brief description of the application for meta tags.
 * @property {string} shortTitle - A shorter version of the application title for compact displays.
 * @property {string} separatot - A separator string used in SEO titles.
 */
export const SEO = {
  title: "Tools by Vijay Hardaha — Useful Web Utilities",
  description:
    "A collection of free online tools built to make developer’s lives easier. From code optimization to text transformation, find the tools you need for your projects.",
  titlePostfix: "Tools by Vijay Hardaha",
  separator: "—",
};

export const baseMetadata = {
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
