import React from "react";

export interface Tool {
  name: string;
  slug: string;
  shortDescription: string;
  pageDescription: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
}

export interface Category {
  label: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export interface SocialMediaLink {
  name: string;
  key: string;
  url: string;
  color: string;
  icon: React.ComponentType;
}
