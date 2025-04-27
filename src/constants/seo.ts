import { getBaseUrl } from "@/utils/seoUtils";

type SEOType = {
  title: string;
  description: string;
  titlePostfix: string;
  separator: string;
};

type BaseMetadataType = {
  title: string;
  description: string;
  metadataBase: URL;
  manifest: string;
  appleTouchIcon: string;
  alternates: {
    canonical: string;
  };
  keywords: string[];
  author: string;
  robots: string;
  icons: {
    icon: string;
    apple: string;
  };
  openGraph: {
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
    }[];
    type: string;
    siteName: string;
    locale: string;
    url: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
    creator: string;
  };
};

/**
 * An object containing SEO-related constants for the application.
 */
export const SEO: SEOType = {
  title: "Tools by Vijay Hardaha — Useful Web Utilities",
  description:
    "A collection of free online tools built to make developer’s lives easier. From code optimization to text transformation, find the tools you need for your projects.",
  titlePostfix: "Tools by Vijay Hardaha",
  separator: "—",
};

export const baseMetadata: BaseMetadataType = {
  title: SEO.title,
  description: SEO.description,
  metadataBase: new URL(getBaseUrl()),
  manifest: "/site.webmanifest",
  appleTouchIcon: "/apple-touch-icon.png",
  alternates: {
    canonical: getBaseUrl(),
  },
  keywords: ["tools", "utilities", "web tools", "online tools", "developer tools"],
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
