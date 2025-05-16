import React from "react";

/**
 * Interface representing a tool.
 */
export interface ITool {
  name: string;
  slug: string;
  shortDescription: string;
  pageDescription: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
}

/**
 * Interface representing a tool category.
 */
export interface ICategory {
  label: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

/**
 * Interface representing a tool icon.
 */
export interface ISocialMediaLink {
  name: string;
  key: string;
  url: string;
  color: string;
  icon: React.ComponentType;
}
