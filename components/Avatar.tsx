"use client";
import React from "react";
import Image from "next/image";
import { BaseComponentProps } from "../types/component.types";
import { IMAGES } from "../config/constants";

interface AvatarProps extends BaseComponentProps {
  src: string;
  alt: string;
  size?: number;
}

/**
 * Avatar Component
 *
 * Displays a circular avatar image with fallback and loading states
 */
const Avatar: React.FC<AvatarProps> = React.memo(
  ({ src, alt, size = IMAGES.DEFAULT_AVATAR_SIZE }) => {
    return (
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="rounded-full bg-gray-100"
          loading="lazy"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = IMAGES.PLACEHOLDER;
          }}
        />
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export default Avatar;
