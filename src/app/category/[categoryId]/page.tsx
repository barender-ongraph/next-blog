// app/category/[categoryId]/page.tsx
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { categoryPostsQuery, categoryQuery } from "@/sanity/lib/queries";
import { BlogPost, Category } from "../../../../types/post.type";
import PostCard from "../../../../components/PostCard";

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
    {description && (
      <p className="text-lg text-gray-600 my-6 max-w-2xl mx-auto">
        {description}
      </p>
    )}
  </div>
);

const PostsGrid = ({ posts }: { posts: BlogPost[] }) => (
  <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 mx-auto lg:mx-0 lg:max-w-none lg:grid-cols-3">
    {posts.map((post) => (
      <PostCard key={post._id} post={post} />
    ))}
  </div>
);

const EmptyState = () => (
  <div className="text-center py-12">
    <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
    <p className="text-gray-600">
      There are currently no posts in this category.
    </p>
  </div>
);

const ErrorState = ({ message }: { message: string }) => (
  <div className="text-center py-12">
    <h3 className="text-lg font-medium text-red-600 mb-2">Error</h3>
    <p className="text-gray-600">{message}</p>
  </div>
);

// Main Component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function CategoryPage({ params }: any) {
  const categoryId = params.categoryId;

  if (!categoryId) {
    notFound();
  }

  const [category, { posts, error }] = await Promise.all([
    getCategory(categoryId),
    getPostsByCategory(categoryId),
  ]);

  if (!category) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CategoryHeader {...category} />

      <div className="mb-16">
        {error ? (
          <ErrorState message={error} />
        ) : posts.length === 0 ? (
          <EmptyState />
        ) : (
          <PostsGrid posts={posts} />
        )}
      </div>
    </main>
  );
}
