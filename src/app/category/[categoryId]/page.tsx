// app/category/[categoryId]/page.tsx
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { BlogPost, Category, CategoryPageProps } from "@/types/post.type";
import PostCard from "../../../../components/PostCard";
import { categoryPostsQuery, categoryQuery } from "@/sanity/lib/queries";

// Data fetching functions
async function getPostsByCategory(categoryId: string) {
  try {
    const posts = await client.fetch<BlogPost[]>(categoryPostsQuery, {
      categoryId,
    });
    return { posts, error: null };
  } catch (error) {
    console.error("Error fetching category posts:", error);
    return { posts: [], error: "Failed to load category posts" };
  }
}

async function getCategory(categoryId: string) {
  try {
    const category = await client.fetch<Category>(categoryQuery, {
      categoryId,
    });
    return category;
  } catch (error) {
    console.error("Error fetching category:", error);
    return null;
  }
}

// Components
const CategoryHeader = ({ title, description }: Category) => (
  <div className="text-center my-12">
    <h1 className="text-4xl font-bold text-gray-900 my-10">{title}</h1>
    {description && <p className="text-lg text-gray-600 my-6">{description}</p>}
  </div>
);

const PostsGrid = ({ posts }: { posts: BlogPost[] }) => (
  <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    {posts.map((post) => (
      <PostCard key={post._id} post={post} />
    ))}
  </div>
);

// Main Component
export default async function CategoryPage({ params }: CategoryPageProps) {
  const [category, { posts, error }] = await Promise.all([
    getCategory(params.categoryId),
    getPostsByCategory(params.categoryId),
  ]);

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <CategoryHeader {...category} />
      {error ? (
        <p className="text-center text-red-600 py-8">{error}</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-600 py-8">
          No posts found in this category.
        </p>
      ) : (
        <PostsGrid posts={posts} />
      )}
    </div>
  );
}
