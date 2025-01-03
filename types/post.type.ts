import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { IconType } from "react-icons";

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

export interface CategoryParams {
  categoryId: string;
}

export interface CategoryPageProps {
  params: CategoryParams;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface PostParams {
  slug: string;
}

export interface PostPageProps {
  params: PostParams;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface BlogPost {
  title: string;
  description: string | null;
  mainImage: {
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  slug: {
    current: string;
    _type: string;
  };
  categories: [
    {
      title: string;
      _id: string;
    },
  ];
  author: {
    name: string;
    image: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
  };
  _id: string;
}

export type ActionItemProps = {
  icon: IconType;
  text: string;
};
