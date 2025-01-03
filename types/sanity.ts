import { PortableTextBlock } from "next-sanity";

export type SanityBody = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

export type SanityReference = {
  _ref: string;
  _type: string;
};

export type SanitySlug = {
  _type: "slug";
  current: string;
};

export type SanityBlock = PortableTextBlock;
