import React, { JSX, ReactNode } from "react";

import { NextFontWithVariable } from "next/dist/compiled/@next/font/dist/types";
import { Work_Sans, Geist_Mono } from "next/font/google";

/**
 * Configuration for the League Spartan font.
 */
const sansFont: NextFontWithVariable = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-app-sans",
});

/**
 * Configuration for the Geist Mono font.
 */
const monoFont: NextFontWithVariable = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-app-mono",
});

import { baseMetadata, BaseMetadataType } from "@/constants/seo";

import "../styles/globals.css";

/**
 * Metadata for the application.
 */
export const metadata: BaseMetadataType = baseMetadata;

/**
 * Root layout component for the application.
 *
 * @component
 * @param {{ children: ReactNode }} props - The props for the RootLayout component.
 * @returns {JSX.Element} The root layout structure.
 */
const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable}`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
