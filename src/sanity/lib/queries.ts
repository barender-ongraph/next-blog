import { groq } from "next-sanity";

export const postsQuery = groq`
    *[_type == "post"]{
        _id,
        title,
        description,
        mainImage,
        slug,
        categories[]->{
            _id,
            title
        },
        author -> {
            name,
            image
        },
    }
`;

export const postQuery = groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      description,
      mainImage,
      body,
      publishedAt,
      author->{
        name,
        image
      },
      categories[]->{
        _id,
        title
      }
    }
`;

export const categoryPostsQuery = groq`*[_type == "post" && references($categoryId)] {
  _id,
  title,
  description,
  mainImage,
  slug,
  categories[]->{
    _id,
    title
  },
  author -> {
    name,
    image
  }
}`;

export const categoryQuery = groq`*[_type == "category" && _id == $categoryId][0] {
  _id,
  title,
  description
}`;
