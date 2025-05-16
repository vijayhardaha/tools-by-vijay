import React from "react";

export interface ITool {
  name: string;
  slug: string;
  shortDescription: string;
  pageDescription: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
}

export interface ICategory {
  label: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export interface ISocialMediaLink {
  name: string;
  key: string;
  url: string;
  color: string;
  icon: React.ComponentType;
}
