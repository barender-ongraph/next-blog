"use client";
import React from "react";
import { BaseComponentProps } from "../types/component.types";

/**
 * PostCardSkeleton Component
 *
 * A placeholder loading state for the PostCard component
 * that matches its layout and styling.
 */
const PostCardSkeleton: React.FC<BaseComponentProps> = () => {
  return (
    <article className="flex flex-col items-start justify-between animate-pulse">
      <div className="relative w-full bg-gray-200 aspect-video rounded-2xl" />
      <div className="max-w-xl w-full">
        <div className="mt-8 flex items-center gap-x-4">
          <div className="h-6 w-20 bg-gray-200 rounded-full" />
        </div>
        <div className="mt-3 space-y-3">
          <div className="h-6 w-3/4 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
        </div>
        <div className="mt-8 flex items-center gap-x-4">
          <div className="h-8 w-8 bg-gray-200 rounded-full" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
        </div>
      </div>
    </article>
  );
};

PostCardSkeleton.displayName = "PostCardSkeleton";

export default PostCardSkeleton;
