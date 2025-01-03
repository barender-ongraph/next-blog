"use client";
import React from "react";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import PostCard from "./PostCard";
import PostCardSkeleton from "./PostCardSkeleton";
import ErrorBoundary from "./ErrorBoundary";
import { GRID, IMAGES, MESSAGES, STATUS } from "../config/constants";
import { BlogPost } from "../types/post.type";

interface PostsResponse {
  posts: BlogPost[];
  error: string | null;
}

/**
 * Fetches blog posts from the Sanity backend.
 * Handles errors and returns both posts and error state.
 *
 * @returns Promise containing posts array and error state
 */
async function getPosts(): Promise<PostsResponse> {
  try {
    const posts: BlogPost[] = await client.fetch(postsQuery);
    return { posts, error: null };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      posts: [],
      error: MESSAGES.ERROR.FETCH_POSTS,
    };
  }
}

interface PostGridProps {
  posts: BlogPost[];
}

const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
  if (posts.length === 0) return null;

  return (
    <div role="feed" aria-label="Blog posts grid">
      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard
            key={post._id}
            post={post}
            imageWidth={IMAGES.DEFAULT_POST_WIDTH}
            imageHeight={IMAGES.DEFAULT_POST_HEIGHT}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

const LoadingState: React.FC = () => (
  <div role="status" aria-label={STATUS.LOADING}>
    <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {[...Array(GRID.POSTS_PER_PAGE)].map((_, index) => (
        <PostCardSkeleton key={index} />
      ))}
    </div>
  </div>
);

/**
 * Posts component that displays a grid of blog posts
 *
 * @returns JSX.Element The rendered component
 */
export default async function Posts() {
  const { posts, error } = await getPosts();

  return (
    <section
      data-testid="posts-section"
      className="mx-auto max-w-7xl px-6 lg:px-8 my-6"
      aria-labelledby="latest-posts-heading"
      role="region"
    >
      <h2
        id="latest-posts-heading"
        className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-12"
      >
        Latest Posts
      </h2>

      <ErrorBoundary>
        <React.Suspense fallback={<LoadingState />}>
          <div data-testid="posts-content">
            {error ? (
              <div className="mt-6 text-center">
                <p className="text-red-500" role="alert">
                  {error}
                </p>
              </div>
            ) : posts.length === 0 ? (
              <div className="mt-6 text-center">
                <p className="text-gray-500">{MESSAGES.EMPTY.POSTS}</p>
              </div>
            ) : (
              <PostGrid posts={posts} />
            )}
          </div>
        </React.Suspense>
      </ErrorBoundary>
    </section>
  );
}
