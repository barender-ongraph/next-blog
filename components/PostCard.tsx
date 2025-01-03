"use client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { BlogPost } from "@/types/post.type";
import Avatar from "./Avatar";

import { IMAGES } from "../config/constants";
import { BaseComponentProps } from "../types/component.types";
import React from "react";

export interface PostCardProps extends BaseComponentProps {
  post: BlogPost;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  priority?: boolean;
}

/**
 * PostCard Component
 *
 * A reusable card component that displays a blog post with its image, title,
 * category, description, and author information.
 *
 * @component
 */
const PostCard: React.FC<PostCardProps> = ({
  post,
  imageWidth = IMAGES.DEFAULT_POST_WIDTH,
  imageHeight = IMAGES.DEFAULT_POST_HEIGHT,
  className = "",
}) => {
  if (!post || !post._id) {
    return null;
  }

  const category = post.categories?.[0];
  const mainImageUrl = post.mainImage ? urlFor(post.mainImage).url() : null;
  const authorImageUrl = post.author?.image
    ? urlFor(post.author.image).url()
    : null;

  return (
    <article
      className={`flex flex-col items-start justify-between ${className}`}
      data-testid={`post-card-${post._id}`}
      aria-labelledby={`post-title-${post._id}`}
    >
      {mainImageUrl && (
        <div className="relative w-full">
          <Image
            alt={post.title || "Blog post image"}
            src={mainImageUrl}
            className="aspect-video rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            width={imageWidth}
            height={imageHeight}
            loading="lazy"
            quality={IMAGES.DEFAULT_QUALITY}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              console.error(`Error loading image for post ${post._id}:`, e);
              e.currentTarget.src = IMAGES.PLACEHOLDER;
            }}
          />
        </div>
      )}
      <div className="max-w-xl w-full">
        {category && (
          <div
            className="mt-8 flex items-center gap-x-4 text-xs"
            aria-label="Post category"
          >
            <Link
              href={`/category/${category._id}`}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label={`View all posts in category: ${category.title}`}
            >
              {category.title}
            </Link>
          </div>
        )}
        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
            <Link
              href={`/post/${post.slug.current}`}
              className="transition-colors duration-200"
              data-testid={`post-link-${post._id}`}
            >
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          {post.description && (
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
              {post.description}
            </p>
          )}
        </div>
        {post.author && authorImageUrl && (
          <div
            className="relative mt-8 flex items-center gap-x-4"
            aria-label={`Post author: ${post.author.name}`}
          >
            <Avatar
              src={urlFor(post.author.image).url()}
              alt={`${post.author.name}'s profile picture`}
            />
            <div className="text-sm/6">
              <p className="font-semibold text-gray-900">
                <span className="absolute inset-0" />
                {post.author.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

PostCard.displayName = "PostCard";

export default PostCard;
