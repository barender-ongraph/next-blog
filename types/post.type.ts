import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityBlock } from "./sanity";

export interface Author {
  _id: string;
  name: string;
  image?: SanityImageSource;
}

export interface Category {
  _id: string;
  title: string;
  description?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  mainImage?: SanityImageSource;
  categories?: Category[];
  author?: Author;
  publishedAt: string;
  body?: SanityBlock[];
}