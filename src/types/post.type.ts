import { IconType } from "react-icons";

export type BlogPost = {
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
};

export type Category = {
  _id: string;
  title: string;
  description?: string;
};

export type CategoryPageProps = {
  params: {
    categoryId: string;
  };
};

export type ActionItemProps = {
  icon: IconType;
  text: string;
};
